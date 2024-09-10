import { Route, Routes } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<div>Home</div>}></Route>
        <Route path="/catalog" element={<div>Catalog page</div>}></Route>
        <Route
          path="/catalog/:camperId"
          element={<div>Camper page</div>}
        ></Route>
        <Route path="*" element={<div>Page not found</div>}></Route>
      </Routes>
    </>
  );
}

export default App;
