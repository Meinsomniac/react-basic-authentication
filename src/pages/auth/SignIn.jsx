import React, { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

export default function SignIn() {
  const data = useAuth()
  const login = data?.login
  const navigate = useNavigate()

  const onSubmitHandler = useCallback(async (e) => {
    e.preventDefault()
    const payload = {
      username:e.target.elements.username.value,
      password:e.target.elements.password.value,
    }
    const res = await login(payload)
    if(res.data) navigate('/home')
  }, [login,navigate]);

  return (
    <div
      style={{
        width: "100%",
        height: "100vh",
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <form onSubmit={onSubmitHandler} name="sign-in">
        <div style={{
          padding:5,
        }}>
          <input type="text" placeholder="username" name="username"/>
        </div>
        <div style={{
          padding:5,
        }}>
          <input type="password" placeholder="Password" name="password"/>
        </div>
        <div style={{
          padding:5,
        }}>
          <button type="submit">submit</button>
        </div>
      </form>
    </div>
  );
}
