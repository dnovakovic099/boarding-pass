import HeroSection from "../Components/custom/HeroSection";
import Button from "../Components/ui/Button";
import StarIcon from "../icons/Star";
import camera from "../../assets/camera.png"

const PostStayPage = (propertyInfo: any) => {
  const stars = Array(5).fill(<StarIcon />);

  console.log(propertyInfo?.propertyInfo)

  return (
    <div className="flex  max-w-sm flex-col w-full text-white ">
      <HeroSection
        photoUrl={propertyInfo?.propertyInfo?.thumbnailUrl}
        propertyName={''}
      />
      <div className="flex flex-col gap-5 sm:gap-1 px-3 sm:px-5 sm:px-[30%] overflow-hidden rounded-t-[30px] bg-[#414141] relative w-[390px] h-[559px]">
        <div className="flex flex-col gap-5 sm:gap-1 justify-start items-center relative">
          {/* <p className="text-center text-sm sm:text-lg leading-5 sm:leading-7 font-medium">
            Thank You for Staying with Us at {propertyInfo?.propertyInfo?.name}
          </p> */}
          <h4 className="max-w-[283px] text-center font-semibold leading-[29px] text-2xl text-white mt-2">
            Thank You for Staying with Us at {propertyInfo?.propertyInfo?.name}.
          </h4>
          <div className="flex flex-col px-3 sm:px-5 sm:px-[30%]">
            <div className="flex flex-col gap-1 sm:gap-3">
              <p className="text-center font-semibold leading-[22px] text-lg text-white">
                How do you rate your Stay?
              </p>
              <div className="flex justify-center">
                {stars.map((star, index) => (
                  <div key={index}>{star}</div>
                ))}
              </div>
            </div>
          </div>
          <div >
            <textarea id="message" className="block p-2.5 text-white text-sm bg-[#595959] rounded-md relative w-[350px] h-[140px] border-none outline-none  border-0" placeholder="Write your review..."></textarea>
          </div>
          <div className="flex gap-2 justify-between items-center relative w-[350px]">
            <div className="overflow-hidden rounded bg-[#414141] relative w-80 h-20 bg-[url('https://picsum.photos/id/34/80/80')] bg-cover bg-center">
            </div>
            <div className="overflow-hidden rounded bg-[#414141] relative w-80 h-20 bg-[url('https://picsum.photos/id/34/80/80')] bg-cover bg-center">
            </div>
            <div className="overflow-hidden rounded bg-[#414141] relative w-80 h-20 bg-[url('https://picsum.photos/id/34/80/80')] bg-cover bg-center">
            </div>
            <div className="overflow-hidden rounded bg-[#545454] relative w-80 h-20  bg-cover bg-center">
              <img src={camera} alt="" className="overflow-hidden rounded bg-[#414141] relative w-80 h-20  bg-cover bg-center" />
            </div>
          </div>
        </div>
        <div className="flex flex-col sm:gap-1 ">
          <Button
            title={"Review"}
            styles={
              " BtnCustomgfhghColors w-full h-14 font-bold rounded-md px-10 mb-10 text-black "
            }
          >
            Leave a review
          </Button>
          {/* <Button
            title={"Book"}
            styles={
              "flex justify-center items-center bg-black rounded sm:rounded-md sm:rounded-1 h-10 sm:h-14 tracking-wider w-full border border-white/60 p-2 sm:p-4"
            }
          >
            Book Again
          </Button> */}
        </div>
      </div>
    </div>
  );
};

export default PostStayPage;
