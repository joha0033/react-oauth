import React from 'react'
// WAIT DOING IT CONTAINERS ////////////////////////
const Input = (
    Component
    ) => (
    props
    ) => (
        <label>
        
        {props.firstName}

        <input
          name="firstName"
          type="text"
          value={input.firstName}
          onBlur={() => this.handleBlur('firstName')}
          onChange={e => this.handleInputChange({firstName: e.target.value})}
        />

        </label>
        <br/>
)

export default Input