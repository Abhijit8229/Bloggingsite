import { NavLink } from "react-router";
import type { Post } from "../types/post";

const BlogItem = ({ post }: { post: Post }) => {
  const {id, title, content } = post;

  return (
    <NavLink to={`/posts/${id}`}>

    <div className="card bg-base-100 w-96 shadow-xl cursor-pointer">
      <div className="card-body">
        <h2 className="card-title">
          {title}
        </h2>
        <p>{content.split('\n')[0]}</p>
      </div>
    </div>
    </NavLink>
  );
};



export default BlogItem