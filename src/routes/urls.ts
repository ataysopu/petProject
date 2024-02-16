const baseUrl = '/';

export const URLS = {
  Main: baseUrl,
  Category: (slug: string = ':slug') => baseUrl + `category/${slug}`,
  Catalog: baseUrl + 'catalog',
  Product: baseUrl + 'product:id',
  Cart: baseUrl + 'cart',
  Order: (orderId: string = ':orderId') => baseUrl + `order/${orderId}`,
  OrderStatus: (orderId: string = ':orderId') => baseUrl + `order-status/${orderId}`,
  Profile: baseUrl + 'profile',
  Wishlist: baseUrl + 'wishlist',
  Shop: baseUrl + 'shop/:name',
  Auth: baseUrl + 'auth',
  AuthNewUser: baseUrl + 'auth/new-user',
  AuthIdentified: baseUrl + 'auth/identified',
  AuthIdentifiedResetPassword: baseUrl + 'auth/identified/reset-password',
  AuthOutdoor: baseUrl + 'auth/outdoor',
  AuthOutdoorResetPassword: baseUrl + 'auth/outdoor/reset-password'
};
