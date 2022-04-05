import Navbar from "./components/general/Navbar";
import "./styles/navbar.css"
import "./styles/footer.css"
import "./index.css"
import "./styles/login.css"
import {BrowserRouter as Router, Route,Routes} from "react-router-dom"
import LoginMain from "./components/login-page/LoginMain";
import Footer from "./components/general/footer";
import RegisterMain from "./components/register-page/registerMain"
import Dashboard from "./components/dashboard/DashboardMain";
import Aboutus from "./components/about-us/AboutusMain";
import Contactus from "./components/contact-us/ContactusMain";
import Services from "./components/services-page/Services";
function App() {
  return (
    <div className="App">
      <div className="full-content">
        <Router>
          {/* header */}
          <header className="App-header">
            <Navbar/>
          </header>

          {/* main */}
          <main className="App-main">
            <Routes>
              <Route path="/" element={<LoginMain/>}/>
              <Route path="/signup" element={<RegisterMain/>}/>
              <Route path="/dashboard" element={<Dashboard/>}/>
              <Route path="/aboutus" element={<Aboutus/>}/>
              <Route path="/contactus" element={<Contactus/>}/>
              <Route path="/services" element={<Services/>}/>
            </Routes>
          </main>

          {/* footer */}
          <footer className="App-footer">
              <Footer/>
          </footer>
        </Router>
      </div>
    </div>
  );
}

export default App;
