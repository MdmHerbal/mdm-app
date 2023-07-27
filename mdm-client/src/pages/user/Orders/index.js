import React, {useState, useEffect} from "react";
import UserMenu from "../../../components/Layout/UserMenu";
import Layout from "../../../components/Layout/Layout";
import {useAuth} from "../../../context/auth";
import axios from "axios";
import "./index.css";

const Orders = () => {
  const [orders, setOrders] = useState([]);
  const [auth] = useAuth();

  const getAllOrders = async () => {
    const {data} = await axios.get("/api/v1/auth/orders");
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
            {orders.map((each) => (
              <table>
                <tr>
                  <td>#</td>
                  <td>{each?.status}</td>
                  <td>{each?.buyer?.name}</td>
                  <td>Orders</td>
                  <td>Payment</td>
                  <td>Quantity</td>
                </tr>
                <tbody>
                  <tr>
                    <td></td>
                    <td>{each.status}</td>
                    <td>{each.bu}</td>
                    <td></td>
                    <td></td>
                    <td></td>
                  </tr>
                </tbody>
              </table>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Orders;
