import React, {useState, useEffect} from "react";
import {useAuth} from "../../context/auth";
import axios from "axios";
import {Outlet} from "react-router-dom";
import Spinner from "../Spinner";

export default function PrivateRoute() {
  const [ok, setOk] = useState(false);
  const [auth] = useAuth();

  //   const customAxios = axios.create({
  //     baseURL: "http://localhost:3000", // Set your base URL here
  //     headers: {
  //       // Only include the headers you want for this instance
  //       Accept: "application/json, text/plain, */*",
  //       // "User-Agent":
  //       //   "Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/115.0.0.0 Mobile Safari/537.36",
  //       // "Accept-Encoding": "gzip, deflate, br",
  //       // "Accept-Language": "en-US,en;q=0.9",
  //       // Any other headers you want to include, e.g., "Authorization", etc.
  //     },
  //   });

  useEffect(() => {
    const authCheck = async () => {
      const res = await axios.get("/api/v1/auth/user-auth");
      if (res.data.ok) {
        setOk(true);
      } else {
        setOk(false);
      }
      console.log("first");
    };

    if (auth.token) {
      authCheck();
    }
  }, [auth?.token]);

  return ok ? <Outlet /> : <Spinner />;
}
