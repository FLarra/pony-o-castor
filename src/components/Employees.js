import React from 'react'
import Employee from './Employee'

const Employees = ({ employees }) => (
  <div>
    {
      employees.map(employee =>
        <Employee
          key={ employee.name }
          { ...employee }
        />
      )
    }
  </div>
)

export default Employees
