import {
  MouseEvent, useEffect, useMemo, useState,
} from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import styled, { css } from 'styled-components';

import LoadingSpinner from '@/components/atoms/Loading';
import ProductInfoBody from '@/components/molecules/products/detail/ProductInfoBody';
import ProductInfoButtons from '@/components/molecules/products/detail/ProductInfoButtons';
import ProductTotalPrice from '@/components/molecules/products/detail/ProductTotalPrice';
import ProductSelectBox from '@/components/molecules/products/detail/ProductSelectBox';
import ProductQuantity from '@/components/molecules/products/detail/ProductQuantity';
import DescriptionList from '@/components/molecules/descriptionList/DescriptionList';
import ErrorMessage from '@/components/molecules/Error/ErrorMessage';
import Thumbnail from '@/components/molecules/thumbnail/Thumbnail';

import useCartService from '@/services/cartService';

import useProduct from '@/hooks/useProduct';
import useAlert from '@/hooks/useAlert';
import useAuth from '@/hooks/useAuth';
import useCart from '@/hooks/useCart';
import useWindowSize from '@/hooks/useWindowResize';

import { borderRadius, space } from '@/styles/sizes';
import { breakpoints, size } from '@/styles/medias';

import { ERROR_MESSAGE, SUCCESS_MESSAGE } from '@/constants';

import { AddCartOption, AddCartRequest } from '@/api/types/cart';
import { useRouter } from 'next/router';

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

export type SelectedOptions = AddCartOption[];

type ProductDetailProps = {
  productId: string;
}

export default function ProductDetail({
  productId,
}: ProductDetailProps) {
  const router = useRouter();
  const windowSize = useWindowSize();
  const [isMobileOptionToggled, setIsMobileOptionToggled] = useState<boolean>(false);

  // const [selectedOptions, setSelectedOptions] = useState<SelectedOptions>({});
  const [selectedOptions, setSelectedOptions] = useState<SelectedOptions>([]);
  const [openSelect, setOpenSelect] = useState<string | null>(null);
  const [quantity, setQuantity] = useState<number>(1);

  const { product } = useProduct();
  const { showAlert } = useAlert();
  const { auth } = useAuth();
  const { cart } = useCart();

  const { addCart, getCart } = useCartService();

  const { data, error, isLoading } = product(productId);

  useEffect(() => {
    setSelectedOptions([]);
    if (data) {
      const setOptions: SelectedOptions = [];
      // eslint-disable-next-line no-return-assign
      data.options.map((option, index) => setOptions.push({
        id: option.id,
        itemId: data.options[index].items[0].id,
      }));
      setSelectedOptions([
        ...setOptions,
      ]);
    }
  }, [data]);

  useEffect(() => {
    if (windowSize.width > size.tablet) {
      setIsMobileOptionToggled(false);
    }
  }, [windowSize.width]);

  // eslint-disable-next-line max-len
  const isMobileOptionActive = useMemo(() => isMobileOptionToggled || (windowSize.width > size.tablet), [windowSize.width, isMobileOptionToggled]);

  const handleClickOption = (optionId: string, itemId: string) => {
    const updateSelectOptions = selectedOptions.map((option) => {
      if (option.id === optionId) {
        // eslint-disable-next-line no-param-reassign
        option.id = optionId;
        // eslint-disable-next-line no-param-reassign
        option.itemId = itemId;
      }
      return option;
    });

    setSelectedOptions([
      ...updateSelectOptions,
    ]);
  };

  const handleClickIncrease = () => {
    setQuantity(quantity + 1);
  };

  const handleClickDecrease = () => {
    if (quantity < 2) return;

    setQuantity(quantity - 1);
  };

  const handleClickMoveOrderPage = () => {
    if (!auth.isAuthenticated) {
      showAlert(ERROR_MESSAGE.AUTH.LOGIN_ACCESS);
      return;
    }

    if (!cart.lineItems.length) {
      showAlert(ERROR_MESSAGE.CART.NULL_CART_DATA);
      return;
    }
    router.push('/order');
  };

  const toggleMobileOption = (event?: MouseEvent<HTMLDivElement>) => {
    if (event) {
      const { id } = (event.target as HTMLButtonElement);
      // eslint-disable-next-line no-useless-return
      if (id !== 'product-detail') return;
    }

    setIsMobileOptionToggled(!isMobileOptionToggled);
  };

  const toggleDropdown = (selectId: string) => {
    setOpenSelect((prevOpenSelect) => (prevOpenSelect === selectId ? null : selectId));
  };

  const handleAddCart = () => {
    if (!auth.isAuthenticated) {
      showAlert(ERROR_MESSAGE.AUTH.LOGIN_ACCESS);
      return;
    }

    if (windowSize.width < size.tablet && !isMobileOptionToggled) {
      toggleMobileOption();
      return;
    }

    const requestAddCart: AddCartRequest = {
      productId,
      options: [],
      quantity,
    };

    if (selectedOptions.length) {
      requestAddCart.options = [...selectedOptions];
    }

    addCart(
      requestAddCart,
      () => {
        getCart(
          () => {
            showAlert(SUCCESS_MESSAGE.CART.SUCESS_TO_ADD);
            setQuantity(1);
            toggleMobileOption();
          },
          () => {
            showAlert(ERROR_MESSAGE.CART.FAIL_TO_ADD);
          },
        );
      },
      () => {
        showAlert(ERROR_MESSAGE.CART.FAIL_TO_ADD);
      },
    );
  };

  if (isLoading) {
    return <LoadingSpinner />;
  }

  if (error || !data) {
    return (
      <ErrorMessage message={ERROR_MESSAGE.PRODUCT.FAIL_TO_FIND_PRODUCT} />
    );
  }

  return (
    <StyledProductDetail
      id="product-detail"
      onClick={toggleMobileOption}
      isMobileOptionActive={isMobileOptionActive}
    >
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
                    handleClickOption={handleClickOption}
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
          <ProductInfoButtons
            handleAddCart={handleAddCart}
            handleClickMoveOrderPage={handleClickMoveOrderPage}
          />
        </ProductInfoFooter>
      </ProductInfo>
    </StyledProductDetail>
  );
}
