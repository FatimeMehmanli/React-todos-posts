import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import { getTodosPosts } from '../../services/todos-service'

function Todos() {
  const { id } = useParams()
  const [todos, setTodos] = useState([])

  useEffect(() => {
    getTodosPosts(id)
      .then(data => setTodos(data))
      .catch(err => console.log(err))
  }, [id])

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold bg animate-pulse bg-teal-50 text-teal-700 mb-6 text-center">Todos for User {id}</h1>
      <ul className="space-y-4">
        {
          todos.map(todo => (
            <li 
              key={todo.id} 
              className="bg-white p-6 border border-gray-300 rounded-lg shadow-md text-teal-700
                         hover:scale-105 hover:bg-cyan-950	 hover:text-white hover:shadow-xl hover:cursor-pointer
                         transition-all duration-700 "
            >
              <h3 className="text-xl font-semibold">{todo.title}</h3>
              <p 
                className={`mt-2 font-medium ${todo.completed ? 'text-green-500 ' : 'text-red-500'} 
                           hover:${todo.completed ? 'text-teal-200' : 'text-red-400'}`}
              >
                {todo.completed ? 'Completed' : 'Not Completed'}
              </p>
            </li>
          ))
        }
      </ul>
    </div>
  )
}

export default Todos
