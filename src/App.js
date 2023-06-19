import './App.css';

function App() {
  const title = 'Welcome to the new blog';
  const likes = 50;
  // booleans and objects cannot be outputted with dynamic values
  // what about arrays doe
  const link = "'https://www.google.com'";

  return (
    <div className='App'>
      {/* emmet: div.content creates div with a className of content */}
      <div className='content'>
        <h1>{title}</h1>
        <p>Liked {likes} times</p>
        <p>{10}</p>
        <p>{'hello, ninjas'}</p>
        <p>{[1, 2, 3, 4, 5]}</p>
        <p>{Math.random() * 10}</p>

        <a href={link}>Google Site</a>
      </div>
    </div>
  );
}

// component function gets exported, to be used in other files
export default App;
