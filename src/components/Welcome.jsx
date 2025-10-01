import { useState } from "react";
import Alert from "react-bootstrap/Alert";
import Button from "react-bootstrap/Button";

function Welcome() {
  const [show, setShow] = useState(true);
  // mettere container
  return (
    <>
      <div className="container">
        <Alert show={show} variant="success">
          <Alert.Heading>Allertati</Alert.Heading>
          <p>Benvenuti sulla mia Pagina non proprio made in China non proprio Made in Italy</p>
          <hr />
          <div className="d-flex justify-content-end">
            <Button onClick={() => setShow(false)} variant="outline-success">
              Chiudimi
            </Button>
          </div>
        </Alert>
      </div>
    </>
  );
}

export default Welcome;
