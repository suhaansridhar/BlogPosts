function BlogGenerator({array, handleDelete}){

    return(
        <div className="blog--generator--container">
            {array.map((element, index) => {
                return(
                    <div className="blog--container" key={index}>
                        <h3 className="blog--title">{element.title}</h3>
                        <h4 className="blog--subject">{element.subject}</h4>
                        <p className="blog--body">{element.body}</p>
                        <button onClick={() => handleDelete(index)}>Delete Post</button>
                    </div>
                )
            })}
        </div>
    )
}

export default BlogGenerator