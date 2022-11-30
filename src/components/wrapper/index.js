import React, { useContext, useEffect, useState } from 'react';
import { Layout, Row, Col } from 'antd';
import { useHistory } from 'react-router-dom';
import Cookies from 'js-cookie';
import axios from 'axios';
import { GlobalContext } from '../../context/GlobalContext';

const { Header, Content } = Layout;

function index({ children }) {
  const [username, setUsername] = useState();
  const { userCookies } = useContext(GlobalContext);
  const history = useHistory();
  const getUsernameUrl = 'https://famous-cycles-grin-103-95-41-46.loca.lt/users';

  const getUserName = () => {
    const { token } = userCookies || {};
    axios.get(getUsernameUrl, { params: { token } }).then((res) => {
      const { data } = res;
      setUsername(data[0].first_name);
    });
  };

  useEffect(() => {
    if (!userCookies) {
      history.push('/login');
    }
  }, [userCookies]);

  useEffect(() => {
    if (username) {
      getUserName();
    }
  }, [username]);

  const handleLogout = () => {
    Cookies.remove('user');
    history.push('/login');
  };

  return (
    <Layout>
      {userCookies ? (
        <Header>
          <Row>
            <Col offset={19} span={2}>
              {username}
            </Col>
            <Col offset={1} span={2}>
              <div style={{ cursor: 'pointer' }} onClick={() => handleLogout()}>
                <span>Logout</span>
              </div>
            </Col>
          </Row>
        </Header>
      ) : (
        <></>
      )}
      <Content>{children}</Content>
    </Layout>
  );
}

export default index;
