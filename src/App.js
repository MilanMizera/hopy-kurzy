import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { AuthContextProvider } from '../src/data/AuthContext';
import ProtectedRoute from '../src/components/ProtectedRoute';
import ShowHeader from './data/showHeader';
//**Zprovoznění klasického bootstrapu css */
import 'bootstrap/dist/css/bootstrap.min.css';
/**tlačítko na scroll to top */
import ScrollToTop from "react-scroll-to-top";
// Public pages
import Signin from './pages/Auth/login/Login';
import Signup from './pages/Auth/register/Register';
import Home from "../src/pages/home/Home"
import Header from "./components/Header";
import Footer from "./components/Footer";
//Private pages
import PrivateHeader from "../src/components/private/privateHeader/PrivateHeader"
import Account from "./pages/privatePages/Account"
import CoursesCategories from './pages/privatePages/CoursesCategories/CoursesCategories';
import MyCourses from './pages/privatePages/myCourses/MyCourses';


function App() {
  return (
    <div>

      <ShowHeader><Header></Header></ShowHeader>
      <AuthContextProvider>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/registrace' element={<Signup />} />
          <Route path='/prihlaseni' element={<Signin />} />
          <Route
            path='/account'
            element={
              <ProtectedRoute>
                <PrivateHeader />
                <Account />
              </ProtectedRoute>
            }
          />
          <Route
            path='/seznamkurzu'
            element={
              <ProtectedRoute>
                <PrivateHeader />
                <CoursesCategories />
              </ProtectedRoute>
            }
          />
          <Route
            path='/mojekurzy'
            element={
              <ProtectedRoute>
                <PrivateHeader />
                <MyCourses/>
              </ProtectedRoute>
            }
          />
        </Routes>
      </AuthContextProvider>
      <ScrollToTop></ScrollToTop>
      <Footer></Footer>
    </div>
  );
}

export default App;
