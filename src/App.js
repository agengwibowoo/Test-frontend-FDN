import React from 'react';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import Wrapper from './components/wrapper';
import 'antd/dist/antd.css';
import './styles/index.css';
import { GlobalContextProvider } from './context/GlobalContext';
import Routing from './Routing';

export default function App() {
  return (
    <GlobalContextProvider>
      <Router>
        <Switch>
          <Wrapper>
            <Routing />
          </Wrapper>
        </Switch>
      </Router>
    </GlobalContextProvider>
  );
}
