import { useEffect } from "react";
import CloseIcon from "../../../icons/CloseIcon";
import { loadStripe } from "@stripe/stripe-js";
import MaidIcon from "../../../icons/MaidIcon";
import Button from "../../ui/Button";
import useWindowDimensions from "../../../hook/useWindowDimensions";

const Modal = ({
  showModal,
  setShowModal,
  selectedItem,
}: {
  showModal: any;
  setShowModal: any;
  selectedItem: any;
}) => {
  const { screenSize } = useWindowDimensions();

  const closeModal = () => {
    setShowModal(false);
  };

  useEffect(() => {
    const body = document.body;
    if (showModal) {
      body.style.overflow = "hidden";
    } else {
      body.style.overflow = "unset";
    }

    return () => {
      body.style.overflow = "unset";
    };
  }, [showModal]);

  const openStripe = async () => {
    const stripe = await loadStripe(import.meta.env.VITE_STRIPE_PUBLIC_KEY);

    const response = await fetch(
      `${import.meta.env.VITE_BASE_URL}/pay/reservation/${window.location.pathname.replace(
        "/",
        ""
      )}/item/${selectedItem.item_id}`,
      {
        method: "POST",
      }
    );

    const sessionId = await response.text();

    const result = stripe?.redirectToCheckout({ sessionId: sessionId });

    console.log(result);
  };

  return (
    <div className="fixed h-screen w-screen outline-none focus:outline-none bg-black">
      <div className="relative flex flex-col justify-between h-full">
        <div className="absolute flex justify-center items-center  rounded-full bg-black/60 right-4 top-4">
          <CloseIcon haight={18} width={18} onClick={closeModal} />
        </div>
        <div className="flex justify-center items-center mt-20 sm:mt-24 mb-20 sm:mb-24">
          {/* hardcode */}
          <MaidIcon width={screenSize === 'xs' ? 64 : 128} height={screenSize === 'xs' ? 64 : 128} />
        </div>
        <div className="flex flex-col justify-between gap-14 sm:gap-16 p-4 sm:p-5 h-full">
          <div className="flex flex-col justify-between gap-3 h-full">
            <div className="flex flex-col gap-5 sm:gap-7">
              {/* hardcode */}
              <h1 className="text-2xl sm:text-4xl text-white font-medium leading-8 sm:leading-10">
                {selectedItem?.item_name}
              </h1>

              <h2 className="text-white text-base sm:text-xl">
                {selectedItem?.item_description}
              </h2>
            </div>
          </div>

          <div className="flex flex-col gap-4 sm:p-5">
            <div className="flex flex-col gap-2">
              <Button
                title={"Next"}
                styles={
                  "flex justify-between items-center bg-black rounded sm:rounded-md sm:rounded-1 h-10 sm:h-14 tracking-wider w-full border border-white/60 p-2 sm:p-4"
                }
              >
                {selectedItem?.item_name}
                <div className="bg-white rounded sm:rounded-md sm:rounded-1 h-7 sm:h-9 p-1 sm:p-3 tracking-wider flex justify-center items-center text-black">
                  {selectedItem?.item_price}$
                </div>
              </Button>

              <Button
                onClick={openStripe}
                title={"Purchase"}
                styles={
                  "bg-white rounded sm:rounded-md sm:rounded-1 h-10 sm:h-14 tracking-wider w-full text-black"
                }
              >
                {selectedItem?.item_price} USD - Purchase
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
