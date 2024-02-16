import { ISymbolProps } from './types';
import { Letter } from './styled';

export const Symbol: React.FC<ISymbolProps> = ({ symbol, mb = 4, ...props }) => {
  return (
    <Letter mb={mb} {...props}>
      {symbol}
    </Letter>
  );
};
