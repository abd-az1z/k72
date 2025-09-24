import Image from "next/image";

interface ProjectCardsProps {
  image1: string;
  image2: string;
}

const ProjectCards = ({ image1, image2 }: ProjectCardsProps) => {
  return (
    <div className="flex flex-col md:flex-row md:gap-2 w-full">
      <div className="md:w-1/2 w-full group transition-all rounded-none hover:rounded-4xl h-full overflow-hidden relative">
        <Image
          alt="image1"
          src={image1}
          fill
          className="object-cover w-full h-full"
          sizes="(max-width: 768px) 100vw, 50vw"
        />
        <div className="absolute group-hover:opacity-100 transition-all opacity-0 flex items-center justify-center w-full h-full bg-black/10 top-0 left-0  ">
          <h2 className="uppercase border text-4xl border-white font-bold text-white pt-3 p-1 px-2 rounded-full">
            voirle project
          </h2>
        </div>
      </div>
      <div className="md:w-1/2 w-full group transition-all rounded-none hover:rounded-4xl h-full overflow-hidden relative">
        <Image
          alt="image1"
          src={image2}
          fill
          className="object-cover w-full h-full"
          sizes="(max-width: 768px) 100vw, 50vw"
        />
        <div className="absolute group-hover:opacity-100 transition-all opacity-0 flex items-center justify-center w-full h-full bg-black/10 top-0 left-0  ">
          <h2 className="uppercase border text-4xl border-white font-bold text-white pt-3 px-2 rounded-full">
            voir le project
          </h2>
        </div>
      </div>
    </div>
  );
};
export default ProjectCards;
