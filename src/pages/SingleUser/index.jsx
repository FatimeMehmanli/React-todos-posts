import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'  // Fix the import for useParams (use 'react-router-dom')
import { getSingleUser } from '../../services/user-service'

function SingleUser() {
  const { id } = useParams()
  const [user, setUser] = useState({})

  useEffect(() => {
    getSingleUser(id)
      .then(data => setUser(data))
      .catch(err => console.log(err))
  }, [id])

  return (
    <div className="p-6 bg-white shadow-md rounded-lg text-teal-700	">
      <h1 className="text-3xl font-semibold mb-4">Name: {user.name}</h1>
      <p className="text-lg mb-2 ">Email: {user.email}</p>
      <p className="text-lg mb-2 ">Street: {user.address?.street}</p>
      <p className="text-lg mb-4 ">City: {user.address?.city}</p>

      <div className="flex gap-4">
        <Link 
          to={`/posts/${id}`} 
          className="px-6 py-2 bg-[#9346b0] text-white rounded-lg hover:bg-[#7d3791] transition duration-300 cursor-pointer	"
        >
          Posts
        </Link>
        <Link 
          to={`/todos/${id}`} 
          className="px-6 py-2 bg-[#9346b0] text-white rounded-lg hover:bg-[#7d3791] transition duration-300 cursor-pointer	"
        >
          Todos
        </Link>
      </div>
    </div>
  )
}

export default SingleUser
