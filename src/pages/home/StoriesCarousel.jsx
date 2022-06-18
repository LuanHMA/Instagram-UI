import { avatar1, avatar2, avatar3,avatar4,avatar5 } from '../../components/Images'
import { CaretCircleRight, CaretCircleLeft } from 'phosphor-react'
import { useRef } from 'react';


export function StoriesCarousel(){
    
    const carousel = useRef(null);

    function next(){
        carousel.current.scrollLeft += carousel.current.offsetWidth
    }
    function prev(){
        carousel.current.scrollLeft -= carousel.current.offsetWidth
    }

    function Storie(nome,src){
        return(
            <div className="flex flex-col items-center cursor-pointer mx-2 shrink-0 snap-center">
                <span 
                    className={`
                    bg-black rounded-full 
                    bg-gradient-to-b
                    from-[#ef018b] 
                    to-[#ffb500]
                    p-[2px]
                `}>
                    <img 
                        src={src} 
                        alt="Imagem de perfil do storie" 
                        className={`
                        w-[65px] h-[65px] rounded-full bg-white p-[3px]
                        `} 
                    />
                </span>
                <small className="text-sm">{nome}</small>
            </div>
        )
    }

    return(
        <div className="relative">
            <div className=" absolute top-8 left-5 bottom-[50%] cursor-pointer " onClick={prev}>
                <div className="absolute">
                    <CaretCircleLeft size={28} weight="fill" color="#f3f4f6" />
                </div>
            </div>

            <div className=" absolute top-8 right-8 bottom-[50%] cursor-pointer" onClick={next}>
                <div className="absolute">
                    <CaretCircleRight size={28} weight="fill" color="#f3f4f6"/>
                </div>
            </div> 

            <section className={` flex overflow-hidden snap-x snap-mandatory bg-[#fafafa] mt-3 border w-full p-3 shadow-sm  
            sm:mb-3 sm:bg-white sm:rounded-lg

             `} ref={carousel}>

                {Storie("Pessoa", avatar1)}
                {Storie("Pessoa", avatar2)}
                {Storie("Pessoa", avatar3)}
                {Storie("Pessoa", avatar4)}
                {Storie("Pessoa", avatar5)}
                {Storie("Pessoa", avatar1)}
                {Storie("Pessoa", avatar2)}
                {Storie("Pessoa", avatar3)}
                {Storie("Pessoa", avatar4)}
                {Storie("Pessoa", avatar5)}
            </section>
        </div>
    )
        
}