import type { NextPage } from "next";
import { Container } from "react-bootstrap";
import { Navbar } from "../src/components/Navbar";
import { ShoppingCartProvider } from "../src/context/ShoppingCartContext";
import { Col, Row } from "react-bootstrap";
import { StoreItem } from "../src/components/StoreItem";
import useFetch from "../src/hooks/useFetch";

const Home: NextPage = () => {
  const { loading, error, data } = useFetch("http://localhost:1337/api/items");
  if (loading) return <p>"loading....."</p>;
  if (error) return <p>"error"</p>;

  return (
    <ShoppingCartProvider>
      <Navbar />
      <Container className="mb-4">
        <Row md={2} xs={1} lg={3} className="g-3">
          {data.data.map((item: any) => (
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
