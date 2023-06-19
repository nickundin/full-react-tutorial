const Home = () => {
  const handleClick = (e) => {
    console.log('hello, ninjas', e);
  };

  const handleClickAgain = (name, e) => {
    console.log('hello ' + name, e.target);
  };

  // NOTE THE USE OF AN ANONYMOUS FUNCTION BELOW IN ORDER TO REFERENCE THE HANDLECLICKAGAIN FUNCTION
  // because handleClickAgain is wrapped in an anonymous function, which isn't firing to begin with
  // when the user clicks the buttoan, it fires the function and then invokes handleClickAgain
  // finally, note how the event object is passed into the custom handleClickAgain function as a second argument
  return (
    <div className='home'>
      <h2>Homepage</h2>
      <button onClick={handleClick}>Click me</button>
      <button onClick={(e) => handleClickAgain('mario', e)}>
        Click me again
      </button>
    </div>
  );
};

export default Home;
