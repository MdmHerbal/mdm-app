import React, {useState, useEffect} from 'react';
import {useAuth} from '../../context/auth';
import axios from 'axios';
import {Outlet} from 'react-router-dom';
import Spinner from '../Spinner';

export default function PrivateRoute() {
    const [ok, setOk] = useState(false);
    const [auth] = useAuth();

    useEffect(() => {
        const authCheck = async () => {
            const res = await axios.get('/api/v1/auth/user-auth');
            if (res.data.ok) {
                console.log(res.data.ok)
                setOk(true);
            } else {
                setOk(false);
            }
            console.log("first")
        };

        if (auth.token) {
            authCheck();
            console.log(auth.token)
        }

    }, [auth.token]);

    console.log(ok)

    return ok ? <Outlet/> : <Spinner/>;
};
