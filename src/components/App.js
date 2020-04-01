import React, { Component } from 'react'
import {Route, BrowserRouter} from 'react-router-dom'

// Components
import Header from './Header'
import Home from './Home'
import Register from './Register'
import Login from './Login'
import ManageProduct from './ManageProduct'
import DetailProduct from './DetailProduct'

class App extends Component{
    render(){
        return(
            <BrowserRouter>
                <div>
                    <Header/>
                    <Route path="/" exact component={Home} />
                    <Route path="/register" component={Register} />
                    <Route path="/login" component={Login} />
                    <Route path="/manageproduct" component={ManageProduct} />
                    <Route path="/detailproduct/:idPrdct" component={DetailProduct} />
                </div>
            </BrowserRouter>
        )
    }
}

export default App