import { useRouter } from 'next/router';
import { fetchEntries } from '../contentful';

const PostDetailsPage = () => {
  const router = useRouter();
  const { slug } = router.query;

  return (
    <div>
      <h1>Post Details</h1>
    </div>
  );
};

export default PostDetailsPage;
