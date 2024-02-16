import React from 'react';
import { useDeviceDetected } from '../../../core/hooks/useDeviceDetected';
import { CreditWrapper, ProgressCover, ProgressTitle, StyledProgress, Image } from './styled';

import creditImage from 'assets/icons/credit-value.png';

export const Credit: React.FC = () => {
  const [isVisible, setVisible] = React.useState<boolean>(false);
  const isMobile = useDeviceDetected();

  React.useEffect(() => {
    setVisible(true);
  }, []);

  const handleChangeVisibility = () => {
    if (isMobile) setVisible(!isVisible);
  };

  return (
    <CreditWrapper isVisibile={isVisible} onClick={() => handleChangeVisibility()}>
      <Image src={creditImage} />
      <ProgressCover>
        <ProgressTitle>Одобренный кредит</ProgressTitle>
        <StyledProgress max="280000" value="140000" infoVisible={isVisible} />
      </ProgressCover>
    </CreditWrapper>
  );
};