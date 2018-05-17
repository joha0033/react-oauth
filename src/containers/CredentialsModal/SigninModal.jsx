// import React from "react"
import { connect } from "react-redux"
import CredentialsModal from "../../components/CredentialsModal/Modal"
import SigininForm from "../CredentialForms/Signin/Signin"
import { dropdownActions } from "../Navbar/Dropdown/NavDropdownActions"

const Signin = CredentialsModal(SigininForm)

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


export default connect(mapStateToProps, mapDispatchToProps)(Signin)