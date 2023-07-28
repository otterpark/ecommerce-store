export type Category = {
  id: string;
  name: string;
}

export type Categories = {
  categories: Category[],
}

export type Thumbnail = {
  url: string;
}

export type Product = {
  id: string;
  category: Category;
  thumbnail: Thumbnail;
  name: string;
  price: number;
}

export type ProductList = {
  products: Product[];
}

export type Item = {
  id: string;
  name: string;
}

export type Option = {
  id: string;
  name: string;
  items: Item[];
}

export type ProductDetail = {
  images: Thumbnail[];
  options: Option[];
  description: string;
} & Pick<Product, 'id' | 'category' | 'name' | 'price'>
