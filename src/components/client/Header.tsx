import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <div className="header font-inter flex h-[85px] w-full">
        <div className="logo ml-[96px] mt-[36px] w-[198px] items-center text-xl font-bold">
          HotCoffee
        </div>

        <div className="nav-bar ml-[283px] mr-[93px] mt-[34px] flex h-[24px] w-[578px] items-center">
          <Link
            to="/"
            preventScrollReset={true}
            className="mb-[2px] ml-[445px] mt-[3px] h-[19px] w-[45px] text-[16px] font-normal"
          >
            Home
          </Link>

          <Link
            to="/article"
            className="mb-[2px] ml-[30px] mt-[3px] h-[19px] w-[58px] text-[16px] font-normal"
          >
            Articles
          </Link>
        </div>
      </div>
    </>
  );
};

export default Header;
