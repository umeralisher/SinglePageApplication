import React, { useEffect, useState } from "react";
import { Container, Form, InputGroup, Card, Row, Col } from "react-bootstrap";

function SpotifyList() {
  const [albums, setAlbums] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredAlbums, setFilteredAlbums] = useState([]);

  useEffect(() => {
    const fetchAlbums = async () => {
      try {
        const response = await fetch(
          `${process.env.PUBLIC_URL}/data/albums.json`
        );
        const data = await response.json();
        setAlbums(data.albums.items);
        setFilteredAlbums(data.albums.items);
      } catch (error) {
        console.error("Error fetching album data:", error);
      }
    };

    fetchAlbums();
  }, []);

  useEffect(() => {
    const results = albums.filter((album) =>
      album.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredAlbums(results);
  }, [searchTerm, albums]);

  return (
    <>
      <h1>Total Albums: {albums.length}</h1>
      <Container className="text-center">
        <InputGroup
          className="mb-3 justify-content-center"
          style={{ maxWidth: "400px", margin: "0 auto" }}
        >
          <Form.Control
            type="text"
            placeholder="Search for an album"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="form-control"
          />
        </InputGroup>
        <Row className="justify-content-center">
          {filteredAlbums.length > 0
            ? filteredAlbums.map((album) => (
                <Col md={4} key={album.id} className="mb-4">
                  <Card>
                    <Card.Img variant="top" src={album.images[0]?.url} />
                    <Card.Body>
                      <Card.Title>{album.name}</Card.Title>
                      <Card.Text>
                        Artist: {album.artists[0].name}
                        <br />
                        Release Date: {album.release_date}
                      </Card.Text>
                      <Card.Link
                        href={album.external_urls.spotify}
                        target="_blank"
                      >
                        Listen on Spotify
                      </Card.Link>
                    </Card.Body>
                  </Card>
                </Col>
              ))
            : searchTerm.trim() !== "" && (
                <p className="text-danger">Album not found</p>
              )}
        </Row>
      </Container>
    </>
  );
}

export default SpotifyList;
