import React from 'react'
import Employee from './Employee'
import { connect } from 'react-redux';
import { ponifyEmployee } from '../actions'

const Employees = ({ employees, onEmployeeClick }) => (
  <ul>
    {employees.map(employee =>
      <Employee
        key={employee.name}
        {...employee}
        onClick={ () => onEmployeeClick(employee.name) }
      />
    )}
  </ul>
)

const mapStateToProps = (state) => (
  { employees: state }
)

const mapDispatchToProp = {
  onEmployeeClick: ponifyEmployee
}

export default connect(
  mapStateToProps,
  mapDispatchToProp
)(Employees)
