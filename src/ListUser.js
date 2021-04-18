import React, { useEffect, useState } from "react";
import { Card } from "react-bootstrap";
import "./ListUser.css";
import { TiEdit } from "react-icons/ti";
import { MdDelete } from "react-icons/md";
import db from "./firebase";
import { useHistory } from "react-router";

const ListUser = () => {
  let history = useHistory();
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

  const handleEdit = () => {
    history.push("/edituser");
  };

  return (
    <div className="listuser">
      {datas?.map(({ DataTransfer, id }) => {
        console.log("showing", DataTransfer?.user?.name);
        return (
          <Card
            key={id}
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

              <TiEdit onClick={handleEdit} className="listuser__button" />
              <MdDelete
                onClick={(e) => db.collection("users").doc(id).delete()}
                className="listuser__button"
              />
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
