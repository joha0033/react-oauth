import { connect } from "react-redux"
import RegisterModalComponent from "../Modal.components/RegisterModal.component"
import RegisterFormContainer from "../../Credentials/Register/Register"
import { modalActions } from "../Modal.actions"

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
            dispatch(modalActions.hideRegisterModal())
        }
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Register)