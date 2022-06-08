import React from 'react'
import PhoneIcons from '../../Component/PhoneIcons'
import Login from '../../Component/LoginComponent'
import Footer from '../../Component/Footer'

// import { Container } from './styles';

function LoginPage() {
    return (
        <div>
            <div className="m-auto justify-center items-center bg-[#fafafa] flex">
                <PhoneIcons />
                <Login />
            </div>
            <Footer />
        </div>
    )
}

export default LoginPage
