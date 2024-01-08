import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { searchPosts } from '../algolia';
import { RootState } from '../redux/store';

const SearchPage = () => {
  const dispatch = useDispatch();
  const [query, setQuery] = useState('');
  const searchResults = useSelector((state: RootState) => state.searchResults);

  const handleSearch = async () => {
    const results = await searchPosts(query);
  };

  return (
    <div>
      <h1>Search</h1>
      <input type="text" value={query} onChange={(e) => setQuery(e.target.value)} />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
};

export default SearchPage;
