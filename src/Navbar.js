// to have the react router handle links, first import the Link package
// then replace the anchor tags with Link components with the to property
import { Link } from 'react-router-dom';

// remember: a component is just a function that returns a JSX template
// sfc creates a stateless functional component
const Navbar = () => {
  return (
    <nav className='navbar'>
      <h1>The Dojo Blog</h1>
      <div className='links'>
        <Link to='/'>Home</Link>
        <Link to='/create'>New Blog</Link>
      </div>
    </nav>
  );
};

export default Navbar;
