import { Link } from 'react-router-dom';
// note that the blogs data is defined in Home.js, so it must be passed in somehow
// this can be done either by copying and pasting the data into BlogList, or passing it in via props
// using props is BETTER because the blogs data makes more sense in the Home component
// ALL PROPERTIES ARE INCLUDED ON THE PROPS OBJECT, WHICH EVERY COMPONENT HAS

// NOTE THE USE OF OBJECT DESTRUCTURING TO GRAB PROPERTIES FROM THE PROPS OBJECT
const BlogList = ({ blogs }) => {
  return (
    <div className='blog-list'>
      {blogs.map((blog) => (
        // ALWAYS add a unique key attribute to each item that you output!
        // note the use of the MAP method, rather than a for-of loop, to output the blogs stored in state
        // also note the use of template literal + ${} to provide the route parameter to the Link
        <div className='blog-preview' key={blog.id}>
          <Link to={`/blogs/${blog.id}`}>
            <h2>{blog.title}</h2>
            <p>Written by {blog.author}</p>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default BlogList;
