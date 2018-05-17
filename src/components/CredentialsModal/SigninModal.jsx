import React from "react"
import { Modal } from "react-bootstrap"

const SigninModal = (
        Component
    ) => (
        props
    ) => ( // React.PureComponent??
            
                <div>
                    <Modal 
                        show={props.modal.showSigninModal}
                        onHide={() => props.hideModal()}
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