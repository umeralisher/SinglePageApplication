import React, { useEffect, useState } from "react";
import SuperheroCard from "./SuperHeroCard";
import { Container, Form, InputGroup } from "react-bootstrap";

function SuperheroList() {
  const [heroes, setHeroes] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredHeroes, setFilteredHeroes] = useState([]);

  useEffect(() => {
    fetch(`${process.env.PUBLIC_URL}/data/heros.json`)
      .then((response) => response.json())
      .then((data) => {
        const successfulHeroes = data.filter(
          (hero) => hero.response === "success"
        );
        setHeroes(successfulHeroes);
        setFilteredHeroes(successfulHeroes);
      })
      .catch((error) => console.error("Error loading superhero data:", error));
  }, []);

  const handleSearch = (event) => {
    const searchValue = event.target.value;
    setSearchTerm(searchValue);

    if (searchValue.trim() === "") {
      setFilteredHeroes(heroes);
    } else {
      const results = heroes.filter((hero) =>
        hero.name.toLowerCase().includes(searchValue.toLowerCase())
      );
      setFilteredHeroes(results);
    }
  };

  return (
    <>
      <h1>Total Heroes: {heroes.length}</h1>
      <Container className="text-center">
        <InputGroup
          className="mb-3 justify-content-center"
          style={{ maxWidth: "300px", margin: "0 auto" }}
        >
          <Form.Control
            type="text"
            placeholder="Search for a hero"
            value={searchTerm}
            onChange={handleSearch}
            className="form-control"
          />
        </InputGroup>
        <div className="d-flex flex-wrap justify-content-center gap-3">
          {filteredHeroes.length > 0
            ? filteredHeroes.map((hero) => (
                <SuperheroCard key={hero.id} hero={hero} />
              ))
            : searchTerm.trim() !== "" && (
                <p className="text-red-700 text-2xl">Hero chuti pr haii </p>
              )}
        </div>
      </Container>
    </>
  );
}

export default SuperheroList;
