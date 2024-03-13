import { useEffect } from "react";
import { useState } from "react";
import BlogGenerator from "./Components/BlogGenerator";
import CreateBlog from "./Components/CreateBlog";

export default function App(){

  const [array, setArray] = useState([]);

  useEffect(() => {
    // get the JSON string from localStorage
    const str = localStorage.getItem('array');
    // convert JSON string to relevant object
    const parsedArray = JSON.parse(str);
    setArray(parsedArray);
  }, []);

  function handleClick(blog){
    console.log(blog);
    setArray(prevBlogs => [...prevBlogs, blog]);
  }

  function updateTheBlogs(){
    // convert array to JSON string using JSON.stringify()
    const jsonArray = JSON.stringify(array);
    // save to localStorage using "array" as the key and jsonArray as the value
    localStorage.setItem('array', jsonArray);
  }

  function handleDelete(id){
    setArray(array.filter((element, index) => index !== id));
  }

  return(
    <div className="app--container">
      <h2 className="app--title">BlogPosts</h2>
      <button onClick={updateTheBlogs} className="update--button">UPDATE</button>
      <br /><br />
      <hr />
      <div className="app--container--blogs">
        <CreateBlog handleClick={handleClick} />
        <BlogGenerator array = {array} handleDelete = {handleDelete}/>
      </div>
    </div>
  )
}