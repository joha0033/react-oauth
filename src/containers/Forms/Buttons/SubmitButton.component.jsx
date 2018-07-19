import React from 'react'

const SubmitComponent = ({text}) => (
      <div>
        <br/>
        <input
          // onSubmit = {() => action}
          touchend="submit"
          type="submit"
          value={text}
        //   disabled={process.env.NODE_ENV !== 'development' ? !isValid : null}
        />
        <br/>
      </div>
)

export default SubmitComponent