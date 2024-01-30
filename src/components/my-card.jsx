import Card from 'react-bootstrap/Card';
import "./my-card.css"

function MyCard (props) {
let book=props.book
    return (
<Card className='flex-fill'>
    <Card.Img className='img-fit' src={book.img} height={300}/>
    <Card.Body className='d-flex flex-column'>
        <Card.Title className='flex-grow-1'>{book.title}</Card.Title>
        <Card.Text>{book.price}</Card.Text>
        <Card.Text>{book.category}</Card.Text>
    </Card.Body>

    
</Card>
    )
}

export default MyCard