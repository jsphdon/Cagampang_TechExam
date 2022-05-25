import Home from './components/Home';
import AddRecord from './components/AddRecord';
import EditRecord from './components/EditRecord';
import ViewRecord from './components/ViewRecord';
import './index.css';
import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';


function App(){
  return(
    <div className='App'>
    <Router>
      <Switch>
        <Route exact path={["/", "/home"]}   component={Home}/>   
        <Route path="/add" component={AddRecord}/>
        <Route path="/view/:id" component={ViewRecord}/>
        <Route path="/edit/:id" component={EditRecord}/>        
      </Switch>
    </Router> 
    </div>
  );
}

export default App;
