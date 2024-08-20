import logo from "./logo.svg";
import "./App.css";
import HomePage from "./pages/homePage";
import Navbar from "./component/navBar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <HomePage />
    </div>
  );
}

export default App;
