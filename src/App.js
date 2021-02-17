import 'App.css';
import {
  BrowserRouter as Router
} from "react-router-dom";
import Navbar from "components/navbar/Navbar";
import Routes from "components/Routes";
import { routes } from "constants/routes";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes routes={routes} />
      </div>
    </Router>
  );
}

export default App;
