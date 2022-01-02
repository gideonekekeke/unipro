import Home from "./Components/Home/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HeaderComponent from "./Components/Header/HeaderComponent";
import Footer from "./Components/Footer/Footer"


function App() {
  return (
    <>
      <Router>
        <HeaderComponent />
          <Routes>
            <Route path='/' element={<Home />} />
          </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
