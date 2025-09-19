import Link from "next/link";

const Header = () => {
  return (
    <div className="w-full relative flex items-center justify-between">
      <div className="mt-6">
        <Link href="/" className="text-7xl font-[font2] leading-0  uppercase">k72</Link>
      </div>
      <div className="px-8 hover:bg-[#d3fd50] hover:text-black items-end justify-center gap-1 flex flex-col bg-black w-48 h-14">
        <div className="border w-20"/>
        <div className="border w-10"/>
      </div>
    </div>
  );
};
export default Header;
