import './App.css';
import Countdown from './components/Countdown';
import DigitalClock from './components/DigitalClock';
import Stopwatch from './components/Stopwatch';
import NotFound from "./components/NotFound"
import { Route, Link, Switch, BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <Router>
    <div className="App">
       <header>
      <Link to="/clock">
        <button>Clock</button>
      </Link>
      <Link to="/countdown">
        <button>Countdown</button>
      </Link>
      <Link to="/crono">
        <button>Crono</button>
      </Link>
    </header>
      <main>
        <Switch>
          <Route path="/clock" component={DigitalClock} />
          <Route path="/countdown" component={Countdown} />
          <Route path="/crono" component={Stopwatch} />
          <Route component={NotFound} />
        </Switch>
      </main>
      </div>
    </Router>
  );
}

export default App;
