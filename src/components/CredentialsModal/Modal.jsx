import React from "react"
import { Modal } from "react-bootstrap"

const CredentialsModal = (
        Component
    ) => (
        props
    ) => ( // React.PureComponent??
       
                <div>
                    {/* {console.log(props.modal.showModal)} */}
                    <Modal 
                        show={props.modal.showModal}
                        onHide={() => props.hideModal()}
                    >
                        <Modal.Header closeButton>
                            Signin || Register
                        </Modal.Header> 
                        <Modal.Body>
                            <div><Component { ...this.props} /></div>
                        </Modal.Body>
                    </Modal>
                </div>
            )

export default (CredentialsModal)


// function withSubscription(WrappedComponent, data){
//     return class extends React.Component {
//         constructor(props){
//             super(props)
//             state = {
//                 data: data(DataSource, props)
//             }
//         }
//     }

//     componentDidMount() {
//         DataSource.addChangeListener(this.handleChange)
//     }

//     componentWillUnmount() {
//         DataSource.removeChangeListener(this.handleChange)
//     }

//     handleChange() {
//         this.setState({
//             data: data(DataSource, this.props)
//         })
//     }

//     render() {
//         return (
//             <WrappedComponent data={this.state.data} { ...this.props} />
//         )
//     }
// }