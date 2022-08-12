import type { NextPage } from "next";
import { Container } from "react-bootstrap";
import { Navbar } from "../src/components/Navbar";
import { ShoppingCartProvider } from "../src/context/ShoppingCartContext";
import { Col, Row } from "react-bootstrap";
import { StoreItem } from "../src/components/StoreItem";
import useFetch from "../src/hooks/useFetch";

const Home: NextPage = () => {
  const { loading, error, data } = useFetch("http://localhost:1337/api/items");

  // Loading message
  if (loading)
    return (
      <div className="d-flex justify-content-center mt-5">
        <div className="spinner-grow text-warning" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    );

  // Error
  if (error)
    return (
      <div d-flex justify-content-center mt-5>
        <h1 className="display-1">Error</h1>
        <h1 className="display-6">Something went wrong!</h1>
      </div>
    );

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
