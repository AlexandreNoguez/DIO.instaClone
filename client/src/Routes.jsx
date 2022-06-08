import { Route, Routes } from 'react-router-dom'
import Register from './Pages/Register'
function MainRoutes() {
    return (
        <Routes>
            <Route path="/cadastro" element={<Register />} />
        </Routes>
    )
}

export default MainRoutes
