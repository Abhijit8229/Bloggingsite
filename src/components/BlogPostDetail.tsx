
import type { Post } from "../types/post"
import { useLoaderData, useNavigate } from "react-router"


const BlogPostDetail = () => {
    const {id, title, author, date, content }: Post = useLoaderData() as Post
    const navigate = useNavigate();
    const handleDelete = () => {
        const posts = JSON.parse(localStorage.getItem('posts') || '[]');
        const updatedPosts = posts.filter((post: Post) => post.id !== id);
        localStorage.setItem('posts', JSON.stringify(updatedPosts));
        navigate('/'); 
    }
  return (
    <div className="flex justify-center py-10 px-4">
      <div className="max-w-2xl w-full bg-base-100 shadow-lg rounded-lg p-6 space-y-4">
        <h1 className="text-3xl font-bold">{title}</h1>
        <p className="text-sm text-gray-500">By {author}</p>
        <p className="text-sm text-gray-400">Published on {date}</p>
        <div className="prose">
          {content.split("\n").map((para, idx) => (
            <p key={idx}>{para}</p>
          ))}
        </div>
      </div>
      <button className="btn btn-error mt-4" onClick={handleDelete}>
        Delete Post
      </button>
    </div>
  )
}

export default BlogPostDetail