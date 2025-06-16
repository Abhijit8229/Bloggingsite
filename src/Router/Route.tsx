import { createBrowserRouter } from "react-router";
import App from "../App";
import BlogPostDetail from "../components/BlogPostDetail";
import data from "../data/blogData.json";
import type { Post } from "../types/post"
import BlogPostForm from "../components/BlogPostForm";

const router = createBrowserRouter([
    {
      path: "/",
      loader: () => {
      const posts = localStorage.getItem('posts');
      if (posts && Array.isArray(JSON.parse(posts))) {
        return JSON.parse(posts);
      }
      localStorage.setItem('posts', JSON.stringify(data));
      
        
        return JSON.parse(localStorage.getItem('posts') || '[]');
      },
      Component:App
    },
    {
      path: "/posts/:id",
      
      loader: async ({ params }) => {
        const posts = localStorage.getItem('posts');
        if (!params.id) {
          throw new Error("Post ID is required");
        }
        if (!posts || !Array.isArray(JSON.parse(posts))) {
          throw new Error("No posts found");
        }
        if (JSON.parse(posts).length === 0) {
          throw new Error("No posts available");
        }
        if (!JSON.parse(posts).find((post: Post) => post.id === params.id)) {
          throw new Error(`Post with ID ${params.id} not found`);
        }
        // Find the post with the given ID
        console.log(posts);
        
        return JSON.parse(posts).find((post: Post) => post.id === params.id);
      },
      
      Component:BlogPostDetail
    },
    {
      path: "/create",
      element:<BlogPostForm/>,
    },
    {
      path: "/edit/:id",
      loader: async ({ params }) => {
        return data.find((post: Post) => post.id === params.id);
      },
      element: <BlogPostForm />
    }
  ]);
  
export default router