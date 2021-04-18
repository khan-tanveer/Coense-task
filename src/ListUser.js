import React, { useEffect, useState } from "react";
import { Card } from "react-bootstrap";
import "./ListUser.css";
import { TiEdit } from "react-icons/ti";
import { MdDelete } from "react-icons/md";
import db from "./firebase";

const ListUser = () => {
  const [datas, setDatas] = useState([]);
  console.log("first dataa araay", datas);

  useEffect(() => {
    db.collection("users").onSnapshot((snapshot) => {
      console.log(
        "full fetchig",
        snapshot.docs.map((doc) => doc.data())
      );
      setDatas(
        snapshot.docs.map((doc, id) => ({
          id: doc.id,
          DataTransfer: doc.data(),
        }))
      );
      console.log(
        "data",
        snapshot.docs.map((doc, id) => ({ id: doc.id, data: doc.data() }))
      );
    });
  }, []);

  return (
    <div className="listuser">
      {datas?.map(({ DataTransfer }, i) => {
        console.log("showing", DataTransfer?.user?.name);
        return (
          <Card
            key={i}
            className="listuser__card"
            border="primary"
            bg="dark"
            text="light"
            style={{ width: "20rem" }}
          >
            <Card.Header>User</Card.Header>
            <Card.Body>
              <Card.Title>User Name : {DataTransfer?.user?.name}</Card.Title>
              {/* <Card.Text>Some quick</Card.Text> */}
              <Card.Title>User Email : {DataTransfer?.user?.email}</Card.Title>
              {/* <Card.Text>Some quick</Card.Text> */}
              <Card.Title>User Phone : {DataTransfer?.user?.number}</Card.Title>
              {/* <Card.Text>Some quick</Card.Text> */}

              <TiEdit className="listuser__button" />
              <MdDelete className="listuser__button" />
            </Card.Body>
          </Card>
        );
      })}

      {/* <h1>list user</h1>
      <h1>list user</h1>
      <h1>list user</h1>
      <h1>list user</h1>
      <h1>list user</h1>
      <h1>list user</h1>
      <h1>list user</h1>
      <h1>list user</h1>
      <h1>list user</h1>
      <h1>list user</h1>
      <h1>list user</h1>
      <h1>list user</h1>
      <h1>list user</h1>
      <h1>list user</h1>
      <h1>list user</h1>
      <h1>list user</h1>
      <h1>list user</h1> */}
    </div>
  );
};

export default ListUser;
