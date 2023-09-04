/**tlačítko na scroll to top */
import ScrollToTop from "react-scroll-to-top";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
//stránky
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/home/Home";
import Login from "../src/pages/Auth/login/Login"
import Register from "../src/pages/Auth/register/Register"


function App() {

  return (

    <div className="App">

    <BrowserRouter>
    <Header/>
      <Routes>
        <Route path="/" element={<Home></Home>} />
        
        <Route path="/prihlaseni" element={<Login />} />
        <Route path="/registrace" element={<Register />} />
        <Route path="*" element={<errorPage/>} />
      </Routes>
      <ScrollToTop></ScrollToTop>
      <Footer></Footer>
    </BrowserRouter>
  </div>
  );
}

export default App;
