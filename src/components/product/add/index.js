import React from 'react';
import { Form, Input, Modal, Button, Space } from 'antd';

function index({ visible, handleCancel }) {
  const [form] = Form.useForm();

  const handleAddProduct = (values) => {
    console.log('form values', values);
  };

  return (
    <Modal
      title="New Product"
      visible={visible}
      closable
      footer={
        <Space>
          <Button onClick={handleCancel}>Cancel</Button>
          <Button onClick={() => form.submit()} type="primary">
            Add
          </Button>
        </Space>
      }>
      <Form
        name="basic"
        form={form}
        onFinish={handleAddProduct}
        labelCol={{
          span: 8
        }}
        wrapperCol={{
          span: 16
        }}
        initialValues={{
          remember: true
        }}
        autoComplete="off">
        <Form.Item
          label="Product Name"
          name="product_name"
          rules={[
            {
              required: true,
              message: 'Please input product name!'
            }
          ]}>
          <Input />
        </Form.Item>
        <Form.Item
          label="Memory"
          name="memory"
          rules={[
            {
              required: true,
              message: 'Please input memory!'
            }
          ]}>
          <Input />
        </Form.Item>
      </Form>
    </Modal>
  );
}

export default index;
