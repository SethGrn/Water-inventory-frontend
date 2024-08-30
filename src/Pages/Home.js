import React from "react";
import part from "../sampleData.js"

function Home () {
  return (
      <div class="card" style={{width: "18rem;"}}>
        <img src={part.image} class="card-img-top" alt="..." />
        <div class="card-body">
          <h3 class="card-title">{part.name}</h3>
          <p class="card-text">Quantity: {part.quantity}</p>
          <a href="#" class="btn btn-primary">
            Go somewhere
          </a>
        </div>
      </div>
  );
}

export default Home;
