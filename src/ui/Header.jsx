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
        <h1 className="p-5 mt-10 text-2xl text-center">
          The best pizza. Straight out of the oven, straight to you.
        </h1>

        <div className="flex ">
          <input
            type="text"
            className="p-2  m-auto rounded-full bg-white"
            placeholder="Your full name"
          />
        </div>
      </main>
    </>
  );
}

export default Header;
