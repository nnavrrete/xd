import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import CurrentSearch from './CurrentSearch.jsx'
import OrderBy from './SortBy.jsx'
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <header><App />
    <div ><CurrentSearch /></div>
    <div><OrderBy/></div>
    </header>
    

  </React.StrictMode>,
)
