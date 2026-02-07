import { useState,useEffect } from "react";
import { useParams } from "react-router-dom";
import { IMG_CDN_URL,FETCH_MENU_URL } from "../constant";
import Shimmer from "./Shimmer";
import useRestaurant from "../utils/useRestaurant";

const RestaurantMenu = () => {
    const {resId} = useParams();
    // const [restaurantInfo ,setRestaurantInfo] = useState();

    const restaurantInfo = useRestaurant(resId);
    
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