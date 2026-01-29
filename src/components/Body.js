import { restaurantList } from "../constant";
import RestaurantCard from "./RestaurantCard";
import { useState ,useEffect } from "react";

function filterData(searchInput , restaurants){
    return restaurants.filter((restaurant) => 
      restaurant.data.name.includes(searchInput)
    );
}

const Body = () => {
    const [restaurants,setRestaurants] = useState(restaurantList);
    const [searchInput,setSearchInput] = useState("");

    useEffect(() => {
      // api call
      getRestaurants();
    }, []);

    async function getRestaurants () {
      const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING");
      const json = await data.json();
      setRestaurants(json?.data?.cards[2]?.data?.data?.cards);
    }

    return(
      <>
       <div className="search-container">
         <input 
            type="text"
            className="search-Input" 
            placeholder="search" 
            value={searchInput}
            onChange={(e) => {
                setSearchInput(e.target.value);
            }}  
         />
         <button 
            className="search-btn"
            onClick={() => {         
              const data = filterData(searchInput,restaurants);
              setRestaurants(data);
          1  }
            }
          >
            Search
         </button>       
       </div>
       <div className="restaurantList">
        {restaurants.map((restaurant) => {
            return <RestaurantCard {...restaurant.data} key={restaurant.data.id} />;
        })}
        
       </div>
      </>  
    )
}

export default Body;