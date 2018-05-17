import React from "react"
import { Modal } from "react-bootstrap"

const RegisterModal = (
        Component
    ) => (
        props
    ) => ( // React.PureComponent??
            
                <div>
                    <Modal 
                        show={props.modal.showRegisterModal}
                        onHide={() => props.hideModal()}
                    >
                        <Modal.Header closeButton>
                        Register
                        </Modal.Header> 
                        <Modal.Body>
                            <div><Component { ...this.props} /></div>
                        </Modal.Body>
                    </Modal>
                </div>
            )

export default (RegisterModal)