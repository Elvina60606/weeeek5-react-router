import { createRoot } from 'react-dom/client'

import 'bootstrap/dist/css/bootstrap.min.css'


import routes from './routes/index.jsx';
import { createHashRouter, RouterProvider } from 'react-router';
const router = createHashRouter(routes);


createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
