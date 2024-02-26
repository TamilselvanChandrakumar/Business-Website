import "./App.css";
import Navbar from "./components/navbar/Navbar";
import Home from "./components/home/Home";
import AboutUs from "./components/aboutus/AboutUs";

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Home></Home>
      <AboutUs></AboutUs>
    </div>
  );
}

export default App;
