import { useEffect, useState } from "react";
import PreCheckInPage from "./Pages/PreCheckInPage.tsx";
import LoadingSpinner from "./Components/ui/LoadingSpinner.tsx";
import LandingPage from "./Pages/LandingPage.tsx";
import PostStayPage from "./Pages/PostStayPage.tsx";

function App() {
  const [reservationStatus, setReservationStatus] = useState("");
  const reservationLink = window.location.pathname.replace("/", "");
  const [propertyInfo, setPropertyInfo] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchReservationStatus = async () => {
      try {
        const response = await fetch(
          `${import.meta.env.VITE_BASE_URL}/reservation/${reservationLink}/status`,
          {
            method: "GET",
            // Add headers if needed, e.g., headers: { 'Authorization': 'Bearer YOUR_TOKEN' }
          }
        );

        if (!response.ok) {
          throw new Error("Failed to fetch reservation status");
        }
        setReservationStatus('STARTEDD');
        //TODO: remove this commnet setReservationStatus(await response.text());
      } catch (error: any) {
        console.error("Error fetching reservation status:", error.message);
      }
    };

    const fetchPropertyInfo = async () => {
      fetch(
        `${import.meta.env.VITE_BASE_URL}/reservation/${window.location.pathname.replace(
          "/",
          ""
        )}/listing`,
        {
          method: "GET",
        }
      ).then(async data => {
        data.json().then(json => {
          if (json.status === "success") {
            setPropertyInfo(json);
            setIsLoading(false);
          }
        });
      });
    };

    // Call the fetch function when the component mounts
    fetchReservationStatus();
    fetchPropertyInfo();
  }, []); // Make sure to include reservationLink in the dependency array

  function renderPage() {
    console.log(reservationStatus)
    if (reservationStatus === "STARTEDD") {
      //@ts-ignore
      return <LandingPage></LandingPage>;
    } else if (reservationStatus === "STARTED") {
      return (
        //@ts-ignore
        <PreCheckInPage propertyInfo={propertyInfo?.result}></PreCheckInPage>
      );
    } else if (reservationStatus === "FINISHED") {
      return (
          //@ts-ignore
        <PostStayPage propertyInfo={propertyInfo?.result}></PostStayPage>
      );
    }
  }

  return (
    <div className="h-screen flex flex-col  bg-[#242424]">
      {isLoading ? <LoadingSpinner /> : renderPage()}
    </div>
  );
}

export default App;
