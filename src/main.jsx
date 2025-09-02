import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Authcontext from './context/Authcontext.jsx'
import TaskContext from './context/TaskContext.js'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Authcontext>
      <TaskContext>
        <App />
      </TaskContext>
    </Authcontext>
  </StrictMode>,
)
