import { MenuDesktop } from "../../components/MenuDesktop"
import { MenuMobile } from "../../components/MenuMobile"
export function Header(){
    return(
        <header className={`fixed border shadow-sm w-screen bg-white z-50`}>
           {
               window.innerWidth > 640 ? <MenuDesktop/> : <MenuMobile/>

           }
        </header>
    )
}