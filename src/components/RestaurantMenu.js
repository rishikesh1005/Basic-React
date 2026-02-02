import { useState,useEffect } from "react";
import { useParams } from "react-router-dom";
import { FETCH_MENU_URL } from "../constant";

const RestaurantMenu = () => {
    const {resId,name} = useParams();
    const [restaurantInfo ,setRestaurantInfo] = useState();

    useEffect(() => {
        getRestaurantInfo();
    }, []);

    async function getRestaurantInfo(){
        const data = await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=26.46310&lng=80.34790&restaurantId=1054131");
        const json = await data.json();
        console.log(json);  
    }

    return(
        <div>
            <h1>Restaurant id :{resId} </h1>
            <h2>Restaurant Name: {name}</h2>
        </div>
    )
}

export default RestaurantMenu;