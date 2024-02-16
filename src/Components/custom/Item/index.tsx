import ArrowForwardIcon from "../../../icons/ArrowForwardIcon";
import { TItem } from "../../../@types/Item.ts";
import PoolIcon from "../../../icons/PoolIcon.tsx";
import useWindowDimensions from "../../../hook/useWindowDimensions.tsx";

const Item = ({
  item,
  setShowModal,
  setSelectedItem,
}: {
  item: TItem;
  setShowModal: any;
  setSelectedItem: any;
}) => {
  const { screenSize } = useWindowDimensions();

  const handleClick = () => {
    setSelectedItem(item);
    setShowModal(true);
  };
  
  return (
    <div
      className="relative flex items-center p-1.5 sm:p-2.5 border rounded sm:rounded-md cursor-pointer gap-1.5 sm:p-2.5"
      onClick={handleClick}
    >
      <div className="flex items-center bg-white p-2 sm:p-4 rounded-full">
        <PoolIcon width={screenSize === 'xs' ? 32 : 48} height={screenSize === 'xs' ? 32 : 48} />
      </div>
      <div className="flex justify-between items-center w-full">
        <div className="flex flex-col">
          <p className="text-sm sm:text-base font-light">{item.item_price}$</p>
          <p className="text-base sm:text-xl leading-4 sm:leading-6">{item.item_name}</p>
        </div>
        <ArrowForwardIcon width={screenSize === 'xs' ? 20 : 25} height={screenSize === 'xs' ? 25 : 30} />
      </div>
    </div>
  );
};

export default Item;
