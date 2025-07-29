const express = require("express");
 
// blogRoutes is an instance of the express router.
// We use it to define our routes.
// The router will be added as a middleware and will take control of requests starting with path /blog.
const blogRoutes = express.Router();
 
// This will help us connect to the database
const dbo = require("../db/conn");
 
// This help convert the id from string to ObjectId for the _id.
const ObjectId = require("mongodb").ObjectId;
 
// GET ALL
// This section will help you get a list of all the blog posts.
blogRoutes.route("/blog").get(function (req, res) {
 let db_connect = dbo.getDb("Cluster-Personel-Website");
 db_connect
   .collection("blogposts")
   .find({})
   .sort({ createdAt: -1 }) // Sort by creation date, newest first
   .toArray(function (err, result) {
     if (err) throw err;
     res.json(result);
   });
});
 
// GET SINGLE
// This section will help you get a single blog post by id
blogRoutes.route("/blog/:id").get(function (req, res) {
 let db_connect = dbo.getDb();
 let myQuery = { _id: ObjectId(req.params.id) };
 db_connect
   .collection("blogposts")
   .findOne(myQuery, function (err, result) {
     if (err) throw err;
     res.json(result);
   });
});
 
// This section will help you create a new blog post.
blogRoutes.route("/blog/add").post(function (req, response) {
 let db_connect = dbo.getDb();
 let myobj = {
  title: req.body.title,
  content: req.body.content,
  author: req.body.author || "Joses Chan",
  createdAt: new Date(),
  updatedAt: new Date(),
 };
 db_connect.collection("blogposts").insertOne(myobj, function (err, res) {
   if (err) throw err;
   response.json(res);
 });
});

// This section will help you update a blog post by id.
blogRoutes.route("/blog/update/:id").post(function (req, response) {
 let db_connect = dbo.getDb();
 let myQuery = { _id: ObjectId(req.params.id) };
 let newValues = {
   $set: {
    title: req.body.title,
    content: req.body.content,
    author: req.body.author || "Joses Chan",
    updatedAt: new Date(),
   },
 };
 db_connect
   .collection("blogposts")
   .updateOne(myQuery, newValues, function (err, res) {
     if (err) throw err;
     console.log("1 blog post updated");
     response.json(res);
   });
});
 
// This section will help you delete a blog post
blogRoutes.route("/blog/:id").delete((req, response) => {
 let db_connect = dbo.getDb();
 let myQuery = { _id: ObjectId(req.params.id) };
 db_connect.collection("blogposts").deleteOne(myQuery, function (err, obj) {
   if (err) throw err;
   console.log("1 blog post deleted");
   response.json(obj);
 });
});
 
module.exports = blogRoutes;