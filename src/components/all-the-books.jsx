import { Component } from "react";

import fantasy from "../data/fantasy.json";
import history from "../data/history.json";
import horror from "../data/horror.json";
import romance from "../data/romance.json";
import scifi from "../data/scifi.json";

import { Col, Container, Form, Row } from "react-bootstrap";
import { NavDropdown } from "react-bootstrap";
import SingleBook from "./single-book";

class AllTheBooks extends Component {
  state = {
    books: fantasy,
    searchText: "",
    category: "fantasy",
  };

  render() {
    return (
      <Container>
        <Row className="justify-content-center align-items-center ">
          <Col md={2} className="text-center">
            {/* DROPDOWNS */}
            <NavDropdown
              title={this.state.category.toUpperCase()}
              id="basic-nav-dropdown">
              <NavDropdown.Item
                onClick={() =>
                  this.setState({
                    books: fantasy,
                    category: "fantasy",
                  })
                }>
                Fantasy
              </NavDropdown.Item>
              <NavDropdown.Item
                onClick={() =>
                  this.setState({
                    books: horror,
                    category: "horror",
                  })
                }>
                Horror
              </NavDropdown.Item>
              <NavDropdown.Item
                onClick={() =>
                  this.setState({
                    books: scifi,
                    category: "scifi",
                  })
                }>
                SciFi
              </NavDropdown.Item>
              <NavDropdown.Item
                onClick={() =>
                  this.setState({
                    books: history,
                    category: "history",
                  })
                }>
                History
              </NavDropdown.Item>
              <NavDropdown.Item
                onClick={() =>
                  this.setState({
                    books: romance,
                    category: "romance",
                  })
                }>
                Romance
              </NavDropdown.Item>
            </NavDropdown>
          </Col>
          <Col>
            <Form className="mt-sm-3 mt-lg-0 ">
              <Form.Control
                type="text"
                placeholder="Cerca"
                value={this.state.searchText}
                onChange={(e) => {
                  this.setState({
                    searchText: e.target.value,
                  });
                }}></Form.Control>
            </Form>
          </Col>
        </Row>

        {/* LIST CARDS */}
        <Row>
          {this.state.books
            .filter((book) =>
              book.title
                .toLowerCase()
                .includes(this.state.searchText.toLowerCase())
            )

            .map((book, i) => {
              return (
                <Col
                  xs={12}
                  md={4}
                  lg={3}
                  key={i}
                  className="text-center d-flex p-2 ">
                  <SingleBook key={book.asin} book={book} />
                </Col>
              );
            })}
        </Row>
      </Container>
    );
  }
}

export default AllTheBooks;
