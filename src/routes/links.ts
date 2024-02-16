const base = '';

export const APP_LINKS = {
  root: '/',
  app_root: '/',
  category: (slug = ':slug') => base + `/category/${slug}`,
  subcategory: (categoryId = ':categoryId') => base + `/category/subcategory/${categoryId}`,
  product: (slug = ':slug') => base + `/product/${slug}`,
  shop: (name = ':name'): string => `${base}/shop/${name}`,
  faq: `${base}/faq`,
  profile: base + '/profile',
  profile_orders: base + '/profile/orders',
  profile_order_details: (orderId = ':orderId') => base + `/profile/orders/${orderId}`,
  profile_addresses: base + '/profile/addresses',
  profile_reviews: base + '/profile/reviews',
  profile_favorites: base + '/profile/favorites',
  profile_products_compare: base + '/profile/products-compare',
  cart: base + '/cart',
  cart_item: (id = ':id') => base + `/cart/item/${id}`,
  search_result: base + '/search',
  auth: base + '/auth',
  notFound: base + '/not-found',
  access_denied: base + '/access-denied',
  review_create: (id = ':id') => `${base}/profile/orders/review/${id}`,
  Wishlist: base + '/wishlist',
  merchant_review_create: (id = ':id', slug = ':slug') =>
    `${base}/profile/orders/merchant/review/${slug}/${id}`
};
