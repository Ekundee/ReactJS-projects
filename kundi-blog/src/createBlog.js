import Navbar from "./navbar";
import {useState} from "react"
import { useNavigate } from "react-router-dom";
const CreateBlog = () => {
    const [title, setTitle] = useState("")
    const [body, setBody] = useState("")
    const [author, setAuthor] = useState("mosh")
    const navigate = useNavigate()

    const handleSubmit=(e)=>{
        e.preventDefault()
        const blog = {title,author,body}
        console.log(blog)

        fetch("http://localhost:8000/blogs",{method:"post",headers:{"Content-Type": "application/json"}, body:JSON.stringify(blog)})
        .then(response=>{
            console.log("new blog added")
            console.log(response)
            navigate(-1)
        })
    }
    return ( 
        <div className="createBlog">
            <h1>Add a new blog</h1>

            <form onSubmit={(e)=>{handleSubmit(e)}}>
                <br/><br/>

                <label>Title</label>
                <input type="text" name="" id="" value={title} onChange={(e)=>{setTitle(e.target.value)}} />

                <br/><br/>

                <label>Body</label>
                <textarea required onChange={(e)=>{setBody(e.target.value)}} value={body}>
                </textarea>

                <br/><br/>
                
                <label>Author</label>
                <select value={author} onChange={(e)=>{setAuthor(e.target.value)}}>
                    <option value="Mario">Mario</option>
                    <option value="Mosh">Mosh</option>
                    <option value="Ekundee">Ekundee</option>
                </select>

                <br/><br/>

                <button>Submit</button>
            </form>
        </div>
    );
}
 
export default CreateBlog;