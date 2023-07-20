import React, {useState} from "react";
import toast from "react-hot-toast";
import "./index.css";
import Layout from "../../../components/Layout/Layout";
import axios from "axios";
import {useNavigate} from "react-router-dom";
import "./index.css";

export const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setpassword] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const navigate = useNavigate();

  const onSubmitRegisterForm = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("/api/v1/auth/register", {
        name,
        email,
        password,
        phone,
        address,
      });

      if (res && res.data.success) {
        toast.success(res.data && res.data.message);
        navigate("/login");
      } else {
        toast.error(res.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong");
    }
  };

  return (
    <Layout>
      <div className="login-section">
        <div className="formbox">
          <form onSubmit={onSubmitRegisterForm}>
            <h2>Sign Up</h2>
            <div className="input-box">
              <span className="icon">
                <i class="bx bxs-envelope"></i>
              </span>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <label for="">Name</label>
            </div>

            <div className="input-box">
              <span className="icon">
                <i class="bx bxs-lock-alt"></i>
              </span>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <label for="">Email</label>
            </div>

            <div className="input-box">
              <span className="icon">
                <i class="bx bxs-lock-alt"></i>
              </span>
              <input
                type="password"
                value={password}
                onChange={(e) => setpassword(e.target.value)}
              />
              <label for="">Password</label>
            </div>

            <div className="input-box">
              <span className="icon">
                <i class="bx bxs-lock-alt"></i>
              </span>
              <input
                type="numbers"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
              <label for="">Phone</label>
            </div>

            <div className="input-box">
              <span className="icon">
                <i class="bx bxs-lock-alt"></i>
              </span>
              <input
                type="text"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
              />
              <label for="">Address</label>
            </div>
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </form>
        </div>
      </div>
    </Layout>
  );
};
