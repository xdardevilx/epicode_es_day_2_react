import Card from "react-bootstrap/Card";
import "./my-card.css";
import { currencyEuro } from "../helpers/currency";
import { CiShoppingCart } from "react-icons/ci";

function MyCard(props) {
  let book = props.book;
  return (
    <Card className="flex-fill">
      <Card.Img className="img-fit" src={book.img} height={300} />
      <Card.Body className="d-flex flex-column">
        <Card.Title className="flex-grow-1">{book.title}</Card.Title>
        <Card.Text>{book.category.toUpperCase()}</Card.Text>
        <Card.Text>
          <strong>{currencyEuro(book.price.toString())}</strong>
          <CiShoppingCart size={30} className="ms-5"/>
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default MyCard;
