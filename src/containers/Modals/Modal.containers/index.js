import { connect } from "react-redux"
import SigninModal from "../Modal.components/SigninModal.component"
import Modal from "../Modal.components"
import SigininForm from "../../Credentials/Signin/Signin"
import RegisterForm from "../../Credentials/Register/Register"
import { modalActions } from "../Modal.actions"




let CredentialForm;

// const Signin = SigninModal(SigininForm)
const ModalWrapper = Modal(CredentialForm)


const mapStateToProps = (state) => {
    const { credentials, modal } = state
    return {
        credentials,
        modal
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        hideSigninModal: () => {
            dispatch(modalActions.hideSigninModal())
        }
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(ModalWrapper)