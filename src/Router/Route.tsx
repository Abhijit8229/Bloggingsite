import { createBrowserRouter } from "react-router";
import App from "../App";
import BlogPostDetail from "../components/BlogPostDetail";
import data from "../data/blogData.json";
import type { Post } from "../types/post"
import BlogPostForm from "../components/BlogPostForm";
const router = createBrowserRouter([
    {
      path: "/",
      element:<App/>
    },
    {
      path: "/posts/:id",
      
      loader: async ({ params }) => {
      
        return data.find((post: Post) => post.id === params.id);
      },
      
      Component:BlogPostDetail
    },
    {
      path: "/create",
      element:<BlogPostForm/>,
    }
  ]);
  
export default router