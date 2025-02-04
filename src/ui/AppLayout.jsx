import { Outlet, useNavigation } from 'react-router';
import Header from './Header';
import CartOverview from '../features/cart/CartOverview';
import Loader from './Loader';
function AppLayout() {
  const navigation = useNavigation();
  const isLoading = navigation.state === 'loading';
  return (
    <div className="layout">
      {isLoading && <Loader />}
      <main>
        <Header />
        <h1>content</h1>
        <Outlet />
      </main>
      <CartOverview />
    </div>
  );
}

export default AppLayout;
