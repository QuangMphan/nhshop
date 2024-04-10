import { IPost } from "../../interfaces/Post";
import { Link } from "react-router-dom";

const ShortCard = (payload: IPost) => {
  return (
    <>
      <div className="short-card h-[382px] w-[300px] rounded shadow-lg transition-all hover:scale-110">
        <div className="image h-[179px] w-full">
          <img className="h-full w-full" src={payload.thumbnail} alt="" />
        </div>

        <Link
          to={`/posts/${payload.id}`}
          className="title ml-[14px] mt-[18px] text-[20px] font-bold"
        >
          {payload.title}
        </Link>

        <div className="desc ml-[14px] mr-[25px] mt-[15px] text-[14px] font-normal">
          {payload.short_desc}
        </div>

        <div className="misc ml-[14px] mr-[24px] mt-[22px] flex justify-between">
          <div className="date text-[12px] font-normal">
            {payload.createdAt}
          </div>

          <div className="read-more text-[12px] font-bold">Read more</div>
        </div>
      </div>
    </>
  );
};

export default ShortCard;
