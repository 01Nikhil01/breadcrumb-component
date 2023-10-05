import React from "react";
import { Link } from "react-router-dom";
import { useBreadcrumb } from "./BreadcrumbContext";

const Breadcrumb = () => {
  const { breadcrumbItems } = useBreadcrumb();

  return (
    <nav className="breadcrumb">
      <span>
        {breadcrumbItems.length === 0 ? (
          "Component Pack"
        ) : (
          <Link to="/">Component Pack</Link>
        )}
      </span>
      {breadcrumbItems.map((breadcrumb, index) => (
        <React.Fragment key={breadcrumb.routeTo}>
          <span> / </span>
          {index === breadcrumbItems.length - 1 ? (
            <span>{breadcrumb.name}</span>
          ) : (
            <Link to={breadcrumb.routeTo}>{breadcrumb.name}</Link>
          )}
        </React.Fragment>
      ))}
    </nav>
  );
};

export default Breadcrumb;
