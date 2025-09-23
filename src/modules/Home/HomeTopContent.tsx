import HeroFooter from "./HeroFooter";
import HeroVideo from "./HeroVideo";

const HomeTopContent = () => {
  return (
    <div className="">
      <div className="w-full z-10 font-[font2] py-5 h-full flex flex-col">
        <div className="text-[10vw] uppercase leading-[10vw] text-center ">
          Létincelle
        </div>
        <div className="text-[10vw] justify-center flex items-start uppercase leading-[10vw] text-center ">
          qui
          <div className="h-[8vw] mx-5 -mb-10 rounded-full w-[15vw] overflow-hidden">
            <HeroVideo />
          </div>
          génère
        </div>
        <div className="text-[10vw] uppercase leading-[10vw] text-center ">
          la créativité
        </div>
      </div>

      <div className="fixed bottom-0 left-0 right-0 z-50">
        <HeroFooter />
      </div>
    </div>
  );
};
export default HomeTopContent;
