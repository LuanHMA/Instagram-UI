import Logo from '../assets/imagens/logo.png'
import Avatar from '../assets/imagens/avatar.png'
import { House, MessengerLogo, Plus, Heart, Compass, MagnifyingGlass, XCircle  } from 'phosphor-react'
import { useState, useRef } from 'react'

export function MenuDesktop(){

    const [clickedBar, setClickedBar ] = useState(false);
    const inputSearch = useRef(null)

    function clearInput(){
        inputSearch.current.value = ""
        inputSearch.current.focus()
        setClickedBar(false);
    }

    return(
        <section className={`
        m-auto flex items-center justify-between h-[60px] px-4
        sm:justify-around
        max-w-6xl
    
        `}>
            <a href="/">
                <img src={Logo} alt="Logotipo do Instagram" className="pt-2 w-[123px]"/>
            </a>
            
            <div className="hidden items-center sm:flex bg-gray-100 rounded-lg py-2 px-3 xl:ml-[170px] ">

                { !clickedBar ? 
                    <MagnifyingGlass 
                        size={20} 
                        weight="regular" 
                        color="gray" 
                    />

                    : false
                }

                <input 
                    type="text" 
                    placeholder='Pesquisar' 
                    className="bg-gray-100 pl-1 outline-none md:w-[240px]" 
                    onClick={()=> setClickedBar(true)} 
                    onChange={()=> setClickedBar(true)}
                    ref={inputSearch}
                />

                { clickedBar ? 
                    <XCircle 
                        size={20} 
                        weight="regular" 
                        color="gray" 
                        onClick={clearInput} 
                        className="cursor-pointer"
                    />

                    : false
                }
                
                
            </div>

            <nav className="flex gap-x-4 items-center pr-4">
                <House size={28} weight="fill" className="cursor-pointer" />

                <MessengerLogo size={26} weight="regular" className="cursor-pointer" />

                <Plus size={24} weight="regular" className="border-2 rounded-lg border-black cursor-pointer"/>

                <Compass size={26} weight="regular" className="cursor-pointer"/>

                <Heart size={26} weight="regular" className="cursor-pointer"/>

                <img src={Avatar} alt="Avatar de perfil" className="rounded-full w-[28px] border-2 border-gray-200 cursor-pointer"/>
            </nav>
        </section>
    )
}