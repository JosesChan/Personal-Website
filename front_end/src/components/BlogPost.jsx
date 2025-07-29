import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import CardGeneral from './CardGeneral';
import { Fragment } from 'react';

export default function BlogPost() {
  const [post, setPost] = useState({});
  const { id } = useParams();

  useEffect(() => {
    async function fetchBlogPost() {
      const response = await fetch(`http://joseschan.com:5000/blog/${id}`);
      
      if (!response.ok) {
        const message = `An error occurred: ${response.statusText}`;
        window.alert(message);
        return;
      }
      
      const post = await response.json();
      setPost(post);
    }

    fetchBlogPost();
  }, [id]);

  return (
    <Fragment>
      <h1 className="invisible">Blog Post</h1>
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
            {post.title ? (
              <div className="w-full space-y-4">
                <h2 className="text-2xl font-bold">{post.title}</h2>
                
                <div className="flex justify-between items-center text-sm text-gray-600">
                  <span>By {post.author}</span>
                  <span>
                    {post.createdAt && new Date(post.createdAt).toLocaleDateString()}
                    {post.updatedAt && post.updatedAt !== post.createdAt && 
                      ` (Updated: ${new Date(post.updatedAt).toLocaleDateString()})`
                    }
                  </span>
                </div>
                
                <div className="border-t pt-4">
                  <div className="whitespace-pre-wrap">
                    {post.content}
                  </div>
                </div>
                
                <div className="border-t pt-4 flex space-x-4">
                  <Link 
                    to={`/blog/edit/${post._id}`}
                    className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded"
                  >
                    Edit Post
                  </Link>
                  <Link 
                    to="/blog"
                    className="bg-gray-600 hover:bg-gray-700 text-white px-4 py-2 rounded"
                  >
                    Back to Blog
                  </Link>
                </div>
              </div>
            ) : (
              <div className="text-center">
                <p>Loading blog post...</p>
              </div>
            )}
          </CardGeneral>
        </div>
      </div>
    </Fragment>
  );
};