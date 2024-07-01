import RestaurantCard from "../RestaurantCard/RestaurantCard";
import resList from "../../utils/mockData";
import SearchIcon from "../../assets/images/search.png";
import { useEffect, useState } from "react";
import Shimmer from "../Shimmer/Shimmer";

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9715987&lng=77.5945627&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );

    const json = await data.json();

    console.log(json);

    setListOfRestaurants(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );

    setFilteredRestaurants(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  return listOfRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="main-wrapper">
        <div className="res-header">
          <h1>Restaurants</h1>
          <div className="search-wrap">
            <input
              className="search"
              type="search"
              placeholder="Search restaurant"
              value={searchText}
              onChange={(e) => {
                setSearchText(e.target.value);
              }}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  const filteredRestaurants = listOfRestaurants.filter(
                    (restaurant) =>
                      restaurant?.info?.name
                        .toLowerCase()
                        .includes(searchText.toLowerCase())
                  );

                  setFilteredRestaurants(filteredRestaurants);
                }
              }}
            />

            <div className="search-icon-wrap">
              <img src={SearchIcon} alt="Search icon" />
            </div>
          </div>
        </div>
        <div className="res-container">
          {filteredRestaurants.map((restaurant) => (
            <RestaurantCard key={restaurant?.info?.id} resData={restaurant} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Body;
