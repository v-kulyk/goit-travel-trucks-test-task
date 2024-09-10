import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home/Home";
import Catalog from "./pages/Catalog/Catalog";
import Camper from "./pages/Camper/Camper";
import Navigation from "./components/Navigation/Navigation";

function App() {
  return (
    <>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/catalog" element={<Catalog />}></Route>
        <Route path="/catalog/:camperId" element={<Camper />}></Route>
        <Route path="*" element={<div>Page not found</div>}></Route>
      </Routes>
    </>
  );
}

export default App;
