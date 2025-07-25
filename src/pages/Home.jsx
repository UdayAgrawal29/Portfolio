import "./Home.css"
import Typewriter from "../components/Home_componets/Typewriter";
import '@fortawesome/fontawesome-free/css/all.min.css';

function Home(){
    return(
        <div className="home_cont">          
            <div className="home_left">
                <h1>
                  <span className="white-text">Uday</span><br />
                  <span className="gradient">Agrawal</span>
                </h1>

                
                <Typewriter
                  words={["Web Developer", "Data Analyst", "AI/ML Enthusiast"]}
                  typeSpeed={100}        
                  deleteSpeed={100}     
                  pause={1000}          
                />
                <br/>

                <p style={{ color: 'gray',fontSize: "1.4rem" }}>
                  Blending AI, design, and innovation to craft <br/>impactful digital solutions that scale
                </p>
               
                <br/>

                <div className="home_left_button">
                    <a href="#portfolio">
                    <button>Projects ↗</button>
                  </a>
                  <a href="#contact">
                    <button>Contact ✉️</button>
                  </a>
                </div>
                <br/>
                <br/>
                 <div className="social-buttons">
                  <button onClick={() => window.open('https://github.com/UdayAgrawal29', '_blank')}>
                    <i className="fab fa-github"></i>
                  </button>
                  <button onClick={() => window.open('https://www.linkedin.com/in/uday-agrawal29/', '_blank')}>
                    <i className="fab fa-linkedin"></i>
                  </button>
                  <button onClick={() => window.open('https://leetcode.com/u/Uday2904', '_blank')}>
                    <i className="fas fa-code"></i>
                  </button>

                </div>
              </div>


           <div className="home_gif">
                <img src="images\comp.gif"/>
            </div>
        
        </div>
    )
}

export default Home;