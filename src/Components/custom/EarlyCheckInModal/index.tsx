import CloseIcon from "../../../icons/CloseIcon";
import Button from "../../ui/Button";
import { TItem } from "../../../@types/Item.ts";
import image from "../../../../assets/image.png";
import backarrow from "../../../../assets/back.png"
import { useNavigate } from "react-router-dom";

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

  const navigate = useNavigate()

  const canCheckInEarly = () => {
    return items.find(e => e.item_name === "Early Check In") !== undefined;
  };


  function purchaseEarlyCheckIn() {
    setSelectedItem(items.find(e => e.item_name === "Early Check In"));
    closeModal();
    setShowModal(true);
  }

  return (
    <>
      <div className="fixed  w-screen outline-none focus:outline-none bg-[#242424] h-[1200px]">
        <div className=" bg-[#242424]  place-content-center  items-center justify-between h-full ">
          <div className="justify-center items-center self-center relative  top-0  ">
            <div className="">
              <img src={image} alt="" className="rounded-b-[120px] h-[400px] w-full " />
              <button className="absolute top-7 left-2 text-white p-1  rounded" onClick={() => navigate(-1)}>
                <img src={backarrow} alt='' />
              </button>
            </div>
            <div className="flex flex-col gap-3 justify-center items-center self-center relative ">
              <h3 className="text-center font-bold leading-9 text-[28px] text-white justify-center items-center mt-3">
                It’s too early to check in.
              </h3>
              <p className="tracking-[0.032em] text-center font-medium leading-[22px] text-base text-[#b2b3b4] px-2">
                {canCheckInEarly()
                  ? "You’r check-in steps will be released closer to your check-in date. In the meantime, you can purchase early check-in to get a head start on your stay "
                  : "Your check-in steps will be released closer to your check-in date."}
              </p>
            </div>
            <div className="flex flex-col gap-[18px] mt-2  mx-4 justify-center items-center self-stretch relative w-[350px]  ">
              {canCheckInEarly() ? (
                <div className="rounded-md px-2.5 py-[15px] bg-undefined flex gap-1.5 justify-center BtnCustomgfhghColors items-center self-stretch relative w-full h-13">
                  <button className="font-medium leading-[26px] text-[22px] text-[#242424] " title={"Purchase"} onClick={purchaseEarlyCheckIn}>
                    Purchase early check-in
                  </button>
                </div>
              ) : null}
              <div className="roounded-md px-2.5 py-3 bg-[#414141] flex gap-1.5 justify-center  items-center self-stretch relative w-full h-13">
                <button className="font-medium leading-[22px] text-lg text-white" title={"Cancel"} onClick={closeModal}>
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <div className="fixed h-screen w-screen outline-none focus:outline-none bg-black">
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
      </div> */}
    </>
  );
};

export default EarlyCheckInModal;
