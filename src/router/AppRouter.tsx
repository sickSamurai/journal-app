import React, { useEffect } from 'react'
import { Route, Routes } from 'react-router-dom'

import AuthRoutes from '../modules/auth/routes/AuthRoutes'
import { JournalRoutes } from '../modules/journal/routes/JournalRoutes'
import { useAuthCheck } from '../modules/shared/hooks/useAuthCheck'
import { LoadingPage } from '../modules/shared/pages/LoadingPage'

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
