import {Outlet} from "react-router-dom";

const About = () => {
    return(
        <div>
            <h1>About Us PAGE!!</h1>
            <p>This is About US page of our Project where we are learning react.🚀🚀</p>
            <Outlet />
        </div>
    )
}

export default About;