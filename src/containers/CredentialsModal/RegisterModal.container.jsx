import { connect } from "react-redux"
import RegisterModalComponent from "../../components/CredentialsModal/RegisterModal.component"
import RegisterFormContainer from "../CredentialForms/Register/Register"
import { dropdownActions } from "../Navbar/Dropdown/NavDropdownActions"

const Register = RegisterModalComponent(RegisterFormContainer)

const mapStateToProps = (state) => {
    const { modal } = state
    return {
        modal
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        hideRegisterModal: () => {
            dispatch(dropdownActions.hideRegisterModal())
        }
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Register)