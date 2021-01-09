import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route} from "react-router-dom";
import Saved from "./pages/saved";
import Search from "./pages/search";


function App() {
  return (
    <Router>
      <Route exact path="/" component={Search}/>
      <Route exact path="/saved" component={Saved}/>
    </Router>
  );
}

export default App;
