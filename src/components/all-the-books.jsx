import fantasyJson from "../data/fantasy.json"
import { Component } from "react"
import MyCard from "./my-card"
import { Col, Container, Row } from "react-bootstrap"

class AllTheBooks extends Component{
    render(){
        return(
            <Container>
                <Row>

           { fantasyJson.map((book,i)=>{
            return (
            <Col xs={12} md={4} lg={3} key={i}  className="text-center d-flex p-2 ">
            <MyCard key={book.asin} book={book}/>
            </Col>)
           })}
                </Row>
            </Container>
        )
    }
}

export default AllTheBooks