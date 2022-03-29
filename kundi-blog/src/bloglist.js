import {Link} from "react-router-dom"

const Bloglist = ({blogs}) => {
    
    return ( 
        <div className="bloglist-header">
            {blogs.map((blog)=>(
               <div className="blog-preview" key={blog.id}>
                   <Link to={"/blogs/"+blog.id}>
                        <h2 className="blog-header">{blog.title}</h2>
                        <p className="blog-author">This blog was written by {blog.author}</p>
                   </Link>
               </div>
            ))}
        </div>
     );
}
 
export default Bloglist;