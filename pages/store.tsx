import React from "react";
import { Col, Row } from "react-bootstrap";
import { StoreItem } from "../src/components/StoreItem";
import storeItems from "../src/data/items.json";

const store = () => {
  return (
    <>
      <h1>Store</h1>
      <Row md={2} xs={1} lg={3} className="g-3">
        {storeItems.map((item) => (
          <Col key={item.id}>
            <StoreItem {...item} />
          </Col>
        ))}
      </Row>
    </>
  );
};

export default store;
