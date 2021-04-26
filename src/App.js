import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import Signup from './SignUp';
import Login from './Login'
import MovieList from './MovieList'
function App() {
  return (
    <div className="App">
      <div className='App-header'>
        <Router>
          <Switch>
            <Route exact path='/' component={Signup} />
            <Route exact path='/login' component={Login} />
            <Route path='/movie-list' component={MovieList}></Route>

          </Switch>
        </Router>
      </div>
    </div>
  );
}

export default App;
