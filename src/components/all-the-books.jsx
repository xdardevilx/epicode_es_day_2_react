import { Component } from "react";

import fantasy from "../data/fantasy.json";
import history from "../data/history.json";
import horror from "../data/horror.json";
import romance from "../data/romance.json";
import scifi from "../data/scifi.json";

import { Col, Container, Row } from "react-bootstrap";
import { NavDropdown } from "react-bootstrap";
import MyCard from "./my-card";


class AllTheBooks extends Component {

  state = {
    books: fantasy,
  };

  render() {
    return (
      <Container>
        {/* DROPDOWNS */}
        <NavDropdown title={this.state.books[0].category.toUpperCase()} id="basic-nav-dropdown">
          <NavDropdown.Item
            onClick={() =>
              this.setState({
                books: fantasy,
              })
            }>
            Fantasy
          </NavDropdown.Item>
          <NavDropdown.Item
            onClick={() =>
              this.setState({
                books: horror,
              })
            }>
            Horror
          </NavDropdown.Item>
          <NavDropdown.Item
            onClick={() =>
              this.setState({
                books: scifi,
              })
            }>
            SciFi
          </NavDropdown.Item>
          <NavDropdown.Item
            onClick={() =>
              this.setState({
                books: history,
              })
            }>
            History
          </NavDropdown.Item>
          <NavDropdown.Item
            onClick={() =>
              this.setState({
                books: romance,
              })
            }>
            Romance
          </NavDropdown.Item>
        </NavDropdown>

        {/* LIST CARDS */}
        <Row>
          {this.state.books.map((book, i) => {
            return (
              <Col
                xs={12}
                md={4}
                lg={3}
                key={i}
                className="text-center d-flex p-2 ">
                <MyCard key={book.asin} book={book} />
              </Col>
            );
          })}
        </Row>
      </Container>
    );
  }
}

export default AllTheBooks;
