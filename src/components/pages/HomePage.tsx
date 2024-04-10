import Banner from "../client/Banner";
import banner from "../../assets/banner.png";
import ShortCard from "../client/ShortCard";
import LongCard from "../client/LongCard";
import BigCard from "../client/BigCard";
import { useContext, useEffect } from "react";
import { PostContext } from "../../contexts/PostContextProvider";
import { IPost } from "../../interfaces/Post";
import axios from "axios";

const HomePage = () => {
  const { posts, dispatch } = useContext(PostContext);

  useEffect(() => {
    (async () => {
      const { data } = await axios.get("http://localhost:3000/posts");
      dispatch({ type: "GET_POSTS", payload: data });
    })();
  }, [dispatch]);

  return (
    <>
      <Banner imgPath={banner}></Banner>
      <LongCard></LongCard>

      <div className="row mt-[43px] grid w-full grid-cols-3 justify-between gap-5 px-[93px]">
        {posts.value.map((post: IPost, index: number) => (
          <ShortCard key={index} {...post}></ShortCard>
        ))}
      </div>

      <BigCard></BigCard>
    </>
  );
};

export default HomePage;
