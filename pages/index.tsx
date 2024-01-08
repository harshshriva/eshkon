import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchEntries } from '../contentful';
import { RootState } from '../redux/store';

const HomePage = () => {
  const dispatch = useDispatch();
  const posts = useSelector((state: RootState) => state.posts);

  useEffect(() => {
    const fetchData = async () => {
      const entries = await fetchEntries();
    };

    fetchData();
  }, [dispatch]);

  return (
    <div>
      <h1>Blog Posts</h1>
    </div>
  );
};

export default HomePage;
