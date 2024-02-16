import { useState } from "react";
import { loadStripe } from "@stripe/stripe-js";
import Button from "../Components/ui/Button";
import VerifiedIcon from "../icons/VerifiedIcon";

const LandingPage = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    document: "",
  });

  const handleChange = (e: any) => {
    const { name, value, files } = e.target;

    setFormData(prevData => ({
      ...prevData,
      [name]: name === "photo" ? files[0] : value,
    }));
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    const data = new FormData();
    data.set("photo", formData?.document);
    data.set("firstName", formData.firstName);
    data.set("lastName", formData.lastName);
    data.set("email", formData.email);

    fetch(
      `${import.meta.env.VITE_BASE_URL}/user-verification/${window.location.pathname.replace(
        "/",
        ""
      )}`,
      {
        method: "POST",
        body: data,
      }
    ).then(() => {
      openStripe();
    });
  };

  const openStripe = async () => {
    const stripe = await loadStripe(import.meta.env.VITE_STRIPE_PUBLIC_KEY);

    const response = await fetch(
      `${import.meta.env.VITE_BASE_URL}/pay/reservation/${window.location.pathname.replace(
        "/",
        ""
      )}`,
      {
        method: "POST",
      }
    );

    const sessionId = await response.text();

    const result = stripe?.redirectToCheckout({ sessionId: sessionId });

    console.log(result);
  };

  return (
    <div className="flex flex-col p-2 sm:p-4 h-screen bg-black sm:px-[30%]">
      <div className="flex justify-center my-10 sm:my-14">
        <VerifiedIcon />
      </div>
      <form
        className="flex flex-col items-center justify-between h-full"
        onSubmit={handleSubmit}
      >
        <div className="flex flex-col gap-2.5 sm:gap-3.5 w-full">
          <h1 className="text-xl sm:text-2xl text-white">
            Let’s get your booking verified
          </h1>
          <div className="h-8 sm:h-10 w-full">
            <input
              type="text"
              id="firstName"
              name="firstName"
              onChange={handleChange}
              value={formData.firstName}
              placeholder="First Name"
              className="peer h-full w-full rounded sm:rounded-md sm:rounded-1  !border !border-gray-300 border-t-transparent bg-transparent pl-1.5 sm:pl-2.5 py-1 sm:py-3 font-sans text-base font-normal text-white outline outline-0 ring-4 ring-transparent transition-all placeholder:text-white placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 disabled:border-0 disabled:bg-blue-gray-50 leading-tight focus:outline-none focus:border-blue-500 cursor-pointer"
              required
              style={{
                transition: "background-color 5000s ease-in-out 0s",
                backgroundColor: "transparent !important",
                WebkitTextFillColor: "white",
                WebkitBoxShadow: "0 0 0 1000px white inset !important",
                caretColor: "white",
              }}
            />
          </div>

          <div className="h-8 sm:h-10 w-full">
            <input
              type="text"
              id="lastName"
              name="lastName"
              onChange={handleChange}
              value={formData.lastName}
              placeholder="Last Name"
              className="peer h-full w-full rounded sm:rounded-md sm:rounded-1  !border !border-gray-300 border-t-transparent bg-transparent pl-1.5 sm:pl-2.5 py-1 sm:py-3 font-sans text-base font-normal text-white outline outline-0 ring-4 ring-transparent transition-all placeholder:text-white placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 disabled:border-0 disabled:bg-blue-gray-50 leading-tight focus:outline-none focus:border-blue-500 cursor-pointer"
              required
              style={{
                transition: "background-color 5000s ease-in-out 0s",
                backgroundColor: "transparent !important",
                WebkitTextFillColor: "white",
                WebkitBoxShadow: "0 0 0 1000px white inset !important",
                caretColor: "white",
              }}
            />
          </div>

          <div className="h-8 sm:h-10 w-full">
            <input
              type="text"
              id="email"
              name="email"
              onChange={handleChange}
              value={formData.email}
              placeholder="Email"
              className="peer h-full w-full rounded sm:rounded-md sm:rounded-1  !border !border-gray-300 border-t-transparent bg-transparent pl-1.5 sm:pl-2.5 py-1 sm:py-3 font-sans text-base font-normal text-white outline outline-0 ring-4 ring-transparent transition-all placeholder:text-white placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 disabled:border-0 disabled:bg-blue-gray-50 leading-tight focus:outline-none focus:border-blue-500 cursor-pointer"
              required
              style={{
                transition: "background-color 5000s ease-in-out 0s",
                backgroundColor: "transparent !important",
                WebkitTextFillColor: "white",
                WebkitBoxShadow: "0 0 0 1000px white inset !important",
                caretColor: "white",
              }}
            />
          </div>

          <div className="flex items-center w-full" onChange={handleChange}>
            <label
              htmlFor="id-document"
              className="flex flex-col items-start  justify-center w-full rounded sm:rounded-md sm:rounded-1 cursor-pointer bg-transparent border pl-1.5 sm:pl-2.5 py-1 sm:py-3"
            >
              <p className="text-base text-white">ID document</p>
              <input
                id="id-document"
                type="file"
                className="hidden"
                name="id-document"
              />
            </label>
          </div>
        </div>

        <div className="flex flex-col w-full gap-2.5 sm:gap-3.5">
          <p className="flex flex-col text-xs sm:text-sm text-white">
            By clicking submit, you agree to
            <span>
              our <span className="underline">Privacy Policy</span>
            </span>
          </p>

          <Button
            handleClick={openStripe}
            styles={
              "w-full bg-white rounded sm:rounded-md sm:rounded-1 h-10 sm:h-14 uppercase tracking-wider"
            }
            type={"submit"}
            title={"Pay"}
            disabled={false}
          >
            Submit
          </Button>
        </div>
      </form>
    </div>
  );
};

export default LandingPage;
