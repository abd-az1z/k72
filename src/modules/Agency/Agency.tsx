"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useRef, useEffect } from "react";
import { url } from "./PhotoUrl";
import CenterScrollHero from "./CenterScrollHero";

declare global {
  interface Window {
    __pageTransitionActive?: boolean;
  }
}

const Agency = () => {
  const imgDivRef = useRef<HTMLDivElement | null>(null);
  const imgRef = useRef<HTMLImageElement | null>(null);
  const titleWrapRef = useRef<HTMLDivElement | null>(null);
  const titleRef = useRef<HTMLHeadingElement | null>(null);
  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    const playTitle = () => {
      if (!titleRef.current) return;
      gsap.fromTo(
        titleRef.current,
        { yPercent: -100 },
        { yPercent: 0}
      );
    };
    if (
      typeof window !== "undefined" &&
      window.__pageTransitionActive
    ) {
      const handler = () => {
        playTitle();
        window.removeEventListener("page-transition-done", handler);
      };
      window.addEventListener("page-transition-done", handler);
      return () => window.removeEventListener("page-transition-done", handler);
    }

    // otherwise play immediately
    playTitle();
  }, []);

  useGSAP(function () {
    gsap.to(imgDivRef.current, {
      scrollTrigger: {
        trigger: imgDivRef.current,
        start: "top 20%",
        end: "top -200%",
        pin: true,
        scrub: true,
        onUpdate: (self) => {
          const len = url.length;
          const imageIndex = Math.min(len - 1, Math.floor(self.progress * len));
          if (imgRef.current) {
            imgRef.current.src = url[imageIndex];
          }
        },
      },
    });
  });

  return (
    <section 
      className="bg-black font-[font2]"
      data-agency-root
      style={{ transform: "translateY(-100%)" }}
    >
      {/* image and text */}
      <div ref={titleWrapRef} className="section1 bg-white text-black">
        {/* background image */}
        <div
          ref={imgDivRef}
          className="h-60 w-48 bg-amber-200 overflow-hidden left-100 rounded-3xl top-30 absolute "
        >
          <img
            ref={imgRef}
            className="w-full h-full object-cover "
            src={url[0]}
            alt=""
          />
        </div>
        {/* text content */}
        <div className="relative font-[font2]">
          <div ref={titleRef} className="pt-[55vh] overflow-hidden">
            <h1 className="text-[20vw] uppercase text-center  leading-[16vw] ">
              Soixan7e <br />
              Douze
            </h1>
          </div>
          <div className="w-full flex justify-end px-10 items-center ">
            <p className="text-6xl w-[55vw]">
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{""}Notre
              curiosité nourrit notre créativité. On reste humbles et on dit non
              aux gros egos, même le vôtre. Une marque est vivante. Elle a des
              valeurs, une personnalité, une histoire. Si on oublie ça, on peut
              faire de bons chiffres à court terme, mais on la tue à long terme.
              C’est pour ça qu’on s’engage à donner de la perspective, pour
              bâtir des marques influentes.
            </p>
          </div>
        </div>
      </div>
      {/* grid layout */}
      <div className="section2 p-10 space-y-20 px-20 text-xl font-[font2] bg-white text-black ">
        <div className="grid grid-cols-3 gap-6">
          <div>Expertise</div>
          <div>
            <ul>
              <li>Stratégie</li>
              <li>Publicité</li>
              <li>Branding</li>
              <li>Design</li>
              <li>Contenu</li>
            </ul>
          </div>
        </div>
        <div className="grid grid-cols-3  gap-6">
          <div className="w-[90%]">
            <p>
              Nos projets_ naissent dans l’humilité, grandissent dans la
              curiosité et vivent grâce à la créativité sous toutes ses formes.
            </p>
          </div>
          <div className="w-[90%]">
            <p>
              Notre création_ bouillonne dans un environnement où le talent a le
              goût d’exploser. Où on se sent libre d’être la meilleure version
              de soi-même.
            </p>
          </div>
          <div className="w-[60%]">
            <p>
              Notre culture_ c’est l’ouverture aux autres. Point. Tout
              l’équipage participe à bâtir une agence dont on est fiers.
            </p>
          </div>
        </div>
      </div>
      {/* center scroll hero animation */}
      <CenterScrollHero />
    </section>
  );
};
export default Agency;
