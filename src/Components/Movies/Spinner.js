import React from 'react'
import spinnerimg from '../../images/spinner.gif'

function Spinner() {
  return (
    <div>
      <img
        src={spinnerimg}
        style={{ width: '100px', margin: 'auto', display: 'block' }}
        alt="Loading..."
      />
    </div>
  )
}

export default Spinner;
