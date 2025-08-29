import React from 'react'

const CreateTask = () => {
  return (
     <div>
        <form className="flex w-full bg-red-200 items-start justify-between">
            <div className='w-1/2'><div>
                <div>
            <h3>Task Title</h3>
            <input type="text" placeholder="Enter task title"></input>
          </div>
            <h3>Date</h3>
            <input type="date" />
          </div>
          <div>
            <h3>Assign to</h3>
            <input type="text" placeholder="employee name" />
          </div>
          <div>
            <h3>Category</h3>
            <input type="text" placeholder="design, dev, etc" />
          </div>
          <button>Create Task</button>
          </div>
          
          
          <div className='w-1/2'>
            
            <h3>Description</h3>
            <textarea name="" id="" cols="30" rows="10"></textarea>
          </div>
          
          
        </form>
      </div>
  )
}

export default CreateTask