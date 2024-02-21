import { useEffect, useState } from "react";
import CloseIcon from "../../../icons/CloseIcon.tsx";
import Button from "../../ui/Button.tsx";
import RadioCheckedIcon from "../../../icons/RadioCheckedIcon.tsx";
import RadioUncheckedIcon from "../../../icons/RadioUncheckedIcon.tsx";
import { CheckInStep } from "../../../@types/CheckInStep.ts";

const CheckInModal = ({
    setShowCheckInModal,
    fetchReservation
}: {
    setShowCheckInModal: any;
    fetchReservation: any;
}) => {
    const [checkInSteps, setCheckInSteps] = useState<CheckInStep[]>([]);
    const [currentStepIndex, setCurrentStepIndex] = useState(0);
    const currentStep = checkInSteps[currentStepIndex];
    const reservationLink = window.location.pathname.replace("/", "");

    useEffect(() => {
        const fetchCheckInSteps = async () => {
            try {
                const response = await fetch(
                    `${import.meta.env.VITE_BASE_URL}/reservation/${reservationLink}/checkIn/tips`,
                    {
                        method: "GET",
                    }
                );

                if (!response.ok) {
                    throw new Error("Failed to fetch reservation status");
                }
                setCheckInSteps(await response.json());
            } catch (error: any) {
                console.error("Error fetching reservation status:", error.message);
            }
        };
        fetchCheckInSteps().then(() => {
            console.log(checkInSteps);
        });
    }, []);

    const goToNextStep = () => {
        if (currentStepIndex < checkInSteps.length - 1) {
            setCurrentStepIndex(currentStepIndex + 1);
        }
    };

    const goToPreviousStep = () => {
        if (currentStepIndex > 0) {
            setCurrentStepIndex(currentStepIndex - 1);
        }
    };

    const checkInAndClose = () => {
        try {
            fetch(
                `${import.meta.env.VITE_BASE_URL}/reservation/${reservationLink}/checkIn`,
                {
                    method: "POST",
                }
            ).then(() => {
                fetchReservation();
            });
        } catch (error: any) {
            console.error("Error fetching reservation status:", error.message);
        }
        closeModal();
    };

    const closeModal = () => {
        setShowCheckInModal(false);
    }

    return (
        <div className="fixed h-screen w-screen outline-none focus:outline-none bg-[#242424]">
            <div className="relative flex flex-col justify-between h-full">
                {/* <div
                    className="absolute flex justify-center items-center w-4 sm:w-6 h-4 sm:h-6 rounded-full bg-black/60 right-4 top-4">
                    <CloseIcon haight={18} width={18} onClick={closeModal} />
                </div> */}
                <div className="flex justify-center items-center">
                    {currentStep?.image && (
                        <img src={currentStep?.image} alt="Step Image" className="w-full rounded-b-[120px] h-[400px]" />
                    )}
                </div>
                <div className="flex flex-col justify-between gap-5 sm:gap-5 p-4 sm:p-5  overflow-auto">
                    <div className=" flex flex-col gap-3 justify-center items-center self-stretch relative w-[350px]">
                        <h3 className="text-center font-bold leading-9 text-[28px] text-white">
                            {currentStep?.title}
                        </h3>
                        <p className="flex tracking-[0.028em] text-center leading-5 text-sm text-[#b2b3b4]">
                            {currentStep?.description}
                        </p>

                    </div>
                    {currentStep?.pin.length > 0 && (
                        <div>
                            <div>
                                <p className="text-white">
                                    {currentStep?.pin[0].pinInfo}
                                </p>
                            </div>
                            <p className="text-white">
                                Pin: <b>{currentStep?.pin[0].pinValue}</b>
                            </p>
                        </div>
                    )}

                    <div className="flex flex-col gap-3 sm:gap-5">
                        <div className="step-indicators flex gap-4 self-center">
                            {checkInSteps.map((_step, index) => (
                                <div key={index}>
                                    {index === currentStepIndex ? (
                                        <RadioCheckedIcon />
                                    ) : (
                                        <RadioUncheckedIcon />
                                    )}
                                </div>
                            ))}
                        </div>

                        <div className="navigation-buttons flex gap-2 justify-end ">
                            {/* {currentStepIndex > 0 && (
                                <Button
                                    title={"Back"}
                                    onClick={closeModal}
                                    styles={
                                        "bg-black rounded sm:rounded-md sm:rounded-1 h-10 sm:h-14 uppercase tracking-wider w-full border border-white/60"
                                    }
                                >
                                    Cancel
                                </Button>
                            )} */}
                            {currentStepIndex < checkInSteps.length - 1 ? (
                                <>
                                    <p className="max-w-[350px] font-medium cursor-pointer text-right flex justify-end leading-[19px] text-base bottom-4 text-white" onClick={goToNextStep}>
                                        Skip
                                    </p>
                                    {/* <Button
                                        title={"Next"}
                                        onClick={goToNextStep}
                                        styles={
                                            "bg-white rounded sm:rounded-md sm:rounded-1 h-10 sm:h-14 uppercase tracking-wider w-full text-black"
                                        }
                                    >
                                        Next
                                    </Button> */}
                                </>
                            ) : (

                                <>
                                    <Button
                                        title={"Back"}
                                        onClick={closeModal}
                                        styles={
                                            "bg-[#414141] rounded sm:rounded-md sm:rounded-1 h-10 sm:h-14 uppercase tracking-wider w-full  font-medium"
                                        }
                                    >
                                        Cancel
                                    </Button>
                                    <Button
                                        onClick={checkInAndClose}
                                        title={"Check-In"}
                                        styles={
                                            "BtnCustomgfhghColors rounded sm:rounded-md sm:rounded-1 h-10 sm:h-14 uppercase tracking-wider w-full text-black font-medium"
                                        }
                                    >
                                        Check-In
                                    </Button>
                                </>
                            )}


                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CheckInModal;
