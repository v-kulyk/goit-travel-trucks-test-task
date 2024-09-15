import { Route, Routes } from "react-router-dom";
import "modern-normalize";
import Header from "./components/Header/Header";
import Navigation from "./components/Navigation/Navigation";
import Home from "./pages/Home/Home";
import Catalog from "./pages/Catalog/Catalog";
import Camper from "./pages/Camper/Camper";

function App() {
  return (
    <>
      <Header>
        <Navigation />
      </Header>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/catalog" element={<Catalog />}></Route>
        <Route path="/catalog/:camperId" element={<Camper />}>
          <Route
            path="features"
            element={<div>Features will be shown here</div>}
          ></Route>
          <Route
            path="reviews"
            element={<div>Reviews will be shown here</div>}
          ></Route>
        </Route>
        <Route path="*" element={<div>Page not found</div>}></Route>
      </Routes>
    </>
  );
}

export default App;
