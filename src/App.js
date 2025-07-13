import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainPage from "./components/page/mainPage";
import NavBar from "./components/ui/navBar";
import PricingPage from "./components/page/pricingPage";
import HelpPage from "./components/page/helpPage";
import PlacesPage from "./components/page/placesPage";

function App() {
  return (
    <>
      <NavBar />
      <hr />
      <br />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/places" element={<PlacesPage />} />
          <Route path="/pricing" element={<PricingPage />} />
          <Route path="/help" element={<HelpPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
