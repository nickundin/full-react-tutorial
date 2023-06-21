import Navbar from './Navbar';
import Home from './Home';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Create from './Create';

// to grant access to the router for all components nested inside the App (root) component, surround App with Router
// the Switch component ensures only one route shows at any one time (note how Navbar always shows, despite the route)
function App() {
  return (
    <Router>
      <div className='App'>
        <Navbar />
        <div className='content'>
          <Switch>
            <Route exact path='/'>
              <Home />
            </Route>
            <Route path='/create'>
              <Create />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

// component function gets exported, to be used in other files
export default App;
