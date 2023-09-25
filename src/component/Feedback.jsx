import React from "react";
import { useParams, Link } from "react-router-dom";

const Feedback = () => {
  const { id } = useParams();

  return (
    <div>
      <h2>Feedback for Product {id}</h2>
      <Link to={`/products/${id}`}>Back to Product Detail</Link>
    </div>
  );
};

export default Feedback;
