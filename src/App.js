import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { AuthContextProvider } from '../src/data/AuthContext';
import ProtectedRoute from '../src/components/ProtectedRoute';
/**tlačítko na scroll to top */
import ScrollToTop from "react-scroll-to-top";
//Pages
import Signin from './pages/Auth/login/Login';
import Signup from './pages/Auth/register/Register';
import Account from "./pages/privatePages/Account"
import Home from "../src/pages/home/Home"
import Header from "./components/Header";
import Footer from "./components/Footer";


function App() {
  return (
    <div>
      <Header></Header>
      <AuthContextProvider>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/registrace' element={<Signup />} />
          <Route path='/prihlaseni' element={<Signin />} />
          <Route
            path='/account'
            element={
              <ProtectedRoute>
                <Account />
              </ProtectedRoute>
            }
          />
        </Routes>
      </AuthContextProvider>
      <Footer></Footer>
    </div>
  );
}

export default App;
