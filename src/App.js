import React from 'react';
import './App.css';
import Create from './components/create_component';
import Edit from './components/edit_component';
import Index from './components/index_component';
import Intro from './components/intro';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
function App() {


  return (
    <Router>
      <div className="container-fluid bg-light">
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <Link to={'/'} className="navbar-brand">MERN</Link>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item"><Link to={'/'} className="nav-link">Home</Link></li>
              <li className="nav-item"><Link to={'/create'} className="nav-link">Create</Link></li>
              <li className="nav-item"><Link to={'/index'} className="nav-link">Index</Link></li>
            </ul>
          </div>
        </nav> <br />
        <Switch>
          <Route exact path='/' component={Intro}/>
          <Route exact path='/create' component={Create} />
          <Route path='/edit/:id' component={Edit} />
          <Route path='/index' component={Index}/>
        </Switch> <br />
      </div>
    </Router>
  );
}

export default App;
