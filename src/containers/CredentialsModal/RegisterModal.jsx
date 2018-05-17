import { connect } from "react-redux"
import RegisterModal from "../../components/CredentialsModal/RegisterModal"
import RegisterForm from "../CredentialForms/Register/Register"
import { dropdownActions } from "../Navbar/Dropdown/NavDropdownActions"

const Register = RegisterModal(RegisterForm)

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