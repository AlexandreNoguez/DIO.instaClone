import React, { useState } from 'react'
import instaImg from '../../assets/img/insta.png'
import iphoneStore from '../../assets/img/ios.png'
import googlePlay from '../../assets/img/android.png'
import { FaFacebookSquare } from 'react-icons/fa'
import { Link } from 'react-router-dom'
function Login() {
    const [getEmail, setGetEmail] = useState('')
    const [getPassword, setGetPassword] = useState('')
    const handleLogin = e => {
        e.preventDefault()
        getEmail
        getPassword
        console.log(getEmail, getPassword)
    }

    return (
        <div className="mr-36 md:mr-0 md:mt-[35.9px]">
            <div className="w-[350px] h-[390px] p-8 border-[1px] rounded-sm bg-white items-center">
                <img className="mx-auto my-4" src={instaImg} />
                <form className="flex flex-col justify-center items-center">
                    <input
                        onChange={e => setGetEmail(e.target.value)}
                        className="w-64 h-9 p-4 border-[1px] border-gray-300 focus:outline-slate-200 rounded-sm mb-2"
                        type="email"
                        placeholder="Email"
                    />
                    <input
                        onChange={e => setGetPassword(e.target.value)}
                        className="w-64 h-8 p-4 border-[1px] border-gray-300 focus:outline-slate-200 rounded-sm mb-2"
                        type="password"
                        placeholder="Senha"
                    />
                    <button
                        onClick={handleLogin}
                        className="w-64 p-2 rounded-md bg-blue-600 text-white hover:-translate-y-0.5 transition-all my-6"
                    >
                        Iniciar sessão
                    </button>
                </form>
                <div className="flex items-center justify-between">
                    <hr className="w-24"></hr>
                    <p className="mx-2">OU</p>
                    <hr className="w-24"></hr>
                </div>
                <div className="flex items-center justify-center">
                    <FaFacebookSquare />
                    <p className="mx-2 my-2 ">Iniciar sessão com Facebook</p>
                </div>
                <div>
                    <p className="text-sm my-2 text-center">
                        <Link to="/relembre">Esqueci minha senha!</Link>
                    </p>
                </div>
            </div>
            <div className="w-[350px] bg-white my-2 border-[1px] border-[#dbdbdb] p-4 items-center text-center ">
                <p>
                    Ainda não tem sua conta?
                    <Link className="text-blue-600" to="/cadastro">
                        {' '}
                        Faça agora mesmo!
                    </Link>
                </p>
            </div>
            <div className="p-2 items-center justify-center text-center ">
                <p>Baixe o app agora mesmo!</p>
            </div>
            <div className="w-[350px] my-2 items-center justify-center flex gap-2 ">
                <a
                    target="_blank"
                    href="https://play.google.com/store/apps/details?id=com.instagram.android&hl=pt_BR&gl=US"
                >
                    <img
                        className="w-36 h-10"
                        src={googlePlay}
                        alt="ícone do link para baixar instragram na playstore"
                    />
                </a>
                <a
                    target="_blank"
                    href="https://apps.apple.com/us/app/instagram/id389801252"
                >
                    <img
                        className="w-36 h-10"
                        src={iphoneStore}
                        alt="ícone do link para baixar instragram na apple store"
                    />
                </a>
            </div>
        </div>
    )
}

export default Login
