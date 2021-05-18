import './App.css';
import {Suspense} from 'react'
import { BrowserRouter as Router , Route ,Switch} from 'react-router-dom'
import { lazy } from 'react';
const Login = lazy(()=> import( './component/login'))
function App() {
 
  return (
    <div className="App">
      <Suspense fallback={<div/>}>
      <Router>
       <Switch>
        <Route exact path="/login"component={Login}/>
        <Route exact path="*" component={() => "404 Page Not Found"}/>
       </Switch>
        </Router>
        </Suspense>
    </div>
  );
}

export default App;
