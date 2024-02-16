import HeroSection from "../Components/custom/HeroSection";
import Button from "../Components/ui/Button";
import StarIcon from "../icons/Star";

const PostStayPage = (propertyInfo: any) => {
  const stars = Array(5).fill(<StarIcon />);
  return (
    <div className="flex flex-col h-screen text-white">
      <HeroSection
        photoUrl={propertyInfo?.propertyInfo?.thumbnailUrl}
        propertyName={propertyInfo?.propertyInfo?.name}
      />
      <div className="flex flex-col gap-20 sm:gap-28 px-3 sm:px-5 sm:px-[30%]">
        <div className="flex flex-col gap-10 sm:gap-16">
          <p className="text-center text-sm sm:text-lg leading-5 sm:leading-7 font-medium">
            Thank You for Staying with Us at {propertyInfo?.propertyInfo?.name}
          </p>
          <div className="flex flex-col px-3 sm:px-5 sm:px-[30%]">
            <div className="flex flex-col gap-1 sm:gap-3">
              <p className="text-center text-sm sm:text-lg leading-5 sm:leading-7 font-medium">
                How was your stay?
              </p>
              <div className="flex justify-center">
                {stars.map((star, index) => (
                  <div key={index}>{star}</div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-1 sm:gap-3">
          <Button
            title={"Review"}
            styles={
              "flex justify-center items-center bg-black rounded sm:rounded-md sm:rounded-1 h-10 sm:h-14 tracking-wider w-full border border-white/60 p-2 sm:p-4"
            }
          >
            Leave a review
          </Button>
          <Button
            title={"Book"}
            styles={
              "flex justify-center items-center bg-black rounded sm:rounded-md sm:rounded-1 h-10 sm:h-14 tracking-wider w-full border border-white/60 p-2 sm:p-4"
            }
          >
            Book Again
          </Button>
        </div>
      </div>
    </div>
  );
};

export default PostStayPage;
