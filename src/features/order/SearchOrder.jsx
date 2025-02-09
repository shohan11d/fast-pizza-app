import { useState } from 'react';
import { Link, useNavigate } from 'react-router';

function SearchOrder() {
  const [query, setQuery] = useState('');
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e)
    if (!query) return;
    navigate(`/order/${query}`);
    setQuery('');

  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        placeholder="Search Order *"
        value={query}
        className='p-2 rounded-full bg-white'
        onChange={(e) => setQuery(e.target.value)}
      />
    </form>
  );
}

export default SearchOrder;
