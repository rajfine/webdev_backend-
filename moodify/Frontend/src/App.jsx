import FaceExpression from './features/expressions/components/FaceExpression'
import {RouterProvider} from 'react-router-dom'
import {routes} from './app.routes'
import "./features/shared/styles/global.scss"
import { AuthProvider } from './features/auth/auth.context'


const App = () => {
  return (
    <AuthProvider>
      <RouterProvider router={routes} />
    </AuthProvider>
  )
}

export default App