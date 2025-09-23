"use client";
import { useGSAP } from "@gsap/react";
import ProjectCards from "./ProjectCards";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import ProjectFooter from "./ProjectFooter";

const Projects = () => {
  const projectImages = [
    {
      img1: "/images/1a.jpg",
      img2: "/images/1b.jpg",
    },
    {
      img1: "/images/2a.jpg",
      img2: "/images/2b.jpg",
    },
    {
      img1: "/images/3a.jpg",
      img2: "/images/3b.jpg",
    },
    {
      img1: "/images/4a.jpg",
      img2: "/images/4b.jpg",
    },
    {
      img1: "/images/5a.jpg",
      img2: "/images/5b.jpg",
    },
    {
      img1: "/images/6a.jpg",
      img2: "/images/6b.jpg",
    },
    {
      img1: "/images/7a.jpg",
      img2: "/images/7b.jpg",
    },
    {
      img1: "/images/8a.jpg",
      img2: "/images/8b.jpg",
    },
  ];

  gsap.registerPlugin(ScrollTrigger);

  useGSAP(function () {
    gsap.from(".heroCards", {
      height: "100px",
      stagger: {
        amount: 0.3,
      },
      scrollTrigger: {
        trigger: ".heroParent",
        start: "top 100%",
        end: "top -150%",
        scrub: true,
      },
    });
  });

  return (
    <div className="mt-[10vh]  text-black w-full h-screen font-[font2]  ">
      <div className="p-4">
        <div className="pt-[10vw] ">
          <h2 className="uppercase  text-[13vw]">Projects</h2>
        </div>
        <div className="heroParent -mt-16">
          {projectImages.map(function (elem, index) {
            return (
              <div
                className="heroCards w-full h-96 mb-2 flex gap-2 "
                key={index}
              >
                <ProjectCards image1={elem.img1} image2={elem.img2} />
              </div>
            );
          })}
        </div>
      </div>
      <ProjectFooter />
    </div>
  );
};
export default Projects;
