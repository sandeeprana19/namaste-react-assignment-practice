import ItemList from "../ItemList/ItemList";

const RestaurantCategory = ({ data, showItemList, setShowIndex }) => {
  const handleClick = () => {
    setShowIndex();
  };
  return (
    <div className="bg-white py-4 px-4 shadow-2xl">
      <div
        className="flex items-center justify-between text-base cursor-pointer"
        onClick={handleClick}
      >
        <span className="font-bold text-black">
          {data?.title} ({data?.itemCards?.length})
        </span>
        <span>⬇</span>
      </div>
      <div>{showItemList && <ItemList items={data?.itemCards} />}</div>
    </div>
  );
};

export default RestaurantCategory;
