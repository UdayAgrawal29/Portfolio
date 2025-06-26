import "./Home.css"
import Typewriter from "../componets/Typewriter";
function Home(){
    return(
        <div class="home_cont">
            
            <div class="home_left">
                <div>
                <h1>Uday </h1>
                <h1>Agrawal</h1>

                </div>

                <Typewriter
                    words={["Web Developer", "Data Analyst", "Designer"]}
                    typeSpeed={100}        // Typing speed per letter (ms)
                    deleteSpeed={100}     // Deletion speed per letter (ms) — 1 sec
                    pause={1000}           // Pause after typing a word (ms)
                />
            </div>

            <div class="home_gif">
                <img src="src\images\comp.gif"/>
            </div>
        
        </div>
    )
}

export default Home;