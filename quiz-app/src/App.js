import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Signin from "./pages/Signin"
import Login from './pages/Login'
import QuizApp from './pages/QuizApp'
import Result from "./pages/Result"
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={Login} />
          <Route exact path="/signup" component={Signin} />
          <Route exact path="/quizapp" component={QuizApp} />
          <Route exact path="/result" component={Result} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
