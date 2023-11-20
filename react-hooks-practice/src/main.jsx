import React,{createContext} from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

const custom = createContext();

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <custom.Provider value={"hardikk"}>
    <App />
    </custom.Provider>
  </React.StrictMode>,
)

export {custom};