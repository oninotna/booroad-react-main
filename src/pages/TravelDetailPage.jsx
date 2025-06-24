import { Link, useParams } from "react-router-dom";
import { useTravel } from "../contexts/TravelContext";
import { useState, useEffect } from "react";
import PeopleCard from "../components/PeopleCard";
import FormAddPeople from "../components/FormAddPeople";

export default function TravelDetailPage() {
  const { id } = useParams();
  const { travels, filteredData } = useTravel();
  const currentTravel = filteredData(travels, id);
  const currentPeopleList = currentTravel[0].peopleList;
  const [peopleFilter, setPeopleFilter] = useState('');
  const [filteredPeople, setFilteredPeople] = useState(currentPeopleList)
   const [update, setUpdate] = useState(true)

  
  
  useEffect(() => {
    const listUpdate = currentPeopleList.filter(people => 
      people.firstName.toLowerCase().includes(peopleFilter.toLowerCase()) ||
    people.lastName.toLowerCase().includes(peopleFilter.toLowerCase()))
    setFilteredPeople(listUpdate)
  }, [peopleFilter, update])
  
  return (
    <>
      <div className="container">
        <div className="d-flex justify-content-between my-3 align-items-center">
          <div className="d-flex align-items-center gap-3">
            <h2>{currentTravel[0].destination}</h2>
            <Link to="/travels" className="btn btn-primary">
              Torna alla home
            </Link>
          </div>
          <input
            className="form-control-lg"
            type="text"
            placeholder="Cerca..."
            value={peopleFilter}
            onChange={(e) => setPeopleFilter(e.target.value)}
          />
        </div>
        <div className="row g-3">
          {filteredPeople.map((people) => (
            <PeopleCard people={people} travel={currentTravel[0]} key={people.id}/>
          ))}
        </div>
      </div>
      <FormAddPeople travel={currentTravel[0]} update={() => setUpdate(!update)}/>
    </>
  );
};