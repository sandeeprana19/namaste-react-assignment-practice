import { useDispatch } from "react-redux";
import { CDN_URL } from "../../utils/constants";
import { addItem } from "../../utils/cartSlice";

const ItemList = ({ items }) => {
  const dispatch = useDispatch();

  const handleAddItem = (item) => {
    dispatch(addItem(item));
  };

  return (
    <div>
      {items.map((item) => {
        const { name, defaultPrice, price, description, imageId, id } =
          item?.card?.info;

        return (
          <div
            key={id}
            className="flex gap-x-14 py-6 border-b border-solid border-gray-100"
          >
            <div className="w-9/12">
              <h1 className="font-bold">{name}</h1>
              <h3 className="my-2">₹ {defaultPrice / 100 || price / 100}</h3>
              <p>{description}</p>
            </div>
            <div className="w-3/12 relative">
              <div className="w-full rounded-lg overflow-hidden">
                <img
                  src={CDN_URL + imageId}
                  alt={name}
                  className="w-full h-auto"
                />
              </div>

              <button
                className="py-2 px-5 border border-solid border-gray-400 rounded-lg absolute bottom-0 left-1/2 -translate-x-1/2 bg-white text-base font-bold text-nowrap text-green-600"
                onClick={() => handleAddItem(item)}
              >
                Add
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ItemList;
