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
      <div className="min-h-screen flex flex-col p-6   bg-[#242424] ">
        <div className="flex flex-col gap-5 justify-center items-center relative">
          <div className="overflow-hidden rounded-[60px] border-[3px] justify-center flex items-center border-[#616161] bg-[#414141] relative w-[90px] h-[90px]">
            <VerifiedIcon />
          </div>
          <div className="flex flex-col gap-3 justify-center items-center relative">
            <h4 className="flex tracking-[0.024em] max-w-[350px] text-center font-semibold leading-[29px] text-2xl text-white">
              Let's get your booking verified
            </h4>
            <p className="max-w-[350px] text-center leading-5 text-sm text-[#b1b1b1]">
              Please provide the necessary details to ensure the verification of your booking.
            </p>
          </div>
        </div>
        <div className="mx-4 mt-4">
          <div className="flex  flex-col justify-center items-center">
            <form onSubmit={handleSubmit}>
              <div className="flex flex-col gap-5  items-start relative ">
                <div className="mt-1" >
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    onChange={handleChange}
                    value={formData.firstName}
                    placeholder="First Name"
                    className="rounded-md p-[14px]  bg-[#414141] border-none outline-none text-white flex border-0  gap-2.5 justify-start items-center relative w-[350px] h-[54px] placeholder:text-white"
                    required
                  />
                </div>
                <div >
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    onChange={handleChange}
                    value={formData.lastName}
                    placeholder="Last Name"
                    className="rounded-md p-[14px] bg-[#414141] border-0 border-none outline-none text-white  flex gap-2.5 justify-start items-center relative w-[350px] h-[54px] placeholder:text-white"
                    required
                  />
                </div>
                <div >
                  <input
                    type="text"
                    id="email"
                    name="email"
                    onChange={handleChange}
                    value={formData.email}
                    placeholder="Email"
                    className="rounded-md p-[14px] flex gap-2.5 justify-start border-none outline-none text-white items-center border-0 bg-[#414141] relative w-[350px] h-[54px] placeholder:text-white"
                    required
                  />
                </div>
                <div className="flex items-center w-full" onChange={handleChange}>
                  <label
                    htmlFor="id-document"
                    className="flex flex-col h-14 items-start rounded-md  justify-center w-full  bg-[#414141] cursor-pointer  pl-1.5  py-1 "
                  >
                    <p className="text-base text-white ">ID Document</p>
                    <input
                      id="id-document"
                      type="file"
                      className="hidden rounded-md border-0 bg-[#414141]"
                      name="id-document"
                    />
                  </label>
                </div>
              </div>
              <div className="mt-5">
                <p className=" text-center text-sm text-white">
                  By clicking submit, you agree to our ?
                  <a href="#" className="font-semibold leading-6 space-x-0 underline  border-l-indigo-500 text-white">Privacy Policy</a>
                </p>
                <button type="submit" title="Pay" disabled={false} onClick={openStripe} className="mt-8 BtnCustomgfhghColors w-full h-14 font-bold rounded-md px-10 ">
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default LandingPage;
