import React, {useState} from "react";
import "./index.css";
import Layout from "../../../components/Layout/Layout";
import axios from "axios";
import toast from "react-hot-toast";
import {useAuth} from "../../../context/auth";
import {useNavigate} from "react-router-dom";

export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setpassword] = useState("");
  const [auth, setAuth] = useAuth();

  const navigate = useNavigate();
  const onHandleLoginPage = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("/api/v1/auth/login", {email, password});
      console.log(res);
      if (res && res.data.message) {
        toast.success(res.data.message);
        setAuth({
          ...auth,
          user: res.data.user,
          token: res.data.token,
        });
        localStorage.setItem("auth", JSON.stringify(res.data));
        navigate("/");
      } else {
        toast.success("Failed in login");
      }
    } catch (error) {
      toast.error("Can You Please Register to see Products");
    }
  };

  return (
    <Layout>
      <form className="login-container" onSubmit={onHandleLoginPage}>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword1"
            value={password}
            onChange={(e) => setpassword(e.target.value)}
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Login
        </button>
      </form>
    </Layout>
  );
};
