import { restaurantList } from "../constant";
import RestaurantCard from "./RestaurantCard";
import { useState ,useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";

function filterData(searchInput , restaurants){
    return restaurants.filter((restaurant) => 
      restaurant.info.name.toLowerCase().includes(searchInput.toLowerCase())
    );
}

const Body = () => {
    const [allRestaurants,setAllRestaurants] = useState([]);
    const [filteredRestaurants,setFilteredRestaurants] = useState([]);
    const [searchInput,setSearchInput] = useState("");

    useEffect(() => {
      // api call
      getRestaurants();
    }, []);

    async function getRestaurants () {
      const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=26.46310&lng=80.34790&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");//https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING
      const json = await data.json();
      console.log(json); 

      setAllRestaurants(
        json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
      );
      console.log(allRestaurants)
  
      setFilteredRestaurants(
        json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
      );
      console.log(filteredRestaurants);
    }

    // not render component (when i dont have this dont render)
    if(!allRestaurants) return null;

    return (allRestaurants?.length ===0) ? (<Shimmer/>) : (
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
              const data = filterData(searchInput,allRestaurants);
              setFilteredRestaurants(data);
          1  }
            }
          >
            Search
         </button>       
       </div>
       <div className="restaurantList">
        {filteredRestaurants.length ===0 ? <h1>No Restaurant available!!!</h1> :
            filteredRestaurants.map((restaurant) => {
              return (
              <Link to={"/restaurant/"+ restaurant.info.id } key={restaurant.info.id}>
                <RestaurantCard {...restaurant.info}  />
              </Link>
              )
            })
        }
       </div>
      </>  
    )
}

export default Body;