import React from 'react'
import Employee from './Employee'
import { connect } from 'react-redux';

const Employees = ({ employees }) => (
  <ul>
    {employees.map(employee =>
      <Employee
        key={employee.name}
        {...employee}
      />
    )}
  </ul>
)

const mapStateToProps = (state) => (
  { employees: state }
)

export default connect(mapStateToProps)(Employees)
