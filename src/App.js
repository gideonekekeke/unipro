import Home from "./Components/Home/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HeaderComponent from "./Components/Header/HeaderComponent";
import Footer from "./Components/Footer/Footer"
import About from "./Components/About/About";


function App() {
  return (
    <>
      <Router>
        <HeaderComponent />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
          </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
