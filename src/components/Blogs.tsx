import posts from "../data/blogData.json"
import type { Post } from "../types/post"
import BlogItem from "./BlogItem"

const Blogs = () => {
    console.log(posts);
    
  return (
    <main className="w-screen flex items-center  gap-3 mt-3 flex-col ">
          <h1>
          Beyond the Code !!!
        </h1>
        <div className="flexwrapper grid  grid-cols-1 lg:grid-cols-2 xl:grid-cols-3  gap-5">

        
        {
      

        posts.map((post:Post)=>(
            <BlogItem key={post.id} post={post}/>
        ))
    }
    </div>
    </main>
  )
}

export default Blogs