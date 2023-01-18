import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
// import { routes } from "../routes";
import Homepage from "./Homepage";
import Newspage from "./Newspage";

function App() {
  return (
    <Router>
      <Route path="/" component={Homepage} exact />
      <Route path="/newspage/:id" component={Newspage} exact />
    </Router>
  );
}

export default App;
