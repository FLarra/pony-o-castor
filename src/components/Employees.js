import React from 'react'
import Employee from './Employee'
import { connect } from 'react-redux';
import { ponifyEmployee } from '../actions'

const Employees = ({ employees, onEmployeeClick }) => (
  <div>
    {
      employees.map(employee =>
        <Employee
          key={ employee.name }
          { ...employee }
          onClick={ () => onEmployeeClick(employee.name) }
        />
      )
    }
  </div>
)

const mapStateToProps = (state) => (
  { employees: getVisibleEmployees(state.employees, state.visibilityFilter) }
)

const mapDispatchToProp = {
  onEmployeeClick: ponifyEmployee
}

const getVisibleEmployees = (employees, filter) => {
  switch (filter) {
    case 'SHOW_PONIES':
      return employees.filter(t => t.pony)
    case 'SHOW_CASTORS':
      return employees.filter(t => !t.pony)
    case 'SHOW_ALL':
    default:
      return employees
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProp
)(Employees)
