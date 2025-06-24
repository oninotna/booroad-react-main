import TravelCard from "../components/TravelCard";
import { useTravel } from "../contexts/TravelContext";

export default function TravelList() {
  const { travels } = useTravel();
  return (
    <div>
      <div className="row g-4">
        {travels.map((travel, i) => {
          return <TravelCard key={i} travel={travel} />;
        })}
      </div>
    </div>
  );
}
