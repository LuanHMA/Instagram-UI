import { Header } from "./pages/home/Header"
import { StoriesCarousel } from "./pages/home/StoriesCarousel"
import { PostArea } from './pages/home/PostArea'
import { Aside } from "./pages/home/Aside"

export default function App(){
  return(
   <div className="bg-[#fafafa]">
      <Header/>

      <main className={`
        grid grid-cols-1 h-screen w-[95vw] bg-[#fafafa] gap-x-5 pt-[40px] m-auto
        sm:max-w-[500px] sm:pt-[90px]
        lg:grid-cols-2 lg:w-9/12 lg:max-w-[1000px]`
      }>
        <section>
          <StoriesCarousel/>
          <PostArea/>
        </section>

        <aside className="bg-white hidden lg:flex ">
          <Aside/>
        </aside>
      </main>

   </div>
  )
}