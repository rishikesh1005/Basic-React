import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header"
import Body from "./components/Body";
import Footer from "./components/Footer";


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