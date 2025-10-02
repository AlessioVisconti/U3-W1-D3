import { Row, Col, Form } from "react-bootstrap";
import SingleBook from "./SingleBook";
import { Component } from "react";

class BookList extends Component {
  state = {
    search: "",
  };

  render() {
    const { bookArray } = this.props;
    const filteredBooks = bookArray.filter((book) => book.title.toLowerCase().includes(this.state.search.toLowerCase()));

    return (
      <>
        <Form.Control type="text" placeholder="Cerca" className="mt-3" value={this.state.search} onChange={(e) => this.setState({ search: e.target.value })} />

        <Row xs={2} md={4} xl={6} className="g-3 mt-3 justify-content-center">
          {filteredBooks.map((book) => (
            <Col key={book.asin}>
              <SingleBook bookObj={book} />
            </Col>
          ))}
        </Row>
      </>
    );
  }
}

export default BookList;
