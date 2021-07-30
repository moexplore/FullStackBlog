import React, { useState } from "react";

const Admin = () => {
  const [title, setTitle] = useState([]);
  const [content, setContent] = useState([]);

  const handleName = (e: any) => {
    setTitle(e.target.value);
  };
  const handleMessage = (e: any) => {
    setContent(e.target.value);
  };

  const postNewBlog = () => {
    
    // let res = await fetch('/api/chirps', {
    //     method: 'POST',
    //     headers: {'Content-Type': 'application/json'},

    // })
    
    
    const update: object = {
      title: title ,
      content: content,
    };

    const options: object = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        'Accept': 'application/json'
      },
      body: JSON.stringify(update)
    };

    fetch("/api/blogs", options)
    .then(data => data.json())
    .then(update => console.log(update))
}

  return (
    <form>
      <div>
        <h1>
          Here is where you post a blog with a "Post Request" on the
          backend
        </h1>
        <label htmlFor="">Blog Title</label>
        <input  onChange={handleName}></input>
      </div>
      <div>
        <label htmlFor="">Blog Content</label>
        <textarea onChange={handleMessage}></textarea>
      </div>
      <button type="button" className="bg-primary" onClick={postNewBlog}>
        Post a New Blog!
      </button>
    </form>
  );
};

export default Admin
