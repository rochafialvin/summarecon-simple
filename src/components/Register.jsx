import React, { Component } from 'react'

class Register extends Component {
    render() {
        return (
            <div className="container-fluid">
                <div className="row">
                <div className=" col-5 mx-auto mt-5 card">
                    <div className="card-body">
                        <div className="border-bottom border-secondary card-title text-center">
                            <h1>Register</h1>
                        </div>

                        <form className='form-group'>
                            <div className="card-title ">
                                <h4>Username</h4>
                            </div>
                            <input ref={(input) => {this.username = input}} type='text' className='form-control' />

                            <div className="card-title ">
                                <h4>Email</h4>
                            </div>
                            <input ref={(input) => {this.email = input}} type='text' className='form-control'/>

                            <div className="card-title ">
                                <h4>Password</h4>
                            </div>
                            <input ref={(input) => {this.password = input}} type='password' className='form-control'/>
                        </form>

                        <button className="btn btn-success btn-block" onClick={this.onButtonClick}>Register</button>
                    </div>
                </div>
            </div>
            </div>
        )
    }
}

export default Register
