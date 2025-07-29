import { Fragment } from 'react';
import React, { useState, useEffect } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import TextButton from './TextButton';
import TextField from './TextField';
import CardGeneral from './CardGeneral';

export default function EditBlog() {
  const [form, setForm] = useState({
    title: "",
    content: "",
    author: "",
  });
  const params = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchData() {
      const id = params.id.toString();
      const response = await fetch(`http://joseschan.com:5000/blog/${params.id.toString()}`);

      if (!response.ok) {
        const message = `An error has occurred: ${response.statusText}`;
        window.alert(message);
        return;
      }

      const blogPost = await response.json();
      if (!blogPost) {
        window.alert(`Blog post with id ${id} not found`);
        navigate("/blog");
        return;
      }

      setForm(blogPost);
    }

    fetchData();

    return;
  }, [params.id, navigate]);

  // These methods will update the state properties.
  function updateForm(value) {
    return setForm((prev) => {
      return { ...prev, ...value };
    });
  }

  async function onSubmit(e) {
    e.preventDefault();
    const editedBlogPost = {
      title: form.title,
      content: form.content,
      author: form.author,
    };

    // This will send a post request to update the data in the database.
    await fetch(`http://joseschan.com:5000/blog/update/${params.id}`, {
      method: "POST",
      body: JSON.stringify(editedBlogPost),
      headers: {
        'Content-Type': 'application/json'
      },
    });

    navigate("/blog");
  }

  // This following section will display the form that takes input from the user to update the data.
  return (
    <Fragment>
      <h1 className="invisible">Edit Blog Post</h1>
      <div className="inset-0 -z-10 h-full w-full px-5 pt-12 bg-radial-gradient-top">
        <div className='page-column'>
          <div className="mb-4">
            <Link 
              to="/blog"
              className="text-blue-600 hover:text-blue-800"
            >
              ← Back to Blog
            </Link>
          </div>
          
          <CardGeneral>
            <h2>Edit Blog Post</h2>
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
                  <TextButton type="submit" prompt="Update Post" />
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