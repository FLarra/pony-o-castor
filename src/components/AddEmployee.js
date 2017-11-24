import React from 'react'
import { connect } from 'react-redux'
import { addEmployee } from '../actions'

let AddEmployee = ({ dispatch }) => {
  let input

  return (
    <div>
      <form onSubmit={e => {
        e.preventDefault()
        if (!input.value.trim()) {
          return
        }
        dispatch(addEmployee(input.value))
        input.value = ''
      }}>
        <input ref={ node => { input = node } }/>
        <button type="submit">
          Add Employee
        </button>
      </form>
    </div>
  )
}
AddEmployee = connect()(AddEmployee)

export default AddEmployee
