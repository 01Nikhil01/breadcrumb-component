import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useBreadcrumb } from "./BreadcrumbContext";
const Breadcrumb = ({ defaultLabel }) => {
  const { breadcrumbItems } = useBreadcrumb();
  const location = useLocation();
  const navigate = useNavigate();
  const handleGoBack = () => {
    const arr = location.pathname.split("/");
    arr.pop();
    navigate(arr.join("/"));
  };

  return (
    <nav
      className="breadcrumb"
      style={{
        margin: "20px 40px",
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-start",
      }}
    >
      {breadcrumbItems.length > 0 && (
        <button
          style={{ marginRight: "20px", padding: "0 5px", fontSize: "15px" }}
          onClick={handleGoBack}
        >
          Back
        </button>
      )}
      <span
        style={{ fontSize: "18px", margin: "5px 8px 0 8px", fontWeight: "400" }}
      >
        {breadcrumbItems.length === 0 ? (
          defaultLabel
        ) : (
          <Link style={{ color: "#000" }} to="/">
            {defaultLabel}
          </Link>
        )}
      </span>
      {breadcrumbItems.map((breadcrumb, index) => (
        <React.Fragment key={breadcrumb.routeTo}>
          <span
            style={{
              fontSize: "18px",
              margin: "5px 8px 0 8px",
              fontWeight: "400",
            }}
          >
            {"/"}
          </span>
          {index === breadcrumbItems.length - 1 ? (
            <span style={{ fontSize: "18px" }}>{breadcrumb.name}</span>
          ) : (
            <Link
              style={{ color: "#000", fontSize: "18px" }}
              to={breadcrumb.routeTo}
            >
              {breadcrumb.name}
            </Link>
          )}
        </React.Fragment>
      ))}
    </nav>
  );
};
export default Breadcrumb;
