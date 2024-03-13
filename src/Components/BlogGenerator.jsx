function BlogGenerator({array}){

    return(
        <div className="blog--generator--container">
            {array.map((element, index) => {
                return(
                    <div className="blog--container">
                        <h3 className="blog--title">{element.title}</h3>
                        <h4 className="blog--subject">{element.subject}</h4>
                        <p className="blog--body">{element.body}</p>
                    </div>
                )
            })}
        </div>
    )
}

export default BlogGenerator