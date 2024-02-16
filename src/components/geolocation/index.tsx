import React from 'react';
import { useWindowSize } from '../../core/hooks/useWindowSize';
import { BREAKEPOINTS } from '../../core/config/breakpoints';
import { useOutsideClick } from '../../core/hooks/useOutsideClick';
import { useSwipe } from '../../core/hooks/useSwipe';
import { ButtonsCover, City, Overlay, Title, Tooltip, Text, Geolocation } from './styled';
import { Typography } from '../typography';
import { Button } from '../button';
import { Modal } from '../modal';

import { ReactComponent as GeoIcon } from 'assets/icons/geo.svg';
import { CityList } from './city';

export const Geo = React.memo(() => {
  const [city, setCity] = React.useState<string>('Бишкек');
  const [open, setOpen] = React.useState<boolean>(false);
  const [showTooltip, setShowTooltip] = React.useState<boolean>(true);
  const [openModal, setOpenModal] = React.useState<boolean>(false);

  const { width } = useWindowSize();
  const ref = React.useRef(null);
  const refTooltip = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    // setTimeout(() => setOpen(true), 2000);
  }, []);

  React.useEffect(() => {
    if (openModal) {
      hideTooltip();
    }
  }, [openModal]);

  const hideTooltip = () => {
    setShowTooltip(false);
    setTimeout(() => {
      setOpen(false);
    }, 520);
  };

  const animation = () => {
    return width > BREAKEPOINTS.lg
      ? { opacity: `${showTooltip ? '1' : '0'}` }
      : { transform: `translateY(${showTooltip ? '0%' : '100%'})` };
  };

  useOutsideClick(ref, () => hideTooltip(), true);
  useSwipe(refTooltip, () => hideTooltip(), { axis: 'vertical', sensitivity: 300 });

  return (
    <Geolocation ref={ref}>
      <City onClick={() => setOpenModal(!openModal)}>
        {width > BREAKEPOINTS.lg && <GeoIcon />}
        <Typography>{city}</Typography>
      </City>
      {open && (
        <Overlay>
          <Tooltip style={animation()} ref={refTooltip}>
            <Title>Ваш город Бишкек?</Title>
            <Text>Вам будут показаны товары, доступные для продажи в этом регионе</Text>
            <ButtonsCover>
              <Button primary onClick={hideTooltip} style={{ padding: '15px 22px', maxWidth: 124, marginRight: 30 }}>
                Все верно
              </Button>
              <Button transparent onClick={() => setOpenModal(true)}>
                Выбрать другой
              </Button>
            </ButtonsCover>
          </Tooltip>
        </Overlay>
      )}
      <Modal onClose={setOpenModal} isOpen={openModal}>
        <CityList city={city} setCity={setCity} />
      </Modal>
    </Geolocation>
  );
});
