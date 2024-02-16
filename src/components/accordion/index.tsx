import React, { useEffect } from 'react';
import { IAccordionProps } from './types';
import { AccordionCover, AccordionHead, AccordionTitle, Child } from './styled';

import { ReactComponent as CloseIcon } from '../../assets/icons/accordClose.svg';
import { ReactComponent as OpenIcon } from '../../assets/icons/accordOpen.svg';

export const Accordion: React.FC<IAccordionProps> = React.memo(
  ({ className, isOpen, getActiveState, title, children, Icon }) => {
    const [isActive, setIsActive] = React.useState<boolean>(isOpen || false);

    useEffect(() => {
      if (getActiveState) getActiveState(isActive);
    }, [isActive]);

    return (
      <AccordionCover className={className}>
        <AccordionHead className="accordionHead" onClick={() => setIsActive(!isActive)}>
          <AccordionTitle className="accordionTitle">{title}</AccordionTitle>
          {Icon && <Icon style={{ transform: (isActive && 'rotate(180deg)') || 'rotate(0deg)' }} />}
          {!Icon && (isActive ? <CloseIcon /> : <OpenIcon />)}
        </AccordionHead>
        {isActive && <Child className="accordionChild">{children}</Child>}
      </AccordionCover>
    );
  }
);

