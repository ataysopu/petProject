import { IGlobalAppContainerProps } from './types';
import { Container, Layout } from './styled';
import { AppHeader } from '../header';
import { Footer } from '../footer';

export const GlobalAppContainer: React.FC<IGlobalAppContainerProps> = ({ children, header, footer }) => {
  return (
    <Layout>
      {header && <AppHeader />}
      <Container header={header}>{children}</Container>
      {footer && <Footer />}
    </Layout>
  );
};