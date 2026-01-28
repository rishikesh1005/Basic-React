import { restaurantList } from "../constant";
import RestaurantCard from "./RestaurantCard";
import { useState } from "react";

const Body = () => {
    let [searchInput,setSearchInput] = useState();

    return(
      <>
       <div>
         <input 
            className="search-container" 
            placeholder="search" 
            value={searchInput}
            onChange={(e) => {
                setSearchInput = e.target.value;
            }}  
         />
         <button>Search</button>        
       </div>
       <div className="restaurantList">
        {restaurantList.map((restaurant) => {
            return <RestaurantCard {...restaurant.data} key={restaurant.data.id} />;
        })}
        
       </div>
      </>  
    )
}

export default Body;