import { Component } from "react";
import LibriFantasy from "../../public/data/fantasy.json";
import LibriHistory from "../../public/data/history.json";
import LibriHorror from "../../public/data/horror.json";
import LibriRomance from "../../public/data/romance.json";
import LibriScifi from "../../public/data/scifi.json";
import { Badge, Col, Container, Row, Card, Button } from "react-bootstrap";
import SingleBook from "./SingleBook";

class AllTheBooks extends Component {
  state = {
    selectGenre: LibriFantasy,
  };

  render() {
    return (
      <Container>
        <div className="mt-3 mb-3 text-center">
          <Button className="me-2" onClick={() => this.setState({ selectGenre: LibriFantasy })}>
            Fantasy
          </Button>
          <Button className="me-2" onClick={() => this.setState({ selectGenre: LibriHistory })}>
            History
          </Button>
          <Button className="me-2" onClick={() => this.setState({ selectGenre: LibriHorror })}>
            Horror
          </Button>
          <Button className="me-2" onClick={() => this.setState({ selectGenre: LibriRomance })}>
            Romance
          </Button>
          <Button className="me-2" onClick={() => this.setState({ selectGenre: LibriScifi })}>
            Scifi
          </Button>
        </div>
        <Row xs={2} md={4} xl={6} className="justify-content-center mt-3 g-3">
          {this.state.selectGenre.map((libriF) => (
            <Col key={libriF.asin}>
              <SingleBook bookObj={libriF} />
            </Col>
          ))}
        </Row>
      </Container>
    );
  }
}

export default AllTheBooks;
