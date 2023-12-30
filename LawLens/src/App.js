import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./Pages/Home/Home";
import signup from "./components/Login/LoginSignup"
import signin from "./components/Login/SignIn";
import Dasboard from "./Dashboard/App";
import AddAdmin from "./Dashboard/AddAdmin";
import FIR from "./Dashboard/FIR";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/signup" component={signup} />
          <Route exact path="/signin" component={signin} />
          <Route exact path="/dashboard" component={Dasboard} />
          <Route exact path='/AddAdmin' component={AddAdmin} />
          <Route exact path='/fir' component={FIR} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
