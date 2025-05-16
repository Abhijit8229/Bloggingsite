import type { Post } from "../types/post";

const BlogItem = ({ post }: { post: Post }) => {
  const { title, content, image, tags } = post;

  return (
    <div className="card bg-base-100 w-96 shadow-xl">
      <figure>
        <img
          src={image}
          alt={title}
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">
          {title}
          {tags.length > 0 && (
            <div className="badge badge-secondary">{tags[0]}</div>
          )}
        </h2>
        <p>{content.split('\n')[0]}</p>
        <div className="card-actions justify-end">
          {tags.map((tag: string, index: number) => (
            <div key={index} className="badge badge-outline">
              {tag}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};



export default BlogItem