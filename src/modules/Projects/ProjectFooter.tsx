import { Heart } from "lucide-react";
import { useEffect, useState } from "react";

const ProjectFooter = () => {
  const [timeStr, setTimeStr] = useState<string>("");
  const [city, setCity] = useState<string>("");

  useEffect(() => {
    const tz = Intl.DateTimeFormat().resolvedOptions().timeZone; // e.g. "Europe/Paris"
    const cityName = tz.split("/").pop()?.replaceAll("_", " ") ?? "";
    setCity(cityName);

    const update = () => {
      const now = new Date();
      // Format using the user's timezone, 24-hour HH:mm
      const formatted = new Intl.DateTimeFormat(undefined, {
        hour: "2-digit",
        minute: "2-digit",
        hour12: false,
        timeZone: tz,
      }).format(now);
      setTimeStr(formatted);
    };

    update();
    const id = setInterval(update, 1000);
    return () => clearInterval(id);
  }, []);
  return (
    <div className=" md:p-4 p-2 flex flex-col items-center justify-between w-full md:h-[65vh] h-[75vh] bg-black text-white">
      <div className="flex flex-col md:flex-row gap-32 md:justify-between w-full">
        <div className="flex uppercase md:text-6xl gap-2 font-medium text-xl items-center md:justify-between">
          <h2 className="md:px-6 p-2 md:pt-3 hover:text-[#d2fd50] md:leading-10 leading-1 pt-3 rounded-full border-2 ">
            fb
          </h2>
          <h2 className="md:px-6 p-2 md:pt-3 hover:text-[#d2fd50] md:leading-10 leading-1 pt-3 rounded-full border-2 ">
            ig
          </h2>
          <h2 className="md:px-6 p-2 md:pt-3 hover:text-[#d2fd50] md:leading-10 leading-1 pt-3 rounded-full border-2 ">
            in
          </h2>
          <h2 className="md:px-6 p-2 md:pt-3 hover:text-[#d2fd50] md:leading-10 leading-1 pt-3 rounded-full border-2 ">
            be
          </h2>
        </div>
        <div className=" uppercase md:text-6xl text-[7vh] font-medium">
          <h2 className="md:px-6 p-1 pt-2 md:pt-2 leading-0 hover:text-[#d2fd50] flex gap-3 items-center rounded-full border-2 ">
            contact
            <span className="mb-3">
              <Heart fill="#ffffff" size={50} />
            </span>
          </h2>
        </div>
      </div>
      <div className="flex md:flex-row flex-col w-full uppercase text-base md:gap-6 tracking-tight font-medium md:items-center justify-between">
        <h2 className="hover:text-[#d2fd50] text-center md:mt-0 mb-5 ">
          {timeStr && city ? (
            <p>
              {timeStr}_{city}
            </p>
          ) : (
            <p>Loading time…</p>
          )}
        </h2>
        <h2 className="hover:text-[#d2fd50] md:text-base text-xs ">
          Politique de confidentialité
        </h2>
        <h2 className="hover:text-[#d2fd50] md:text-base text-xs ">
          Avis de confidentialité
        </h2>
        <h2 className="hover:text-[#d2fd50] md:text-base text-xs ">
          Rapport éthique
        </h2>
        <h2 className="hover:text-[#d2fd50] md:text-base text-xs ">
          options de consentement
        </h2>
        <h2 className="hover:text-[#d2fd50] md:mt-0 mt-3 text-center ">
          retour en haut
        </h2>
      </div>
    </div>
  );
};
export default ProjectFooter;
