import React, { Component } from 'react'
import axios from 'axios'

class ManageProduct extends Component{

    state = {
        products: []
    }

    // 2
    componentDidMount(){
        
        axios.get(
            'http://localhost:2020/products'
        ).then((res) => {
            this.setState({ products: res.data })
        })

    }


    // Tugas hari sabtu : Render Map
    renderList = () => {
        // this.state.products = [ {}, {}, {} ]
        // product = {id, name, desc, price, src}
        return this.state.products.map((product) => {
            return(
                <tr>
                    <td>{product.id}</td>
                    <td>{product.name}</td>
                    <td>{product.desc}</td>
                    <td>{product.price}</td>
                    {/* <td><img width="50" src={product.src} alt=""/></td> */}
                    <td><img width="50" src={product.src} alt=""/></td>
                    <td>
                        <button className="btn btn-outline-primary btn-block btn-sm" >Edit</button>
                        <button className="btn btn-outline-danger btn-block btn-sm" >Delete</button>
                    </td>
                </tr>
            )
        })
    }

    // 1
    render(){
        return (
            <div className="container">
                {/* List Product */}
                <h1 className="text-center display-4">Manage Product</h1>
                <table class="table table-hover text-center mb-5">
                    <thead>
                        <tr>
                            <th scope="col">ID</th>
                            <th scope="col">NAME</th>
                            <th scope="col">DESC</th>
                            <th scope="col">PRICE</th>
                            <th scope="col">PICTURE</th>
                            <th scope="col">ACTION</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.renderList()}
                    </tbody>
                </table>

                {/* Tugas hari minggu */}
                {/* Input Procduct */}


            </div>
        )
    }
}

export default ManageProduct