/* eslint-disable react/prop-types */
import React, { createContext } from 'react';
import Cookies from 'js-cookie';

export const GlobalContext = createContext();
export const GlobalContextProvider = ({ children }) => {
  const userCookies = Cookies.get('user');
  const context = {
    userCookies: userCookies ? JSON.parse(userCookies) : {}
  };
  return <GlobalContext.Provider value={context}>{children}</GlobalContext.Provider>;
};
