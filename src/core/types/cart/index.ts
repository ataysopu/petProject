export interface ICart {
  items: CartItem[];
}

export type CartItem = {
  id: number;
  images: string[];
  type: string;
  description: string;
  name: string;
  vendor: string;
  variants: number;
  count: number;
  fave: boolean;
  chips: Chips[];
  price: Price;
};

export type Price = {
  withDiscount: number;
  withoutDiscount: number;
  credit: number;
};

export type Chips = {
  type: string;
  label: string;
};
