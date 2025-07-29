import React, { Fragment, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import TextButton from './TextButton';
import TextField from './TextField';
import CardGeneral from './CardGeneral';

// export details of blog post to other file
export default function CreateBlog() {
  const [form, setForm] = useState({
    title: "",
    content: "", 
    author: "Joses Chan",
  });
  const navigate = useNavigate();

  // These methods will update the state properties using spread notation.
  // ...var lets you reference multiple variables when you aren't sure of the amount being passed
  function updateForm(value) {
    return setForm((prev) => {
      return { ...prev, ...value };
    });
  }

  // This function will handle the submission.
  async function onSubmit(e) {
    e.preventDefault();

    // When a post request is sent to the create url, we'll add a new blog post to the database.
    const newBlogPost = { ...form };

    await fetch("http://joseschan.com:5000/blog/add", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newBlogPost),
    })
      .catch(error => {
        window.alert(error);
        return;
      });

    setForm({ title: "", content: "", author: "Joses Chan" });
    navigate("/blog");
  }

  // This following section will display the form that takes the input from the user.
  return (
    <Fragment>
      <h1 className="invisible">Create Blog Post</h1>
      <div className="inset-0 -z-10 h-full w-full px-5 pt-12 bg-radial-gradient-top">
        <div className="page-column">
          <div className="mb-4">
            <Link 
              to="/blog"
              className="text-blue-600 hover:text-blue-800"
            >
              ← Back to Blog
            </Link>
          </div>
          
          <CardGeneral>
            <h2>Create New Blog Post</h2>
              <form onSubmit={onSubmit}>
                <div className="mt-4 space-y-4">
                  <TextField 
                    type="text" 
                    element_id="title" 
                    element_text="Post Title" 
                    placeholder="Enter your blog post title..." 
                    value_input={form.title} 
                    statehook={(e) => { updateForm({ title: e.target.value }) }} 
                  />
                  
                  <TextField 
                    type="text" 
                    element_id="author" 
                    element_text="Author" 
                    placeholder="Joses Chan" 
                    value_input={form.author} 
                    statehook={(e) => { updateForm({ author: e.target.value }) }} 
                  />
                  
                  <div>
                    <label htmlFor="content" className="block text-sm font-medium text-character mb-1">
                      Content
                    </label>
                    <textarea
                      id="content"
                      rows="10"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                      placeholder="Write your blog post content here..."
                      value={form.content}
                      onChange={(e) => { updateForm({ content: e.target.value }) }}
                    />
                  </div>
                </div>
                
                <div className="mt-6 flex space-x-4">
                  <TextButton type="submit" prompt="Create Post" />
                  <Link 
                    to="/blog"
                    className="bg-gray-600 hover:bg-gray-700 text-white px-4 py-2 rounded"
                  >
                    Cancel
                  </Link>
                </div>
              </form>
            </CardGeneral>
          </div>
        </div>
    </Fragment>
  );
};