import React, { useEffect } from 'react';
import { Form, Input, Modal, Button, Space } from 'antd';

function index({ visible, data, handleCancel, type }) {
  const [form] = Form.useForm();

  const setInitialValues = (values) => {
    console.log(values);
    form.setFieldsValue(values);
  };

  useEffect(() => {
    if (visible && data) {
      setInitialValues(data);
    }
  }, [visible, data]);

  const handleUpdate = (values) => {
    console.log('form values', values);
  };

  return (
    <Modal
      title="Detail Product"
      visible={visible}
      closable
      footer={
        <Space>
          <Button onClick={handleCancel}>Cancel</Button>
          {type === 'update' && (
            <Button onClick={() => form.submit()} type="primary">
              Update
            </Button>
          )}
        </Space>
      }>
      <Form
        name="basic"
        form={form}
        onFinish={handleUpdate}
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
          <Input disabled={type === 'view'} />
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
          <Input disabled={type === 'view'} />
        </Form.Item>
      </Form>
    </Modal>
  );
}

export default index;
