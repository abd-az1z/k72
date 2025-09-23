import Navbar from "@/components/Navigation/Navbar";
import HeroVideo from "./HeroVideo";
import HomeContent from "./HomeContent";

const Home = () => {
  return (
    <>
      <Navbar />

      <div className="w-full h-screen fixed">
        <HeroVideo />
      </div>
      <div className="w-full h-screen relative">
        <HomeContent />
      </div>
    </>
  );
};
export default Home;
