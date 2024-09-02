import React from "react";
import part from "../sampleData.js";
import "bootstrap/dist/css/bootstrap.min.css";
import "./home.css"


function Home () {
  return (
    <section>
      <header>
        <h1>Inventory</h1>
      </header>

      <div className="parts">
        <div className="card" style={{ width: "18rem" }}>
          <img src={part.image} className="card-img-top" alt="..." />
          <div className="card-body">
            <h3 className="card-title">{part.name}</h3>
            <p className="card-text">Quantity: {part.quantity}</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;
