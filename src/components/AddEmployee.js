import React from 'react'

let AddEmployee = () => {
  let input

  return (
    <div className='add-employee-form'>
      <form onSubmit={e => {
        e.preventDefault()
        if (!input.value.trim()) {
          return
        }
        input.value = ''
      }}>
        <h1>Please add your name</h1>
        <div className='question'>
          <input type='text' ref={ node => { input = node } } required/>
          <label>Name</label>
        </div>
        <button type='submit'>
          Add Employee
        </button>
      </form>
    </div>
  )
}

export default AddEmployee
