import BlogList from './BlogList';
import useFetch from './useFetch';

const Home = () => {
  // with the colon, DATA IS RENAMED TO BLOGS
  const {
    data: blogs,
    isPending,
    error,
  } = useFetch('http://localhost:8000/blogs');

  return (
    <div className='home'>
      {/* blogs is initially null, so on first loading, null is passed as a prop */}
      {/* thus, you don't want to output Bloglist until there is a value for blogs */}
      {/* by using a logical and, you can check to see if blogs exists first */}
      {/* likewise, you can use it to show a loading message, at least until it is no longer loading */}
      {/* finally, you can use the error state to show an error message */}
      {error && <div>{error}</div>}
      {isPending && <div>Loading...</div>}
      {blogs && <BlogList blogs={blogs} />}
    </div>
  );
};

export default Home;
