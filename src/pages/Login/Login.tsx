import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Login.module.scss";

export default function Login() {
  const [data, setData] = React.useState({
    username: "",
    password: "",
    password1: "",
  });
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    const { username, password, password1 } = data;
    let regexPassword = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/;
    e.preventDefault();
    if (username != username.toLowerCase()) {
      alert("Username must be in uppercase");
      return;
    }
    if (password !== password1) {
      alert("Password not match");
      return;
    }
    if (password.length < 6) {
      alert("Password must be at least 6 characters");
      return;
    }

    if (!regexPassword.test(password)) {
      alert("Password must contain at least 1 letter and 1 number");
      return;
    }

    navigate("/subscription");
  };

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };
  return (
    <form action="" onSubmit={handleSubmit}>
      <div className={styles.login}>
        <h1>Login</h1>
        <div className={styles.form}>
          <label htmlFor="username">Username</label>
          <input
            type="text"
            name="username"
            id="username"
            placeholder="username"
            onChange={(e) => handleOnChange(e)}
            value={data.username}
            required
          />
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Password"
            onChange={(e) => handleOnChange(e)}
            value={data.password}
            required
          />
          <label htmlFor="password1">Password</label>
          <input
            type="text"
            name="password1"
            id="password1"
            placeholder="Password"
            onChange={(e) => handleOnChange(e)}
            value={data.password1}
            required
          />
          <button type="submit">Login</button>
        </div>
      </div>
    </form>
  );
}
