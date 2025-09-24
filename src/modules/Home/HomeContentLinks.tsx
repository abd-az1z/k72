import Link from "next/link";

const HomeContentLinks = () => {
  return (
    <div className="font-[font2] text-white flex md:flex-row items-center justify-center my-8 gap-5 ">
      <Link
        href="/projects"
        className="text-[4vw] md:text-[5vw] font-semibold hover:border-[#d3fd50] hover:text-[#d3fd50] border-2 md:border-4  rounded-full px-6 md:px-8 pt-2 md:pt-5 uppercase "
      >
        projects
      </Link>
      <Link
        href="/agency"
        className="text-[4vw] md:text-[5vw] font-semibold hover:border-[#d3fd50] hover:text-[#d3fd50] border-2 md:border-4  rounded-full px-6 md:px-8 pt-2 md:pt-5 uppercase "
      >
        agency
      </Link>
    </div>
  );
};
export default HomeContentLinks;
