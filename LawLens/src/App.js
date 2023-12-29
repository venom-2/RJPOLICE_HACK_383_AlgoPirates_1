import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./Pages/Home/Home";
import signup from "./components/Login/LoginSignup"
import Header from "./components/Header/Header";
import signin from "./components/Login/SignIn";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Header/>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/signup" component={signup} />
          <Route exact path="/signin" component={signin} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
