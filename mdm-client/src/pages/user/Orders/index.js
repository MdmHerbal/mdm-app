import React, {useState, useEffect} from "react";
import UserMenu from "../../../components/Layout/UserMenu";
import Layout from "../../../components/Layout/Layout";
import {useAuth} from "../../../context/auth";
import moment from "moment";
import axios from "axios";
import "./index.css";

const Orders = () => {
  const [orders, setOrders] = useState([]);
  const [auth] = useAuth();

  const getAllOrders = async () => {
    const {data} = await axios.get("/api/v1/auth/orders");
    console.log("impData", data);
    setOrders(data);
  };

  useEffect(() => {
    if (auth?.token) getAllOrders();
  }, [auth?.token]);

  return (
    <Layout title={"Your Orders"}>
      <div className="container-fluid p-3 m-3">
        <div className="row">
          <div className="col-md-3">
            <UserMenu />
          </div>
          <div className="col-md-9">
            <h3>All Orders</h3>
            {orders?.length >= 1 ? (
              <>
                <table>
                  <thead>
                    <tr>
                      <th>#</th>
                      <th>Status</th>
                      <th>Buyer</th>
                      <th>Date</th>
                      <th>Payment</th>
                      <th>Quantity</th>
                    </tr>
                  </thead>
                  <tbody>
                    {orders?.map((o, i) => (
                      <tr key={o._id}>
                        <td>{i + 1}</td>
                        <td>{o?.status}</td>
                        <td>{o?.buyer?.name}</td>
                        <td>{moment(o?.createAt).fromNow()}</td>
                        <td>{o?.payment?.success ? "Success" : "Failed"}</td>
                        <td>{o?.products?.length}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </>
            ) : (
              <h1>No Orders</h1>
            )}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Orders;
