import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./Pages/Home/Home";
import signup from "./components/Login/LoginSignup"
import signin from "./components/Login/SignIn";
import Dasboard from "./Dashboard/App";
import AddAdmin from "./Dashboard/AddAdmin";
import FIR from "./Dashboard/FIR";
import userdashboard from "./user-dashboard/App";
import useradmindashboard from "./useradmin-dashboard/App";
import {Toaster} from "react-hot-toast";

function App() {
  return (
    <div className="App">
      <Toaster></Toaster>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/signup" component={signup} />
          <Route exact path="/signin" component={signin} />
          <Route exact path="/dashboard" component={Dasboard} />
          <Route exact path='/AddAdmin' component={AddAdmin} />
          <Route exact path='/fir' component={FIR} />
          <Route exact path='/userdashboard' component={userdashboard} />
          <Route exact path='/useradmindashboard' component={useradmindashboard} />

        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
