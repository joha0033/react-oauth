import React from 'react'
import { Alert } from 'react-bootstrap'

import { Styling } from "./Validation.style"

const ValidationComponent = (
    Component
    ) => (
    props
    ) => (
      <div>
        { props.error ? 
        // <Styling>
          // <Alert className="warning" >
            <strong>{props.message}</strong>
          // </Alert>
        // </Styling>
         : 
        <br/>}
      </div>
)

export default ValidationComponent