import Card from 'react-bootstrap/Card';
import "./my-card.css"

function MyCard (props) {
let book=props.book
    return (
<Card className='flex-fill'>
    <Card.Img className='img-fit' src={book.img} height={500}/>
    <Card.Body>
        <Card.Title>{book.title}</Card.Title>
        <Card.Text>{book.price}</Card.Text>
        <Card.Text>{book.category}</Card.Text>
    </Card.Body>

    
</Card>
    )
}

export default MyCard