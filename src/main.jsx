import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { RouterProvider } from 'react-router-dom'
import router from './Routes/Rotues.jsx'
import AuthProvider from './Providers/AuthProvider.jsx'
const queryClient = new QueryClient()


import {
  QueryClient,
  QueryClientProvider
} from '@tanstack/react-query'



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <QueryClientProvider client={queryClient}>
        <div className='max-w-7xl mx-auto'>
          <RouterProvider router={router}></RouterProvider>
        </div>
      </QueryClientProvider>
    </AuthProvider>
  </StrictMode>,
)
