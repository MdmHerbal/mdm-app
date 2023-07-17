import React, {useState, useEffect} from 'react'
import Layout from '../../components/Layout/Layout'
import AdminMenu from "../../components/Layout/AdminMenu";
import CategoryForm from '../../components/Form/CategoryForm';
import axios from 'axios';
import toast from 'react-hot-toast';


const CreateCategory = () => {
    const [name, setName] = useState("")
    const [categories, setCategories] = useState([])

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(name)
        try {
            const {data} = await axios.post('/api/v1/category/create-category', {name});
            if (data.success) {
                toast.success(`${name} is Created`);
                getAllcategories();
            } else {
                toast.error(data.message);
            }
        } catch (error) {
            console.log(error)
        }
    }


    const getAllcategories = async () => {
        try {
            const categories = await axios.get("/api/v1/category/get-category")
            if (categories.data.success) {
                setCategories(categories.data.category)
            } else {
                toast.success(categories.data.message)
            }
        } catch (error) {
            console.log(error)
        }
    }
    useEffect(() => {
        getAllcategories()
    }, [])

    return (<Layout title={"Dashboard - Create Category"}>
        <div className="container-fluid m-3 p-3 dashboard">
            <div className="row">
                <div className="col-md-3">
                    <AdminMenu/>
                </div>
                <div className="card w-75 p-3">
                    <h2>Manage Category</h2>
                    <div className="p-3 w-50">
                        <CategoryForm handleSubmit={handleSubmit}
                            value={name}
                            setValue={setName}/>
                    </div>

                    <div className="w-75">
                        <table class="table">
                            <thead>
                                <tr>
                                    <th scope="col">Name</th>
                                    <th scope="col">Action</th>
                                </tr>
                            </thead>
                            <tbody> {
                                categories.map((each) => <>
                                    <tr key={
                                        each._id
                                    }>
                                        <td> {
                                            each.name
                                        }</td>
                                        <td>
                                            <button className='btn btn-primary'>Edit</button>
                                        </td>
                                        <td>
                                            <button className='btn btn-primary'>Delete</button>
                                        </td>
                                    </tr>
                                </>)
                            } </tbody>

                        </table>
                    </div>
                </div>
            </div>
        </div>
    </Layout>)
}

export default CreateCategory
