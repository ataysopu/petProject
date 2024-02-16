import { DATA } from '../../containers/mocks/catalogItems';

export const useCalculation = () => {
  const data = DATA; //TODO get data from react-query
  let total = 0;
  let discount = 0;
  let countItems = 0;

  data.forEach((i) => {
    total += i.price.withDiscount * i.count;
    discount += (i.price.withoutDiscount - i.price.withDiscount) * i.count;
    countItems = data.length || 0;
  });

  return {
    total,
    discount,
    countItems
  };
};
