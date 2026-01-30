import {useState} from "react"

const Title = () => {
    return(
        <a href="/">
           <img 
           className="logo"
           src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/b00a857378033.560aa75ad3828.jpg" 
           alt="logo"/>
        </a>
    )
}

const Header = () => {

    const [isLoggedIn,setIsLoggedIn] = useState(false);

    return(
        <div className="header">
         <Title />
         <div className="nav-items">
            <ul>
                <li>Home</li>
                <li>About</li>
                <li>Contact</li>
                <li>Cart</li>
            </ul>
         </div>
         <div>
            {isLoggedIn ? <button onClick={()=> setIsLoggedIn(false)}>Logout</button> 
            : <button onClick={()=> setIsLoggedIn(true)}>Login</button> }
         </div>
        </div>
    )
}

export default Header;