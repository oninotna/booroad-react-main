import { createContext, useContext } from "react";
import travels from "../assets/data/travels_data_formatted";

const TravelContext = createContext();

function TravelProvider({ children }) {
  const filteredData = (data, id) => {
    const currentData = data.filter((d) => d.id == id);
    return currentData;
  };
  return (
    <TravelContext value={{ travels, filteredData }}>{children}</TravelContext>
  );
}

function useTravel() {
  const context = useContext(TravelContext);
  return context;
}

export { TravelProvider, useTravel };
