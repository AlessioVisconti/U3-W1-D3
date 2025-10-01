import { Row, Col } from "react-bootstrap";
import SingleBook from "./SingleBook";

const BookList = ({ bookArray }) => {
  return (
    <Row xs={2} md={4} xl={6} className="g-3 mt-3 justify-content-center">
      {bookArray.map((book) => (
        <Col key={book.asin}>
          <SingleBook bookObj={book} />
        </Col>
      ))}
    </Row>
  );
};

export default BookList;
