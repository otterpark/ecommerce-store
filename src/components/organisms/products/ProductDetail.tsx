import { useEffect, useMemo, useState } from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import styled, { css } from 'styled-components';

import LoadingSpinner from '@/components/atoms/Loading';
import Text from '@/components/atoms/texts/Text';
import ProductInfoBody from '@/components/molecules/products/detail/ProductInfoBody';
import ProductInfoButtons from '@/components/molecules/products/detail/ProductInfoButtons';
import ProductTotalPrice from '@/components/molecules/products/detail/ProductTotalPrice';
import ProductSelectBox from '@/components/molecules/products/detail/ProductSelectBox';
import ProductQuantity from '@/components/molecules/products/detail/ProductQuantity';
import DescriptionList from '@/components/molecules/descriptionList/DescriptionList';
import Thumbnail from '@/components/molecules/thumbnail/Thumbnail';

import useProduct from '@/hooks/useProduct';

import { borderRadius, space } from '@/styles/sizes';

import { ERROR_MESSAGE } from '@/constants';

import { Item } from '@/types/product';
import { breakpoints, size } from '@/styles/medias';
import useWindowSize from '@/hooks/useWindowResize';

type StyledProductDetailProps = {
  isMobileOptionActive: boolean;
}

const StyledProductDetail = styled.div<StyledProductDetailProps>`
  display: flex;
  flex-direction: row;
  gap: ${space.m};

  ${breakpoints.tablet} {
    flex-direction: column;
    ${(props) => props.isMobileOptionActive && css`
      ::before {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        display: block;
        background-color: rgba(0,0,0,.7);
        content: '';
        z-index: 1;
      }
    `}
  }
`;

const ProductInfo = styled.div`
  flex: 1;
`;

const ProductInfoFooter = styled.div`
  ${breakpoints.tablet} {
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    background: ${(props) => props.theme.colors.white};
    border-radius: ${borderRadius.default} ${borderRadius.default} 0 0;
    z-index: 2;

    ::after {
      position: absolute;
      top: ${space.xs};
      left: 50%;
      width: 2.5rem;
      height: 0.4rem;
      border-radius: 0.2rem;
      background-color: #DDD;
      transform: translateX(-50%);
      display: block;
      content: '';
    }
  }
`;

const ProductInfoOption = styled.div`
  ${breakpoints.tablet} {
    padding-top: ${space.s};
  }
`;

export type SelectedOptions = {
  [key: string]: string;
}

type ProductDetailProps = {
  productId: string;
}

export default function ProductDetail({
  productId,
}: ProductDetailProps) {
  const windowSize = useWindowSize();
  const [isMobileOptionToggled, setIsMobileOptionToggled] = useState<boolean>(false);

  const [selectedOptions, setSelectedOptions] = useState<SelectedOptions>({});
  const [openSelect, setOpenSelect] = useState<string | null>(null);
  const [quantity, setQuantity] = useState<number>(1);

  const { productDetail } = useProduct();

  const { data, error, isLoading } = productDetail(productId);

  useEffect(() => {
    setSelectedOptions({});
    if (data) {
      const setOptions: SelectedOptions = {};
      // eslint-disable-next-line no-return-assign
      data.options.map((option, index) => setOptions[option.id] = data.options[index].items[0].id);
      setSelectedOptions({
        ...selectedOptions,
        ...setOptions,
      });
    }
  }, [data]);

  useEffect(() => {
    if (windowSize.width > size.tablet) {
      setIsMobileOptionToggled(false);
    }
  }, [windowSize.width]);

  const isMobileOptionActive = useMemo(() => isMobileOptionToggled || (windowSize.width > size.tablet), [windowSize.width, isMobileOptionToggled]);

  const handleOptionClick = (optionId: string, item: Item) => {
    setSelectedOptions((prevSelectedOptions) => ({
      ...prevSelectedOptions,
      [optionId]: item.id,
    }));
  };

  const handleClickIncrease = () => {
    setQuantity(quantity + 1);
  };

  const handleClickDecrease = () => {
    if (quantity < 2) return;

    setQuantity(quantity - 1);
  };

  const toggleMobileOption = () => {
    setIsMobileOptionToggled(!isMobileOptionToggled);
  };

  const toggleDropdown = (selectId: string) => {
    setOpenSelect((prevOpenSelect) => (prevOpenSelect === selectId ? null : selectId));
  };

  if (isLoading) {
    return <LoadingSpinner />;
  }

  if (error || !data) {
    return (
      <Text
        textSize="default"
        textAlign="center"
        text={ERROR_MESSAGE.PRODUCT.FAIL_TO_FIND_PRODUCT}
        color="text"
        mb="xs"
      />
    );
  }

  return (
    <StyledProductDetail isMobileOptionActive={isMobileOptionActive}>
      <Thumbnail
        style={{ flex: '0 0 50%' }}
        imageUrl={data?.images[0].url}
        name={data.name}
      />
      <ProductInfo>
        <ProductInfoBody
          name={data.name}
          price={data.price}
          description={data.description}
        />
        <ProductInfoFooter>
          {isMobileOptionActive && (
            <ProductInfoOption>
              {data.options.map((option, index) => (
                <DescriptionList key={option.id} listTitle={option.name}>
                  <ProductSelectBox
                    data={data}
                    openSelect={openSelect}
                    index={index}
                    selectedOptions={selectedOptions}
                    toggleDropdown={toggleDropdown}
                    handleOptionClick={handleOptionClick}
                  />
                </DescriptionList>
              ))}
              <DescriptionList listTitle="상품 수량">
                <ProductQuantity
                  quantity={quantity}
                  handleClickIncrease={handleClickIncrease}
                  handleClickDecrease={handleClickDecrease}
                />
              </DescriptionList>
              <ProductTotalPrice price={data.price} quantity={quantity} />
            </ProductInfoOption>
          )}
          <ProductInfoButtons toggleMobileOption={toggleMobileOption} />
        </ProductInfoFooter>
      </ProductInfo>
    </StyledProductDetail>
  );
}
