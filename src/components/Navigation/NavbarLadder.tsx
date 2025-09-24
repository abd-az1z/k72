"use client";

import Image from "next/image";
import { Heart } from "lucide-react";
import "./NavbarLadder.css";
import { useRef, useEffect, useState } from "react";
import gsap from "gsap";
type GSAPTimeline = ReturnType<typeof gsap.timeline>;
import { useNav } from "@/context/NavContext";

const NavbarLadder = () => {
  const fullNavRef = useRef(null);

  const { isOpen, close } = useNav();

  const [mounted, setMounted] = useState<boolean>(isOpen);
  const tlRef = useRef<GSAPTimeline | null>(null);

  useEffect(() => {
    if (!mounted) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [mounted]);

  useEffect(() => {
    if (isOpen) {
      setMounted(true);
      return;
    }

    if (tlRef.current) {
      const tl = tlRef.current;
      tl.eventCallback("onReverseComplete", () => {
        setMounted(false);
        tl.eventCallback("onReverseComplete", null);
      });
      tl.reverse();
    } else {
      setMounted(false);
    }
  }, [isOpen]);

  useEffect(() => {
    if (!mounted) return;

    const tl = gsap.timeline();
    tl.from(".stairRing", {
      height: 0,
      stagger: {
        amount: 0.2,
      },
    });
    tl.from(
      fullNavRef.current,
      {
        opacity: 0,
      },
      "<"
    );
    tl.from(
      ".link",
      {
        rotateX: 90,
        opacity: 0,
        stagger: {
          amount: 0.2,
        },
      },
      "<"
    );

    tlRef.current = tl;

    return () => {
      tl.kill();
      tlRef.current = null;
    };
  }, [mounted]);

  if (!mounted) return null;

  return (
    <div
      id="fullScreenNav"
      className="fixed inset-0 z-50 bg-black text-white font-[font2] w-full"
    >
      {/* animation */}
      <div className="h-screen w-full fixed top-0 left-0">
        <div className="h-full w-full flex">
          <div className="stairRing h-full w-1/5  "></div>
          <div className="stairRing h-full w-1/5  "></div>
          <div className="stairRing h-full w-1/5  "></div>
          <div className="stairRing h-full w-1/5  "></div>
          <div className="stairRing h-full w-1/5  "></div>
        </div>
      </div>
      <div ref={fullNavRef} className="relative content">
        <div className="flex w-full justify-between items-start">
          {/* logo and close */}
          <div className="p-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="103"
              height="44"
              viewBox="0 0 103 44"
              fill="white"
            >
              <path
                fillRule="evenodd"
                d="M35.1441047,8.4486911 L58.6905011,8.4486911 L58.6905011,-1.3094819e-14 L35.1441047,-1.3094819e-14 L35.1441047,8.4486911 Z M20.0019577,0.000230366492 L8.83414254,25.3433089 L18.4876971,25.3433089 L29.5733875,0.000230366492 L20.0019577,0.000230366492 Z M72.5255345,0.000691099476 L72.5255345,8.44846073 L94.3991559,8.44846073 L94.3991559,16.8932356 L72.5275991,16.8932356 L72.5275991,19.5237906 L72.5255345,19.5237906 L72.5255345,43.9274346 L102.80937,43.9274346 L102.80937,35.4798953 L80.9357483,35.4798953 L80.9357483,25.3437696 L94.3996147,25.3428482 L94.3996147,16.8953089 L102.80937,16.8953089 L102.80937,0.000691099476 L72.5255345,0.000691099476 Z M-1.30398043e-14,43.9278953 L8.78642762,43.9278953 L8.78642762,0.0057591623 L-1.30398043e-14,0.0057591623 L-1.30398043e-14,43.9278953 Z M58.6849955,8.4486911 L43.1186904,43.9274346 L52.3166592,43.9274346 L67.9877996,8.4486911 L58.6849955,8.4486911 Z M18.4688864,25.3437696 L26.7045278,43.9278953 L36.2761871,43.9278953 L28.1676325,25.3375497 L18.4688864,25.3437696 Z"
              ></path>
            </svg>
          </div>
          {/* close nav button */}
          <div
            onClick={() => close()}
            className=" relative p-2 w-20 h-20 group"
          >
            <div className="h-24 -rotate-48 origin-top w-[1px] absolute group-hover:bg-[#d2fd50] bg-white"></div>
            <div className="h-24 right-0 rotate-48 origin-top w-[1px] absolute group-hover:bg-[#d2fd50] bg-white"></div>
          </div>
        </div>
        <div id="all-links" className="w-full h-screen absolute top-[20vh] md:top-[35vh] ">
          {/* PROJECTS */}
          <div className="link origin-top border-t-1 relative ">
            <h1 className="md:text-8xl text-6xl uppercase text-center pt-4">Projects</h1>
            <div className="moveLink absolute flex top-0 text-black bg-[#d2fd50] overflow-hidden w-full">
              {/* hover effect */}
              <div className="moveX inline-flex gap-5 items-center whitespace-nowrap">
                <h2 className="md:text-8xl text-6xl uppercase text-center pt-4 whitespace-nowrap ">
                  POUR tOUT VOIR
                </h2>
                <div className="relative w-60 h-22 rounded-full overflow-hidden">
                  <Image
                    alt="image1"
                    src="https://k72.ca/uploads/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_640x290-640x290.jpg"
                    fill
                    className="object-cover"
                  />
                </div>
                <h2 className="md:text-8xl text-6xl uppercase text-center pt-4 whitespace-nowrap ">
                  POUR tOUT VOIR
                </h2>
                <div className="relative w-60 h-22 rounded-full overflow-hidden">
                  <Image
                    alt="image1"
                    src="https://k72.ca/uploads/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_640x290-640x290.jpg"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
              <div className="moveX inline-flex gap-5 items-center whitespace-nowrap">
                <h2 className="md:text-8xl text-6xl uppercase text-center pt-4 whitespace-nowrap ">
                  POUR tOUT VOIR
                </h2>
                <div className="relative w-60 h-22 rounded-full overflow-hidden">
                  <Image
                    alt="image1"
                    src="https://k72.ca/uploads/caseStudies/WIDESCAPE/WS---K72.ca---MenuThumbnail-640x290.jpg"
                    fill
                    className="object-cover"
                  />
                </div>
                <h2 className="md:text-8xl text-6xl uppercase text-center pt-4 whitespace-nowrap ">
                  POUR tOUT VOIR
                </h2>
                <div className="relative w-60 h-22 rounded-full overflow-hidden">
                  <Image
                    alt="image1"
                    src="https://k72.ca/uploads/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_640x290-640x290.jpg"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
          {/* AGENCY  */}
          <div className="link origin-top border-t-1 relative ">
            <h1 className="md:text-8xl text-6xl uppercase text-center pt-4">agency</h1>
            <div className="moveLink absolute flex top-0 text-black bg-[#d2fd50] overflow-hidden w-full">
              {/* hover effect */}
              <div className="moveX inline-flex gap-5 items-center whitespace-nowrap">
                <h2 className="md:text-8xl text-6xl uppercase text-center pt-4 whitespace-nowrap ">
                  Pour tout savoir
                </h2>
                <div className="relative w-60 h-22 rounded-full overflow-hidden">
                  <Image
                    alt="image1"
                    src="https://k72.ca/uploads/teamMembers/Claire_640X290-640x290.jpg"
                    fill
                    className="object-cover"
                  />
                </div>
                <h2 className="md:text-8xl text-6xl uppercase text-center pt-4 whitespace-nowrap ">
                  Pour tout savoir
                </h2>
                <div className="relative w-60 h-22 rounded-full overflow-hidden">
                  <Image
                    alt="image1"
                    src="https://k72.ca/uploads/teamMembers/MEGGIE_640X290_2-640x290.jpg"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
              <div className="moveX inline-flex gap-5 items-center whitespace-nowrap">
                <h2 className="md:text-8xl text-6xl uppercase text-center pt-4 whitespace-nowrap ">
                  Pour tout savoir
                </h2>
                <div className="relative w-60 h-22 rounded-full overflow-hidden">
                  <Image
                    alt="image1"
                    src="https://k72.ca/uploads/teamMembers/Claire_640X290-640x290.jpg"
                    fill
                    className="object-cover"
                  />
                </div>
                <h2 className="md:text-8xl text-6xl uppercase text-center pt-4 whitespace-nowrap ">
                  Pour tout savoir
                </h2>
                <div className="relative w-60 h-22 rounded-full overflow-hidden">
                  <Image
                    alt="image1"
                    src="https://k72.ca/uploads/teamMembers/MEGGIE_640X290_2-640x290.jpg"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
          {/* contact  */}
          <div className="link origin-top border-t-1 relative ">
            <h1 className="md:text-8xl text-6xl uppercase text-center pt-4">contact</h1>
            <div className="moveLink absolute flex top-0 text-black bg-[#d2fd50] overflow-hidden w-full">
              {/* hover effect */}
              <div className="moveX inline-flex gap-5 items-center whitespace-nowrap">
                <h2 className="md:text-8xl text-6xl uppercase text-center pt-4 whitespace-nowrap ">
                  Pour envoyer un fax
                </h2>
                <div className="relative w-30 h-22 rounded-full overflow-hidden">
                  <Heart className="w-full text-white h-full object-center" />
                </div>
                <h2 className="md:text-8xl text-6xl uppercase text-center pt-4 whitespace-nowrap ">
                  Pour envoyer un fax
                </h2>
                <div className="relative w-30 h-22 rounded-full overflow-hidden">
                  <Heart className="w-full text-white h-full object-center" />
                </div>
              </div>
              <div className="moveX inline-flex gap-5 items-center whitespace-nowrap">
                <h2 className="md:text-8xl text-6xl uppercase text-center pt-4 whitespace-nowrap ">
                  Pour envoyer un fax
                </h2>
                <div className="relative w-30 h-22 rounded-full overflow-hidden">
                  <Heart className="w-full text-white h-full object-center" />
                </div>
                <h2 className="md:text-8xl text-6xl uppercase text-center pt-4 whitespace-nowrap ">
                  Pour envoyer un fax
                </h2>
                <div className="relative w-30 h-22 rounded-full overflow-hidden">
                  <Heart className="w-full text-white h-full object-center" />
                </div>
              </div>
            </div>
          </div>
          {/* blogs */}
          <div className="link origin-top border-t-1 relative border-b-1">
            <h1 className="md:text-8xl text-6xl uppercase text-center pt-4">blogs</h1>
            <div className="moveLink absolute flex top-0 text-black bg-[#d2fd50] overflow-hidden w-full">
              {/* hover effect */}
              <div className="moveX inline-flex gap-5 items-center whitespace-nowrap">
                <h2 className="text-8xl uppercase text-center pt-4 whitespace-nowrap ">
                  Lire les articles
                </h2>
                <div className="relative w-60 h-22 rounded-full overflow-hidden">
                  <Image
                    alt="image1"
                    src="https://k72.ca/uploads/blog/blogImg/50ff59cc0550df5b36543807a58db98c52e01a22274a317eafbfa5266941579b-640x290.png"
                    fill
                    className="object-cover"
                  />
                </div>
                <h2 className="text-8xl uppercase text-center pt-4 whitespace-nowrap ">
                  Lire les articles
                </h2>
                <div className="relative w-60 h-22 rounded-full overflow-hidden">
                  <Image
                    alt="image1"
                    src="https://k72.ca/uploads/blog/blogImg/ier.com-16107673482102220.gif"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
              <div className="moveX inline-flex gap-5 items-center whitespace-nowrap">
                <h2 className="text-8xl uppercase text-center pt-4 whitespace-nowrap ">
                  Lire les articles
                </h2>
                <div className="relative w-60 h-22 rounded-full overflow-hidden">
                  <Image
                    alt="image1"
                    src="https://k72.ca/uploads/blog/blogImg/50ff59cc0550df5b36543807a58db98c52e01a22274a317eafbfa5266941579b-640x290.png"
                    fill
                    className="object-cover"
                  />
                </div>
                <h2 className="text-8xl uppercase text-center pt-4 whitespace-nowrap ">
                  Lire les articles
                </h2>
                <div className="relative w-60 h-22 rounded-full overflow-hidden">
                  <Image
                    alt="image1"
                    src="https://k72.ca/uploads/blog/blogImg/ier.com-16107673482102220.gif"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default NavbarLadder;
