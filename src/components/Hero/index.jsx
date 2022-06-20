import { Button, Col, Container, Image, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import Logo from "../../assets/images/logo.png";
import "./index.scss";

const Hero = () => {
  return (
    <div className="hero">
      <Container className="min-vh-100 d-flex flex-column justify-content-center">
        <Row className="align-items-center flex-row-reverse flex-md-row">
          <Col className="d-flex justify-content-center mb-3">
            <Image fluid src={Logo} className="hero-logo" />
          </Col>
          <Col md={7}>
            <h1 className="hero-h1">
              Hi, I'm <span>Sadiq Salau</span>
            </h1>
            <h2 className="hero-h2">A Web Developer</h2>
            <p className="fst-italic">
              I develop websites and web applications
            </p>
            <Button as={Link} to="#contact">
              Contact Me
            </Button>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Hero;
