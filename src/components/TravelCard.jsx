import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";

export default function TravelCard({ travel }) {
  return (
    <div className="col-4">
      <Card className="h-100">
        <Card.Img variant="top" src={travel.img} />
        <Card.Body>
          <Card.Title>{travel.destination}</Card.Title>
          <Card.Text>
            <span className="d-block">
              <strong>Data di partenza: </strong>
              {travel.dateStart}
            </span>
            <span className="d-block">
              <strong>Data di ritorno: </strong>
              {travel.dateEnd}
            </span>
          </Card.Text>
          <Link to={`/travels/${travel.id}`} className="btn btn-primary">
            Dettagli del viaggio
          </Link>
        </Card.Body>
      </Card>
    </div>
  );
}
