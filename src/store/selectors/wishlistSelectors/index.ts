import { RootState } from '../../store';

export const products = (state: RootState) => state.wishlist.products || [];