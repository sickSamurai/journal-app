import 'animate.css'

import { ThemeProvider } from '@emotion/react'
import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'

import { store } from './redux/store'
import AppRouter from './router/AppRouter'
import { MainTheme } from './themes/MainTheme'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <Provider store={store}>
    <BrowserRouter>
      <ThemeProvider theme={MainTheme}>
        <AppRouter />
      </ThemeProvider>
    </BrowserRouter>
  </Provider>
)
