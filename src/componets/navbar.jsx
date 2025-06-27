import "./navbar.css"

function Navbar(){
    return(
        <div class="navbar_container">
            <button className="tagline">🚀 Ready to Innovate</button>
            <div class="nav_links">
                <a href="">Home</a>
                <a href="">About</a>
                <a href="">Portfolio</a>
                <a href="">Contact</a>
            </div>
        </div>
    )

}
export default Navbar;