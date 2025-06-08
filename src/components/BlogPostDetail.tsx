
import type { Post } from "../types/post"
import { useLoaderData } from "react-router"


const BlogPostDetail = () => {
    const { title, author, date, content }: Post = useLoaderData() as Post
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
    </div>
  )
}

export default BlogPostDetail