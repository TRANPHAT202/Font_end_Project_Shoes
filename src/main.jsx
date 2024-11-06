import { BrowserRouter } from "react-router-dom"
import { createRoot } from 'react-dom/client'
import { Provider } from "react-redux"
import './index.css'
import App from './App.jsx'
import store from "./redux/index.jsx"

createRoot(document.getElementById('root')).render(
  <BrowserRouter >
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>,
)