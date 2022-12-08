import React from "react";
import "./connexionpage-style.scss";
import Button from "react-bootstrap/Button";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
import { ButtonGroup } from "reactstrap";
import Container from "react-bootstrap/Container";
import { Link } from "react-router-dom";

export default function ConnexionPage() {
  return (
    <Container>
      <Form>
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
        <Button variant="primary">Log in</Button>
        <ButtonGroup aria-label="Basic example">
          <Button variant="secondary">Creer mon compte Candidat</Button>
          <Link to="/companies/create">
            <Button variant="secondary">Creer mon compte Entreprise</Button>
          </Link>
        </ButtonGroup>
        <hr />
        <footer className="connexionfooter">
          <p>Sign up with</p>
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
