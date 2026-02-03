import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header"
import Body from "./components/Body";
import Footer from "./components/Footer";
import About from "./components/About";
import Error from "./components/Error";
import Contact from "./components/Contact";
import RestaurantMenu from "./components/RestaurantMenu";
import { createBrowserRouter,RouterProvider, Outlet } from "react-router-dom";
import Profile from "./components/Profile";

const AppLayout = () => {
    return(
        <>
          <Header />
          <Outlet />
          <Footer />
        </>
    )
}

const appRouter = createBrowserRouter([
    {
        path:"/",
        element:<AppLayout />,
        errorElement:<Error />,
        children:[
            {
                path:"/",
                element:<Body />,
            },
            {
                path:"/about",
                element:<About />,
                children: [
                    {
                        path:"profile",
                        element:<Profile />,
                    },
                ]
            },
            {
                path:"/contact",
                element:<Contact />,
            },
            {
                path:"/restaurant/:resId",
                element:<RestaurantMenu />,
            }
        ]
    },
   
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);




















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