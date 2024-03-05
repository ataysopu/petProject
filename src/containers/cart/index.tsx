import React from 'react';
import { useWindowSize } from '../../core/hooks/useWindowSize';
import { useDeviceDetected } from '../../core/hooks/useDeviceDetected';
import { ContentContainer, List, STab, STabList, STabPanel, STabs, Title } from './styled';
import { Empty } from './empty';
import { UserRole } from '../../core/types/user';
import { TotalCard } from './totalCard';
import { IdentTotalCart } from './identTotalCard';
import { Card } from '../../components/card';
import { Grid } from '../../components/grid';
import { useSelector } from 'react-redux';
import * as wishlistSliceSelectors from 'store/selectors/wishlistSelectors';


interface ICartProps {
  showRecommendations?: boolean;
}

export const Cart: React.FC<ICartProps> = ({ showRecommendations = true }) => {

  const userRole = 'GUEST';
  const dataCart = useSelector(wishlistSliceSelectors.products);

  const isMobile = useDeviceDetected();
  return (
    <React.Fragment>
      <Title>Ваши товары</Title>
      <STabs className="cart-list" selectedTabClassName="is-selected" selectedTabPanelClassName="is-selected">
        <STabList>
          <STab>В рассрочку</STab>
        </STabList>
        <STabPanel>
          <ContentContainer>
            <List>
              {!!dataCart.length ? (
                <Grid>
                  {dataCart.map((item) => <Card key={item.id} data={item} />)}
                </Grid>
              ) : (
                <Empty showPosts={showRecommendations} />
              )}
            </List>
            {!!dataCart?.length && (!isMobile || userRole === UserRole.GUEST) && <TotalCard />}
            {!!dataCart?.length && isMobile && userRole !== UserRole.GUEST && (
              <IdentTotalCart productCount={4} productAmount={34000} discount={4000} amount={30000} />
            )}
          </ContentContainer>
        </STabPanel>
      </STabs>
      {/*<LoginModal />*/}
    </React.Fragment>
  );
};
