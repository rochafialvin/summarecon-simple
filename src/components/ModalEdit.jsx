import React, { Component } from 'react'
import axios from 'axios'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

export default class ModalEdit extends Component {

    state = {
        modal: this.props.modal
    }

    // Save
    onSaveProduct = () => {
        // Ambil data
        let name = this.editName.value ? this.editName.value : this.props.editProduct.name
        let price = this.editPrice.value ? this.editPrice.value : this.props.editProduct.price
        let desc = this.editDesc.value ? this.editDesc.value : this.props.editProduct.desc
        let src = this.editSrc.value ? this.editSrc.value : this.props.editProduct.src

        // Edit data
        axios.patch(
            `http://localhost:2020/products/${this.props.editProduct.id}`,
            {
                name, price, desc, src
            }
        ).then((res) => {
            this.props.getData()
        })
        
    }

    // Cancel
    onCancelToggle = () => {
        this.setState({ modal : false })
    }
    

    render() {
        return (
            <div>
                {/* <Modal isOpen={this.state.modal} toggle = {this.onCancelToggle} > jika ingin klik sembarang menutup modal*/}
                <Modal isOpen={this.props.modal} >
                    <ModalHeader >Edit your product</ModalHeader>
                    <ModalBody>
                        Name : <input className="form-control" type="text" ref={(input) => { this.editName = input }} placeholder={this.props.editProduct.name}/>
                        Desc : <input className="form-control" type="text" ref={(input) => { this.editDesc = input }} placeholder={this.props.editProduct.desc}/>
                        Price : <input className="form-control" type="text" ref={(input) => { this.editPrice = input }} placeholder={this.props.editProduct.price}/>
                        Img : <input className="form-control" type="text" ref={(input) => { this.editSrc = input }} placeholder={this.props.editProduct.src}/>
                    </ModalBody>
                    <ModalFooter>
                        <Button outline color="warning" onClick={this.onCancelToggle} >Cancel</Button>
                        <Button outline color="success" onClick={this.onSaveProduct} >Save</Button>
                    </ModalFooter>
                </Modal>

            </div>
        )
    }
}
