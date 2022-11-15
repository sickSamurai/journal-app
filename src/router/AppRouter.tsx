import React, { useEffect } from 'react'
import { Route, Routes } from 'react-router-dom'

import AuthRoutes from '../auth/routes/AuthRoutes'
import { useAuthCheck } from '../hooks/useAuthCheck'
import { JournalRoutes } from '../journal/routes/JournalRoutes'
import { LoadingPage } from '../pages/LoadingPage'

const AppRouter = () => {
  const { authStatus } = useAuthCheck()

  const routes = {
    authenticated: <Route path='*' element={<JournalRoutes />} />,
    'not-authenticated': <Route path='*' element={<AuthRoutes />} />,
    checking: <Route path='*' element={<LoadingPage />} />
  }

  return <Routes>{routes[authStatus]}</Routes>
}

export default AppRouter
