import {Outlet} from "react-router-dom";
import ProfileFunctionalComponent from "./Profile";
import Profile from "./ProfileClass";
const About = () => {
    return(
        <div>
            <h1>About Us PAGE!!</h1>
            <p>This is About US page of our Project where we are learning react.🚀🚀</p>
            <ProfileFunctionalComponent name={"Rishikesh"} />
            <Profile name={"RishikeshClass"} />
        </div>
    )
}

export default About;