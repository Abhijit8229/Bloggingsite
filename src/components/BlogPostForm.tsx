import React, { useState } from 'react';

import type { Post } from '../types/post';

const BlogPostForm = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState( '');
  const [author, setAuthor] = useState('');
  const [date, setDate] = useState('');
  const [errors, setErrors] = useState<Partial<Post>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validate = (): boolean => {
    const newErrors: Partial<Post> = {};
    if (!title.trim()) newErrors.title = 'Required';
    if (!content || content === '<p><br></p>') newErrors.content = 'Required';
    if (!author.trim()) newErrors.author = 'Required';
    if (!date.trim()) newErrors.date = 'Required';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };
  const onSubmit = (post: Post) => {
    console.log('Post submitted:', post);
     // Here you would typically send the post to your backend or state management
  };
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setIsSubmitting(true);
    await new Promise((res) => setTimeout(res, 500));
    const dt = new Date().getTime().toString(); // simulate delay
    onSubmit({
      id: dt,
      title,
      content,
      author,
      date,
      tags: [],
      image:''
    });
    setIsSubmitting(false);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-3xl mx-auto p-6 bg-base-100 rounded-box shadow-md space-y-5"
    >
      <h2 className="text-2xl font-bold text-center">Blog Posts</h2>

      {/* Title */}
      <div className="form-control">
        <label htmlFor="title" className="label">
          <span className="label-text">Title</span>
        </label>
        <input
          id="title"
          type="text"
          placeholder="Enter title"
          className="input input-bordered"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        {errors.title && <span className="text-error text-sm">{errors.title}</span>}
      </div>

      {/* Content */}
      <div className="form-control">
        <label className="label">
          <span className="label-text">Content</span>
        </label>
        <textarea 
          value={content}
          onChange={(e) => setContent(e.target.value)}
          className="textarea bg-white"
        />
        {errors.content && <span className="text-error text-sm">{errors.content}</span>}
      </div>

      {/* Author */}
      <div className="form-control">
        <label htmlFor="author" className="label">
          <span className="label-text">Author</span>
        </label>
        <input
          id="author"
          type="text"
          placeholder="Enter author name"
          className="input input-bordered"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
        />
        {errors.author && <span className="text-error text-sm">{errors.author}</span>}
      </div>

      {/* Date */}
      <div className="form-control">
        <label htmlFor="date" className="label">
          <span className="label-text">Publication Date</span>
        </label>
        <input
          id="date"
          type="date"
          className="input input-bordered"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
        {errors.date && <span className="text-error text-sm">{errors.date}</span>}
      </div>

      {/* Submit */}
      <div className="form-control mt-6">
        <button
          type="submit"
          className="btn btn-primary"
          disabled={isSubmitting}
        >
          {isSubmitting ?  'Update Post' : 'Create Post'}
        </button>
      </div>
    </form>
  );
};

export default BlogPostForm;
