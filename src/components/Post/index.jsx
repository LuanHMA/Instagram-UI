import { InfoPost } from "./InfoPosts";
import { DotsThree, Heart, ChatCircle, PaperPlaneTilt, BookmarkSimple, Smiley } from 'phosphor-react'
import { useState } from 'react';
export function Post({numberPost}){

    const [ liked, setLiked ] = useState(false);

    function randomNumber(){
        return Math.floor(Math.random()*100)
    }
    function checkLike(){
        liked ? setLiked(false) : setLiked(true);
    }
    
    return(
        <div className="bg-white shadow-sm border pt-3 m-auto w-full sm:rounded-lg">
            {/* Topo */}
            <header className="flex items-center justify-between px-2">
                <div className="flex gap-x-2">
                    <img 
                        src={InfoPost[numberPost].img} 
                        alt="Imagem de perfil"
                        className="h-[35px] w-[35px] rounded-full object-cover"
                    />
                    <div>   
                        <h1 className="text-sm">{InfoPost[numberPost].name}</h1>
                        <h1 className="text-xs text-zinc-400">{InfoPost[numberPost].location}</h1>
                    </div>
                </div>

	            <DotsThree size={24} weight="bold" className="cursor-pointer" />

            </header>

            {/* Imagem */}
            <div className="pt-4">
                <img src={InfoPost[numberPost].img} alt="Imagem do post" className="w-full h-[470px] object-cover"/>
            </div>
            
            {/* Body */}
            <div className="flex flex-col p-3 gap-y-2">
                {/* Barra de interação */}
                <div className="flex justify-between items-center">
                    <div className="flex gap-x-3">
                        <Heart size={26} weight={liked ? "fill" : "regular" } color={liked ? "#ed4956": "black"} className="cursor-pointer" onClick={checkLike}/>
                        <ChatCircle size={26} weight="regular" className="cursor-pointer"/>
                        <PaperPlaneTilt size={26} weight="regular" className="cursor-pointer"/>
                    </div>

                    <BookmarkSimple size={26} weight="regular" />
                </div>

                {/* Curtidas */}
                <div className="flex items-center">
                    <p className="text-sm">Gostos:</p>
                    <span className="flex gap-x-1">
                        <a href="#" className="font-bold text-sm">Luan_hma</a>
                        <a href="#" className="font-bold text-sm">e outras pessoas</a>
                    </span>
                    
                </div>
                
                {/* Descricação */}
                <div className="flex items-center gap-x-1">
                    <p className="text-sm font-bold">{InfoPost[numberPost].name} </p>
                    <p className="text-sm">{InfoPost[numberPost].postDescription}</p>
                </div>

                {/* Comentários */}
                <a href="#" className="text-zinc-500 text-sm">Ver todos os { randomNumber() } comentários</a>

                {/* Hora da postagem */}
                <p className="text-zinc-500 text-xs">HÁ {InfoPost[numberPost].postHour} HORAS</p>

                {/* Novo comentário */}
                <div className="flex items-center justify-between border-t border-1 pt-3">
                    <Smiley size={26} weight="regular" className="cursor-pointer"/>

                    <input type="text" className="w-[80%] h-full outline-none text-md" placeholder="Adicione um comentário"/>

                    <button className={`text-blue-400 text-sm font-bold`}>Publicar</button>
                </div>

            </div>
        
            
        </div>
    )
}