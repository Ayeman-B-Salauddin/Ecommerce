import type { NextPage } from "next";
import { Container } from "react-bootstrap";
import { Navbar } from "../src/components/Navbar";
import {
  ShoppingCartProvider,
  useShoppingCart,
} from "../src/context/ShoppingCartContext";
import { Col, Row } from "react-bootstrap";
import { StoreItem } from "../src/components/StoreItem";
import storeItems from "../src/data/items.json";

const Home: NextPage = () => {
  return (
    <ShoppingCartProvider>
      <Navbar />
      <Container className="mb-4">
        <Row md={2} xs={1} lg={3} className="g-3">
          {storeItems.map((item) => (
            <Col key={item.id}>
              <StoreItem {...item} />
            </Col>
          ))}
        </Row>
      </Container>
    </ShoppingCartProvider>
  );
};

export default Home;
