import React from "react";
import ReactDOM from "react-dom/client";

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
        </div>
    )
}

const Body = () => {
    return <h3>Body</h3>
}

const Footer = () => {
    return(
        <h3>Footer</h3>
    )    
}

const AppLayout = () => {
    return(
        <>
          <Header />
          <Body />
          <Footer />
        </>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout/>);




















// // jsx code to creat heading 

// const heading = (
//     <h1 id="title" key="h11">
//         heading from Jsx
//     </h1>
// )

// // react component
// // functional component -> basic function returning some jsx or react element


// const HeaderComponent = () => {
//     return (
//        <div>
//          {heading} {/**using element in component.
//           * These bracket allow u to write any piece of js code in jsx
//           * <Title/> or {Title()} -> using component inside component
//           */}
//          <h1>React functional component</h1>
//          <h2>this is h2 heading</h2>
//        </div>
//     )  
// };