import { BoxContainer, Input, InputRangeWrapper, ProgressInfo } from './styled';
import React from 'react';
import { formatNumber } from '../../../core/helpers';

interface IProgressProps {
  max: string;
  value: string;
  className?: string;
  infoVisible?: boolean;
}

export const Progress: React.FC<IProgressProps> = ({ max, value, infoVisible = true, className }) => {
  return (
    <InputRangeWrapper className={className}>
      <Input max={max} value={value} className={'progress'} />
      {infoVisible && (
        <ProgressInfo className={'progress-info'}>
          <BoxContainer>
            <div>Лимит</div>
            <div>{formatNumber(Number(max))} c</div>
          </BoxContainer>
          <BoxContainer>
            <div>Остаток</div>
            <div>{formatNumber(Number(max) - Number(value))} c</div>
          </BoxContainer>
        </ProgressInfo>
      )}
    </InputRangeWrapper>
  );
};
