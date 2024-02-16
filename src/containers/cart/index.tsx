import { useWindowSize } from '../../core/hooks/useWindowSize';
import { useDeviceDetected } from '../../core/hooks/useDeviceDetected';
import { CartItem } from '../../core/types/cart';
import React from 'react';
import { BREAKEPOINTS } from '../../core/config/breakpoints';
import { ContentContainer, DesktopCardStyled, List, STab, STabList, STabPanel, STabs, Title } from './styled';
import { MobileCard } from '../../components/card/mobile';
import { IProductCard } from '../order/chekout/types';
import { Empty } from './empty';
import { UserRole } from '../../core/types/user';
import { TotalCard } from './totalCard';
import { IdentTotalCart } from './identTotalCard';

interface ICartProps {
  showRecommendations?: boolean;
}

export const Cart: React.FC<ICartProps> = ({ showRecommendations = true }) => {
  const { width } = useWindowSize();

  const userRole = 'GUEST';
  const dataCart: any = [];

  const isMobile = useDeviceDetected();
  const Card = ({ i }: { i: CartItem }) => {
    return (
      <React.Fragment>
        {width >= BREAKEPOINTS.xl ? (
          <DesktopCardStyled key={i.vendor} data={i} />
        ) : (
          <MobileCard key={i.vendor} data={i} />
        )}
      </React.Fragment>
    );
  };

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
              {!!dataCart?.items?.length ? (
                dataCart?.items?.map((i: IProductCard) => <Card key={i.id} i={i} />)
              ) : (
                <Empty showPosts={showRecommendations} />
              )}
            </List>
            {!!dataCart?.items?.length && (!isMobile || userRole === UserRole.GUEST) && <TotalCard />}
            {!!dataCart?.items?.length && isMobile && userRole !== UserRole.GUEST && (
              <IdentTotalCart productCount={4} productAmount={34000} discount={4000} amount={30000} />
            )}
          </ContentContainer>
        </STabPanel>
      </STabs>
      {/*<LoginModal />*/}
    </React.Fragment>
  );
};
