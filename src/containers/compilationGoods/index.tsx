import React from 'react';
import { Container, STab, STabList, STabPanel, STabs, SubTitle, Title } from './styled';
import { Typography } from '../../components';
import { Card } from '../../components/card';
import { Grid } from '../../components/grid';
import { fetchProducts } from '../../api/getProducts';


export const CompilationGoods: React.FC = React.memo(() => {
  const [all, setAll] = React.useState<any[]>([]);
  const [newProducts, setNewProducts] = React.useState<any[]>([]);


  React.useEffect(() => {
    fetchProducts().then(res => {
      const all = res.data;
      const allNew = res.data.filter((i: any) => i.isNew);

      setAll(all);
      setNewProducts(allNew);

    });
  }, []);


  return (
    <Container>
      <Title variant="h1" variantOnMobile="h3">
        Ваша подборка товаров в рассрочку <SubTitle>от 3 до 12 месяцев</SubTitle>
      </Title>
      <STabs selectedTabClassName="is-selected" selectedTabPanelClassName="is-selected">
        <STabList>
          <STab>
            <Typography variant="subtitleA">Все товары</Typography>
          </STab>
          <STab>
            <Typography variant="subtitleA">Новые</Typography>
          </STab>
        </STabList>
        <STabPanel>
          <Grid>
            {all?.map((item) => <Card key={item.id} data={item} />)}
          </Grid>
        </STabPanel>
        <STabPanel>
          <Grid>
            {newProducts?.map((item) => <Card key={item.id} data={item} />)}
          </Grid>
        </STabPanel>
      </STabs>
    </Container>
  );
});