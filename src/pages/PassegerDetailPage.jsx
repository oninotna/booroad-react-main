import { useParams } from "react-router-dom";
import { useTravel } from "../contexts/TravelContext";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";

export default function PassegerDetailPage() {
  const { id, personId } = useParams();
    const { travels, filteredData } = useTravel();

  const currentTravel = filteredData(travels, id);

    const currentPasseger = currentTravel[0].peopleList.filter(
      (people) => people.id == personId
    );

  return (
   <div className="col-4">
      <Card className="h-100">
        <Card.Body>
          <Card.Title>
            <span>Nome: </span>{currentPasseger[0].firstName}
            <span>Cognome: </span>{currentPasseger[0].lastName}
            </Card.Title>
          <Card.Text>
            <span className="d-block">
              <strong>Codice fiscale: </strong>
              {currentPasseger[0].idCode}
            </span>
            <span className="d-block">
              <strong>Email: </strong>
              {currentPasseger[0].email}
            </span>
            <span className="d-block">
              <strong>Numero telefonico: </strong>
              {currentPasseger[0].phone}
            </span>
          </Card.Text>
          <Link to={`/${currentTravel[0].id}`} className="btn btn-primary">
            Torna all'elenco
          </Link>
        </Card.Body>
      </Card>
    </div>
  );
}
