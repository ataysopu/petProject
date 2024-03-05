import { RootState } from '../../store';

export const goods = (state: RootState) => state.favorites.goods || [];