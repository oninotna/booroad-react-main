import { useTravel } from "../contexts/TravelContext";
import { useState } from "react";
import { useNavigate } from "react-router";
import { Link } from "react-router";


export default function FormNewTravel () {
   const defaultFormData = {
    id: 0,
    destination: "",
    dateStart: "",
    dateEnd: "",
    img: "",
    peopleList: []
   };

   const {travels} = useTravel()
   const [formData, setFormData] = useState(defaultFormData);
   const navigate = useNavigate();


   const idGenerate = (travels) => {
    const id = travels.length +1;
    return id;
   };

   const handleSubmit = (e) => {
    e.preventDefault();

    travels.push(formData);
    navigate("/travels");
   };

   const changeFormData = (e) => {
    const {name, value} = e.target;
    setFormData({
        ...formData,
        id: idGenerate(travels),
        [name]: value
    });
   };


    return (
      <div className="container">
        <div>
          <h1 className="my-3">Aggiungi nuovo viaggio</h1>
          <form className="row align-items-end g-3" onSubmit={handleSubmit}>
            <div className="col-4">
              <label htmlFor="destination">Destinazione</label>
              <input
                className="form-control"
                type="text"
                id="destination"
                name="destination"
                value={formData.destination}
                onChange={changeFormData}
              />
            </div>
            <div className="col-4">
              <label htmlFor="dateStart">Data di partenza</label>
              <input
                className="form-control"
                type="date"
                id="dateStart"
                name="dateStart"
                value={formData.dateStart}
                onChange={changeFormData}
              />
            </div>
            <div className="col-4">
              <label htmlFor="dateEnd">Data di rientro</label>
              <input
                className="form-control"
                type="date"
                id="dateEnd"
                name="dateEnd"
                value={formData.dateEnd}
                onChange={changeFormData}
              />
            </div>
            <div className="col-4">
                <label htmlFor="img">Immagine di copertina</label>
                <input className="form-control" 
                type="text"
                id="img"
                name="img"
                value={formData.img} 
                onChange={changeFormData}/>
            </div>
            <div className="col-4"></div>
            <div className="col-4 text-end">
                <Link to="/travels" className="btn btn-primary me-2">
              Torna alla home
            </Link>
                <button className="btn btn-primary" type="submit">Aggiungi viaggio</button>
            </div>
          </form>
        </div>
      </div>
    );
}