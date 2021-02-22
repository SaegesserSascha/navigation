import 'App.css';
import {
  BrowserRouter as Router
} from "react-router-dom";
import Navbar from "components/navbar/Navbar";
import Routes from "components/Routes";
import { routes } from "constants/routes";
import ScrollToTop from "utils/ScrollToTop";

function App() {
  return (
    <Router>
        <div className="App">
          <Navbar />
          <Routes routes={routes} />
        </div>
        <ScrollToTop/>
    </Router>
  );
}

export default App;
