import { useContext } from "react";
import { CDN_URL } from "../../utils/constants";
import UserContext from "../../utils/UserContext";

const RestaurantCard = (props) => {
  const { resData } = props;
  const { cloudinaryImageId, costForTwo, name, avgRating, sla, cuisine } =
    resData?.info;
  const { loggedInUser } = useContext(UserContext);

  return (
    <div className="cursor-pointer flex-col gap-3 w-full transition-all duration-500 ease-in-out flex hover:scale-90">
      <div className="w-full h-[13.75rem] relative">
        <div className="rounded-2xl flex items-center justify-center w-full h-full overflow-hidden">
          <img
            className="w-full h-full object-cover"
            src={CDN_URL + cloudinaryImageId}
            alt={name}
          />
        </div>
        <h1 className="z-10 text-white uppercase text-[1.375rem] font-extrabold absolute bottom-2 left-3">
          {costForTwo}
        </h1>
      </div>
      <div className="flex flex-col gap-[0.125rem]">
        <h2 className="m-0 text-black text-[1.125rem] font-bold">{name}</h2>
        <h3 className="m-0 text-base font-semibold">{avgRating}</h3>
        <h3 className="m-0 text-base font-semibold">{sla?.slaString}</h3>
        <h3 className="m-0 font-normal text-gray">{cuisine}</h3>
        <h3 className="m-0 font-normal text-gray">User: {loggedInUser}</h3>
      </div>
    </div>
  );
};

export default RestaurantCard;
