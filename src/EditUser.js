import React, { useEffect, useState } from "react";
import "./EditUser.css";
import { Col, Form, Button } from "react-bootstrap";
import firebase from "firebase";
import db from "./firebase";
import { useHistory } from "react-router";
import { useParams } from "react-router-dom";

const EditUser = ({ props }) => {
  // const [queryData, setQueryData] = useState([]);
  // const query = useQuery();

  const {
    id,
    names,
    emails,
    numbers,
    // addresss,
    citys,
    states,
    countrys,
  } = useParams();

  let history = useHistory();

  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [number, setNumber] = useState();
  const [address, setAddress] = useState();
  const [city, setCity] = useState();
  const [state, setState] = useState();
  const [country, setCountry] = useState();

  useEffect(() => {
    setName(names);
    setEmail(emails);
    setNumber(numbers);
    // setAddress(addresss);
    setCity(citys);
    setState(states);
    setCountry(countrys);
  }, []);

  const updateUser = (e) => {
    e.preventDefault();

    db.collection("users")
      .doc(id)
      .update({
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
  };

  return (
    <div className="edituser">
      <div>
        <h1>EDIT USER DETAILS{id}</h1>
        <Form className="edituser__form">
          <Form.Row>
            <Form.Group as={Col} controlId="formGridEmail">
              <Form.Label>User Name {names}</Form.Label>
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
            onClick={updateUser}
            // disabled={!user}
            type="submit"
            variant="outline-primary"
          >
            Update User
          </Button>
        </Form>
      </div>
    </div>
  );
};

export default EditUser;
