import React from 'react'

const Employee = ({ name, pony, onClick }) => (
  <div
    className={`employee no-select ${pony ? 'pony-color' : 'castor-color'}`}
    onClick={onClick}
    >
    <span className='employee__name'>
      {name}
    </span>
    <div className='employee__icon'/>
  </div>
)

export default Employee
