import React from "react";

function SuperHeroCard({ hero }) {
  return (
    <div
      style={{
        border: "1px solid #ddd",

        width: "250px",
        padding: "1rem",
        margin: "1rem",
      }}
    >
      <img src={hero.image.url} alt={hero.name} style={{ width: "100%" }} />
      <h2>{hero.name}</h2>
      <p>
        <strong>Real Name:</strong> {hero.biography["full-name"]}
      </p>
      <p>
        <strong>Publisher:</strong> {hero.biography.publisher}
      </p>
      <p>
        <strong>Alignment:</strong> {hero.biography.alignment}
      </p>
      <p>
        <strong>Intelligence:</strong> {hero.powerstats.intelligence}
      </p>
      <p>
        <strong>Strength:</strong> {hero.powerstats.strength}
      </p>
    </div>
  );
}

export default SuperHeroCard;
