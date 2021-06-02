import React from "react";

import { Container } from "react-bootstrap";
import { BrowserRouter as Router, Route } from "react-router-dom";

import HomeScreen from "./screens/HomeScreen";
import ProductScreen from "./screens/ProductScreen";

import Header from "./components/Header";
import Footer from "./components/Footer";

const App = () => {
  return (
    <Router>
      <main>
        <Header> </Header>
        <Container>
          {/* <h1> Welcome to Proshop </h1> */}
          <Route path="/" component={HomeScreen} exact />
          <Route path="/product/:id" component={ProductScreen} />
        </Container>
        <Footer> </Footer>
      </main>
    </Router>
  );
};

export default App;
