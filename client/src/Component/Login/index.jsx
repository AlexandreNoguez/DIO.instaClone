import React from 'react'
import instaImg from '../../assets/img/insta.png'
import { Link } from 'react-router-dom'
import { FaFacebookSquare } from 'react-icons/fa'
function Login() {
    return (
        <div>
            <div className="w-[350px] h-[420px] p-8 border-[1px] rounded-sm bg-white items-center flex flex-col mr-36">
                <img className="mx-auto my-6" src={instaImg} />
                <input
                    className="w-64 h-9 p-4 border-[1px] border-gray-300 focus:outline-slate-200 rounded-sm mb-2"
                    type="email"
                    placeholder="Email"
                />
                <input
                    className="w-64 h-8 p-4 border-[1px] border-gray-300 focus:outline-slate-200 rounded-sm mb-2"
                    type="password"
                    placeholder="Senha"
                />
                <button
                    disabled
                    className="w-64 p-2 rounded-md bg-blue-600 text-white hover:-translate-y-0.5 transition-all my-6"
                >
                    Iniciar sessão
                </button>
                <div className="flex items-center justify-between">
                    <hr className="w-24"></hr>
                    <p className="mx-2">OU</p>
                    <hr className="w-24"></hr>
                </div>
                <div className="flex items-center justify-center">
                    <FaFacebookSquare />
                    <p className="mx-2 my-4 ">Iniciar sessão com Facebook</p>
                </div>
                <div>
                    <p className="text-sm my-4">Esqueci minha senha!</p>
                </div>
            </div>
            <div className="w-[350px] bg-white my-2 border-[1px] border-[#dbdbdb] p-4 items-center justify-center ">
                <p>
                    Não ?<Link to="/cadastro">Faça a sua conta!</Link>
                </p>
            </div>
        </div>
    )
}

export default Login
