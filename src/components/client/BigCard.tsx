import bigcard from "../../assets/big-card.png";
import arrow from "../../assets/arrow-down-circle-fill 1.png";

const BigCard = () => {
  return (
    <>
      <div className="big-card mt-[43px]">
        <div className="mx-[93px] flex w-[965px]">
          <div className="content w-[440px] bg-[#F7FAFC]">
            <div className="title ml-[63px] mt-[98px] text-[40px] font-bold">
              What is Lorem Ipsum?
            </div>

            <div className="desc ml-[63px] mr-[66px] mt-[24px] text-[16px] font-normal">
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsum is that....
            </div>

            <div className="misc ml-[63px] mr-[66px] mt-[22px] flex justify-between">
              <div className="date text-[12px] font-normal">May 20th 2020</div>

              <div className="read-more text-[12px] font-bold">Read more</div>
            </div>
          </div>

          <div className="image w-[525px]">
            <img className="w-full" src={bigcard} alt="" />
          </div>
        </div>
      </div>

      <div className="btn mx-[93px] mt-[31px] flex justify-end">
        <div className="flex h-[37px] w-[122px] items-center rounded bg-[#6B46C1] text-[16px] font-bold text-white">
          <span className="pl-[11px]">See more</span>
          <img
            className="h-[20px] w-[25x] items-center pl-[7px]"
            src={arrow}
            alt=""
          />
        </div>
      </div>
    </>
  );
};

export default BigCard;
