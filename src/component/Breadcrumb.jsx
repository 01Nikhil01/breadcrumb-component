import React, { useEffect, useState } from "react";
import { Link, useLocation, useParams } from "react-router-dom";

const Breadcrumb = () => {
  const location = useLocation();
  const { id } = useParams();
  const [breadcrumbItems, setBreadcrumbItems] = useState([]);

  useEffect(() => {
    const pathnames = location.pathname.split("/").filter((x) => x);
    const items = pathnames.map((name, index) => {
      const routeTo = `/${pathnames.slice(0, index + 1).join("/")}`;
      return { name, routeTo };
    });

    if (id) {
      items.push({
        name: `Feedback for Product ${id}`,
        routeTo: `${location.pathname}`,
      });
    }

    setBreadcrumbItems(items);
  }, [location, id]);

  return (
    <nav className="breadcrumb">
      <Link to="/">Home</Link>
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
