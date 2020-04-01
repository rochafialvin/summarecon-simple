import React, { Component } from 'react'
import axios from 'axios'

class Home extends Component {

    state = {
        products : []
    }


    componentDidMount() {
        this.getProducts()
    }

    getProducts = () => {
        axios.get('http://localhost:2020/products')
        .then((res) => {
            this.setState({ products: res.data })
        })
    }

    renderProducts = () => {
        return this.state.products.map((product) => {

            // Untuk memisahkan setiap 3 digit angka dengan karakter titik.
            product.price = product.price.toLocaleString('in')

            return (
                <div className="card col-lg-5 col-xl-3 mx-auto mx-xl-4 my-3">
                    <img className="card-img-top" src={product.src} alt=""/>
                    <div className="card-body">
                        <div  style={{height: 50}}>
                            <h5 className="card-title">{product.name}</h5>
                        </div>
                        <p className="card-text">{product.desc}</p>
                        <p className="card-text">Rp. {product.price}</p>
                        <input className="form-control" type="text" placeholder="Jumlah Qty"/>
                        <button className="btn btn-secondary btn-block my-2">Detail</button>
                        <button className="btn btn-primary btn-block">Add to Cart</button>
                    </div>
                </div>
            )
        })
    }

    render() {
        return (
            <div className="container-fluid">
                <div className="row">
                    {/* Search Box */}
                    <div className="col-10 col-lg-3 col-xl-2">
                        <h1 className="text-center display-3">Search Box</h1>
                    </div>

                    {/* List Products */}
                    <div className=" row col-10 col-lg-9">
                        {this.renderProducts()}
                    </div>
                </div>
            </div>
        )
    }
}

export default Home
