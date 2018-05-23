import React from 'react'
import ValidationWrapper from "./Validation.wrapper"


const ValidationContainer = (props) =>(
    <ValidationWrapper
        type={props.type}
        blurred={props.blurred}
        error={props.error}
        message={props.message}
    />
)



export default ValidationContainer


