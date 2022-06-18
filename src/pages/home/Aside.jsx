import { avatar1,avatar2,avatar3,avatar4,avatar5 } from '../../components/Images'
import imgPerfil from '../../assets/imagens/eu.jpg'

export function Aside(){

    function profile(name,desc,img){
        return(
            <div className="flex justify-between py-1">
                <div className="flex items-center">
                    <img 
                        src={img} 
                        alt={`Imagem de perfil de ${name}`} 
                        className="w-[35px] h-[35px] rounded-full object-fit"    
                    />
                    <div className="flex flex-col pl-2">
                        <p className="text-sm font-semibold">{name}</p>
                        <p className="text-sm text-zinc-500">{desc}</p>
                    </div>
                </div>

                <button className="text-blue-500 text-sm">Seguir</button>
            </div>
           
        )
    }

    return(
        <div className="fixed px-4 py-2 w-[400px]">
            <div className="flex justify-between ">
                <div className="flex items-center gap-x-4">
                    <div className="flex flex-col items-center cursor-pointer">
                        <span 
                            className={`
                            bg-black rounded-full 
                            bg-gradient-to-b
                            from-[#ef018b] 
                            to-[#ffb500]
                            p-[2px]
                        `}>
                            <img 
                                src={imgPerfil} 
                                alt="Imagem de perfil do storie" 
                                className={`
                                w-[65px] h-[65px] rounded-full bg-white p-[3px]
                                object-cover`} 
                            />
                        </span>
                    </div>
                    
                    <div className="flex flex-col ">
                        <p className="text-sm font-semibold">luan_hma</p>
                        <p className="text-zinc-500 text-sm">Luan Henrique</p>
                    </div>
                </div>

                <button className="text-sm text-blue-500">Mudar</button>
            </div>

            <div className="flex justify-between py-2">
                <h1 className="text-sm text-zinc-500">Sugestões para ti</h1>
                <button className="text-xs">Ver todas</button>
            </div>

            {/* Sugestões */}
            <div className="flex justify-between">
                <div className="flex flex-col w-full">
                    {profile("blackao", "Recente no instagram", avatar1)}
                    {profile("julia_32", "Seguido por julin_doGrau", avatar2)}
                    {profile("http_andressa", "Sugestão pra ti", avatar3)}
                    {profile("henritec", "Recente no instagram", avatar4)}
                    {profile("rogerin_2", "Seguido por lucas123", avatar5)}
                </div>
            </div>

            <div className="pt-4">
                <p className="text-xs text-zinc-400">&copy; 2022 INSTAGRAM FROM META</p>
                <p className="text-sm text-zinc-400">Interface clonada por Luan Henrique</p>
            </div>
        </div>
    )
}