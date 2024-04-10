const Banner = ({ imgPath }: { imgPath: string }) => {
  return (
    <>
      <div className="banner h-[467px] w-full">
        <img className="h-full w-full" src={imgPath} alt="" />
      </div>
    </>
  );
};

export default Banner;
