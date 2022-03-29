import Navbar from "./navbar"
import Home from "./home"
import  {BrowserRouter as Router, Route,Routes} from "react-router-dom"
import CreateBlog from "./createBlog"
import BlogDetails from "./BlogDetails"



function App(){
  return(
    <Router>
      <div className="App">
        <Navbar />
        <div className="fullContent">
          <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/home" element={<Home />}/>
            <Route path="/create" element={<CreateBlog/>}/>
            <Route path="/blogs/:id" element={<BlogDetails/>}/>
          </Routes>
        </div>
      </div>
    </Router>
  )
}

export default App