import CloseIcon from "../../../icons/CloseIcon";
import Button from "../../ui/Button";
import { TItem } from "../../../@types/Item.ts";

const EarlyCheckInModal = ({
  //   showModal,
  setShowEarlyCheckInModal,
  setSelectedItem,
  setShowModal,
  items,
}: {
  //   showModal: any;
  setShowEarlyCheckInModal: any;
  setSelectedItem: any;
  setShowModal: any;
  items: TItem[];
}) => {
  const closeModal = () => {
    setShowEarlyCheckInModal(false);
  };

  const canCheckInEarly = () => {
    return items.find(e => e.item_name === "Early Check In") !== undefined;
  };

  function purchaseEarlyCheckIn() {
    setSelectedItem(items.find(e => e.item_name === "Early Check In"));
    closeModal();
    setShowModal(true);
  }

  return (
    <div className="fixed h-screen w-screen outline-none focus:outline-none bg-black">
      <div className="relative flex flex-col justify-between h-full">
        <div className="absolute flex justify-center items-center  rounded-full bg-black/60 right-4 top-4">
          <CloseIcon haight={18} width={18} onClick={closeModal} />
        </div>
        <div className="flex flex-col justify-between gap-14 sm:gap-16 p-4 sm:p-5 h-full">
          <div className="flex flex-col gap-5 sm:gap-7 justify-center h-full">
            <h1 className="text-2xl sm:text-4xl text-white font-medium leading-8 sm:leading-10">
              It’s too early to check in.
            </h1>

            <h2 className="text-white text-base sm:text-xl">
              {canCheckInEarly()
                ? "You’r check-in steps will be released closer to your check-in date. In the meantime, you can purchase early check-in to get a head start on your stay"
                : "Your check-in steps will be released closer to your check-in date."}
            </h2>
          </div>

          <div className="flex flex-col gap-4 sm:p-5">
            <div className="flex flex-col gap-2">
              {canCheckInEarly() ? (
                <Button
                  title={"Purchase"}
                  styles={
                    "bg-white rounded sm:rounded-md sm:rounded-1 h-10 sm:h-14 tracking-wider w-full text-black"
                  }
                  onClick={purchaseEarlyCheckIn}
                >
                  Purchase early check-in
                </Button>
              ) : null}

              <Button
                title={"Cancel"}
                styles={
                  "bg-black rounded sm:rounded-md sm:rounded-1 h-10 sm:h-14 tracking-wider w-full border border-white/60 p-2 sm:p-4"
                }
                onClick={closeModal}
              >
                Cancel
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EarlyCheckInModal;
