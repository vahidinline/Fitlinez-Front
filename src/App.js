import React, { createContext } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  Navigate,
  Outlet,
} from 'react-router-dom';

import axios from 'axios';
import Header from './components/header';
import Login from './components/userFlow/logIn';
import Signup from './components/userFlow/signUp';
import Home from './components/Home';
import './App.css';
import AdminHome from './components/admin';
import PriceList from './components/price';
import CreateHome from './components/dashboard/homePageContent';
import Profile from './components/userFlow/profile';
import About from './components/about';
import Footer from './components/footer';
import BMI from './components/tools/BMI';
import AuthContextProvider, {
  useAuth,
} from './components/userFlow/authContent';
import { auth } from '../src/db/firebase';
import ForgotPassword from './components/userFlow/forgotPassword';
import UpdateProfile from './components/userFlow/updateProfile';
import Calories from './components/tools/calories';
import Bfp from './components/tools/bfp';
import Macros from './components/tools/macros';
import Result from './components/tools/result';
const Usercontex = createContext(null);

export default function App() {
  // console.log(auth.currentUser);

  function PrivateOutlet() {
    return auth.currentUser ? <Outlet /> : <Navigate to="/login" />;
  }
  return (
    <AuthContextProvider>
      <Router>
        <Usercontex.Provider>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/bmi" element={<BMI />} />
            <Route path="/calories" element={<Calories />} />
            <Route path="/bfp" element={<Bfp />} />
            <Route path="/macros" element={<Macros />} />
            <Route path="/result" element={<Result />} />
            <Route path="/admin" element={<AdminHome />} />
            <Route path="/" element={<PrivateOutlet />}>
              <Route path="/create" element={<CreateHome />} />
            </Route>
            <Route path="/signup" element={<Signup />} />
            <Route path="/admin" element={<AdminHome />} />
            <Route path="/price" element={<PriceList />} />
            <Route path="/about" element={<About />} />
            <Route path="/forgotpassword" element={<ForgotPassword />} />
            <Route path="/updateProfile" element={<UpdateProfile />} />
            <Route path="*" element={<p>There's nothing here: 404!</p>} />
          </Routes>
          <Footer />
        </Usercontex.Provider>
      </Router>
    </AuthContextProvider>
  );
}
