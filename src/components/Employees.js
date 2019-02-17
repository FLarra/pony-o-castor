import React from 'react'
import Employee from './Employee'
import { connect } from 'react-redux';

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

const mapStateToProps = (state) => (
  { employees: state }
)

export default connect(mapStateToProps)(Employees)
