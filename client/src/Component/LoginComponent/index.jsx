import React from 'react'
import instaImg from '../../assets/img/insta.png'
import { Link } from 'react-router-dom'
import { FaFacebookSquare } from 'react-icons/fa'
import googlePlay from '../../assets/img/android.png'
import iphoneStore from '../../assets/img/ios.png'
function Login() {
    return (
        <div className="mr-36 md:mr-0 md:mt-[35.9px]">
            <div className="w-[350px] h-[390px] p-8 border-[1px] rounded-sm bg-white items-center flex flex-col">
                <img className="mx-auto my-4" src={instaImg} />
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
                    <p className="mx-2 my-2 ">Iniciar sessão com Facebook</p>
                </div>
                <div>
                    <p className="text-sm my-2">
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
                <img className="w-36 h-10" src={googlePlay} alt="" />
                <img className="w-36 h-10" src={iphoneStore} alt="" />
            </div>
        </div>
    )
}

export default Login
