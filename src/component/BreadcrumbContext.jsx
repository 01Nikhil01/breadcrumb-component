import React, { createContext, useContext, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const BreadcrumbContext = createContext();

export function useBreadcrumb() {
  return useContext(BreadcrumbContext);
}

export function BreadcrumbProvider({ children }) {
  const location = useLocation();
  const navigate = useNavigate();
  const [breadcrumbItems, setBreadcrumbItems] = useState([]);

  useEffect(() => {
    const pathnames = location.pathname.split("/").filter((x) => x);
    setBreadcrumbItems(
      pathnames.map((name, index) => ({
        name,
        routeTo: `/${pathnames.slice(0, index + 1).join("/")}`,
      }))
    );
  }, [location]);

  const handleHomeClick = () => {
    navigate("/");
  };

  return (
    <BreadcrumbContext.Provider value={{ breadcrumbItems, handleHomeClick }}>
      {children}
    </BreadcrumbContext.Provider>
  );
}
