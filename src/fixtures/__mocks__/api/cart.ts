import { Cart } from '@/types/cart';

// eslint-disable-next-line import/prefer-default-export
export const mockCart: Cart = {
  lineItems: [
    {
      id: '01H5EX5MN525X8Y10DMC29MEYM',
      product: {
        id: '0BV000PRO0002',
        thumbnail: {
          url: 'https://ahastudio.github.io/my-image-assets/images/cbcl-products/02.jpg',
        },
        name: 'CBCL 사틴셔츠',
      },
      options: [
        {
          name: '컬러',
          item: {
            name: 'white',
          },
        },
        {
          name: '사이즈',
          item: {
            name: 'S',
          },
        },
      ],
      unitPrice: 118000,
      quantity: 5,
      totalPrice: 590000,
    },
    {
      id: '01H5F04P7TKKVAYEG6K8Y8CATQ',
      product: {
        id: '0BV000PRO0006',
        thumbnail: {
          url: 'https://ahastudio.github.io/my-image-assets/images/cbcl-products/06.jpg',
        },
        name: 'CBCL 레귤러핏 야구점퍼',
      },
      options: [
        {
          name: '컬러',
          item: {
            name: 'brown',
          },
        },
        {
          name: '사이즈',
          item: {
            name: 'M',
          },
        },
      ],
      unitPrice: 397000,
      quantity: 4,
      totalPrice: 1588000,
    },
  ],
  totalPrice: 2178000,
};
