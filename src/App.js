import './App.css';
import About from './About';
import Shop from './Shop';
import Nav from './Nav';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
      <Router>
        <Nav />
        <Switch>
          <Route path="/" component={About} exact />
          <Route path="/shop" component={Shop} exact />
        </Switch>
      </Router>
  );
}

export default App;
