import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import { connect } from 'react-redux'
import axios from '../config/axios'
import swal from 'sweetalert2'

class ProductItem extends Component {

   addToCart = () => {
      let idProduct = this.props.product.id
      let username = this.props.username
      let qty = parseInt(this.qty.value)
      let desc = this.props.product.desc
      let price = this.props.product.price
      let src = this.props.product.src

      // Periksa apakah user sudah pernah menambahkan product ini ke carts
      axios.get('/carts', {
         params: {
            idProduct, username
         }
      }).then((res) => {
         // res.data = [ { id : 3, idProduct: 2, username : "rochafi", qty: 3, ... } ]
         // Jika produk saat ini belum ada di cart
         if(res.data.length === 0){
            // post ke carts
            axios.post('/carts', { idProduct, username, qty, desc, price, src })
               .then((res) => {
                  alert('Produk berhasil ditambahkan')
               })
         } else {
            let idCart = res.data[0].id
            let newQty = res.data[0].qty + qty

            axios.patch(`/carts/${idCart}`, {qty : newQty})
               .then((res) => {
                  alert('Produk berhasil di-update')
               })
         }
      })

   }

   render() {
      return (
         <div key={this.props.product.id} className="card col-lg-5 col-xl-3 mx-auto mx-xl-4 my-3">
            <img className="card-img-top" src={this.props.product.src} alt=""/>
            <div className="card-body">
               <div  style={{height: 50}}>
                     <h5 className="card-title">{this.props.product.name}</h5>
               </div>
               <p className="card-text">{this.props.product.desc}</p>
               <p className="card-text">Rp. {this.props.product.price}</p>
               <input ref={( input ) => { this.qty = input }} className="form-control" type="text" placeholder="Jumlah Qty"/>
               <Link to={`/detailproduct/${this.props.product.id}`}>
                     <button className="btn btn-secondary btn-block my-2">Detail</button>
               </Link>
               <button onClick={this.addToCart} className="btn btn-primary btn-block">Add to Cart</button>
            </div>
         </div>
      )
   }
}

let mapStateToProps = state => {
   return {
      username: state.auth.username
   }
}

export default connect(mapStateToProps)(ProductItem)