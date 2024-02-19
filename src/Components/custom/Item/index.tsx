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
    <>
      <div className=" flex flex-row space-x-3 " onClick={handleClick}>
        <div className="flex gap-[9px] justify-start items-start relative">
          <div className="rounded-md p-2 bg-[#414141] flex flex-col gap-[15px] justify-start items-start self-stretch relative w-[100%] h-full">
            <div className="flex gap-0 justify-between items-center self-stretch relative w-[100%] h-full">
              <img src={item?.photo_url} alt="" className="h-8 w-8" />
              <p className="font-medium leading-[19px] text-base text-[#a8abb3]">${item.item_price}</p>
            </div>
            <p className="font-medium leading-[19px] text-base text-white">
              {item.item_name}
            </p>
          </div>
        </div>
      </div>
      {/* <div
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
      </div> */}
    </>
  );
};

export default Item;
