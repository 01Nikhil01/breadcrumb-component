import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <p>Dashboard</p>
      <div>
        {"   "}
        for going to tables{"  "}
        <Link to="/products">Products</Link>
        <br />

        
      </div>
    </div>
  );
}

export default Home;
