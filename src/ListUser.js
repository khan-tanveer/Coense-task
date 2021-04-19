import React, { useEffect, useState } from "react";
import { Card } from "react-bootstrap";
import "./ListUser.css";
import { TiEdit } from "react-icons/ti";
import { MdDelete } from "react-icons/md";
import db from "./firebase";
import { Link } from "react-router-dom";

const ListUser = () => {
  const [datas, setDatas] = useState([]);

  useEffect(() => {
    db.collection("users").onSnapshot((snapshot) => {
      // console.log(
      //   "full fetchig",
      //   snapshot.docs.map((doc) => doc.data())
      // );

      setDatas(
        snapshot.docs.map((doc, id) => ({
          id: doc.id,
          DataTransfer: doc.data(),
        }))
      );

      // console.log(
      //   "data",
      //   snapshot.docs.map((doc, id) => ({ id: doc.id, data: doc.data() }))
      // );
    });
  }, []);

  return (
    <div className="listuser">
      {datas?.map(({ DataTransfer, id }) => {
        return (
          <Card
            key={id}
            className="listuser__card"
            border="primary"
            bg="dark"
            text="light"
            style={{ width: "25rem" }}
          >
            <Card.Header>User</Card.Header>
            <Card.Body>
              <Card.Title>User Name : {DataTransfer?.user?.name}</Card.Title>
              {/* <Card.Text>Some quick</Card.Text> */}
              <Card.Title>User Email : {DataTransfer?.user?.email}</Card.Title>
              {/* <Card.Text>Some quick</Card.Text> */}
              <Card.Title>User Phone : {DataTransfer?.user?.number}</Card.Title>
              {/* <Card.Text>Some quick</Card.Text> */}

              <Link to={`/edituser/${id}`}>
                <TiEdit className="listuser__button" />
              </Link>

              <MdDelete
                onClick={(e) => db.collection("users").doc(id).delete()}
                className="listuser__button"
              />
            </Card.Body>
          </Card>
        );
      })}
    </div>
  );
};

export default ListUser;
