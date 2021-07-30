import * as React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";

/* HOOK REACT EXAMPLE */
const Blog = () => {
  const [blogs, setBlogs] = useState<Array<any>>([]);

  useEffect(() => {
    async function getGreeting() {
      try {
        const res = await fetch("/api/blogs");
        const blogres = await res.json();
        setBlogs(blogres);
      } catch (error) {
        console.log(error);
      }
    }
    getGreeting();
  }, []);

  const deleteBlog = (blogid) => {
    
    fetch(`/${blogid}`, {
      method: "DELETE",
    })
      .then((response) => console.log(response))
      .catch((err) => {
        err = new Error("Failed to Fetch");
        console.log(err);
      });

    fetch(`/api/blogs`)
      .then((blogs) => blogs.json())
      .then((blogs) => setBlogs(blogs));
  };

  return (
    <main className="container my-5">
      <h1 className="text-primary text-center">My Blog!</h1>
      {blogs.map((blog) => {
        return <div className="card">
          <h1 className="card-header">{blog.title}</h1>
		  <div className="card-footer d-flex justify-content-between">
          <Link to={`/blogs/${blog.id}`} className="btn btn-success">
            Edit This Blog
          </Link>
		  
          <button
            type="submit"
            onClick={() => deleteBlog(blog.id)}
            className="btn btn-danger mt-3 c"
          >
            Delete Blog
          </button>
		  </div>
        </div>;
      })}
    </main>
  );
};

interface AppProps {}

export default Blog;
