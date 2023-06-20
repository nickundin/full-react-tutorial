import { useState } from 'react';

const Home = () => {
  // the two parts of useState
  // the value itself, and a function that's used to change that value
  // changing the state forces React to re-render that particular component
  // note that the state value can be a string, object, array, etc.
  const [name, setName] = useState('mario');
  const [age, setAge] = useState(25);

  const handleClick = () => {
    setName('luigi');
    setAge(30);
  };

  return (
    <div className='home'>
      <h2>Homepage</h2>
      <p>
        {name} is {age} years old
      </p>
      <button onClick={handleClick}>Click me</button>
    </div>
  );
};

export default Home;
