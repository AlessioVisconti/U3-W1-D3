import { Component } from "react";
import { Badge, Card } from "react-bootstrap";
//come fare a selezionarne solo uno? forse andare da dove leggi i dati ma probabilmente poi si deve cambiare qualcosa qua
class SingleBook extends Component {
  state = {
    selected: false,
  };

  render() {
    const { bookObj } = this.props; // in prtica quando scriviamo bookObj è come se scrivessimo this.props(this.props ha iniziato a confondere)

    return (
      <Card
        className={"h-100 d-flex flex-column " + (this.state.selected ? "border border-danger" : "")}
        onClick={() => this.setState({ selected: !this.state.selected })}
      >
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
  }
}

export default SingleBook;
