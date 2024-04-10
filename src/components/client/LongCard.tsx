import longcard from "../../assets/long-card.png";

const LongCard = () => {
  return (
    <div className="h-[325px] w-full px-[93px] pb-[43px] pt-[39px]">
      <div className="long-card mx-auto flex h-[243px] w-[966px]">
        <div className="content borde w-[533px] rounded shadow-lg">
          <div className="title ml-[54px] mt-[41px] text-[30px] font-bold">
            long established
          </div>

          <div className="desc ml-[54px] mr-[77px] mt-[27px] text-[14px] font-normal">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that....
          </div>

          <div className="misc ml-[54px] mr-[77px] mt-[30px] flex justify-between">
            <div className="date text-[12px] font-normal">May 20th 2020</div>

            <div className="read-more text-[12px] font-bold">Read more</div>
          </div>
        </div>

        <div className="image h-[243px] w-[433px]">
          <img className="w-full" src={longcard} alt="" />
        </div>
      </div>
    </div>
  );
};

export default LongCard;
