import { connect } from "react-redux"
import CredentialsModal from "../../components/CredentialsModal/Modal"
import RegisterForm from "../CredentialForms/Register/Register"
import { dropdownActions } from "../Navbar/Dropdown/NavDropdownActions"

const Register = CredentialsModal(RegisterForm)

const mapStateToProps = (state) => {
    const { modal } = state
    return {
        modal
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        hideModal: () => {
            dispatch(dropdownActions.hideModal())
        }
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Register)