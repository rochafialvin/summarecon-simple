import React, { Component } from 'react'
import axios from '../config/axios'
// Digunakan untuk menghubungkan komponen dengan redux
import { connect } from 'react-redux'
// Import action creator
import {onLoginUser} from '../actions/index'
// Akan me-redirect ke alamat tertentu
import {Redirect} from 'react-router-dom'

class Login extends Component {

    onButtonClick = () => {
        let _username = this.username.value
        let _pswd = this.password.value

        // Get data with parameters
        let link = '/users'
        let data = {username : _username, pswd: _pswd}
        
        axios.get(link,{params : data}).then((res) => {

            if(res.data.length > 0){
                // res.data[0] = {id : 1, username: 'rochafi', password: 'satuduatiga'}
                // user ditemukan : simpan info user ke redux
                this.props.onLoginUser(res.data[0])
            } else {
                // user tidak ditemukan : munculkan notif
                alert('username or password is incorrect')
            }
            
        })

    }

    render() {

        // this.props.username = "rochafi"

        if(!this.props.uname){ // Jika belum login
            return (
                <div className="container-fluid">
                    <div className="row login ">
                        <div className=" col-5 my-auto mx-auto card">
                            <div className="card-body">
                                <div className="border-bottom border-secondary card-title text-center">
                                    <h1>Login</h1>
                                </div>
    
                                <forml className='form-group'>
                                    <div className="card-title ">
                                        <h4>Username</h4>
                                    </div>
                                    <input ref={(input) => {this.username = input}} type='text' className='form-control' required/>
    
                                    <div className="card-title ">
                                        <h4>Password</h4>
                                    </div>
                                    <input ref={(input) => {this.password = input}} type='password' className='form-control'/>
                                </forml>
    
                                <button className="btn btn-success btn-block mt-3" onClick={this.onButtonClick}>Login</button>
                            </div>
                        </div>
                    </div>
                </div>
            )
        } else {
            return <Redirect to="/"/>
        }

    }
}

let mapStateToProps = (state) => {
    return {
        uname: state.auth.username
    }
}

export default connect(mapStateToProps, {onLoginUser})(Login)
