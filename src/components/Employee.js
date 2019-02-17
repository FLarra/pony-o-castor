import React from 'react'

const Employee = ({ name }) => (
  <div className='employee no-select pony-color'>
    <span className='employee__name'>
      {name}
    </span>
    <div className='employee__icon'/>
  </div>
)

export default Employee
