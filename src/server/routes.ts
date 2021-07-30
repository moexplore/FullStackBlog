import * as express from "express";
import db from "./db";
const router = express.Router();

router.get("/api/hello", (req, res, next) => {
  res.json("World");
});

router.get("/api/blogs", async (req, res) => {
  try {
    let blogs = await db.blog.all();
    res.json(blogs);
  } catch (e) {
    console.log(e);
    
    res.sendStatus(500);
  }
});

router.get("/api/blogs/:id", async (req, res) => {
  try {
    let blog = await db.blog.one(req.params.id);
    let blogtags = await db.blog.tags(req.params.id)
    const finalResponse = {
      blogtags: blogtags[0].map(tagObj => tagObj.name),
      id: blog[0].id,
      title: blog[0].title,
      content: blog[0].title,
      authorid: blog[0].authorid,
      _created: blog[0]._created
    };
    res.json(finalResponse);
  } catch (e) {
    console.log(e);

    res.sendStatus(500);
  }
});

router.post("/", async (req, res) => {
  try {
    let author = await db.blog.postAuthor(
      req.body.name,
      req.body.email
      );
    let authorid = author.insertId;
    db.blog.postBlog(authorid, req.body.title, req.body.content);
    res.sendStatus(200);
  } catch (e) {
    console.log(e);
    res.sendStatus(500);
  }
});

router.delete('/:id', async(req, res) =>{
  try {
    await res.send(db.blog.deleteBlog(req.params.id))

    res.sendStatus(200);
  } catch (e) {
    console.log(e);
    res.sendStatus(500);
  }
})

export default router;
