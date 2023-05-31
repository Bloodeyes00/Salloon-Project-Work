// src/App.js
import React from "react";
import { useEarthoOne } from "@eartho/one-client-react";
import { useHistory } from "react-router-dom";
import {
  BsFacebook,
  FcGoogle,
  BsApple,
  BsTwitter,
} from "react-icons/all";
function App2() {
  let history = useHistory();
  const {
    isLoading,
    isConnected,
    error,
    user,
    connectWithPopup,
    logout,
    getIdToken,
  } = useEarthoOne();

  if (getIdToken) {
    getIdToken()
      .then((token) => {

        localStorage.setItem("token", token);
        if (token) {
          history.push("/");
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }

  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (error) {
    return <div>Oops... {error.message}</div>;
  }

  if (isConnected) {
    return (
      <div>

        {/* <button onClick={() => logout({ returnTo: window.location.origin })}>Log out</button> */}
      </div>
    );
  } else {
    return (
      <button
        className="btn buttonLogin"
        onClick={() => connectWithPopup({ access_id: "8ciAFSydBUtXFO8RsgEQ" })}
      >
        <div className="d-flex justify-content-center align-items-center">


Login With Social
        {/* <BsFacebook style={{color: "#0B86EE", fontSize: "1.7rem"}} />&nbsp;&nbsp;&nbsp;&nbsp;
        <FcGoogle style={{ fontSize: "1.7rem"}} />&nbsp;&nbsp;&nbsp;&nbsp;
        <BsApple style={{color: "black", fontSize: "1.7rem"}} />&nbsp;&nbsp;&nbsp;&nbsp;
        <BsTwitter style={{color:" #1DA1F2", fontSize: "1.7rem"}} /> */}

        </div>
      </button>
    );
  }
}

export default App2;
