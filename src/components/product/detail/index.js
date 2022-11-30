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

  return (
    <Modal
      title="Detail Product"
      visible={visible}
      closable
      footer={
        <Space>
          <Button onClick={handleCancel}>Cancel</Button>
          {type === 'update' && <Button type="primary">Update</Button>}
        </Space>
      }>
      <Form
        name="basic"
        form={form}
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
          label="Status"
          name="status_product"
          rules={[
            {
              required: true,
              message: 'Please input product status!'
            }
          ]}>
          <Input disabled={type === 'view'} />
        </Form.Item>
      </Form>
    </Modal>
  );
}

export default index;
