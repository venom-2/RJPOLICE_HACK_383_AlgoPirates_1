import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./Pages/Home/Home";
import login from "./components/Login/LoginSignup"
import Header from "./components/Header/Header";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Header/>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/login" component={login} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
