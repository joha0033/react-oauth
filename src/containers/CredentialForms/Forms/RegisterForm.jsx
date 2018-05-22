import React from 'react'
import { connect } from "react-redux" 
import RegisterInputs from "./RegisterInputs"
import { formActions } from "./FormActions"


class RegisterForm extends React.Component{
    
    render(){
        return (
            <RegisterInputs

                label={this.props.label}
                name={this.props.variable}
                type={this.props.type}
                value={this.props.form.formState.input[this.props.name]}
                onBlur={() => this.props.handleBlur(this.props.name)}
                onChange={e => this.props.handleChange(this.props.name, e.target.value)}/>
            )
    }
}

const mapStateToProps = (state) => {
    const { form } = state
    return {
        form
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        handleChange: (variableName, targetValue) => {
            dispatch(formActions.handleInputChange(variableName, targetValue))
        },
        handleBlur: (fieldName, props) => {
            dispatch(formActions.handleBlur(fieldName))
        }
    }
}

export const RegisterFormI = connect(mapStateToProps, mapDispatchToProps)(RegisterForm)