import React from 'react'

let AddEmployee = () => {
  let input

  return (
    <div>
      <form onSubmit={e => {
        e.preventDefault()
        if (!input.value.trim()) {
          return
        }
        input.value = ''
      }}>
        <input ref={node => {
          input = node
        }} />
        <button type="submit">
          Add Employee
        </button>
      </form>
    </div>
  )
}

export default AddEmployee
