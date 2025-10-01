import { Badge, Card } from "react-bootstrap";

const SingleBook = ({ bookObj }) => {
  return (
    <Card className="h-100 d-flex flex-column">
      <Card.Img variant="top" src={bookObj.img} />
      <Card.Body className="d-flex flex-column">
        <Card.Title>{bookObj.title}</Card.Title>
        <Card.Text className="flex-grow-1">
          <strong>Category: </strong>
          {bookObj.category}
        </Card.Text>
        <Badge className="mt-auto">{bookObj.price}€</Badge>
      </Card.Body>
    </Card>
  );
};

export default SingleBook;
