import React, {useEffect, useState} from "react";
import Layout from "../../../components/Layout/Layout";
import AdminMenu from "../../../components/Layout/AdminMenu";
import axios from "axios";
import moment from "moment";
import {useCart} from "../../../context/cart";
import {AiOutlineDelete} from "react-icons/ai";
import {usePriceContext} from "../../../context/price";
import {Select} from "antd";
const {Option} = Select;

const AdminOrders = () => {
  const [cart, setCart] = useCart();
  const [status, setStatus] = useState([
    "Not Processed",
    "Processing",
    "Shipped",
    "Delivered",
    "Cancelled",
  ]);
  const [orders, setOrders] = useState([]);
  const {totalCount} = usePriceContext();

  const onChangeStatus = async (id, value) => {
    try {
      await axios.put(`/api/v1/auth/status-update/${id}`, {
        status: value,
      });
      console.log("toatlCount", totalCount);
      // Refresh the orders data after status update
      getAllOrders();
    } catch (error) {
      console.log(error);
    }
  };

  const getAllOrders = async () => {
    try {
      const {data} = await axios.get("/api/v1/auth/all-orders");
      setOrders(data);
    } catch (error) {
      console.log(error);
    }
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
            {orders.map((o, i) => (
              <div key={o._id}>
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
                    <tr>
                      <td>{i + 1}</td>
                      <td>
                        <Select
                          defaultValue={o.status || ""}
                          style={{width: 200}}
                          onChange={(value) => onChangeStatus(o._id, value)}>
                          {status.map((e) => (
                            <Option key={e} value={e}>
                              {e}
                            </Option>
                          ))}
                        </Select>
                      </td>
                      <td>{o.buyer?.name}</td>
                      <td>{moment(o.createAt).fromNow()}</td>
                      <td>{o.payment?.success ? "Success" : "Failed"}</td>
                      <td>{o.products.length}</td>
                    </tr>
                  </tbody>
                </table>

                <div className="container">
                  {o.products.map((each) => (
                    <ul key={each._id} className="cart-item-bg">
                      <img
                        src={`/api/v1/product/product-photo/${each._id}`}
                        alt={each.name}
                        width="30%"
                        height={"100px"}
                      />
                      <h6>{each.name}</h6>
                      <h6>{each.price}</h6>
                      <h6>
                        {totalCount.find((item) => item.id === each._id)
                          ?.count || 0}
                      </h6>
                      <h6>
                        ₹
                        {each.price *
                          (totalCount.find((item) => item.id === each._id)
                            ?.count || 0)}
                      </h6>

                      <AiOutlineDelete className="delete-icon" />
                    </ul>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default AdminOrders;
