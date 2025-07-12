import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainPage from "./components/page/mainPage";
import NavBar from "./components/ui/navBar";
import PricingPage from "./components/page/pricingPage";

function App() {
  return (
    <>
      <NavBar />
      <hr />
      <br />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/pricing" element={<PricingPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
