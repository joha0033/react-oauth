import React from 'react'
// WAIT DOING IT CONTAINERS ////////////////////////
const InputComponent = (
    Component
    ) => (
    props
    ) => (
      <div>
        <label>
        {
          props.errMsg === null ?
          props.label :
          props.label + " " + props.errMsg
        }
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