import Bloglist from "./bloglist";
import useFetch from "./useFetch";



const Home = () => {
   
    const {data : blogs, loading, error} = useFetch("http://localhost:8000/blogs")
   

    return ( 
        <div className="home">
            <h3>Blogs</h3>
            {/* loading feature */}
            {loading && <div>Loading...</div> }
            
            {blogs && <Bloglist blogs={blogs} /> }
            {error && <div>{error}</div>}
        </div>
    );
}
 
export default Home;