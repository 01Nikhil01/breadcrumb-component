import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ProductTable from "./Pages/ProductTable";
import ProductDetail from "./Pages/ProductDetail";
import Breadcrumb from "./component/Breadcrumb";
import Feedback from "./Pages/Feedback";
import Home from "./Pages/Home";
import { BreadcrumbProvider } from "./component/BreadcrumbContext";

const dynamicDefaultLabel = "Component Pack"//
function App() {
  return (
    <Router>
      <BreadcrumbProvider>
       <Breadcrumb defaultLabel= {dynamicDefaultLabel} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Products" element={<ProductTable />} />
          <Route path="/Products/:id" element={<ProductDetail />} />
          <Route path="/Products/:id/Feedback" element={<Feedback />} />
        </Routes>
      </BreadcrumbProvider>
    </Router>
  );
}

export default App;
