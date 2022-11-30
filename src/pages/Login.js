import React, { useState } from 'react';
import { Button, Form, Input } from 'antd';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import Cookies from 'js-cookie';

const Login = () => {
  const [isLoading, setIsLoading] = useState(false);

  const history = useHistory();

  const onFinish = (values) => {
    setIsLoading(true);
    const { email } = values;
    const loginUrl = 'https://famous-cycles-grin-103-95-41-46.loca.lt/users';
    axios
      .get(loginUrl, {
        params: {
          email
        },
        headers: {
          'Bypass-Tunnel-Reminder': true
        }
      })
      .then((res) => {
        const { data } = res;
        Cookies.set('user', JSON.stringify(data[0]));
        history.push('/product');
      })
      .catch((e) => console.error(e))
      .finally(() => setIsLoading(false));
  };

  return (
    <div className="container">
      <Form
        name="basic"
        labelCol={{
          span: 8
        }}
        wrapperCol={{
          span: 16
        }}
        initialValues={{
          remember: true
        }}
        onFinish={onFinish}
        autoComplete="off">
        <Form.Item
          label="Email"
          name="email"
          rules={[
            {
              required: true,
              message: 'Please input your email!'
            }
          ]}>
          <Input />
        </Form.Item>
        <Form.Item
          wrapperCol={{
            offset: 8,
            span: 16
          }}>
          <Button type="primary" htmlType="submit" loading={isLoading}>
            Login
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};
export default Login;
