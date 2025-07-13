
import "./description.css"

function Descrip(){

    return(
        <>
            <div className="des_cont">
                <div className="about_me">

                    {/* <h1 ><span className="gradient-text">Hello, I'm</span> <br/>
                        <span style={{color: 'white', fontSize: '3rem'}}>Uday Agrawal</span>
                    
                    </h1> */}

                    <div>
                        <p style={{color: 'grey',fontSize: '1.5rem', lineHeight: '1.625', textAlign: 'justify'}}>
                            A Computer Science undergrad at VIT Chennai, specializing 
                            in AI & ML. I'm passionate about building intelligent systems 
                            and modern web experiences. From leading innovation hackathons 
                            to developing real-world AI projects. I love turning ideas into impact. 
                        </p>
                    </div>
                    <div className="desp_buttons">
                        <a href="UDAY AGRAWAL RESUME.pdf" download>
                            <button className="down_btn">Download CV</button>
                        </a>
                    </div>
                </div>


                <div>
                    <img className="my_img" src="images\pic_new.jpg"/>
                </div>


            </div>
        
        </>
        
        
    )
};

export default Descrip;
