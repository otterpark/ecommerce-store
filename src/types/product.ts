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

export type Products = {
  products: Product[];
}
