import React from 'react'
import { connect } from 'react-redux'
import { addEmployee } from '../actions'

let AddEmployee = ({ dispatch }) => {
  let input

  return (
    <div className='add-employee-form'>
      <form onSubmit={e => {
        e.preventDefault()
        if (!input.value.trim()) {
          return
        }
        dispatch(addEmployee(input.value))
        input.value = ''
      }}>
        <h1>Please add your name</h1>
        <div className='question'>
          <input type='text' ref={ node => { input = node } } required/>
          <label>Name</label>
        </div>
        <button type="submit">
          Add Employee
        </button>
      </form>
    </div>
  )
}
AddEmployee = connect()(AddEmployee)

export default AddEmployee
