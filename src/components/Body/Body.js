import RestaurantCard from "../RestaurantCard/RestaurantCard";
import SearchIcon from "../../assets/images/search.png";
import { useEffect, useState } from "react";
import Shimmer from "../Shimmer/Shimmer";
import { Link } from "react-router-dom";

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
    <div className="pt-[8.125rem]">
      <div className="w-[75rem] mx-auto">
        <div className="flex items-center justify-between mb-[1.875rem]">
          <h1 className="m-0 text-2xl font-extrabold text-black">
            Restaurants
          </h1>
          <div className="relative">
            <input
              className="bg-white border border-solid border-gray-900 w-[28.125rem] h-[2.8125rem] py-[0.625rem] pr-[3.125rem] pl-[1.25rem] text-sm font-medium rounded-[1.875rem]"
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

            <div className="flex items-center justify-center w-5 absolute top-1/2 -translate-y-1/2 right-5 overflow-hidden">
              <img
                src={SearchIcon}
                alt="Search icon"
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
        <div className="flex flex-wrap gap-[1.875rem]">
          {filteredRestaurants.map((restaurant) => (
            <Link
              to={"/restaurant/" + restaurant?.info?.id}
              key={restaurant?.info?.id}
              className="w-[23.12%] no-underline"
            >
              <RestaurantCard resData={restaurant} />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Body;
