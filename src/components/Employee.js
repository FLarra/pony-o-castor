import React from 'react'

const Employee = ({ name, pony, onClick }) => (
  <div
    className={`employee no-select ${pony ? 'pony-color' : 'castor-color'}`}
    onClick={onClick}
    >
    <span
      className='employee__name'
      style={{ color: pony ? 'darkgoldenrod' : 'brown' }}
    >
      {name}
    </span>
    <div
      className='employee__icon'
    >
      <img src={pony ? 'pony.gif' : 'castor.gif'} alt=''></img>
    </div>
  </div>
)

export default Employee
