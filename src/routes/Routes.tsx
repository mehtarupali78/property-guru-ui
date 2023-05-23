import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/home";
import ProdductDetails from "../pages/product-details";

const Routers = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:id" element={<ProdductDetails />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Routers;
