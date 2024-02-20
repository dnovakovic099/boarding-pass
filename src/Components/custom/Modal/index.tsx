import { useEffect } from "react";
import CloseIcon from "../../../icons/CloseIcon";
import { loadStripe } from "@stripe/stripe-js";
import MaidIcon from "../../../icons/MaidIcon";
import Button from "../../ui/Button";
import useWindowDimensions from "../../../hook/useWindowDimensions";
import cleaninig from "../../../../assets/clean.png";
import backarrow from "../../../../assets/back.png"
import { useNavigate } from "react-router-dom";

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
  const navigate = useNavigate()

  console.log("Mid-Stay Cleaning", selectedItem)

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
    <>
      <div className="fixed w-full   flex flex-col bg-[#242424]">
        <div className=" justify-center items-center ">
          <div className="overflow-hidden relative w-full h-[490px]">
            <div className="overflow-hidden rounded-b-[50px] bg-undefined relative w-[390px] h-[490px] bg-cover bg-center">
              <img src={cleaninig} alt="" />
              <button className="absolute top-2 left-2 text-white p-1 rounded" onClick={() => navigate(-1)}>
                <img src={backarrow} alt='' />
              </button>
              <div className="absolute bottom-0 px-4 py-3 w-full">
                <h3 className="text-white font-semibold text-4xl mx-2 py-3">{selectedItem?.item_name} </h3>
              </div>
            </div>
          </div>
        </div>
        <div className=" h-[250px] overflow-auto">
          <div  >
            <div className="mx-3 mt-2 py-3 p-4">
              <p className="flex tracking-[0.028em] max-w-[350px]  leading-5 text-sm text-white">
                {selectedItem?.item_description}
              </p>
            </div>
          </div>
          <div className=" mt-2 w-[100%] mb-5 py-5 h-[105px] bg-[#242424] p-5 shadow-[0px_0px_30px_0px_rgba(1,1,1,0.7)] shadow-[#fff]">
            <div className="flex justify-between mx-3">
              <div className="flex flex-col">
                <span>$ {selectedItem?.item_price}</span>
                <p>{selectedItem?.item_name} </p>
              </div>
              <button onClick={openStripe} title={"Purchase"} className="BtnCustomgfhghColors text-black font-bold py-2 px-1 w-[50%] rounded">Purchase</button>
            </div>
          </div>
        </div>
      </div>

      {/* <div className="fixed h-screen w-screen outline-none focus:outline-none bg-black">
        <div className="relative flex flex-col justify-between h-full">
          <div className="absolute flex justify-center items-center  rounded-full bg-black/60 right-4 top-4">
            <CloseIcon haight={18} width={18} onClick={closeModal} />
          </div>
          <div className="flex justify-center items-center mt-20 sm:mt-24 mb-20 sm:mb-24">
            <MaidIcon width={screenSize === 'xs' ? 64 : 128} height={screenSize === 'xs' ? 64 : 128} />
          </div>
          <div className="flex flex-col justify-between gap-14 sm:gap-16 p-4 sm:p-5 h-full">
            <div className="flex flex-col justify-between gap-3 h-full">
              <div className="flex flex-col gap-5 sm:gap-7">
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
      </div> */}

    </>
  );
};

export default Modal;
