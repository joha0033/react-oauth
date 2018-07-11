import React from 'react'

const SubmitComponent = () => (
      <div>
        <br/>
        <input
          // onSubmit = {() => action}
          touchend="submit"
          type="submit"
          value="Submit"
        //   disabled={process.env.NODE_ENV !== 'development' ? !isValid : null}
        />
        <br/>
        <br/>
        <br/>
      </div>
)

export default SubmitComponent