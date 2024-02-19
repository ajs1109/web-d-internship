import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../scss/AuthPage.scss";

const HomePage = () => {
  const navigate = useNavigate();
  const details = JSON.parse(localStorage.getItem("webd"));
  useEffect(() => {
    console.log(details);
    if (!details) navigate("/");
  }, []);

  const handleClick = () => {
    localStorage.clear();
    navigate("/");
  };

  return (
    <div id="home">
      <div id="home-header">
        <h1>Home Page</h1>
        <button onClick={handleClick}>Logout</button>
      </div>
      <div id="home-body">
        <div>
          <h1>Hi {details?.username}</h1>
          <h1>Your PAN number is : {details?.pan}</h1>
        </div>
        <img src={details?.file} width="100px" alt="" />
      </div>
    </div>
  );
};

export default HomePage;
