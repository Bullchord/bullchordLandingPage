import "./App.css";
import "./fonts/Audrey-Medium.ttf";
import Layouts from "./Layouts/Layouts";
import { BrowserRouter as Router } from "react-router-dom";
function App() {
  return (
    <Router>
      <Layouts />
    </Router>
  );
}

export default App;
