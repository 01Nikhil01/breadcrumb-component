import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Breadcrumb from "./component/Breadcrumb";
import ComponentPackMain from "./Pages/MainPack/ComponentPackMain";
import DomainName from "./Pages/DomainList/DomainName";
import URLlink from "./Pages/Url/URLlink";
import URLlist from "./Pages/UrlList/URLlist";
import { BreadcrumbProvider } from "./component/BreadcrumbContext";

const dynamicDefaultLabel = "Component Pack"; 
function App() {
  return (
    <Router>
      <BreadcrumbProvider>
        <Breadcrumb defaultLabel={dynamicDefaultLabel} />
        <Routes>
          <Route path="/" element={<ComponentPackMain />} />
          <Route path="/DomainName" element={<DomainName />} />
          <Route path="/DomainName/Url" element={<URLlink />} />
          <Route path="/DomainName/Url/List" element={<URLlist />} />
        </Routes>
      </BreadcrumbProvider>
    </Router>
  );
}

export default App;
