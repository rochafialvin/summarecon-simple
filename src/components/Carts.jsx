import React, { Component } from 'react';
import axios from '../config/axios'
import {connect} from 'react-redux'

class Cart extends Component {

   state = {
      products : []
   }

   componentDidMount() {
      let username = this.props.username
      axios.get('/carts', {
         params : {
            username
         }
      }).then(res => {
         this.setState({products : res.data})
      })
   }

   renderList = () => {
      return this.state.products.map(product => {

         let {id, name, desc, price, qty, src} = product

         return (
            <tr>
               <td>{id}</td>
               <td>{name}</td>
               <td>{desc}</td>
               <td>{price}</td>
               <td>{qty}</td>
               <td><img style={{width: 50}} src={src} alt={name}/></td>
               <td><button className="btn btn-danger btn-block" >Delete</button></td>
            </tr>
         )
      })
   }

   render() {
      return (
         <div className="container">
            {/* List Product */}
            <h1 className="text-center display-4 ">Carts</h1>
            <table className="table table-hover text-center mb-5">
               <thead>
                     <tr>
                        <th scope="col">ID</th>
                        <th scope="col">NAME</th>
                        <th scope="col">DESC</th>
                        <th scope="col">PRICE</th>
                        <th scope="col">Qty</th>
                        <th scope="col">PICTURE</th>
                        <th scope="col">ACTION</th>
                     </tr>
               </thead>
               <tbody>
                     {this.renderList()}
               </tbody>
            </table>

         </div>
      )
   }
}

let mapStateToProps = state => {
   return {
      username: state.auth.username
   }
}

export default connect(mapStateToProps)(Cart)