import { Component } from "react";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
import AddComment from "./add-comment";

class CommentArea extends Component {
  render() {
    return (
      <AddComment />
      // <>
      // <FloatingLabel
      //   controlId="floatingTextarea"
      //   label="Comments"
      //   className="mb-3"
      // >
      //   <Form.Control as="textarea" placeholder="Leave a comment here" />
      // </FloatingLabel>
      // </>
    );
  }
}

export default CommentArea;
