import React from 'react'
// WAIT DOING IT CONTAINERS ////////////////////////
const InputComponent = (
    Component
    ) => (
    props
    ) => (
      <div>
        <label>
        {props.label}
        </label>
        <br/>
        <input
          name={props.name}
          type={props.type}
          value={props.value}
          onBlur={props.onBlur}
          onChange={props.onChange}
        />

        
        <br/>
      </div>
)

export default InputComponent