import React from "react";
import "./connexionpage-style.scss";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

export default function ConnexionPage() {
  return (
    <div className="connexionpage">
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        <Button type="button" className="btn btn-primary">
          Connexion
        </Button>
        <div classename="createbutton">
          <Button type="button" className="btn btn-secondary">
            Creer un compte Candidat
          </Button>
          <Button type="button" className="btn btn-secondary">
            Creer un compte Entreprise
          </Button>
        </div>

        <hr />
        <footer className="connexionfooter">
          <p>connexion avec</p>
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
    </div>
  );
}
