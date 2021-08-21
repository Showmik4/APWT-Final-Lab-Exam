import React from 'react';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import student from './Pages/student';
import OwnerPanel from './Pages/OwnerPanel';
import AddStudent from './Pages/AddStudent';
import EditStudent from './Pages/EditStudent.js';

function App() {
  return (
    
     
    <Router>
    <Switch>
      <Route exact path="/" component={OwnerPanel}/>
      <Route  path="/students" component={student}/>
      <Route  path="/add-student" component={AddStudent}/>
      <Route  path="/edit-student/:id" component={EditStudent}/>
      <Route  path="/edit-student/:id" component={EditStudent}/>
    
      <Route  path="/update-std/:id" component={EditStudent}/>
     
    </Switch>
  </Router>
 
  );
}

export default App;
