import React, { useEffect } from 'react'
import "./App.css";
import Header from './components/layouts/Header';
import Home from './components/layouts/Home';
import Footer from './components/layouts/Footer';
import Menu from './components/layouts/Menu';
import Cart from './components/cart/Cart';
import Login from './components/users/Login';
import Register from './components/users/Register';
import Profile from './components/users/Profile';
import UpdateProfile from './components/users/UpdateProfile';
import ForgotPassword from './components/users/ForgotPassword';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import store from './store';
import { loadUser } from './actions/userActions';

export default function App() {
  //Dispatched exactly once, when the component is first rendered, and check if the user is authenticated or not
  console.log(store)
  useEffect(() => {
    store.dispatch(loadUser());
  },[]);


  return (
    <BrowserRouter>
      <div className='app'>
        <Header />
        <div className="container container-fluid">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/eats/stores/:id/menus" element={<Menu />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/users/login" element={<Login />} />
            <Route path="/users/signup" element={<Register />} />
            <Route path="/users/me" element={<Profile />} />
            <Route path="/users/me/update" element={<UpdateProfile />} />
            <Route path="/users/me/forgotpassword" element={<ForgotPassword />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  )
}
