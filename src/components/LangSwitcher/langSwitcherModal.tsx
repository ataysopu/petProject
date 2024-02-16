import React from 'react';
import { Modal } from '../modal';
import { LangList, LangModalContainer, LangModalTitle, ListItem } from './styled';

import ruIcon from '../../assets/icons/ru.svg';
import kgIcon from '../../assets/icons/kg.svg';

interface ILangSwitcherModal {
  isOpen: boolean;
  optionsIconShow?: boolean;
  onClose: (key: boolean) => void;
}

export const LangSwitcherModal: React.FC<ILangSwitcherModal> = React.memo(
  ({ optionsIconShow = true, isOpen, onClose }) => {
    const [selected, setSelected] = React.useState<string>('ru');

    const options = [
      { value: 'ru', label: 'Русский', icon: optionsIconShow ? ruIcon : null },
      { value: 'kg', label: 'Кыргызский', icon: optionsIconShow ? kgIcon : null }
    ];

    return (
      <Modal onClose={onClose} isOpen={isOpen} top="34%">
        <LangModalContainer>
          <LangModalTitle>Выберите язык</LangModalTitle>
          <LangList>
            {options.map((item: any) => (
              <ListItem
                key={item.value}
                className="lang-select-item"
                selected={item.value === selected}
                onClick={() => setSelected(item.value)}
              >
                <img src={item.icon} alt={item.label} /> {item.label}
              </ListItem>
            ))}
          </LangList>
        </LangModalContainer>
      </Modal>
    );
  }
);
