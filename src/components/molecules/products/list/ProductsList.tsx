import Link from 'next/link';
import styled from 'styled-components';

import Image from '@/components/atoms/images/Image';
import Text from '@/components/atoms/texts/Text';
import LoadingSpinner from '@/components/atoms/Loading';

import numberFormat from '@/utils/numberFormat';

import useProduct from '@/hooks/useProduct';

import { breakpoints } from '@/styles/medias';
import { borderRadius, fontSize, space } from '@/styles/sizes';

import { ERROR_MESSAGE } from '@/constants';
import { GET_PRODUCTS } from '@/api/url';
import { mutate } from 'swr';
import { useEffect } from 'react';

const ProductList = styled.ul`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(4, auto);
  grid-gap: ${space.s};
  gap: ${space.s};
  transition: all .3s;

  ${breakpoints.desktop} {
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(3, auto);
  }

  ${breakpoints.tablet} {
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(2, auto);
  }

  li {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    text-decoration: none;
    a {
      text-decoration: none;
    }
  }
`;

const Badge = styled.span`
  display: inline-block;
  background-color: ${(props) => props.theme.colors.primary};
  font-size: ${fontSize.xxs};
  color: ${(props) => props.theme.colors.white};
  border-radius: ${borderRadius.default};
  padding: ${space.xxs} ${space.xs};
  margin-bottom: ${space.xxs};
  text-transform: uppercase;
`;

type ProductsListProps = {
  categoryId?: string;
}

export default function ProductsList({ categoryId = '' } : ProductsListProps) {
  const { products } = useProduct();
  const { data, error, isLoading } = products(categoryId);

  if (isLoading) {
    return <LoadingSpinner />;
  }

  if (error || !data?.length) {
    return (
      <Text
        textSize="default"
        textAlign="center"
        text={ERROR_MESSAGE.PRODUCT.FAIL_TO_FIND_CATEGORY}
        color="text"
        mb="xs"
      />
    );
  }

  return (
    <ProductList>
      {data?.map((product) => (
        <li key={product.id}>
          <Link href={`/products/${product.id}`}>
            <Image
              src={product.thumbnail.url}
              mb="xs"
            />
            <Badge>{product.category.name}</Badge>
            <Text
              textSize="default"
              textAlign="left"
              text={product.name}
              color="text"
              mb="xs"
            />
            <Text
              textSize="default"
              textAlign="left"
              textWeight="bold"
              text={`${numberFormat(product.price)} 원`}
              color="text"
            />
          </Link>
        </li>
      ))}
    </ProductList>
  );
}
