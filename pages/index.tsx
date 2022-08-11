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
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";

export const client = new ApolloClient({
  uri: "https://api-ca-central-1.hygraph.com/v2/cl6osrlju16g201uj8pfs6mvc/master",
  cache: new InMemoryCache(),
});

const Home: NextPage = () => {
  console.log(typeof storeItems);
  const { data } = useShoppingCart();
  console.log("dd", data);
  return (
    <ApolloProvider client={client}>
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
    </ApolloProvider>
  );
};

// export async function getStaticProps() {
//   const { data } = await client.query({
//     query: gql`
//       query GetItems {
//         items {
//           name
//           id
//           price
//           img
//         }
//       }
//     `,
//   });
//   console.log(data.items);

//   return {
//     props: {
//       items: data.items,
//     },
//   };
// }

export default Home;
