import { useState } from "react";
import { loadStripe } from "@stripe/stripe-js";
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
    <>

      <div className="h-screen flex flex-col p-2   bg-[#242424] ">
        <div className="flex justify-center   ">
          <div className="rounded-full bg-[#414141] w-24 size-24 justify-center flex items-center border-8 border-[#616161]">
            <VerifiedIcon />
          </div>
        </div>
        <form
          className="flex flex-col items-center justify-between h-screen gap-4 sm:gap-8  sm:px-5 sm:px-[30%]"
          onSubmit={handleSubmit}
        >
          <div className="flex flex-col gap-2.5  w-full">
            <h1 className="text-2xl text-center my-2 text-white text-nowrap font-bold">Let’s get your booking verified</h1>
            <p className="text-center my-2 text-[#B1B1B1] mx-4">Please provide the necessary details to ensure the verification of your booking.</p>
            <div className="box-border h-32 w-100 p-4 ">
              <div className="h-8 sm:h-10 w-full">
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  onChange={handleChange}
                  value={formData.firstName}
                  placeholder="First Name"
                  className="peer h-14 w-full  sm:rounded-md sm:rounded-1 rounded-md  !border bg-[#414141] !border-gray-300 border-t-transparent bg-transparent pl-1.5 sm:pl-2.5 py-1 sm:py-3 font-sans text-base font-normal text-white outline outline-0 ring-4 ring-transparent transition-all placeholder:text-white placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 disabled:border-0 disabled:bg-blue-gray-50 leading-tight focus:outline-none focus:border-blue-500 cursor-pointer"
                  required
                />
              </div>
              <div className="h-8 sm:h-10 w-full mt-8">
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  onChange={handleChange}
                  value={formData.lastName}
                  placeholder="Last Name"
                  className="peer h-14 w-full sm:rounded-md sm:rounded-1 rounded-md bg-[#414141] !border !border-gray-300 border-t-transparent bg-transparent pl-1.5 sm:pl-2.5 py-1 sm:py-3 font-sans text-base font-normal text-white outline outline-0 ring-4 ring-transparent transition-all placeholder:text-white placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 disabled:border-0 disabled:bg-blue-gray-50 leading-tight focus:outline-none focus:border-blue-500 cursor-pointer"
                  required
                />
              </div>
              <div className="h-8 sm:h-10 w-full mt-8">
                <input
                  type="text"
                  id="email"
                  name="email"
                  onChange={handleChange}
                  value={formData.email}
                  placeholder="Email"
                  className="peer h-14 w-full  sm:rounded-md sm:rounded-1 rounded-md !border !border-gray-300 border-t-transparent bg-[#414141] pl-1.5 sm:pl-2.5 py-1 sm:py-3 font-sans text-base font-normal text-white outline outline-0 ring-4 ring-transparent transition-all placeholder:text-white placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 disabled:border-0 disabled:bg-blue-gray-50 leading-tight focus:outline-none focus:border-blue-500 cursor-pointer"
                  required
                />
              </div>
              <div className="flex items-center w-full mt-8" onChange={handleChange}>
                <label
                  htmlFor="id-document"
                  className="flex flex-col h-14 items-start rounded-md  justify-center w-full sm:rounded-md sm:rounded-1 bg-[#414141] cursor-pointer bg-transparent border pl-1.5 sm:pl-2.5 py-1 sm:py-3"
                >
                  <p className="text-base text-white">ID Document</p>
                  <input
                    id="id-document"
                    type="file"
                    className="hidden"
                    name="id-document"
                  />
                </label>
              </div>

              <div className="flex flex-col w-full mt-14 h-screen">
                <p className="flex flex-col text-xs text-white">
                  By clicking submit, you agree to our Privacy Policy
                </p>
                <button type="submit" title="Pay" disabled={false} onClick={openStripe} className="mt-14 BtnCustomgfhghColors w-full h-14 rounded-md px-10 py-15 text-lg">
                  Submit
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default LandingPage;
