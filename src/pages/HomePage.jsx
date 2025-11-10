import TravelList from "../components/TravelList";
import { Link } from "react-router-dom";

export default function HomePage() {
  return (
    <div className="container">
      
      <div className="d-flex justify-content-between align-items-center my-3">    
        <img className="home-img" src="/img/iconBooroad.png" alt="" />
        <h1 className="my-4 home-title">Viaggi</h1>
        <Link to="/travels/newtravel" className="btn btn-primary">Aggiungi nuovo viaggio</Link>
      </div>
      <div className="text-center">
        <h1 className="my-4 home-title-mobile">Viaggi</h1></div>
      <TravelList />
    </div>
  );
}
