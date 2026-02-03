import { useState,useEffect } from "react";
import { useParams } from "react-router-dom";
import { IMG_CDN_URL,FETCH_MENU_URL } from "../constant";
import Shimmer from "./Shimmer";

const RestaurantMenu = () => {
    const {resId} = useParams();
    const [restaurantInfo ,setRestaurantInfo] = useState();

    useEffect(() => {
        getRestaurant();
    }, []);

    async function getRestaurant(){
        const data = await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=26.46310&lng=80.34790&restaurantId=1054131");
        const json = await data.json();
        console.log(json.data);  

        setRestaurantInfo(json.data);
    }

    return (!restaurantInfo)? <Shimmer/>: (
        <div>
            <h1>Restaurant id :{resId} </h1>
            <h2>{restaurantInfo?.name}</h2>
            {/* <img src={IMG_CDN_URL + restaurantInfo?.cloudinaryImageId} /> */}
            <h3>{restaurantInfo?.area}</h3>
            <h3>{restaurantInfo?.city}</h3>
            <h3>{restaurantInfo?.avgRating}</h3>
            <h3>{restaurantInfo?.costForTwoMsg}</h3>
        </div>
    )
}

export default RestaurantMenu;