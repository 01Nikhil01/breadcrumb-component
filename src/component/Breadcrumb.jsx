import React from "react";
import { Link } from "react-router-dom";
import { useBreadcrumb } from "./BreadcrumbContext";

const Breadcrumb = ({ defaultLabel }) => {
  const { breadcrumbItems } = useBreadcrumb();

  return (
    <nav className="breadcrumb">
      <span>
        {breadcrumbItems.length === 0 ? (
          defaultLabel
        ) : (
          <Link style={{color:"#000"}} to="/">{defaultLabel}</Link>
        )}
      </span>
      {breadcrumbItems.map((breadcrumb, index) => (
        <React.Fragment key={breadcrumb.routeTo}>
          <span style={{fontSize:"20px",margin:"0 8px" }}>{'>'}</span>
          {index === breadcrumbItems.length - 1 ? (
            <span>{breadcrumb.name}</span>
          ) : (
            <Link style={{color:"#000"}} to={breadcrumb.routeTo}>{breadcrumb.name}</Link>
          )}
        </React.Fragment>
      ))}
    </nav>
  );
};
export default Breadcrumb;
