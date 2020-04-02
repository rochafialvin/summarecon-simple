import React, { Component } from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'

class Home extends Component {

    state = {
        products : [], // 7 products
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
                <div key={product.id} className="card col-lg-5 col-xl-3 mx-auto mx-xl-4 my-3">
                    <img className="card-img-top" src={product.src} alt=""/>
                    <div className="card-body">
                        <div  style={{height: 50}}>
                            <h5 className="card-title">{product.name}</h5>
                        </div>
                        <p className="card-text">{product.desc}</p>
                        <p className="card-text">Rp. {product.price}</p>
                        <input className="form-control" type="text" placeholder="Jumlah Qty"/>
                        <Link to={`/detailproduct/${product.id}`}>
                            <button className="btn btn-secondary btn-block my-2">Detail</button>
                        </Link>
                        <button className="btn btn-primary btn-block">Add to Cart</button>
                    </div>
                </div>
            )
        })
    }

    onBtnSearch = () => {
        axios.get('http://localhost:2020/products')
        .then((res) => {
            
            // let keyword = this.name.value

            // let filterResult = res.data.filter((product) => {
            //     return (
            //         product.name.toLowerCase().includes(keyword.toLowerCase())
            //     )
            // })
            
            // Price

            let min = parseInt(this.min.value) // 90.000
            let max = parseInt(this.max.value)

            if(isNaN(max)){ // Min
                var filterResult = res.data.filter((data) => {
                    return (
                        data.price >= min
                    )
                }) 
            }
            else if(isNaN(min)){ // Max
                var filterResult = res.data.filter((data) => {
                    return (
                        data.price <= max
                    )
                }) 

            } else { // Min Max
                var filterResult = res.data.filter((data) => {
                    return (
                        data.price >= min && data.price <= max
                    )
                }) 

            }
        


            this.setState({ products: filterResult })
        })

    }

    render() {
        return (
            <div className="container-fluid">
                <div className="row">
                    {/* Search Box */}
                    <div className="col-10 col-lg-3 col-xl-2">
                        <div className="mt-3">
                            <div className="card">

                                <div className=" border-bottom border-secondary card-title">
                                    <h1 className="text-center">Search</h1>
                                </div>

                                <div className="card-body">
                                    <h4>Name</h4>
                                    <input ref={ (input) => { this.name = input } } className="form-control" type="text"/>

                                    <h4>Price</h4>
                                    <input ref={ (input) => { this.min = input } } placeholder="Minimum" className="form-control mb-2" type="text"/>
                                    <input ref={ (input) => { this.max = input } } placeholder="Maximum" className="form-control" type="text"/>

                                    <button onClick={this.onBtnSearch} className="btn btn-block btn-outline-primary mt-5" >Search</button>
                                    <button className="btn btn-block btn-outline-danger" >Reset</button>
                                </div>

                            </div>
                        </div>
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
