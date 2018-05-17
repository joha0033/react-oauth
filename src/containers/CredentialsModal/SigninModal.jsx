import { connect } from "react-redux"
import SigninModal from "../../components/CredentialsModal/SigninModal"
import SigininForm from "../CredentialForms/Signin/Signin"
import { dropdownActions } from "../Navbar/Dropdown/NavDropdownActions"

const Signin = SigninModal(SigininForm)

const mapStateToProps = (state) => {
    const { modal } = state
    return {
        modal
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        hideModal: () => {
            dispatch(dropdownActions.hideSigninModal())
        }
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Signin)