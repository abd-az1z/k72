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
    <div className=" p-4 flex flex-col items-center justify-between w-full h-[65vh] bg-black text-white">
      <div className="flex  justify-between  w-full">
        <div className="flex  uppercase text-6xl gap-2 font-medium items-center justify-between">
          <h2 className="px-6 pt-3 hover:text-[#d2fd50] leading-10 rounded-full border-2 ">
            fb
          </h2>
          <h2 className="px-6 pt-3 hover:text-[#d2fd50] leading-10 rounded-full border-2 ">
            ig
          </h2>
          <h2 className="px-6 pt-3 hover:text-[#d2fd50] leading-10 rounded-full border-2 ">
            in
          </h2>
          <h2 className="px-6 pt-3 hover:text-[#d2fd50] leading-10 rounded-full border-2 ">
            be
          </h2>
        </div>
        <div className=" uppercase text-6xl font-medium">
          <h2 className="px-6 pt-2 leading-0 hover:text-[#d2fd50] flex gap-3 items-center rounded-full border-2 ">
            contact
            <span className="mb-3">
              <Heart size={50} />
            </span>
          </h2>
        </div>
      </div>
      <div className="flex  uppercase text-base gap-6 tracking-tight font-medium items-center justify-between">
        <h2 className="hover:text-[#d2fd50] ">
          {timeStr && city ? (
            <p>
              {timeStr}_{city}
            </p>
          ) : (
            <p>Loading time…</p>
          )}
        </h2>
        <h2 className="hover:text-[#d2fd50] ">Politique de confidentialité</h2>
        <h2 className="hover:text-[#d2fd50] ">Avis de confidentialité</h2>
        <h2 className="hover:text-[#d2fd50] ">Rapport éthique</h2>
        <h2 className="hover:text-[#d2fd50] ">options de consentement</h2>
        <h2 className="hover:text-[#d2fd50] ">retour en haut</h2>
      </div>
    </div>
  );
};
export default ProjectFooter;
