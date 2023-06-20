import { useState, useEffect } from 'react';
import BlogList from './BlogList';

const Home = () => {
  const [blogs, setBlogs] = useState(null);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);

  // the useEffect hook runs every time the DOM re-renders
  // this hook has access to the state (in this case, blogs)
  // DO NOT update state inside useEffect, as that causes an infinite loop
  // to control when useEffect runs, pass in a "dependency array" containing state values as a second argument
  // fetch returns a promise, so you can attach a "then" method
  useEffect(() => {
    fetch('http://localhost:8000/blogs')
      .then((res) => {
        if (!res.ok) {
          // use res.ok to check if the server response is good
          // note how throwing the final catch block catches the error thrown here
          throw Error('could not fetch the data for that resource');
        }
        return res.json(); // uses the fetch API to parse the json into a JS object
        // note that in db.json, the first "blogs" just indicates the name of the path
        // everything AFTER that is the actual JS object!
      })
      .then((data) => {
        // again, json() returns a promise, so tack on a .then
        console.log(data);
        setBlogs(data);
        setIsPending(false);
        setError(null); // if you fetch the data successfully, error should then become null
      })
      .catch((err) => {
        setIsPending(false); // in order to avoid showing 'loading' on the error screen
        setError(err.message);
      });
  }, []); // empty = only on initial render, not whenever data changes

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
