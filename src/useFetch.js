import { useState, useEffect } from 'react';

// custom hooks NEED to start with use!
const useFetch = (url) => {
  // note that blogs has been renamed data in order to make the custom hook more reusable
  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);

  // the useEffect hook runs every time the DOM re-renders
  // this hook has access to the state (in this case, blogs)
  // DO NOT update state inside useEffect, as that causes an infinite loop
  // to control when useEffect runs, pass in a "dependency array" containing state values as a second argument
  // fetch returns a promise, so you can attach a "then" method
  useEffect(() => {
    // once we associate this controller with a fetch request, we can use the controller to STOP the request
    const abortCont = new AbortController();

    fetch(url, { signal: abortCont.signal }) // associates abortCont with the fetch function
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
        setData(data);
        setIsPending(false);
        setError(null); // if you fetch the data successfully, error should then become null
      })
      .catch((err) => {
        // if the error is an abort error, do NOT update the state
        if (err.name === 'AbortError') {
          console.log('fetch aborted');
        } else {
          setIsPending(false); // in order to avoid showing 'loading' on the error screen
          setError(err.message);
        }
      });
    return () => {
      abortCont.abort(); // aborts the fetch function
    };
  }, [url]); // url is a dep because whenever the url changes, it will rerun this function to get the data for that endpoint!

  // with custom hooks, you can return any value you want!
  // an object is better than an array because the order doesn't really matter with destructuring
  return {
    data,
    isPending,
    error,
  };
};

export default useFetch;
