import React from "react";
import { Row, Col, Card } from "react-bootstrap";

const Home = () => {
  return (
    <div>
      <div>
        <Col>
          <Card className="bg-info" style={{ cursor: "pointer" }} onClick={() => (window.location.href = "https://www.instagram.com/adam_wisnup/")}>
            <Card.Body>
              <Card.Title>Instagram</Card.Title>
              <Card.Text>Follow instagramku dan juga ikuti keseruan keseharianku 😊</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card className="bg-info" style={{ cursor: "pointer" }} onClick={() => (window.location.href = "https://www.tiktok.com/@maadanaa")}>
            <Card.Body>
              <Card.Title>Tiktok</Card.Title>
              <Card.Text>Tiktok membuat saya bisa untuk berreasi lebih jauh lagi. Jadi, jangan lupa follow untuk kepoin keseharian dan proses yang saya jalani 😉</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card className="bg-info" style={{ cursor: "pointer" }} onClick={() => (window.location.href = "https://github.com/adamwisnup")}>
            <Card.Body>
              <Card.Title>Github</Card.Title>
              <Card.Text>Github yang saya miliki terdapat banyak repositori yang banyak project, silahkan dilihat dan dijadikan referensi sesui dengan karya masing - masing 😋</Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </div>
    </div>
  );
};

export default Home;
