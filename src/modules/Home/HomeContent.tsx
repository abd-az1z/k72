import HomeContentLinks from "./HomeContentLinks";
import HomeTopContent from "./HomeTopContent";

const HomeContent = () => {
  return (
    <div className=" w-full h-full flex flex-col justify-between">
      <HomeTopContent />
      <HomeContentLinks />
    </div>
  );
};
export default HomeContent;
