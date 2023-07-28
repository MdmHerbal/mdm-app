import React, {useEffect, useState} from "react";
import Layout from "../../../components/Layout/Layout";
import AdminMenu from "../../../components/Layout/AdminMenu";
import axios from "axios";
import moment from "moment";
import {Select} from "antd";
const {Option} = Select;

const AdminOrders = () => {
  const [status, setStatus] = useState([
    "Not Processed",
    "Processing",
    "Shipped",
    "Delivered",
    "Cancelled",
  ]);
  const [changeStatus, setChangeStatus] = useState("");
  const [orders, SetOrders] = useState([]);

  const onChangeStatus = async (id, value) => {
    const {data} = await axios.put(`/api/v1/auth/status-update/${id}`, {
      status: value,
    });
  };

  const getAllOrders = async () => {
    const {data} = await axios.get("/api/v1/auth/all-orders");
    SetOrders(data);
  };

  useEffect(() => {
    getAllOrders();
  }, []);

  return (
    <Layout title={"All Order Data"}>
      <div className="container-fluid p-3 m-3">
        <div className="row">
          <div className="col-md-3">
            <AdminMenu />
          </div>
          <div className="col-md-9">
            <h3>All Orders</h3>
            {orders?.map((o, i) => (
              <table>
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Status</th>
                    <th>Buyer</th>
                    <th>date</th>
                    <th>Payment</th>
                    <th>Quantity</th>
                  </tr>
                </thead>

                <tbody>
                  <tr>
                    <td>{i + 1}</td>
                    <td>
                      <Select
                        defaultValue={o?.status || ""} // Provide a default value ('' in this case) if o?.status is falsy
                        style={{width: 200}}
                        onChange={(value) => onChangeStatus(o?._id, value)}>
                        {status.map((e, index) => (
                          <Option key={index} value={e}>
                            {e}
                          </Option>
                        ))}
                      </Select>
                    </td>
                    <td>{o?.buyer?.name}</td>
                    <td>{moment(o?.createAt).fromNow()}</td>
                    <td>{o?.payment.success ? "Success" : "Failed"}</td>
                    <td>{o?.products?.length}</td>
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

export default AdminOrders;
