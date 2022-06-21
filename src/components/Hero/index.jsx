import { Button, Col, Container, Image, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import Logo from "../../assets/images/logo.svg";
import SkillsBox from "../SkillsBox";
import "./index.scss";

const Hero = () => {
  return (
    <div className="hero">
      <Container className="min-vh-100 d-flex flex-column justify-content-center">
        <Row className="align-items-center justify-content-center">
          <Col className="d-flex justify-content-center mb-3" md={4}>
            <Image fluid src={Logo} className="hero-logo" />
          </Col>
          <Col md={7}>
            <div className="hero-content">
              <h1 className="hero-h1">
                Hi, I'm <span>Sadiq Salau</span>
              </h1>
              <h2 className="hero-h2 fst-italic">Web Developer</h2>
              <p className="fst-italic mb-2">
                I develop websites and web applications
              </p>
              <SkillsBox className="mb-2" />
              <Button as={Link} to="#contact">
                Contact Me
              </Button>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Hero;
