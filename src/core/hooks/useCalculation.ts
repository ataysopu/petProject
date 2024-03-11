import { useSelector } from 'react-redux';
import * as wishlistSliceSelectors from '../../store/selectors/wishlistSelectors';

export const useCalculation = () => {
  const data = useSelector(wishlistSliceSelectors.products);

  let total = 0;
  let discount = 0;
  let countItems = data.length || 0;

  data.forEach((i) => {
    total += i.price.withoutDiscount;
    discount += i.price.withDiscount;
  });

  return {
    total,
    discount,
    countItems
  };
};
