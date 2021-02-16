import 'App.css';
import {
  BrowserRouter as Router
} from "react-router-dom";
import Navbar from "components/navbar/Navbar";
import Routes from "components/Routes";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes />
      </div>
    </Router>
  );
}

export default App;
