import React, { useState, useContext ,useEffect} from "react";
import { AppContext } from "../context/ContextProvider";
import { useHistory } from "react-router-dom";
import "./Login.css";

const Login = () => {
    let history = useHistory()
const { setIsLogged, userLoggedInfo, setUserLoggedInfo, users } = useContext(
  AppContext
);
const [loginForm, setLoginForm] = useState({
  username: "",
  password: "",
});
const [error, setError] = useState(false);
const handleChange = (e) => {
  const { name, value } = e.target;
  setLoginForm({
    ...loginForm,
    [name]: value,
  });
  setError(false);
};
const handleSubmit = (e) => {
  e.preventDefault();
  if (loginForm.username === null || loginForm.username.length < 3) {
    return setError(true);
  }
  for (let i = 0; i < users.length; i++) {
    if (
      loginForm.username === users[i].username &&
      loginForm.password === users[i].password
    ) {
      setIsLogged(true);
      setUserLoggedInfo(users[i]);
      history.push("/");
    }
  }
};

useEffect(() => {}, [userLoggedInfo]);
  return (
    <div className="login-form">
      <h2> Wolcome To Our Store</h2>
      <form noValidate onSubmit={handleSubmit}>
        <input
          type="text"
          name="username"
          value={loginForm.username}
          onChange={handleChange}
          placeholder="UserName"
        />
        <input
          type="text"
          name="password"
          value={loginForm.password}
          onChange={handleChange}
          placeholder="Password"
        />
        <button type="submit">LOGIN</button>
        {error ? (
          <p style={{ color: "red", marginTop: "1rem" }}>
            The Values Provided Do Not Match
          </p>
        ) : (
          ""
        )}
      </form>
    </div>
  );
};

export default Login;
