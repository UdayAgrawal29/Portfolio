
import "./description.css"

function Descrip(){

    return(
        <>
            <div className="des_cont">
                <div>

                    <h1 ><span className="gradient-text">Hello, I'm</span> <br/>
                        <span style={{color: 'white', fontSize: '3rem'}}>Uday Agrawal</span>
                    
                    </h1>

                    <div>
                        <p style={{color: 'grey',fontSize: '1.5rem', lineHeight: '1.625' }}>
                            A Computer Science undergrad at VIT Chennai, specializing <br/>
                            in AI & ML. I'm passionate about building intelligent systems <br/>
                            and modern web experiences. From leading innovation hackathons <br/>
                                to developing real-world AI projects. I love turning ideas into impact. 
                        </p>
                    </div>
                </div>


                <div>
                    <img className="my_img" src="src/images/pic_new.jpg"/>
                </div>


            </div>
            
        
        </>
        
        
    )
};

export default Descrip;
