import React from 'react'
import Footer from '../../Component/Footer'
import Login from '../../Component/LoginComponent'
import PhoneIcons from '../../Component/PhoneIcons'

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
