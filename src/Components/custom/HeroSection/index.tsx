import ArrowBackIcon from "../../../icons/ArrowBackIcon";

const removeAkiPolicy = (url: string): string => {
  if (!url) {
    return "";
  }
  const queryStartIndex = url.indexOf("?");
  if (queryStartIndex === -1) {
    return url;
  }
  return url.substring(0, queryStartIndex);
};

const HeroSection = ({
  photoUrl,
  propertyName,
}: {
  photoUrl: string;
  propertyName: string;
}) => (
  <section
    className="flex items-center h-72 sm:h-80 relative bg-cover bg-center bg-no-repeat"
    style={{
      background: `linear-gradient(180deg, rgba(0, 0, 0, 0.22) 0%, #000 100%), url(${removeAkiPolicy(
        photoUrl
      )}), lightgray -0.102px 0px / 100.044% 109.836% no-repeat`,
      backgroundSize: "cover",
    }}
  >
    <div className="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden "></div>
    <div className="relative h-full flex flex-col justify-end sm:ml-[30%]">
      <h1 className="text-2xl sm:text-4xl text-white mb-12 sm:mb-16 ml-3 sm:ml-5 leading-9">
        {propertyName}
      </h1>
    </div>
  </section>
);

export default HeroSection;
