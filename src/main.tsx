import './css/main.css'
import 'animate.css'

import { ThemeProvider } from '@emotion/react'
import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'

import { MainTheme } from './modules/shared/themes/MainTheme'
import { Store } from './redux/store'
import AppRouter from './router/AppRouter'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <Provider store={Store}>
    <BrowserRouter>
      <ThemeProvider theme={MainTheme}>
        <AppRouter />
      </ThemeProvider>
    </BrowserRouter>
  </Provider>
)
