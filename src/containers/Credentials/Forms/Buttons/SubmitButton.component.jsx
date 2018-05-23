import React from 'react'

const SubmitComponent = () => (
      <div>
        <br/>
        <input
          touchend="submit"
          type="submit"
          value="Submit"
        //   disabled={process.env.NODE_ENV !== 'development' ? !isValid : null}
        />
      </div>
)

export default SubmitComponent