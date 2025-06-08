import { NavLink } from "react-router";
import posts from "../data/blogData.json"
import type { Post } from "../types/post"
import BlogItem from "./BlogItem"

const Blogs = () => {
    console.log(posts);
    
  return (
    <main className="w-screen flex items-center  gap-3 mt-3 flex-col ">
      <div className="flex  items-center justify-around gap-3  w-full">

          <h1>
          Beyond the Code !!!
        </h1>

        <NavLink to="/create" className={`btn btn-primary`}>Create Blog</NavLink>
      </div>
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