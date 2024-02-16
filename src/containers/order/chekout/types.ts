export interface IPaymentBtn {
  active: boolean;
}

export interface IBasket {
  productList: any;
  removedList: any;
}

export interface IProductList {
  [key: string]: IProductCard[];
}

export interface ICheckoutData {
  data: IProductCard;
}

export interface IProductCard {
  id: number;
  images: string[];
  name: string;
  vendor: string;
  type: string;
  description: string;
  variants: number;
  count: number;
  price: IProductCardPrice;
  fave: boolean;
  chips: IProductCardChips[];
}

export interface IProductCardPrice {
  withDiscount: number;
  withoutDiscount: number;
  credit: number;
}

export interface IProductCardChips {
  type: string;
  label: string;
}