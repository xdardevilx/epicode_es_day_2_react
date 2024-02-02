import { Component } from "react";
import { Button, FloatingLabel, Form } from "react-bootstrap";

class AddComment extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "",
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    console.log("onSubmit", this.state.value);
    this.saveComment();
  }

  handleChange(e) {
    this.setState({
      value: e.target.value,
    });
  }
  saveComment = () => {
    console.log("boh");
  };

  render() {
    return (
      <Form onSubmit={this.handleSubmit}>
        <FloatingLabel
          controlId="floatingTextarea"
          label="Comments"
          className="mb-3">
          <Form.Control
            type="submit"
            as="textarea"
            placeholder="Leave a comment here"
            onChange={this.handleChange}
          />
        </FloatingLabel>
        <Button type="submit" variant="primary">
          invia
        </Button>{" "}
      </Form>
    );
  }
}

export default AddComment;
