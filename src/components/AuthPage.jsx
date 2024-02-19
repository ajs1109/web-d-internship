import React, { useEffect, useState } from "react";
import "../scss/AuthPage.scss";
import { useNavigate } from "react-router-dom";

const AuthPage = () => {
  const [details, setDetails] = useState({ username: "", pan: "", file: {} });

  const navigate = useNavigate();
  useEffect(() =>{
    if(localStorage.getItem('webd')) navigate('/home');
    },[])

  const handleClick = () => {
    if (
      details.username === "" ||
      details.pan === "" ||
      details.file.length === 0
    ) {
      alert("invalid");
    } else {
      localStorage.setItem("webd", JSON.stringify(details));
        navigate('/home');
    }
  };

  return (
    <div id="auth">
      <h1>Welcome!</h1>
      <h3>Login Here</h3>
      <label htmlFor="username">UserName : </label>{" "}
      <input
        type="text"
        id="username"
        value={details.username}
        onChange={(e) => setDetails({ ...details, username: e.target.value })}
      />
      <label htmlFor="pan">PAN Number :</label>{" "}
      <input
        type="text"
        value={details.pan}
        onChange={(e) => setDetails({ ...details, pan: e.target.value })}
        id="pan"
      />
      <input
        type="file"
        onChange={(e) =>
          setDetails({
            ...details,
            file: URL.createObjectURL(e.target.files[0]),
          })
        }
        name=""
        id=""
      />
      <img src={details.file} alt="" id="uploaded-photo" />
      <button type="submit" onClick={handleClick}>
        Submit
      </button>
    </div>
  );
};

export default AuthPage;
