import { MessengerLogo, Camera,  House, Plus, Heart, MagnifyingGlass } from 'phosphor-react'
import Avatar from '../assets/imagens/avatar.png'
import Logo from '../assets/imagens/logo.png'

export function MenuMobile(){
    return(
        <section className={`
            flex items-center justify-between h-[45px] px-4 max-w-6xl bg-white shadow-sm z-50
            sm:justify-around 
        `}>
            {/* Navegação superior */}
            <Camera size={28} weight="regular" className="cursor-pointer"/>
            <img src={Logo} width="120" className="cursor-pointer"/>
            <MessengerLogo size={28} weight="regular" className="cursor-pointer"/>

            {/* Navegação inferior */}
            <nav className={`
                fixed bottom-0 left-0 right-0 m-auto flex items-center justify-between h-[45px] w-screen px-5 max-w-6xl bg-white shadow-sm border z-50 shadow-sm
                sm:justify-around
            
            `}>
                <House size={28} weight="fill" className="cursor-pointer"/>
                
                <MagnifyingGlass size={28} weight="regular" className="cursor-pointer"/>

                <Plus size={28} weight="regular" className="cursor-pointer border-2 rounded-lg border-black"/>

                <Heart size={28} weight="regular" className="cursor-pointer"/>

                <img src={Avatar} alt="Avatar de perfil" className="rounded-full w-[28px] border-2 border-gray-200 cursor-pointer"/>
            </nav>

        </section>

    )
}