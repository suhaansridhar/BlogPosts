import { useState } from "react"

export default function CreateBlog({handleClick}){
    const [blog, setBlog] = useState({title: "", subject : "", body: ""});

    function handleChange(event){
        const {name, value} = event.target;
        setBlog(prevState => ({
            ...prevState,
            [name] : value
        }))
    }

    return(
        <div className="create--blog--container">
            <input type="text" 
                placeholder="Enter the title" 
                onChange={handleChange} 
                name = "title" 
                value = {blog.title}
            />

            <input type="text" 
                placeholder="Enter the subject" 
                onChange={handleChange} 
                name = "subject"
                value = {blog.subject}
            />

            <input type="text"
                placeholder="Enter the body" 
                onChange={handleChange} 
                name = "body"
                value = {blog.body}
            />

            <button onClick={() => handleClick(blog)}>Submit</button>
        </div>
    )
}