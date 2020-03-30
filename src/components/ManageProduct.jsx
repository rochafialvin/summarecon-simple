import React, { Component } from 'react'
import axios from 'axios'

class ManageProduct extends Component{

    state = {
        products: []
    }

    // 2
    componentDidMount(){
        this.getData()
    }

    getData = () => {
        axios.get(
            'http://localhost:2020/products'
        ).then((res) => {
            this.setState({ products: res.data })
        })
    }


    // Render List
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
                    <td><img className="list" src={product.src} alt=""/></td>
                    <td>
                        <button className="btn btn-outline-primary btn-block btn-sm" >Edit</button>
                        <button className="btn btn-outline-danger btn-block btn-sm" >Delete</button>
                    </td>
                </tr>
            )
        })
    }

    // Input Data
    addProduct = () => {
        // Ambil data dari "Input Product"
        let name_source = this.name.value
        let desc_source = this.desc.value
        let price_source = this.price.value
        let src_source = this.src.value
        
        // Taruh data ke database "db.json"
        axios.post(
            'http://localhost:2020/products',
            {name: name_source, desc: desc_source, price: price_source, src: src_source}

        ).then((res) => {
            
            this.getData()

        })

        

    }

    // 1
    render(){
        return (
            <div className="container">
                {/* List Product */}
                <h1 className="text-center display-4">Manage Product</h1>
                <table className="table table-hover text-center mb-5">
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

                {/* Input Procduct */}
                <h1 className="text-center display-4">Input Product</h1>
                <table class="table table-hover text-center mb-5">
                    <thead>
                        <tr>
                            <td scope="col"> <input ref={(input) => {this.name = input}} placeholder="name" className='form-control' type="text" /> </td>
                            <td scope="col"> <input ref={(input) => {this.desc = input}} placeholder="description" className='form-control' type="text" /> </td>
                            <td scope="col"> <input ref={(input) => {this.price = input}} placeholder="price" className='form-control' type="text" /> </td>
                            <td scope="col"> <input ref={(input) => {this.src = input}} placeholder="image" className='form-control' type="text" /> </td>
                            <td scope="col"> <button onClick={this.addProduct}  className="btn btn-outline-primary btn-block btn-sm">input</button> </td>
                        </tr>
                    </thead>
                </table> 

            </div>
        )
    }
}

export default ManageProduct