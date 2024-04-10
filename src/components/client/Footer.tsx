import ins from "../../assets/Icons/instagram-fill 1.png";
import twitter from "../../assets/Icons/Vector.png";
import linked from "../../assets/Icons/linkedin-box-fill 1.png";

const Footer = () => {
  return (
    <div className="footer mt-[43px] flex h-[78px] items-center justify-between border-t px-[93px]">
      <div className="copyright  text-[16px] font-normal">
        <span className="font-bold">hotcoffee</span> 2020 copyright all rights
        reserved
      </div>

      <div className="icons flex">
        <img src={ins} alt="" />
        <img className="ml-[25px]" src={twitter} alt="" />
        <img className="ml-[25px]" src={linked} alt="" />
      </div>
    </div>
  );
};

export default Footer;
