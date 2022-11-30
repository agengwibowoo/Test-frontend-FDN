import React from 'react';
import { Route } from 'react-router-dom';
import 'antd/dist/antd.css';
import './styles/index.css';
import Login from './pages/Login';
import Product from './pages/Product';

export default function App() {
  return (
    <>
      <Route path="/login">
        <Login />
      </Route>
      <Route path="/product">
        <Product />
      </Route>
    </>
  );
}
