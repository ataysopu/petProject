export type TUser = {
  name: string;
  birthday: string;
  phone: string;
  gender: string;
  email: string;
  photo: string;
  isAuth: boolean;
  adress: string;
  identifiedType: 'OUTDOOR' | 'GUEST' | 'IDENTIFIED' | 'REMOTE_IDENTIFIED';
  orders?: TOrders[];
};

export enum UserRole {
  GUEST = 'GUEST',
  OUTDOOR = 'OUTDOOR',
  IDENTIFIED = 'IDENTIFIED',
  REMOTE_IDENTIFIED = 'REMOTE_IDENTIFIED'
}

export type TOrders = {
  name: string;
  price: string;
  status: number;
  paymentMethod: string;
  processMethod: string;
  image: string;
  applicationId: string;
  date: string;
};