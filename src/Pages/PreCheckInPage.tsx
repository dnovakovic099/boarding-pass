import { useEffect, useState } from "react"; HeroSection
import HeroSection from "../Components/custom/HeroSection";
import Button from "../Components/ui/Button";
import LocationIcon from "../icons/LocationIcon";
import PhoneIcon from "../icons/PhoneIcon";
import WifiIcon from "../icons/WifiIcon";
import FAQ from "../Components/custom/FAQ";
import Modal from "../Components/custom/Modal";
import Item from "../Components/custom/Item";

import { TFAQ } from "../@types/FAQ";
import { TItem } from "../@types/Item";
import CheckInModal from "../Components/custom/CheckInModal/index.tsx";
import EarlyCheckInModal from "../Components/custom/EarlyCheckInModal/index.tsx";
import { TReservation } from "../@types/Reservation.ts";
import Footer from "../Components/custom/Footer/index.tsx";
import CheckOutModal from "../Components/custom/CheckOutModal";
import useWindowDimensions from "../hook/useWindowDimensions.tsx";
import Checkingimage from "../../assets/CheckingPage.png";
import backarrow from "../../assets/back.png"
import { useNavigate } from "react-router-dom";
import lock from "../../assets/lock.png";
import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"

function PreCheckInPage(propertyInfo: any) {
  const { screenSize } = useWindowDimensions();

  const navigate = useNavigate()
  const [showModal, setShowModal] = useState(false);
  const [showCheckInModal, setShowCheckInModal] = useState(false);
  const [showEarlyCheckInModal, setShowEarlyCheckInModal] = useState(false);
  const [showCheckOutModal, setShowCheckoutModal] = useState(false);
  const [recommendedList, setRecommendedList] = useState<TItem[]>([]);
  const [faqList, setFaqList] = useState<TFAQ[]>([]);
  const [selectedItem, setSelectedItem] = useState({});
  const [reservation, setReservation] = useState<TReservation>();
  const [isEarlyReservationPaid, setIsEarlyReservationPaid] = useState("");

  const [sliderRef] = useKeenSlider({
    slides: {
      perView: 2,
      spacing: 15,
    },
  })

  const fetchReservation = async () => {
    fetch(
      `${import.meta.env.VITE_BASE_URL}/reservation/${window.location.pathname.replace(
        "/",
        ""
      )}`,
      {
        method: "GET",
      }
    ).then(async data => {
      setReservation(await data.json());
    });
  };

  const fetchItems = async () => {
    fetch(
      `${import.meta.env.VITE_BASE_URL}/reservation/${window.location.pathname.replace(
        "/",
        ""
      )}/items`,
      {
        method: "GET",
      }
    ).then(async data => {
      setRecommendedList(await data.json());
    });
  };

  const fetchFAQ = async () => {
    fetch(
      `${import.meta.env.VITE_BASE_URL}/reservation/${window.location.pathname.replace(
        "/",
        ""
      )}/faq`,
      {
        method: "GET",
      }
    ).then(async data => {
      setFaqList(await data.json());
    });
  };

  const fetchIsEarlyReservationPaid = async () => {
    fetch(
      `${import.meta.env.VITE_BASE_URL}/pay/reservation/${window.location.pathname.replace(
        "/",
        ""
      )}/early`,
      {
        method: "GET",
      }
    ).then(async data => {
      setIsEarlyReservationPaid(await data.text());
    });
  };

  useEffect(() => {
    fetchItems();
    fetchFAQ();
    fetchReservation();
    fetchIsEarlyReservationPaid();
  }, []);

  function openCheckInDialog() {
    const isEarlyCheckIn = reservation?.earlyCheckIn === 1;
    const isBeforeArrivalDate = new Date(reservation?.reservationInfo?.arrivalDate) > new Date();
    if (isEarlyCheckIn && isBeforeArrivalDate) {
      if (isEarlyReservationPaid === "false") {
        setShowEarlyCheckInModal(true);
      } else {
        setShowCheckInModal(true);
      }
    } else {
      setShowCheckInModal(true);
    }
  }

  function openCheckOutDialog() {
    setShowCheckoutModal(true);
  }

  console.log("data", propertyInfo)

  useEffect(() => {
    console.log(showModal);

  }, [showModal])

  return (
    <>
      <div className="flex flex-col text-white">

        <div className="bg-[#242424] flex justify-center ">
          <div className="justify-center items-center">
            <div className="relative flex justify-center items-center w-full">
              <img src={propertyInfo?.propertyInfo?.thumbnailUrl} alt="" className="object-contain w-full" />
              <button className="absolute top-2 left-2 text-white p-1 rounded" onClick={() => navigate(-1)}>
                <img src={backarrow} alt='' />
              </button>
            </div>

            <div className="flex p-2 flex-col gap-2 justify-start items-start relative ">
              <h4 className="flex leading-[29px] text-2xl text-white mx-3">
                {propertyInfo?.propertyInfo?.name}
              </h4>
              <div className="flex flex-row text-white">
                <LocationIcon width={30} height={30} />
                {propertyInfo?.propertyInfo?.address}
              </div>
            </div>
            <div className="bg-[#414141] w-[fit] justify-center items-center mx-5  h-px"></div>

            <div className="flex justify-between  items-start relative mx-5 w-full mt-2">
              <div className="flex gap-2 justify-start items-center flex-1 relative w-full">
                <div className="rounded p-2 bg-[#414141] flex gap-2.5 justify-start items-start relative">
                  <PhoneIcon width={20} height={20} />
                </div>
                <div className="flex flex-col gap-1 justify-start items-start flex-1 relative w-full">
                  <p className="max-w-[127px] leading-[14px] text-xs text-[#a8abb3]">
                    Contact No
                  </p>
                  <p className="font-medium leading-[17px] text-sm text-white">
                    {propertyInfo?.propertyInfo?.contactPhone1 != null
                      ? propertyInfo?.propertyInfo?.contactPhone1
                      : "No number info"}
                  </p>
                </div>
              </div>
              <div className="flex gap-2 justify-start items-center flex-1 relative w-full">
                <div className="rounded p-2 bg-[#414141] flex gap-2.5 justify-start items-start relative">
                  <WifiIcon width={20} height={20} />
                </div>
                <div className="flex flex-col gap-1 justify-start items-start flex-1 relative w-full">
                  <p className="max-w-[127px] leading-[14px] text-xs text-[#a8abb3]"> {propertyInfo?.propertyInfo?.wifiUsername != null
                    ? propertyInfo?.propertyInfo?.wifiUsername
                    : "No wifi info"}</p>
                  <p className="font-medium leading-[17px] text-sm text-white">
                    {propertyInfo?.propertyInfo?.wifiPassword}
                  </p>
                </div>
              </div>
            </div>
            <div className="flex justify-between  items-start relative mx-5 w-full mt-2">
              <p className="font-medium leading-[22px] text-lg text-white">Recommended for Your Stay</p>
            </div>
            <div className="flex justify-between  items-start relative mx-5  mt-2">
              <div className="overflow-x-auto">
                <div className="space-x-4">
                  <div className="grid grid-cols-4 gap-2    ">
                    {recommendedList?.map((item) => {
                      return (
                        <>
                          <Item
                            key={item.item_name}
                            item={item}
                            setShowModal={setShowModal}
                            setSelectedItem={setSelectedItem}
                          />
                        </>
                      )
                    })}
                  </div>
                </div>
              </div>
            </div>
            <div className="mx-4">
              <div className="flex justify-center mt-8 bg-[#414141] w-full h-14 font-bold rounded-md px-10 text-white">
                <img src={lock} alt="" className="self-center mr-2" />
                <button className="self-center">
                  Unlock the door
                </button>
              </div>

              {!reservation?.checkedIn ? (
                <button
                  className="mt-8 BtnCustomgfhghColors w-full h-14 font-bold rounded-md px-10 mb-10 "
                  type={"button"}
                  title={"s"}
                  disabled={false}
                  onClick={openCheckInDialog}
                >
                  Check In
                </button>
              ) : (
                <button
                  className="mt-8 BtnCustomgfhghColors w-full h-14 font-bold rounded-md px-10 mb-10 "
                  type={"button"}
                  title={"Check out"}
                  disabled={false}
                  onClick={openCheckOutDialog}
                >
                  Check Out
                </button>
              )}
            </div>

          </div>
        </div>
        {showModal && (
          <Modal
            showModal={showModal}
            setShowModal={setShowModal}
            selectedItem={selectedItem}
          />
        )}
        {showCheckInModal && (
          <CheckInModal setShowCheckInModal={setShowCheckInModal}
            fetchReservation={fetchReservation} />
        )}
        {showEarlyCheckInModal && (
          <EarlyCheckInModal
            setShowModal={setShowModal}
            setSelectedItem={setSelectedItem}
            items={recommendedList}
            setShowEarlyCheckInModal={setShowEarlyCheckInModal}
          />
        )}
        {showCheckOutModal && (
          <CheckOutModal
            showCheckOutModal={showCheckOutModal}
            setShowCheckoutModal={setShowCheckoutModal}
          />
        )}


        {/* <HeroSection
          photoUrl={propertyInfo?.propertyInfo?.thumbnailUrl}
          propertyName={propertyInfo?.propertyInfo?.name}
        /> */}
        {/* <div className="flex flex-col px-3 sm:px-[30%]">
          <div className="flex flex-col gap-3 sm:gap-4">
            <div className="flex gap-2.5 sm:gap-3.5 items-center">
              <div className="bg-white/[.12] rounded-md sm:rounded-xl h-12 w-12 sm:h-16 sm:w-16">
                <LocationIcon width={screenSize === 'xs' ? 48 : 74} height={screenSize === 'xs' ? 48 : 74} />
              </div>
              <div className="flex flex-col self-center">
                <div className="text-lg sm:text-2xl leading-9">
                  {propertyInfo?.propertyInfo?.city}
                </div>
                <div className="text-sm sm:text-lg">
                  {propertyInfo?.propertyInfo?.address}
                </div>
              </div>
            </div>
            <div className="flex gap-2.5 sm:gap-3.5 items-center">
              <div className="bg-white/[.12] rounded-md sm:rounded-xl h-12 w-12 sm:h-16 sm:w-16">
                <PhoneIcon width={screenSize === 'xs' ? 48 : 74} height={screenSize === 'xs' ? 48 : 74} />
              </div>
              <div className="self-center text-lg sm:text-2xl leading-9">
                {propertyInfo?.propertyInfo?.contactPhone1 != null
                  ? propertyInfo?.propertyInfo?.contactPhone1
                  : "No number info"}
              </div>
            </div>
            <div className="flex gap-2.5 sm:gap-3.5 items-center">
              <div className="bg-white/[.12] rounded-md sm:rounded-xl h-12 w-12 sm:h-16 sm:w-16">
                <WifiIcon width={screenSize === 'xs' ? 48 : 74} height={screenSize === 'xs' ? 48 : 74} />
              </div>
              <div className="flex flex-col self-center">
                <div className="text-lg sm:text-2xl leading-9">
                  {propertyInfo?.propertyInfo?.wifiUsername != null
                    ? propertyInfo?.propertyInfo?.wifiUsername
                    : "No wifi info"}
                </div>
                <div className="text-sm sm:text-lg">
                  {propertyInfo?.propertyInfo?.wifiPassword}
                </div>
              </div>
            </div>
          </div>
          {!reservation?.checkedIn ? (
            <Button
              styles={
                "w-full bg-white text-black text-sm sm:text-lg tracking-[1px] rounded sm:rounded-md sm:rounded-1 h-10 sm:h-14 uppercase tracking-wider my-4 sm:my-6"
              }
              type={"button"}
              title={"s"}
              disabled={false}
              onClick={openCheckInDialog}
            >
              Check Ins
            </Button>
          ) : (
            <Button
              styles={
                "w-full bg-white text-black text-sm sm:text-lg tracking-[1px] rounded sm:rounded-md sm:rounded-1 h-10 sm:h-14 uppercase tracking-wider my-4 sm:my-6"
              }
              type={"button"}
              title={"Check out"}
              disabled={false}
              onClick={openCheckOutDialog}
            >
              Check Out
            </Button>
          )}

          <div className="flex flex-col gap-3 sm:gap-4">
            <h2 className="text-lg sm:text-2xl leading-9">
              Recommended for your stay
            </h2>
            <div className="flex flex-col gap-4 sm:gap-6">
              {recommendedList?.map((item) => {
                return (
                  <>
                    <Item
                      key={item.item_name}
                      item={item}
                      setShowModal={setShowModal}
                      setSelectedItem={setSelectedItem}
                    />
                  </>
                )
              })}
            </div>
          </div>
          <div className="mt-6 sm:mt-8">
            {faqList.map(faqItem => (
              <FAQ key={faqItem.faq_answer} faq={faqItem} />
            ))}
            <hr className="h-px sm:h-1 border-t-0 bg-white" />
          </div>
          <Footer />
        </div> */}
        {/* {showModal && (
          <Modal
            showModal={showModal}
            setShowModal={setShowModal}
            selectedItem={selectedItem}
          />
        )} */}
        {/* {showCheckInModal && (
          <CheckInModal setShowCheckInModal={setShowCheckInModal}
            fetchReservation={fetchReservation} />
        )}
        {showEarlyCheckInModal && (
          <EarlyCheckInModal
            setShowModal={setShowModal}
            setSelectedItem={setSelectedItem}
            items={recommendedList}
            setShowEarlyCheckInModal={setShowEarlyCheckInModal}
          />
        )}
        {showCheckOutModal && (
          <CheckOutModal
            showCheckOutModal={showCheckOutModal}
            setShowCheckoutModal={setShowCheckoutModal}
          />
        )} */}
      </div>
    </>
  );
}

export default PreCheckInPage;
