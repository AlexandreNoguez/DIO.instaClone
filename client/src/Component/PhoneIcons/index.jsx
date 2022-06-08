import React from 'react'
import cellInsta from '../../assets/img/celInsta.png'

function PhoneIcons() {
    return (
        <div className="flex">
            <img
                className="mx-auto my-4 max-w-[600px] md:hidden"
                src={cellInsta}
                alt="smartphones com a tela de login do instagram"
            />
        </div>
    )
}

export default PhoneIcons
