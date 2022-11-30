import React, { useContext } from 'react';
import { Redirect, Route } from 'react-router-dom';
import 'antd/dist/antd.css';
import './styles/index.css';
import Login from './pages/Login';
import Product from './pages/Product';
import { GlobalContext } from './context/GlobalContext';

export default function App() {
  const { userCookies } = useContext(GlobalContext);
  return (
    <>
      <Route path="/login">
        <Login />
      </Route>
      <Route path="/product">
        <Product />
      </Route>
      <Route path="/">
        <Redirect to={userCookies ? '/product' : '/login'} />
      </Route>
    </>
  );
}
