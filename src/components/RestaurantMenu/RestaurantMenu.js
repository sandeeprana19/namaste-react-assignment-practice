import useRestaurantMenu from "../../utils/useRestaurantMenu";
import Shimmer from "../Shimmer/Shimmer";
import { useParams } from "react-router-dom";

const RestaurantMenu = () => {
  const { resId } = useParams();

  const resInfo = useRestaurantMenu(resId);

  if (resInfo === null) return <Shimmer />;

  const { name, cuisines, costForTwoMessage } =
    resInfo?.cards[2]?.card?.card?.info;

  const { itemCards } =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;

  return (
    <div className="body">
      <div className="main-wrapper">
        <h1>{name}</h1>
        <h3>
          {cuisines.join(", ")} - {costForTwoMessage}
        </h3>
        <ul>
          {itemCards.map((itemCard) => (
            <li key={itemCard?.card?.info?.id}>
              {itemCard?.card?.info?.name} - Rs.{" "}
              {itemCard?.card?.info?.defaultPrice / 100 ||
                itemCard?.card?.info?.price / 100}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default RestaurantMenu;
