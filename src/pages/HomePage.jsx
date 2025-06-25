import TravelList from "../components/TravelList";
import { Link } from "react-router-dom";

export default function HomePage() {
  return (
    <div className="container">
      <div className="d-flex justify-content-between align-items-center my-3">
        
        <img className="home-img" src="../public/img/iconBooroad.png" alt="" />
        <h1 className="my-4">Viaggi</h1>
        <Link to="/travels/newtravel" className="btn btn-primary">Aggiungi nuovo viaggio</Link>
      </div>
      <TravelList />
    </div>
  );
}
