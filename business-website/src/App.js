import "./App.css";
import Navbar from "./components/navbar/Navbar";
import Home from "./components/home/Home";
import AboutUs from "./components/aboutus/AboutUs";
import Services from "./components/services/Services";
import Blog from "./components/Blog/Blog";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Home></Home>
      <AboutUs></AboutUs>
      <Services></Services>
      <Blog></Blog>
      <Contact></Contact>
      <Footer></Footer>
    </div>
  );
}

export default App;
