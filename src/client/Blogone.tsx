import * as React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

/* HOOK REACT EXAMPLE */
const Blogone = () => {
  const [blog, setBlog] = useState<{title: string, content: string, blogtags: Array<any>}>({
      title: "",
      content: "",
      blogtags: []
  });

  const { id }: { id: string } = useParams();

  useEffect(() => {
    async function getBlog() {
      try {
        const res = await fetch(`/api/blogs/${id}`);
        const blogres = await res.json();
        setBlog(blogres);
      } catch (error) {
        console.log(error);
      }
    }
    getBlog();
  }, []);

  return (
    <main className="container my-5">
      <h1 className="text-primary text-center">One Specific Blog Post</h1>
      
        <div className="card">
          <h1 className="card header">{blog.title}</h1>
          <p className="card-body">{blog.content}</p>
          {blog.blogtags.map(tag => <h3 className = 'badge badge-success'>{tag}</h3>)}
        </div>
    </main>
  );
};

interface AppProps {}

export default Blogone;
