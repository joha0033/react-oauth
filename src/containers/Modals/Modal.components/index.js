import React from "react"
import { Modal } from "react-bootstrap"

const SigninModal = (
        Component
    ) => (
        props
    ) => ( 
            
                <div>
                    <Modal 
                        show={props.modal.showSigninModal}
                        onHide={() => props.hideSigninModal()}
                    >
                        <Modal.Header closeButton>
                        Siginin
                        </Modal.Header> 
                        <Modal.Body>
                            <div><Component { ...this.props} /></div>
                        </Modal.Body>
                    </Modal>
                </div>
            )

export default (SigninModal)