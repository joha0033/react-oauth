import React from 'react'
import InputWrapper from "./Input.wrapper"


class _InputContainer extends React.Component{
    render(){
        return (
            <InputWrapper
                label={this.props.label}
                errMsg={this.props.errMsg}
                name={this.props.variable}
                type={this.props.type}
                value={this.props.value}
                onBlur={this.props.onBlur}
                onChange={this.props.onChange}
            />
            )
    }
}


export const InputContainer = (_InputContainer)
