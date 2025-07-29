import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import CardGeneral from './CardGeneral';
import { Fragment } from 'react';

// Blog post preview component
const BlogPreview = (props) => (
  <div className="mb-6">
    <CardGeneral>
      <div className="w-full space-y-3">
        <div className="flex justify-between items-center">
          <h3 className="text-lg font-bold">{props.post.title}</h3>
          <div className="flex space-x-2">
            <Link 
              className="text-blue-600 hover:text-blue-800 text-sm"
              to={`/blog/${props.post._id}`}
            >
              Read More
            </Link>
            <Link 
              className="text-green-600 hover:text-green-800 text-sm"
              to={`/blog/edit/${props.post._id}`}
            >
              Edit
            </Link>
            <button 
              className="text-red-600 hover:text-red-800 text-sm"
              onClick={() => { props.deleteBlogPost(props.post._id); }}
            >
              Delete
            </button>
          </div>
        </div>
        <p className="text-gray-600 text-sm">
          By {props.post.author} on {new Date(props.post.createdAt).toLocaleDateString()}
        </p>
        <p className="text-character">
          {props.post.content.substring(0, 200)}
          {props.post.content.length > 200 ? '...' : ''}
        </p>
      </div>
    </CardGeneral>
  </div>
);

// Using a GET method, retrieve all blog posts in the database
export default function BlogList() {
  const [posts, setPosts] = useState([]);

  // This method fetches the blog posts from the database.
  useEffect(() => {
    // create an asynchronous function in effect hook
    async function getBlogPosts() {    
      // replace later, make a env variable instead of changing localhost to joseschan.com
      const response = await fetch(`http://joseschan.com:5000/blog/`);

      // If theres a problem, create an alert window with the error message
      if (!response.ok) {
        const message = `An error occurred: ${response.statusText}`;
        window.alert(message);
        return;
      }

      // update posts with statehook
      const posts = await response.json();
      setPosts(posts);
    }

    // use asynchronous function that was previously made
    getBlogPosts();

    return;
  }, [posts.length]); // data fetching dependency

  // This method will delete a blog post
  async function deleteBlogPost(id) {
    // wait until fetch promise has arisen
    await fetch(`http://joseschan.com:5000/blog/${id}`, {
      method: "DELETE"
    });

    // update posts without "deleted" element
    const newPosts = posts.filter((el) => el._id !== id);
    setPosts(newPosts);
  }

  // This method will map out the blog posts
  function blogPostList() {
    // map state variable with post arrow function
    return posts.map((post) => {
      return (
        <BlogPreview
          post={post}
          deleteBlogPost={() => deleteBlogPost(post._id)}
          key={post._id}
        />
      );
    });
  }

  // This following section will display the blog posts
  return (
    <Fragment>
      <h1 className="invisible">Blog List</h1>
        <div className="inset-0 -z-10 h-full w-full px-5 pt-12 bg-radial-gradient-top">
          <div className="page-column">
            <div className="flex justify-between items-center mb-6">
              <CardGeneral>
                <h2 className="text-center text-2xl font-bold">Blog Posts</h2>
              </CardGeneral>
              <Link 
                to="/blog/create"
                className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded"
              >
                New Post
              </Link>
            </div>
            {posts.length === 0 ? (
              <CardGeneral>
                <p className="text-center">No blog posts yet. Create your first post!</p>
              </CardGeneral>
            ) : (
              blogPostList()
            )}
          </div>
        </div>
    </Fragment>
  );
};