import Navbar from './Navbar';
import Home from './Home';

function App() {
  return (
    <div className='App'>
      <Navbar />
      <div className='content'>
        <Home />
      </div>
    </div>
  );
}

// component function gets exported, to be used in other files
export default App;
