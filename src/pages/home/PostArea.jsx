import { Post } from "../../components/Post"

export function PostArea(){
    return(
        <section className="flex flex-col gap-y-3 pb-[4rem] sm:mt-5">
            <Post numberPost={0}/>
            <Post numberPost={1}/>
            <Post numberPost={2}/>
            <Post numberPost={3}/>
            <Post numberPost={4}/>
            <Post numberPost={5}/>
            <Post numberPost={6}/>
        </section>
    )
}