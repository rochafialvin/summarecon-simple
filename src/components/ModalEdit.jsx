import React, { Component } from 'react'
import axios from 'axios'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

export default class ModalEdit extends Component {
    render() {
        return (
            <div>
                {/* <Modal isOpen={this.state.modal} toggle = {this.onCancelToggle} > jika ingin klik sembarang menutup modal*/}
                <Modal isOpen={this.props.a} >
                    <ModalHeader >Edit your product</ModalHeader>
                    <ModalBody>
                        Name : <input className="form-control" type="text" ref={(input) => { this.editName = input }} placeholder={this.props.b.name}/>
                        Desc : <input className="form-control" type="text" ref={(input) => { this.editDesc = input }} placeholder={this.props.b.desc}/>
                        Price : <input className="form-control" type="text" ref={(input) => { this.editPrice = input }} placeholder={this.props.b.price}/>
                        Img : <input className="form-control" type="text" ref={(input) => { this.editSrc = input }} placeholder={this.props.b.src}/>
                    </ModalBody>
                    <ModalFooter>
                        <Button outline color="warning" onClick={this.props.c} >Cancel</Button>
                        <Button outline color="success" onClick={this.props.d} >Save</Button>
                    </ModalFooter>
                </Modal>

            </div>
        )
    }
}
