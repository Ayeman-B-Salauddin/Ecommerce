import type { NextPage } from "next";
import Head from "next/head";
import { Container } from "react-bootstrap";
import { Navbar } from "../src/components/Navbar";

const Home: NextPage = () => {
  return (
    <>
      <Navbar />
      <Container className="mb-4">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quidem
        repellat magni itaque, odit reiciendis illum amet quo beatae fugit vel
        excepturi! Nihil accusantium excepturi mollitia sapiente eum saepe
        repellendus officiis!
      </Container>
    </>
  );
};

export default Home;
