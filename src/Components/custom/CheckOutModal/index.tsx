import { useEffect } from "react";
import attention from "../../../../assets/attention.png";
import CloseIcon from "../../../icons/CloseIcon";
import Button from "../../ui/Button";

const CheckOutModal = ({
  showCheckOutModal,
  setShowCheckoutModal,
}: {
  showCheckOutModal: any;
  setShowCheckoutModal: any;
}) => {


  const reservationLink = window.location.pathname.replace("/", "");
  const closeModal = () => {
    setShowCheckoutModal(false);
  };

  const checkOutAndClose = () => {
    try {
      fetch(
          `${import.meta.env.VITE_BASE_URL}/reservation/${reservationLink}/checkOut`,
          {
            method: "POST",
          }
      ).then(() => {
        window.location.reload();
      });
    } catch (error: any) {
      console.error("Error fetching reservation status:", error.message);
    }
    closeModal();
  };

  useEffect(() => {
    const body = document.body;
    if (showCheckOutModal) {
      body.style.overflow = "hidden";
    } else {
      body.style.overflow = "hidden";
    }

    return () => {
      body.style.overflow = "unset";
    };
  }, [showCheckOutModal]);

  return (
    <div className="fixed h-screen w-screen outline-none focus:outline-none bg-black">
      <div className="relative flex flex-col justify-between h-full">
        <div className="absolute flex justify-center items-center rounded-full bg-black/60 right-4 top-4">
          <CloseIcon haight={18} width={18} onClick={closeModal} />
        </div>
        <div className="flex justify-center items-center mt-20 sm:mt-24 mb-20 sm:mb-24">
          <img
            src={attention}
            alt="attention"
            className="w-24 sm:w-32 h-24 sm:h-32"
          />
        </div>
        <div className="flex flex-col justify-between gap-2 sm:gap-4 p-4 sm:p-5 h-full">
          <div className="flex flex-col justify-between gap-2 sm:gap-3 h-full">
            <div className="flex flex-col gap-5 sm:gap-7">
              <h1 className="text-2xl sm:text-4xl text-white font-medium leading-8 sm:leading-10">
                Are you sure you want to Check Out
              </h1>

              <h2 className="text-white text-base sm:text-xl">
                If you proceed to finish your checkout you will no longer have
                access to your guidebooks, check-in steps or access codes.
              </h2>
            </div>
          </div>

          <div className="flex flex-col gap-3 sm:gap-5">
            <div className="flex flex-col gap-1 sm:gap-2">
              <Button
                onClick={closeModal}
                title={"Cancel"}
                styles={
                  "bg-white rounded sm:rounded-md sm:rounded-1 h-10 sm:h-14 tracking-wider w-full text-black"
                }
              >
                Cancel
              </Button>
              <Button
                title={"Check Out"}
                styles={
                  "flex justify-center items-center bg-black rounded sm:rounded-md sm:rounded-1 h-10 sm:h-14 tracking-wider w-full border border-white/60 p-2 sm:p-4"
                }
                onClick={checkOutAndClose}
              >
                Check Out
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckOutModal;
