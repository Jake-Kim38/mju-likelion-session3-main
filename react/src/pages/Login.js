import React, { useState } from "react";
import "../Login.css";
import { UserInfo } from "./UserInfo";
import { useNavigate } from "react-router-dom";
const Login = () => {
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  localStorage.setItem("id", UserInfo.id);
  localStorage.setItem("password", UserInfo.password);

  const handleIdChange = (e) => {
    setId(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleLogin = (e) => {
    e.preventDefault();
    if (
      localStorage.getItem("id") === id &&
      localStorage.getItem("password") === password
        ? navigate("/home")
        : alert("무언가를 잘못 입력하셨어요")
    );
  };

  return (
    <div className="wrapper_box">
      <h2>LOG IN</h2>
      <form className="login_form" onSubmit={handleLogin}>
        <input
          type="text"
          className="login_input"
          placeholder="ID"
          name="id"
          onChange={handleIdChange}
        />
        <input
          placeholder="Password"
          type="Password"
          className="login_input"
          name="password"
          onChange={handlePasswordChange}
        />
        <button type="submit" className="login_btn">
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
