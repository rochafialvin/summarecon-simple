import React, { Component } from 'react'
import axios from 'axios'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

class ManageProduct extends Component{

    state = {
        products: [],
        modal : false
    }

    // Running hanya sekali, setelah proses render yang pertama
    componentDidMount(){
        this.getData()
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
                        <button onClick={ () => { this.onEditToggle(product.id) } } className="btn btn-outline-primary btn-block btn-sm" >Edit</button>
                        <button onClick={ () => { this.onDeleteProduct(product.id) } } className="btn btn-outline-danger btn-block btn-sm" >Delete</button>
                    </td>
                </tr>
            )
        })
    }

    // Ambil data
    getData = () => {
        axios.get(
            'http://localhost:2020/products'
        ).then((res) => {
            this.setState({ products: res.data })
        })
    }
    
    // Input Data
    onAddProduct = () => {
        // Ambil data dari "Input Product"
        let name_source = this.name.value
        let desc_source = this.desc.value
        let price_source = this.price.value
        let src_source = this.src.value
        
        // Taruh data ke database "db.json"
        axios.post(
            'http://localhost:2020/products',
            {   
                name: name_source,
                desc: desc_source,
                price: price_source,
                src: src_source
            }

        ).then((res) => {
            this.getData()
        })

    }

    // Delete Data
    // http://localhost:2020/products/5
    onDeleteProduct = (id) => {
        axios.delete(`http://localhost:2020/products/${id}`)
        .then((res) => { this.getData() })
    }

    // Edit
    onEditToggle = (id) => {
        // res.data = {id, name, price, desc, src}
        axios.get(`http://localhost:2020/products/${id}`)
        .then((res) => { 
            this.setState({ modal : true })
         })
    }

    // Save

    // Cancel
    onCancelToggle = () => {
        this.setState({ modal : false })
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
                            <td scope="col"> <button onClick={this.onAddProduct}  className="btn btn-outline-primary btn-block btn-sm">input</button> </td>
                        </tr>
                    </thead>
                </table>

                {/* Modal Edit */}
                {/* <Modal isOpen={this.state.modal} toggle = {this.onCancelToggle} > jika ingin klik sembarang menutup modal*/}
                <Modal isOpen={this.state.modal} >
                    <ModalHeader >Edit your product</ModalHeader>
                    <ModalBody>
                        Name : <input className="form-control" type="text" ref={(input) => { this.editName = input }}/>
                        Desc : <input className="form-control" type="text" ref={(input) => { this.editDesc = input }}/>
                        Price : <input className="form-control" type="text" ref={(input) => { this.editPrice = input }}/>
                        Img : <input className="form-control" type="text" ref={(input) => { this.editSrc = input }}/>
                    </ModalBody>
                    <ModalFooter>
                        <Button outline color="warning" onClick={this.onCancelToggle} >Cancel</Button>
                        <Button outline color="success" >Save</Button>
                    </ModalFooter>
                </Modal>

            </div>
        )
    }
}

export default ManageProduct