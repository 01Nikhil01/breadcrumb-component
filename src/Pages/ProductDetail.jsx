import React from "react";
import { Link, useParams } from "react-router-dom";

const ProductDetail = () => {
  const { id } = useParams();

  const products = [
    {
      id: 1,
      name: "Product A",
      price: 10.99,
      description: "Description of Product A",
    },
    {
      id: 2,
      name: "Product B",
      price: 19.99,
      description: "Description of Product B",
    },
    {
      id: 3,
      name: "Product C",
      price: 5.99,
      description: "Description of Product C",
    },
    {
      id: 4,
      name: "Product D",
      price: 15.99,
      description: "Description of Product D",
    },
  ];

  const selectedProduct = products.find(
    (product) => product.id === parseInt(id)
  );

  if (!selectedProduct) {
    return <div>Product not found</div>;
  }

  return (
    <div>
      <div></div>
      <h2>Product Detail</h2>
      <h3>{selectedProduct.name}</h3>
      <p>Price: ${selectedProduct.price}</p>
      <p>{selectedProduct.description}</p>
      <Link to={`/Products/${selectedProduct.id}/Feedback`}>Feedback</Link>
    </div>
  );
};

export default ProductDetail;
