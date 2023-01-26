import React, { useState } from "react";

export default function Header() {
  const [signinnav, setSignInNav] = useState();
  const [signupnav, setSignUpNav] = useState();
  const [logo, setLogo] = useState();

  const handleSignIn = () => {
    setSignInNav((window.location.href = "/sign-in"));
  };

  const handleSignUp = () => {
    setSignUpNav((window.location.href = "/sign-up"));
  };

  const handleLogo = () => {
    setLogo((window.location.href = "/"));
  };

  return (
    <div className="">
      <div className="row py-3 ps-5" style={styles.header}>
        <div
          className="col-4 fw-bold fs-3 text-white"
          onClick={handleLogo}
          style={styles.logo}
        >
          House Price Prediction
        </div>
        <div className="col-6"></div>
        <div className="col-2 d-flex justify-content-around text-white">
          <div
            className=" p-2 btn btn-primary"
            onClick={handleSignUp}
          >
            Sign up
          </div>
          <div
            className="px-3 py-2 me-3 btn btn-primary"
            onClick={handleSignIn}
          >
            Login
          </div>
        </div>
      </div>
    </div>
  );
}

const styles = {
  logo: {
    cursor: "pointer",
  },
  header:{
    backgroundColor:"#000c33"
  }

};
