import Link from "next/link";

const HomeContentLinks = () => {
  return (
    <div className="font-[font2] flex items-center justify-center my-8 gap-5 ">
      <Link
        href="/projects"
        className="text-[5vw] font-semibold hover:border-[#d3fd50] hover:text-[#d3fd50] border-4 rounded-full px-8 pt-5  uppercase "
      >
        projects
      </Link>
      <Link
        href="/agency"
        className="text-[5vw] font-semibold hover:border-[#d3fd50] hover:text-[#d3fd50] border-4 rounded-full px-8 pt-5  uppercase "
      >
        agency
      </Link>
    </div>
  );
};
export default HomeContentLinks;
