import React from "react";
import { Link } from "react-router-dom";

const ProductTable = () => {
  const products = [
    { id: 1, name: "Product A", price: 10.99 },
    { id: 2, name: "Product B", price: 19.99 },
    { id: 3, name: "Product C", price: 5.99 },
    { id: 4, name: "Product D", price: 15.99 },
  ];

  return (
    <div>
      <h2>Products Table</h2>
      <table className="product-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product.id}>
              <td>{product.id}</td>
              <td>
                <Link to={`/Products/${product.id}`}>{product.name}</Link>
              </td>
              <td>${product.price}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProductTable;
