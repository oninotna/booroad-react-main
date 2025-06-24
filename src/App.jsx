import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import DefaultLayout from "./layouts/DefaultLayout";
import { TravelProvider } from "./contexts/TravelContext";
import TravelDetailPage from "./pages/TravelDetailPage";
import FormNewTravel from "./pages/FormNewTravel";

export default function App() {
  return (
    <>
      <TravelProvider>
        <BrowserRouter>
          <Routes>
            <Route element={<DefaultLayout />}>
              <Route path="/travels">
                <Route index element={<HomePage />} />
                <Route path=":id" element={<TravelDetailPage />} />
                <Route path="newtravel" element={<FormNewTravel />} />
              </Route>
            </Route>
          </Routes>
        </BrowserRouter>
      </TravelProvider>
    </>
  );
};