import React from "react";
import "./connexionpage-style.scss";
import Button from "react-bootstrap/Button";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
import { ButtonGroup } from "reactstrap";
import Container from "react-bootstrap/Container";
import { Link } from "react-router-dom";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import externaticLogo from "../assets/logos/externaticLogo.png";

export default function ConnexionPage() {
  return (
    <Container>
      <img src={externaticLogo} alt="logo" width="40%" />
      <Form className="p-0">
        <Row className="px-4 my-5">
          <FloatingLabel
            controlId="floatingInput"
            label="Email address"
            className="mb-3"
          >
            <Form.Control type="email" placeholder="name@example.com" />
          </FloatingLabel>
          <FloatingLabel controlId="floatingPassword" label="Password">
            <Form.Control type="password" placeholder="Password" />
          </FloatingLabel>
        </Row>
        <Button className="w-25 m-0" variant="primary">
          Log in
        </Button>
        <Row className="">
          <Col className="w-12 ">
            <ButtonGroup
              className="mx-auto text-center"
              aria-label="Basic example"
            >
              <Button
                className="w-50 rounded my-5 mx-6"
                variant="outline-primary"
              >
                Creer mon compte Candidat
              </Button>
              <Link to="/companies/create">
                <Button
                  className="w-50 rounded mx-5 my-5 text-center"
                  variant="outline-primary"
                >
                  Creer mon compte Entreprise
                </Button>
              </Link>
            </ButtonGroup>
          </Col>
        </Row>

        <hr />
        <footer className="connexionfooter">
          <h3>Sign up with</h3>
          <a
            className="btn btn-lg btn-google btn-block text-uppercase btn-outline"
            href="/auth/google"
          >
            <img
              src="https://img.icons8.com/color/16/000000/google-logo.png"
              alt="google"
            />
            Signup Using Google
          </a>
          <a
            className="btn btn-lg btn-google btn-block text-uppercase btn-outline"
            href="/auth/google"
          >
            <img
              src="https://img.icons8.com/fluent/16/000000/github.png"
              alt="github"
            />
            Signup Using Github
          </a>
        </footer>
      </Form>
    </Container>
  );
}
