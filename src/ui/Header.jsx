import { Link } from 'react-router';
import SearchOrder from '../features/order/SearchOrder';

function Header() {
  return (
    <>
      <div className="flex bg-yellow-300 justify-between p-5">
        <Link to="/">Fast Pizza</Link>
        <SearchOrder />
      </div>

      <main>
       
      </main>
    </>
  );
}

export default Header;
