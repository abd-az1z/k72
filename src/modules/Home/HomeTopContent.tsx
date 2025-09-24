import HeroFooter from "./HeroFooter";
import HeroVideo from "./HeroVideo";

const HomeTopContent = () => {
  return (
    <div className="">
      <div className="w-full z-10 font-[font2] md:pt-[30vh] pt-[55vh] md:py-5 text-white h-full flex flex-col">
        <div className="md:text-[10vw] text-5xl uppercase leading-[10vw] text-center ">
          Létincelle
        </div>
        <div className="md:text-[10vw] text-5xl justify-center flex items-start uppercase leading-[10vw] text-center ">
          <span className="bg-[#d3fd50]">qui</span>
          <div className="h-[8vw] mx-5 -mb-10 rounded-full w-[15vw] overflow-hidden">
            <HeroVideo />
          </div>
          <span className="bg-[#d3fd50]">génère</span>
        </div>
        <div className="md:text-[10vw] text-5xl uppercase leading-[10vw] text-center ">
          la créativité
        </div>
      </div>

      <div className="fixed hidden md:flex bottom-0 left-0 right-0 z-50">
        <HeroFooter />
      </div>
    </div>
  );
};
export default HomeTopContent;
