import React from "react";
import logo from "./logo.svg";
import Chinmay from "./profile.jpg";
import "./App.css";

function Header({ title }) {
  return (
    <div
      style={{
        backgroundColor: "#e3fcfc",
        color: "black",
        height: "50px",
        fontSize: "30px",
        textAlign: "center",
        margin: "auto",
        width: "50%",
        border: "10px solid #42f5f2",
        padding: "20px",
      }}
    >
      {title}
    </div>
  );
}

function Photo({ picture }) {
  return (
    <img
      style={{
        width: "40%",
        display: "block",
        marginLeft: "auto",
        marginRight: "auto",
        borderRadius: "80%",
      }}
      src={picture}
    />
  );
}

function Card({ title, body, color }) {
  return (
    <div
      style={{
        backgroundColor: color,
      }}
    >
      {title}
      <br />
      {body}
    </div>
  );
}

function App() {
  return (
    <>
      <Header title="Chinmay's first website" />
      <Photo picture={Chinmay} />
    </>
  );
}

export default App;
