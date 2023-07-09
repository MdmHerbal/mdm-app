import React, {useState} from "react";
import "./index.css";
import Layout from "../../../components/Layout";
import axios from 'axios';
import toast from 'react-hot-toast';
import {useAuth} from "../../../context/auth";
import {useNavigate} from "react-router-dom";

export const Login = () => {
    const [email, setEmail] = useState("")
    const [password, setpassword] = useState("")
    const [auth, setAuth] = useAuth()

    const navigate = useNavigate()
    const onHandleLoginPage = async (e) => { // console.log(email, password)
        e.preventDefault();
        try {
            const res = await axios.post("/api/v1/auth/login", {email, password});
            console.log(res)
            if (res && res.data.message) {
                toast.success(res && res.data.message);
                setAuth({
                    ...auth,
                    user: res.data.user,
                    token: res.data.token
                })
                navigate("/")
            } else {
                toast.success(res.data.message);
            };

        } catch (error) {
            toast.error("Something Went Wrong");
        }

    };

    return (
        <Layout>
            <form className="login-container"
                onSubmit={onHandleLoginPage}>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">
                        Email address
                    </label>
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
                        value={email}
                        onChange=
                        {(e)=> setEmail(e.target.value)}/>
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">
                        Password
                    </label>
                    <input type="password" className="form-control" id="exampleInputPassword1"
                        value={password}
                        onChange=
                        {(e)=> setpassword(e.target.value)}/>
                </div>

                <button type="submit" className="btn btn-primary">
                    Login
                </button>
            </form>
        </Layout>
    );
};
