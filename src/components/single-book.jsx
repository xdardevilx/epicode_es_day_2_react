import Card from "react-bootstrap/Card";
import "./single-book.css";
import { currencyEuro } from "../helpers/currency";
import { CiShoppingCart } from "react-icons/ci";
import { Component } from "react";

class SingleBook extends Component {
  state = {
    book: this.props.book,
    selected: false,
    cardClass: "flex-fill",
  };

  clickSelected() {
    this.setState({
      selected: !this.state.selected,
      cardClass: !this.state.selected ? "flex-fill selected" : "flex-fill",
    });
  }

  render() {
    return (
      <Card className={this.state.cardClass}>
        <Card.Img
          onClick={() => this.clickSelected()}
          className="img-fit"
          src={this.state.book.img}
          height={300}
        />
        <Card.Body className="d-flex flex-column">
          <Card.Title className="flex-grow-1">
            {this.state.book.title}
          </Card.Title>
          <Card.Text>{this.state.book.category.toUpperCase()}</Card.Text>
          <Card.Text>
            <strong>{currencyEuro(this.state.book.price.toString())}</strong>
            <CiShoppingCart size={30} className="ms-5" />
          </Card.Text>
        </Card.Body>
      </Card>
    );
  }
}

export default SingleBook;
