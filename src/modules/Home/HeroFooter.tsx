"use client";

import { useEffect, useState } from "react";
import { Timer } from "lucide-react";

const HeroFooter = () => {
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
    <div className="w-full relative flex items-center justify-start">
      <div className="p-6 w-1/2 text-xl md:text-2xl font-[font2] uppercase">
        {timeStr && city ? (
          <p>
            {timeStr}_{city}
          </p>
        ) : (
          <p>Loading time…</p>
        )}
      </div>
    </div>
  );
};
export default HeroFooter;
