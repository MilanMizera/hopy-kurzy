/**tlačítko na scroll to top */
import ScrollToTop from "react-scroll-to-top";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';

import Header from "./components/Header";
import Footer from "./components/Footer";

import errorPage from "./pages/errorPage/errorPage";
import Home from "./pages/home/Home";


function App() {

  return (

    <div className="App">

    <BrowserRouter>
    <Header/>
      <Routes>
        <Route path="/" element={<Home></Home>} />
        <Route path="*" element={<errorPage />} />
      </Routes>
      <ScrollToTop></ScrollToTop>
      <Footer></Footer>
    </BrowserRouter>
  </div>
  );
}

export default App;
