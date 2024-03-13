import { useState } from "react"

export default function CreateBlog({handleClick}){
    const [blog, setBlog] = useState({title: '', subject : '', body: ''});

    function handleChange(event){
        const {name, value} = event.target;
        setBlog(prevState => ({
            ...prevState,
            [name] : value
        }))
    }

    return(
        <div className="create--blog--container">
            <input type="text" placeholder="Enter the title" onChange={handleChange}/>
            <input type="text" placeholder="Enter the subject" onChange={handleChange}/>
            <input type="text" placeholder="Enter the body" onChange={handleChange}/>
            <button onClick={() => handleClick(blog)}>Submit</button>
        </div>
    )
}