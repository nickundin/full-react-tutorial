import { useState, useEffect } from 'react';
import BlogList from './BlogList';

const Home = () => {
  const [blogs, setBlogs] = useState([
    { title: 'My new website', body: 'lorem ipsum...', author: 'mario', id: 1 },
    { title: 'Welcome party!', body: 'lorem ipsum...', author: 'yoshi', id: 2 },
    {
      title: 'Web dev top tips',
      body: 'lorem ipsum...',
      author: 'mario',
      id: 3,
    },
  ]);

  const [name, setName] = useState('mario');

  // use setBlogs to update the state (makes sense, since the blogs are defined here!)
  // to use it, simply pass in the newly updated value that you want the state to take
  const handleDelete = (id) => {
    const newBlogs = blogs.filter((blog) => blog.id !== id);
    setBlogs(newBlogs);
  };

  // the useEffect hook runs every time the DOM re-renders
  // this hook has access to the state (in this case, blogs)
  // DO NOT update state inside useEffect, as that causes an infinite loop
  // to control when useEffect runs, pass in a "dependency array" containing state values as a second argument
  useEffect(() => {
    console.log('use effect ran');
    console.log(name);
  }, [name]);

  return (
    <div className='home'>
      <BlogList blogs={blogs} title='All blogs!' handleDelete={handleDelete} />
      <button onClick={() => setName('luigi')}>change name</button>
      <p>{name}</p>
    </div>
  );
};

export default Home;
