import { Link } from "react-router-dom";
import ModalPeople from "./ModalPeople";

export default function PeopleCard ({people, travel}) {
    return (
        <div className="col-3 h-100" >
              <ul className="list-group h-100">
                <li className="list-group-item">
                  <strong>Name: </strong>
                  {people.firstName}
                </li>
                <li className="list-group-item">
                  <strong>Cognome: </strong>
                  {people.lastName}
                </li>
                <li className="list-group-item py-3 text-center">
                  <ModalPeople people={people}/>
                </li>
              </ul>
            </div>
    )
}