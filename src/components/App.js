import React, { Component } from 'react'
import {Route, BrowserRouter} from 'react-router-dom'

// Components
import Header from './Header'
import Home from './Home'
import Register from './Register'
import Login from './Login'
import ManageProduct from './ManageProduct'
import DetailProduct from './DetailProduct'
import Carts from './Carts'

// Keeplogin
import {onLoginUser} from '../actions/index'
import {connect} from 'react-redux'

class App extends Component{

    // Untuk menentukan status apakah localStorage sudah di cek atau belum
    state = {
        check : false
    }


    componentDidMount(){
        // Pengecekan localStorage
        let userData = localStorage.getItem('userData')
        let user = JSON.parse(userData)

        if(user){
            this.props.onLoginUser(user)
        }
        
        // Update stat untuk menandakan bahwa localStorage sudah di cek
        this.setState({check: true})
    }

    render(){
        // Jika belum cek localStorage (saat pertama kali running / refresh browser / mengunjungi halam via link broswer)
        // maka akan ditampilkan tulisan 'Loading'
        if(this.state.check){
            return(
                <BrowserRouter>
                    <div>
                        <Header/>
                        <Route path="/" exact component={Home} />
                        <Route path="/register" component={Register} />
                        <Route path="/login" component={Login} />
                        <Route path="/carts" component={Carts} />
                        <Route path="/manageproduct" component={ManageProduct} />
                        <Route path="/detailproduct/:idPrdct" component={DetailProduct} />
                    </div>
                </BrowserRouter>
            )
        }

        return <h1> Loading </h1>
    }
}

export default connect(null, {onLoginUser})(App)