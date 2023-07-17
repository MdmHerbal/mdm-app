import React from 'react'
import Layout from '../../components/Layout/Layout'
import AdminMenu from "../../components/Layout/AdminMenu";

const Users = () => {
    return (
        <Layout title={"Dashboard- All Users"}>
            <div className="container-fluid m-3 p-3 dashboard">
                <div className="row">
                    <div className="col-md-3">
                        <AdminMenu/>
                    </div>
                    <div className="card w-75 p-3">
                        <h2>All Users</h2>
                    </div>
                </div>
            </div>
        </Layout>

    )
}

export default Users
