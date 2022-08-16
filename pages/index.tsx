import type { NextPage } from "next";
import { Container } from "react-bootstrap";
import { Navbar } from "../src/components/Navbar";
import { ShoppingCartProvider } from "../src/context/ShoppingCartContext";
import { Col, Row } from "react-bootstrap";
import { StoreItem } from "../src/components/StoreItem";
import { createClient } from "contentful";
import { Footer } from "../src/components/Footer";

export async function getStaticProps() {
  const client = createClient({
    //@ts-ignore
    space: process.env.CONTENTFUL_SPACE_ID,
    //@ts-ignore
    accessToken: process.env.CONTENTFUL_ACCESS_KEY,
  });

  const res = await client.getEntries({
    content_type: "products",
    order: "fields.id",
  });

  return {
    props: {
      products: res.items,
      revalidate: 60 * 60,
    },
  };
}

const Home: NextPage = ({ products }: any) => {
  const data2 = [...products];

  return (
    <>
      <ShoppingCartProvider data2={data2}>
        <Navbar />
        <Container className="mb-4">
          <Row md={2} xs={1} lg={3} className="g-3">
            {products.map((item: any) => (
              <Col key={item.sys.id}>
                <StoreItem {...item} />
              </Col>
            ))}
          </Row>
        </Container>
      </ShoppingCartProvider>
    </>
  );
};

export default Home;
