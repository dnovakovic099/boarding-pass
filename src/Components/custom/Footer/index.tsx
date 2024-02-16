import logo from "../../../../assets/logo.png";
import facebook from "../../../../assets/facebook.png";
import messenger from "../../../../assets/messenger.png";
import instagram from "../../../../assets/instagram.png";

const Footer = () => {
  return (
    <div className="flex flex-col justify-center items-center gap-12 sm:gap-14 sm:gap-16 pt-20 sm:pt-32 pb-8 sm:pb-10">
      <img src={logo} alt="Step Image" className="w-full" />
      <div className="social-networks flex gap-4 sm:gap-6">
        <img src={facebook} alt="facebook" className="w-7 sm:w-8 h-7 sm:h-8" />
        <img src={messenger} alt="messenger" className="w-7 sm:w-8 h-7 sm:h-8" />
        <img src={instagram} alt="instagram" className="w-7 sm:w-8 h-7 sm:h-8" />
      </div>
    </div>
  );
};

export default Footer;
