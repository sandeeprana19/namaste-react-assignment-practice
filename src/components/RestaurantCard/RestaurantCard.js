import { CDN_URL } from "../../utils/constants";

const RestaurantCard = (props) => {
  const { resData } = props;
  const { cloudinaryImageId, costForTwo, name, avgRating, sla, cuisine } =
    resData?.info;

  return (
    <div className="res-card">
      <div className="res-wrap">
        <div className="res-img-wrap">
          <img
            className="res-img"
            src={CDN_URL + cloudinaryImageId}
            alt={name}
          />
        </div>
        <h1 className="res-card-items-cost">{costForTwo}</h1>
      </div>
      <div className="res-content">
        <h2>{name}</h2>
        <h3>{avgRating}</h3>
        <h3>{sla?.slaString}</h3>
        <h3 className="res-cuisine">{cuisine}</h3>
      </div>
    </div>
  );
};

export default RestaurantCard;
