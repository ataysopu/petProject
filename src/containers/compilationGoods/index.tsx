import React from 'react';
import { Container, STab, STabList, STabPanel, STabs, SubTitle, Title } from './styled';
import { Typography } from '../../components';
import { DATA } from '../mocks/catalogItems';
import { Card } from '../../components/card';
import { Grid } from '../../components/grid';

export const CompilationGoods: React.FC = React.memo(() => {
  return (
    <Container>
      <Title variant="h1" variantOnMobile="h3">
        Ваша подборка товаров в рассрочку <SubTitle>от 3 до 12 месяцев</SubTitle>
      </Title>
      <STabs selectedTabClassName="is-selected" selectedTabPanelClassName="is-selected">
        <STabList>
          <STab>
            <Typography variant="subtitleA">Популярные</Typography>
          </STab>
          <STab>
            <Typography variant="subtitleA">Новые</Typography>
          </STab>
        </STabList>
        <STabPanel>
          <Grid>
            {DATA.map(
              (
                item
              ) => (
                <Card key={item.id} data={item} />
              )
            )}
          </Grid>
        </STabPanel>
        <STabPanel>
          <Typography variant="h2">Any content 2</Typography>
        </STabPanel>
      </STabs>
    </Container>
  );
});