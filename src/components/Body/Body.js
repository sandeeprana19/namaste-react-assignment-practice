import RestaurantCard from "../RestaurantCard/RestaurantCard";
import resList from "../../utils/mockData";
import SearchIcon from "../../assets/images/search.png";
import { useState } from "react";

const Body = () => {
  const [listOfRestaurant, setListOfRestaurant] = useState(resList);
  console.log(listOfRestaurant);
  const [searchText, setSearchText] = useState("");

  return (
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
                  const filteredRestaurant = listOfRestaurant.filter(
                    (restaurant) =>
                      restaurant?.info?.name
                        .toLowerCase()
                        .includes(searchText.toLowerCase())
                  );

                  setListOfRestaurant(filteredRestaurant);
                }

                if (searchText === "") {
                  setListOfRestaurant(resList);
                }
              }}
            />

            <div className="search-icon-wrap">
              <img src={SearchIcon} alt="Search icon" />
            </div>
          </div>
        </div>
        <div className="res-container">
          {listOfRestaurant.map((restaurant) => (
            <RestaurantCard key={restaurant?.info?.id} resData={restaurant} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Body;
