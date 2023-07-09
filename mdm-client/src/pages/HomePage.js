import React from "react";
import Layout from "../components/Layout";
import {useAuth} from "../context/auth";
export const HomePage = () => {
    const [auth, setAuth] = useAuth();
    return (
        <Layout>
            <h1>Home Page</h1>
            <pre>{JSON.stringify(auth,null,4)}</pre>
        </Layout>
    );
};
