import "./Home.css"
import Typewriter from "../componets/Typewriter";
import '@fortawesome/fontawesome-free/css/all.min.css';

function Home(){
    return(
        <div class="home_cont">          
            <div class="home_left">
              <div className="glow-heading-container">
                <h1 className="glow-heading">
                  <span className="white-text">Uday</span><br />
                  <span className="gradient-text">Agrawal</span>
                </h1>
              </div>


                
                <Typewriter
                  words={["Web Developer", "Data Analyst", "AI/ML Enthusiast"]}
                  typeSpeed={100}        // Typing speed per letter (ms)
                  deleteSpeed={100}     // Deletion speed per letter (ms) — 1 sec
                  pause={1000}           // Pause after typing a word (ms)
                />
                <br/>

                <p style={{ color: 'gray',fontSize: "1.4rem" }}>
                  Blending AI, design, and innovation to craft <br/>impactful digital solutions that scale
                </p>
               
                <br/>

                <div className="home_left_button">
                    <button>Projects ↗</button>
                    <button>Contact ✉️</button>
                </div>
                <br/>
                <br/>
                 <div className="social-buttons">
                  <button onClick={() => window.open('https://github.com/yourusername', '_blank')}>
                    <i className="fab fa-github"></i>
                  </button>
                  <button onClick={() => window.open('https://linkedin.com/in/yourprofile', '_blank')}>
                    <i className="fab fa-linkedin"></i>
                  </button>
                  <button onClick={() => window.open('https://instagram.com/yourhandle', '_blank')}>
                    <i className="fab fa-instagram"></i>
                  </button>
                </div>
              </div>

            <div class="home_gif">
                <img src="src\images\comp.gif"/>
            </div>
        
        </div>
    )
}

export default Home;