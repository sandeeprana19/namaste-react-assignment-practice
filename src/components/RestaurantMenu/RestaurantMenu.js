import { useState } from "react";
import useRestaurantMenu from "../../utils/useRestaurantMenu";
import RestaurantCategory from "../RestaurantCategory/RestaurantCategory";
import Shimmer from "../Shimmer/Shimmer";
import { useParams } from "react-router-dom";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const resInfo = useRestaurantMenu(resId);
  const [showIndex, setShowIndex] = useState(null);

  if (resInfo === null) return <Shimmer />;

  const { name, cuisines, costForTwoMessage } =
    resInfo?.cards[2]?.card?.card?.info;

  const categories =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (item) =>
        item?.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );

  return (
    <div className="pt-[8.125rem]">
      <div className="w-5/12 mx-auto">
        <h1 className="m-0 text-2xl font-extrabold text-black mb-[15px]">
          {name}
        </h1>
        <h3 className="mb-10">
          {cuisines.join(", ")} - {costForTwoMessage}
        </h3>

        <div className="flex flex-col gap-y-4">
          {categories.map((category, index) => (
            <RestaurantCategory
              key={category?.card?.card?.title}
              data={category?.card?.card}
              showItemList={index === showIndex ? true : false}
              setShowIndex={() =>
                index === showIndex ? setShowIndex(null) : setShowIndex(index)
              }
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default RestaurantMenu;
