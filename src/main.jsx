import ReactDOM from 'react-dom/client'
import './index.css'
// import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import { AppContext } from '../context'

ReactDOM.createRoot(document.getElementById('root')).render(
  <AppContext>
    <BrowserRouter>
      <App />
    </BrowserRouter>,
  </AppContext>
)
