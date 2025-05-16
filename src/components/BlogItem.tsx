import type { Post } from "../types/post";

const BlogItem = ({ post }: { post: Post }) => {
  const { title, content } = post;

  return (
    <div className="card bg-base-100 w-96 shadow-xl">
      <div className="card-body">
        <h2 className="card-title">
          {title}
        </h2>
        <p>{content.split('\n')[0]}</p>
      </div>
    </div>
  );
};



export default BlogItem