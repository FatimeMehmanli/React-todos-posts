import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router'
import { routers } from './router'

createRoot(document.getElementById('root')).render(
   <div className='max-w[1140px] w-[80%] mx-auto my-[40px]'>
   <RouterProvider router={routers}/>

   </div>
)
