import React from "react";

class Profile extends React.Component{
constructor(props){
    super(props);
    // create state
    this.state={
        userInfo:{
            login:"Dummy login",
            id:"Dummy id"
        },
    }
    console.log("child-contructor"+ this.props.name)
}

async componentDidMount(){
    const data = await fetch("https://api.github.com/users/rishikesh1005");
    const json = await data.json();
    this.setState({
        userInfo: json,
    })
    console.log(json);
    console.log("Children-CDM"+ this.props.name)
}

    render(){
        console.log("child-render"+ this.props.name)
        return (
            <div>
                <h2>This is Profile Class Component!!!</h2>
                <h3>Name: {this.state?.userInfo?.login}</h3>
                <h3>Location: {this.state?.userInfo?.id}</h3>
                {/* <button onClick={() => {
                    //WE DONOT MUTATE STATE DIRECTLY
                    // NEVER DO this.state = something
                    this.setState({
                        count:1,
                    })
                }}>setCount</button> */}
            </div>
        )
    }
}

export default Profile;