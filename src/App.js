import React from 'react';
import { Switch, Route } from 'react-router-dom';


//SECTION Internal Components
import Home from './components/Home/Home';
// import Blog from './components/Blog/Blog';
// import './App.css';

const  App = () => {
  return (
    <>
      <Switch>
        
        <Route exact path='/' component={Home} />
        {/* <Route path='/blog' component={Blog} /> */}
      </Switch>
    </>
  );
}

export default App;