import "./App.css";
import { Link } from "react-router-dom";
import Navigation from "./components/Navigation";

function App() {
  sessionStorage.setItem("pageType", JSON.stringify("home"));
  return (
    <div className="App">
      <Navigation />
    </div>
  );
}

export default App;
