import React, { useEffect, useState } from 'react';
import { Col, Input, Row, Space, Table } from 'antd';
import Detail from '../../components/product/detail';
import axios from 'axios';

const { Column } = Table;
const { Search } = Input;

const Product = () => {
  const [productData, setProductData] = useState([]);
  const [isProductDataLoading, setIsProductLoading] = useState();
  const [isModalDetailVisible, setIsModalDetailVisible] = useState(false);
  const [modalDetailType, setModalDetailType] = useState();
  const [selectedProductData, setSelectedProductData] = useState();

  const productUrl = 'https://tangy-worlds-drive-103-95-41-46.loca.lt/products';

  const getProduct = (product_name = '') => {
    setIsProductLoading(true);
    axios
      .get(productUrl, {
        params: {
          page: 1,
          limit: 10,
          sort: 'product_name',
          order: 'asc',
          product_name
        },
        headers: { 'Access-Control-Allow-Origin': '*' },
        mode: 'no-cors'
      })
      .then((res) => {
        const { data } = res;
        if (data.length) {
          setProductData(data);
        } else {
          setProductData([]);
        }
      })
      .catch((err) => {
        console.error(err);
      })
      .finally(() => {
        setIsProductLoading(false);
      });
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

  const onSearch = (value) => {
    getProduct(value);
  };

  return (
    <>
      <Detail
        visible={isModalDetailVisible}
        handleCancel={handleCloseModalDetail}
        data={selectedProductData}
        type={modalDetailType}
      />
      <Row>
        <Col>
          <Search
            placeholder="input search text"
            allowClear
            onSearch={onSearch}
            style={{
              width: 200,
              marginBottom: 8
            }}
          />
        </Col>
      </Row>
      <Table dataSource={productData} loading={isProductDataLoading}>
        <Column title="Product Name" dataIndex="product_name" key="product_name" />
        <Column title="Memory" dataIndex="memory" key="memory" />
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
