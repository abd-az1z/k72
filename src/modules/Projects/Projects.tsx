"use client";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import ProjectCards from "./ProjectCards";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import ProjectFooter from "./ProjectFooter";

gsap.registerPlugin(ScrollTrigger);

const Projects = () => {
  const container = useRef(null);

  const projectImages = [
    { img1: "/images/1a.jpg", img2: "/images/1b.jpg" },
    { img1: "/images/2a.jpg", img2: "/images/2b.jpg" },
    { img1: "/images/3a.jpg", img2: "/images/3b.jpg" },
    { img1: "/images/4a.jpg", img2: "/images/4b.jpg" },
    { img1: "/images/5a.jpg", img2: "/images/5b.jpg" },
    { img1: "/images/6a.jpg", img2: "/images/6b.jpg" },
    { img1: "/images/7a.jpg", img2: "/images/7b.jpg" },
    { img1: "/images/8a.jpg", img2: "/images/8b.jpg" },
  ];

  useGSAP(
    () => {
      gsap.from(".heroCards", {
        y: 150,
        stagger: 0.2,
        scrollTrigger: {
          trigger: container.current,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      });
    },
    { scope: container }
  );

  return (
    <div
      ref={container}
      className="md:mt-[10vh] pt-[50vh] text-black w-full h-screen font-[font2]"
    >
      <div className="md:p-4">
        <div className="pt-[10vw]">
          <h2 className="uppercase text-7xl md:text-[13vw]">Projects</h2>
        </div>
        <div className="heroParent">
          {projectImages.map((elem, index) => (
            <div
              className="heroCards w-full md:h-96 h-[70vh] mb-2 flex md:gap-2 gap-16"
              key={index}
            >
              <ProjectCards image1={elem.img1} image2={elem.img2} />
            </div>
          ))}
        </div>
      </div>
      <ProjectFooter />
    </div>
  );
};

export default Projects;