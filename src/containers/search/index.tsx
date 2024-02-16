import React from 'react';
import { Input, InputWrap } from './styled';

import { ReactComponent as SearchIcon } from 'assets/icons/search.svg';

export const Search = () => {
  return (
    <InputWrap>
      <Input placeholder={'Я ищу товар, бренд или магазин...'} /> <SearchIcon />
    </InputWrap>
  );
};
