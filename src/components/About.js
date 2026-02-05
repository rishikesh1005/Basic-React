import {Outlet} from "react-router-dom";
import ProfileFunctionalComponent from "./Profile";
import Profile from "./ProfileClass";
import {Component} from "react"

class About extends Component{
    constructor(props){
        super(props);
        console.log("Parent-constructor")
    }

    componentDidMount(){
        console.log("Parent- CDM")
    }

    render(){
        console.log("Parent - render")
         return(
            <div>
                <h1>About Us PAGE!!</h1>
                <p>This is About US page of our Project where we are learning react.🚀🚀</p>
                <Profile name={"First Child"} />
            </div>
    )
    }
}


// const About = () => {
//     return(
//         <div>
//             <h1>About Us PAGE!!</h1>
//             <p>This is About US page of our Project where we are learning react.🚀🚀</p>
//             <ProfileFunctionalComponent name={"Rishikesh"} />
//             <Profile name={"RishikeshClass"} />
//         </div>
//     )
// }

export default About;