import React, { useState } from "react";
import { Col, Form, Button } from "react-bootstrap";
import "./AddUser.css";
import firebase from "firebase";
import db from "./firebase";
import { useHistory } from "react-router";

const AddUser = () => {
  const history = useHistory();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [country, setCountry] = useState("");

  const addUser = (e) => {
    e.preventDefault();

    if (
      name === "" ||
      email === "" ||
      number === "" ||
      address === "" ||
      city === "" ||
      state === "" ||
      country === ""
    ) {
      alert("please add details");
    } else {
      db.collection("users").add({
        user: {
          name: name,
          email: email,
          number: number,
          address: address,
          city: city,
          state: state,
          country: country,
          timestamp: firebase.firestore.FieldValue.serverTimestamp(),
        },
      });
      setName("");
      setEmail("");
      setNumber("");
      setAddress("");
      setCity("");
      setState("");
      setCountry("");
      history.push("/listuser");
    }
  };

  return (
    <div className="adduser">
      <div>
        <h1>ADD USER DETAILS</h1>
        <Form className="adduser__form">
          <Form.Row>
            <Form.Group as={Col} controlId="formGridEmail">
              <Form.Label>User Name</Form.Label>
              <Form.Control
                value={name}
                onChange={(e) => setName(e.target.value)}
                type="text"
                placeholder="Enter Name..."
              />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridPassword">
              <Form.Label>User Email</Form.Label>
              <Form.Control
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                placeholder="Enter Email..."
              />
            </Form.Group>
          </Form.Row>

          <Form.Row>
            <Form.Group as={Col} controlId="formGridEmail">
              <Form.Label>Phone No</Form.Label>
              <Form.Control
                value={number}
                onChange={(e) => setNumber(e.target.value)}
                type="number"
                placeholder="Enter Phone No..."
              />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridPassword">
              <Form.Label>Address</Form.Label>
              <Form.Control
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                type="text"
                placeholder="Enter Address..."
              />
            </Form.Group>
          </Form.Row>

          <Form.Row>
            <Form.Group as={Col} controlId="formGridCity">
              <Form.Label>City</Form.Label>
              <Form.Control
                value={city}
                onChange={(e) => setCity(e.target.value)}
                as="select"
                defaultValue="Choose..."
              >
                <option>Choose...</option>
                <option>Mumbai</option>
              </Form.Control>
            </Form.Group>

            <Form.Group as={Col} controlId="formGridState">
              <Form.Label>State</Form.Label>
              <Form.Control
                value={state}
                onChange={(e) => setState(e.target.value)}
                as="select"
                defaultValue="Choose..."
              >
                <option>Choose...</option>
                <option>Maharastra</option>
              </Form.Control>
            </Form.Group>

            <Form.Group as={Col} controlId="formGridZip">
              <Form.Label>Country</Form.Label>
              <Form.Control
                value={country}
                onChange={(e) => setCountry(e.target.value)}
                as="select"
                defaultValue="Choose..."
              >
                <option>Choose...</option>
                <option>India</option>
              </Form.Control>
            </Form.Group>
          </Form.Row>

          <Button
            onClick={addUser}
            // disabled={!user}
            type="submit"
            variant="outline-primary"
          >
            Add User
          </Button>
        </Form>
      </div>
    </div>
  );
};

export default AddUser;
