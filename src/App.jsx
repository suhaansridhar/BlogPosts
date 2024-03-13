import { useState } from "react";
import BlogGenerator from "./Components/BlogGenerator";
import CreateBlog from "./Components/CreateBlog";

export default function App(){

  const [array, setArray] = useState([
    {title : "First Blog", subject : "Checking", body : "This is a body"},
    {title : "First Blog", subject : "Checking", body : "This is a body"},
    {title : "First Blog", subject : "Checking", body : "This is a body"},
    {title : "First Blog", subject : "Checking", body : "This is a body"},
    {title : "First Blog", subject : "Checking", body : "This is a body"},
    {title : "First Blog", subject : "Checking", body : "This is a body"}
  ]);

  function handleClick(blog){
    setArray(prevBlogs => [...prevBlogs, blog]);
  }

  return(
    <div className="app--container">
      <h2 className="app--title">BlogPosts</h2>
      <br /><br />
      <hr />
      <div className="app--container--blogs">
        <CreateBlog handleClick={handleClick} />
        <BlogGenerator array = {array}/>
      </div>
    </div>
  )
}