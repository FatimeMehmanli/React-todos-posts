import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { getUserPosts } from '../../services/post-service';

function Posts() {
  const { id } = useParams();
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    getUserPosts(id)
      .then(data => setPosts(data))
      .catch(err => console.log(err));
  }, [id]);

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <ul className="space-y-4">
        {
          posts.map(post => (
            <li 
              key={post.id} 
              className="bg-white p-6 border border-gray-300 rounded-lg shadow-md  text-teal-700	
                         hover:bg-teal-500 hover:text-white hover:shadow-xl 
                         transition-all duration-1000"
            >
              <h3 className="text-xl font-semibold">{post.title}</h3>
              <p className="text-gray-600 mt-2">{post.body}</p>
            </li>
          ))
        }
      </ul>
    </div>
  );
}

export default Posts;
