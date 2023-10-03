import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ProductTable from "./component/ProductTable";
import ProductDetail from "./component/ProductDetail";
import Breadcrumb from "./component/Breadcrumb";
import Feedback from "./component/Feedback";
import Home from "./component/Home";
import { BreadcrumbProvider } from "./component/BreadcrumbContext";


function App() {
  return (
    <Router>
      <BreadcrumbProvider>
        <Breadcrumb />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<ProductTable />} />
          <Route path="/products/:id" element={<ProductDetail />} />
          <Route path="/products/:id/feedback" element={<Feedback />} />
        </Routes>
      </BreadcrumbProvider>
    </Router>
  );
}

export default App;
