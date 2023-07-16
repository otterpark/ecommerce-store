import { Categories, Products } from '@/types/product';

export const mockCategories: Categories = {
  categories: [
    { id: '0BV000CAT0001', name: 'top' },
    { id: '0BV000CAT0002', name: 'outer' },
    { id: '0BV000CAT0003', name: 'bottom' },
    { id: '0BV000CAT0004', name: 'acc' }],
};

export const mockProducts: Products = {
  products: [
    {
      id: '0BV000PRO0001', category: { id: '0BV000CAT0001', name: 'top' }, thumbnail: { url: 'https://ahastudio.github.io/my-image-assets/images/cbcl-products/01.jpg' }, name: 'CBCL 하트자수맨투맨', price: 128000,
    },
    {
      id: '0BV000PRO0002', category: { id: '0BV000CAT0001', name: 'top' }, thumbnail: { url: 'https://ahastudio.github.io/my-image-assets/images/cbcl-products/02.jpg' }, name: 'CBCL 사틴셔츠', price: 118000,
    },
    {
      id: '0BV000PRO0003', category: { id: '0BV000CAT0001', name: 'top' }, thumbnail: { url: 'https://ahastudio.github.io/my-image-assets/images/cbcl-products/03.jpg' }, name: 'CBCL 레이어드 탑', price: 89000,
    },
    {
      id: '0BV000PRO0004', category: { id: '0BV000CAT0001', name: 'top' }, thumbnail: { url: 'https://ahastudio.github.io/my-image-assets/images/cbcl-products/04.jpg' }, name: 'CBCL 배색 후드', price: 89000,
    },
    {
      id: '0BV000PRO0005', category: { id: '0BV000CAT0002', name: 'outer' }, thumbnail: { url: 'https://ahastudio.github.io/my-image-assets/images/cbcl-products/05.jpg' }, name: '박시롱코트', price: 298000,
    },
    {
      id: '0BV000PRO0006', category: { id: '0BV000CAT0002', name: 'outer' }, thumbnail: { url: 'https://ahastudio.github.io/my-image-assets/images/cbcl-products/06.jpg' }, name: 'CBCL 레귤러핏 야구점퍼', price: 397000,
    },
    {
      id: '0BV000PRO0007', category: { id: '0BV000CAT0002', name: 'outer' }, thumbnail: { url: 'https://ahastudio.github.io/my-image-assets/images/cbcl-products/07.jpg' }, name: 'CBCL 핀턱자수후드', price: 158000,
    },
    {
      id: '0BV000PRO0008', category: { id: '0BV000CAT0003', name: 'bottom' }, thumbnail: { url: 'https://ahastudio.github.io/my-image-assets/images/cbcl-products/08.jpg' }, name: '밴딩스커트', price: 966000,
    },
    {
      id: '0BV000PRO0009', category: { id: '0BV000CAT0003', name: 'bottom' }, thumbnail: { url: 'https://ahastudio.github.io/my-image-assets/images/cbcl-products/09.jpg' }, name: 'CBCL 하트자수셋업조거', price: 138000,
    },
    {
      id: '0BV000PRO0010', category: { id: '0BV000CAT0004', name: 'acc' }, thumbnail: { url: 'https://ahastudio.github.io/my-image-assets/images/cbcl-products/10.jpg' }, name: 'CBCL EARRING Silver', price: 62000,
    },
    {
      id: '0BV000PRO0011', category: { id: '0BV000CAT0004', name: 'acc' }, thumbnail: { url: 'https://ahastudio.github.io/my-image-assets/images/cbcl-products/11.jpg' }, name: 'CBCL EARRING Green', price: 82000,
    },
    {
      id: '0BV000PRO0012', category: { id: '0BV000CAT0004', name: 'acc' }, thumbnail: { url: 'https://ahastudio.github.io/my-image-assets/images/cbcl-products/12.jpg' }, name: 'CBCL EARRING Purple', price: 72000,
    }],
};

export const mockProductDetail = {
  id: '0BV000PRO0002',
  category: {
    id: '0BV000CAT0001',
    name: 'top',
  },
  images: [
    {
      url: 'https://ahastudio.github.io/my-image-assets/images/cbcl-products/02.jpg',
    },
  ],
  name: 'CBCL 사틴셔츠',
  price: 118000,
  options: [
    {
      id: '0BV000OPT0003',
      name: '컬러',
      items: [
        {
          id: '0BV000ITEM006',
          name: 'white',
        },
        {
          id: '0BV000ITEM007',
          name: 'black',
        },
        {
          id: '0BV000ITEM008',
          name: 'beige',
        },
      ],
    },
    {
      id: '0BV000OPT0004',
      name: '사이즈',
      items: [
        {
          id: '0BV000ITEM009',
          name: 'S',
        },
        {
          id: '0BV000ITEM010',
          name: 'M',
        },
        {
          id: '0BV000ITEM011',
          name: 'L',
        },
      ],
    },
  ],
  description: 'Color: White, Black, Beige\nSize: S, M, L\n\n화이트 실크 소재의 살랑거리는 블라우스\n흘러 내리는듯한 실루엣으로 한층 우아한 분위기 연출',
};
