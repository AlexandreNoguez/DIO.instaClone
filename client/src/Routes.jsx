import { Route, Routes } from 'react-router-dom'
import LoginPage from './Pages/Login'
import Register from './Pages/Register'

function MainRoutes() {
    return (
        <Routes>
            <Route path="/" element={<LoginPage />} />
            <Route path="/cadastro" element={<Register />} />
            <Route path="*" element={<LoginPage />} />
        </Routes>
    )
}

export default MainRoutes
