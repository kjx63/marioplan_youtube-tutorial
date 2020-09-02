import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Dashboard from './components/dashboard/Dashboard';
import ProjectDetails from './components/projects/ProjectDetails';

function App() {
  return (
    <Router>
      <div className='app'>
        <Navbar />
        <Switch>
          <Route exact path='/' component={Dashboard}></Route>
          <Route path='/project/:id' component={ProjectDetails} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
