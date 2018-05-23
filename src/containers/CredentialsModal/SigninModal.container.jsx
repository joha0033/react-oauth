import { connect } from "react-redux"
import SigninModal from "../../components/CredentialsModal/SigninModal.component"
import SigininForm from "../CredentialForms/Signin/Signin"
import { modalActions } from "./Modal.actions"

const Signin = SigninModal(SigininForm)

const mapStateToProps = (state) => {
    const { modal } = state
    return {
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


export default connect(mapStateToProps, mapDispatchToProps)(Signin)