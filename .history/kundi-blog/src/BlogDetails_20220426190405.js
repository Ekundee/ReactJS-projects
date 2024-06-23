import { useNavigate, useParams } from "react-router-dom";
import useFetch from "./useFetch";


const BlogDetails = () => {
    const navigate = useNavigate()
    const {id} = useParams()
    const{data : blog,loading,error} = useFetch("http://localhost:3000/blogs/"+id)
    const handleDelete =(id) =>{
        fetch("http://localhost:8000/blogs/"+id,{
            method: "DELETE"
        })
        .then(response=>{
            console.log("blog deleted")
            navigate(-1)
        })
    }
    return ( 
        <div className="blogDetails">
            <h2>Blog Details {id}</h2>
            {error && <p>{error}</p>}
            {loading && <p>Loading</p>}
            {blog && 
                <div>
                    <br/><br/><br/>
                    <div><h2>{blog.title}</h2></div>
                    <div>{blog.body}</div>
                    <div>{blog.author}</div>
                    <button onClick={() =>{handleDelete(blog.id)}}>Delete Blog</button>
                </div>
            }
        </div>
     );
}
 
export default BlogDetails;