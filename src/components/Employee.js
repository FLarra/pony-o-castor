import React from 'react'

const Employee = ({ name, pony, onClick }) => (
  <li
    onClick={onClick}
    style={{
      textDecoration: pony ? 'line-through' : 'none'
    }}
  >
    {name}
  </li>
)

export default Employee
