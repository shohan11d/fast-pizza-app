import { Link } from 'react-router';
import SearchOrder from '../features/order/SearchOrder';

function Header() {
  return (
    <div>
      <Link to="/">Fast Pizza</Link>
      <SearchOrder />
    </div>
  );
}

export default Header;
