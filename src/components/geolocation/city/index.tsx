import React from 'react';
import {
  Chip,
  CitiesContainer,
  CitiesFlexBox,
  CitiesTitle,
  Container,
  InputField, NotMatch, NotMatchInner,
  OtherCities, OtherCitiesFlexBox, OtherCitiesTitle, OtherCity,
  PickCity,
  Title
} from './styled';

import { ReactComponent as SearchIcon } from 'assets/icons/emptySearch.svg';

const CITIES = [
  {
    obl: 'Чуйская область',
    region: ['Алалмудун', 'Арчалы', 'Байтик', 'Баш-Кара-Суу', 'Бишкек', 'Сокулук']
  },
  {
    obl: 'Ошская область',
    region: ['Ош']
  }
];

const POPULAR_CITIES = ['Бишкек', 'Ош', 'Токмат', 'Кант', 'Джалал-абад', 'Нарын', 'Баткен', 'Талас', 'Каракол'];

export interface ICityList {
  city: string;
  setCity: any;
}

export const CityList: React.FC<ICityList> = React.memo(({ city, setCity }) => {
  const [value, setValue] = React.useState<string>('');
  const [cities] = React.useState(CITIES);

  const inputChange = (e: any) => {
    setValue(e.target.value);
  };

  const filterCities = React.useCallback(
    (array: any, value: any) => {
      if (!value.length) return array;
      return array.filter((r: any) => String(r.region.map((s: any) => s.toLowerCase())).includes(value.toLowerCase()));
    },
    [value]
  );

  const filterRegion = (array: any) => {
    if (!array.length) return array;
    return array.filter((key: any) => {
      return key.toLowerCase().includes(value.toLowerCase());
    });
  };

  return (
    <PickCity>
      <Container>
        <Title>
          Ваш город: <strong>{city}</strong>
        </Title>
        <InputField label="Город, поселок, деревня" value={value} onClear={() => setValue('')} onChange={inputChange} />
        {!value && (
          <>
            <CitiesTitle>Популярные города</CitiesTitle>
            <CitiesFlexBox>
              {POPULAR_CITIES.map((name) => (
                <Chip key={name} active={name === city} onClick={() => setCity(name)}>
                  {name}
                </Chip>
              ))}
            </CitiesFlexBox>
          </>
        )}
        <div>
          <CitiesContainer>
            {filterCities(cities, value).length > 0 ? (
              filterCities(cities, value).map((i: any) => (
                <OtherCities key={i.obl}>
                  <OtherCitiesTitle>{i.obl}</OtherCitiesTitle>
                  <OtherCitiesFlexBox>
                    {filterRegion(i.region).map((r: any) => (
                      <OtherCity key={r} onClick={() => setCity(r)}>
                        {r}
                      </OtherCity>
                    ))}
                  </OtherCitiesFlexBox>
                </OtherCities>
              ))
            ) : (
              <>
                <NotMatch>
                  <NotMatchInner>
                    <SearchIcon />
                    <div>Упс, мы ничего не нашли</div>
                    <span>Такого населенного пункта не существует. Попробуйте уточнить поиск</span>
                  </NotMatchInner>
                </NotMatch>
                <CitiesTitle>Популярные города</CitiesTitle>
                <CitiesFlexBox>
                  {POPULAR_CITIES.map((name) => (
                    <Chip key={name} active={city === name} onClick={() => setCity(name)} role="button">
                      {name}
                    </Chip>
                  ))}
                </CitiesFlexBox>
              </>
            )}
          </CitiesContainer>
        </div>
      </Container>
    </PickCity>
  );
});
