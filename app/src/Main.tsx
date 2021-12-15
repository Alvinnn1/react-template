import React from 'react'
import ReactDOM from 'react-dom'
import App from '@/page/App'
import GlobalProvider from "@/GlobalProvider";
import '@/assets/css/index.css'
import '@/assets/css/base.css'

ReactDOM.render(
  <GlobalProvider>
    <App/>
  </GlobalProvider>,
  document.getElementById('root')
)
