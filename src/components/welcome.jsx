import MyAlert from "./my-alert"
import fantasyJson from "../data/fantasy.json"
import { Component } from "react"
import MyCard from "./my-card"
import { Col, Container, Row } from "react-bootstrap"




class Welcome extends Component{
    render()
    {
        return(
            <div>
            <MyAlert/>
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
        </div>
        )
    }
}

export default Welcome