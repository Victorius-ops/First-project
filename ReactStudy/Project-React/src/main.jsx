import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import UserProvider from './Context/UserContext.jsx'
import PostsProvider from './Context/PostContext.jsx'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

const queryClient = new QueryClient()

// QueryClient
// |-----кэш
//         |----["products"] - массив товаров
//         |----["product", 1] - товар №1
//         |----["product", 2] - товар №2
//         |----["users"] - массив пользователей
window.__TANSTACK_QUERY_CLIENT__ = queryClient
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>   
        <PostsProvider>
          <UserProvider>
            <App />
          </UserProvider>
        </PostsProvider>
      </BrowserRouter>
    </QueryClientProvider>
  </StrictMode>,
)
