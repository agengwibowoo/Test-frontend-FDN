import React, { useEffect, useState } from 'react';
import { Space, Table } from 'antd';
import Detail from '../../components/product/detail';
import axios from 'axios';

const { Column } = Table;
const data = [
  {
    key: '1',
    id: '1',
    product_name: 'Product 1',
    status_product: 'a'
  },
  {
    key: '2',
    id: '2',
    product_name: 'Product 2',
    status_product: 'b'
  }
];
const Product = () => {
  //   const [productData, setProductData] = useState();
  const [isModalDetailVisible, setIsModalDetailVisible] = useState(false);
  const [modalDetailType, setModalDetailType] = useState();
  const [selectedProductData, setSelectedProductData] = useState();

  const productUrl = 'https://tangy-worlds-drive-103-95-41-46.loca.lt/products';


const getProduct = () => {
    axios
      .get(productUrl, {
        params: {
          page: 1,
          limit: 10,
          sort: 'product_name',
          order: 'asc'
        },
        headers: { 'Access-Control-Allow-Origin': '*' },
        mode: 'no-cors'
      })
      .then((res) => console.log(res));
  };

  useEffect(() => {
    getProduct();
  }, []);

  const handleOpenDetailProduct = (record, type) => {
    setSelectedProductData(record);
    setModalDetailType(type);
    setIsModalDetailVisible(true);
  };

  const handleCloseModalDetail = () => {
    setSelectedProductData({});
    setIsModalDetailVisible(false);
  };

  return (
    <>
      <Detail
        visible={isModalDetailVisible}
        handleCancel={handleCloseModalDetail}
        data={selectedProductData}
        type={modalDetailType}
      />
      <Table dataSource={data}>
        <Column title="Product Name" dataIndex="product_name" key="product_name" />
        <Column title="Status Product" dataIndex="status_product" key="status_product" />
        <Column
          title="Action"
          key="action"
          render={(_, record) => (
            <Space size="middle">
              <div onClick={() => handleOpenDetailProduct(record, 'view')}>View</div>
              <span>|</span>
              <div onClick={() => handleOpenDetailProduct(record, 'update')}>Edit</div>
              <span>|</span>
              <div>Delete</div>
            </Space>
          )}
        />
      </Table>
    </>
  );
};
export default Product;
