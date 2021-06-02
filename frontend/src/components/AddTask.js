import { useState } from 'react'

const AddTask = ({ onAdd, remAdd}) => {
  const [name, setText] = useState('')
  const [status, setStatus] = useState("Not Completed")

  const onSubmit = (e) => {
    e.preventDefault()

    if (!name) {
      alert('Please add a task')
      return
    }

    onAdd({ name, status })

    setText('')
    setStatus("Not Completed")

    remAdd()
  }

  return (
    <form className='add-form' onSubmit={onSubmit}>
      <div className='form-control'>
        <label>Task</label>
        <input
          type='text'
          placeholder='Add Task'
          value={name}
          onChange={(e) => setText(e.target.value)}
        />
      </div>
      <input type='submit' value='Save Task' className='btn btn-block' />
    </form>
  )
}

export default AddTask