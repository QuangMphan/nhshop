import Banner from "../client/Banner";
import banner from "../../assets/banner2.png";
import { useContext, useEffect } from "react";
import axios from "axios";
import { PostContext } from "../../contexts/PostContextProvider";
import { useParams } from "react-router-dom";

const BlogDetailPage = () => {
  const { posts, dispatch } = useContext(PostContext);
  const { id } = useParams();

  useEffect(() => {
    (async () => {
      const { data } = await axios.get(`http://localhost:3000/posts/${id}`);
      dispatch({ type: "GET_POST", payload: data });
      console.log(data);
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <Banner imgPath={banner}></Banner>

      <div className="article px-[103px]">
        <div className="title mt-[41px] text-[45px] font-bold text-[#2D3748]">
          {posts.value[0].title}
        </div>

        <div className="credit mt-[19px]">
          <span className="author text-[18px] font-bold text-[#2D3748]">
            Written by {posts.value[0].author}
          </span>
          <span className="date ml-[20px] text-[18px] font-normal text-[#718096]">
            {posts.value[0].createdAt}
          </span>
        </div>

        <div className="content mt-[30px] border-t border-[#E8E7E7] pt-[37px]">
          <div className="content text-[16px] text-[#718096]">
            {posts.value[0].content}
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogDetailPage;
