"use client";
import { RiMenuFill } from "react-icons/ri";
import { BsFillArrowDownSquareFill } from "react-icons/bs";
import { Rampart_One, Kanit } from "next/font/google";
import Image from "next/image";
import { motion, useScroll } from "framer-motion";
import { useState, useEffect } from "react";
import RevealY from "./_lib/RevealY";
import RevealXRight from "./_lib/RevealXRight";
import RevealXLeft from "./_lib/RevealXLeft";
import Link from "next/link";
import RevealMenu from "./_lib/RevealMenu";
import { TfiEmail } from "react-icons/tfi";
import { SlArrowDown } from "react-icons/sl";
import NavCard from "./_lib/NavCard";
import ProjectOne from "./_lib/ProjectOne";
import ProjectTwo from "./_lib/ProjectTwo";

const rampartOne = Rampart_One({
  subsets: ["latin"],
  weight: "400",
});

const kanit = Kanit({
  subsets: ["latin"],
  weight: "300",
});

const imageStyle = {
  borderRadius: "10%",
  overflow: "hidden",
};

const returnToTop = (e) => {
  e.preventDefault();
  const scrollContainer = document.getElementById("scrollContainer");
  if (scrollContainer) {
    scrollContainer.scrollTo({ top: 0, behavior: "smooth" });
  }
};

export default function Home() {
  const [menu, setMenu] = useState(false);

  const toggleMenu = () => {
    setMenu(!menu);
  };

  return (
    <>
      <div
        id="scrollContainer"
        className="overflow-y-scroll h-screen snap-y snap-mandatory scroll-smooth hide-scrollbar"
      >
        <div className="w-full fixed top-0 text-center grid grid-cols-custom grid-rows-1 h-16 bg-zinc-900">
          <button onClick={returnToTop}>
            <div id="logo-parent" className="flex items-center ml-5">
              <h1
                id="logo"
                className={`${rampartOne.className} text-4xl text-center hover:bg-zinc-800`}
              >
                LW
              </h1>
            </div>
          </button>
          <div className="grid grid-cols-4 grid-rows-1 gap-0">
            {menu ? (
              <>
                <Link
                  href="#home"
                  onClick={returnToTop}
                  className="flex text-center justify-center items-center hover:bg-zinc-800 rounded transition-all duration-300 "
                >
                  <RevealMenu>Home</RevealMenu>
                </Link>
                <Link
                  href="#page2"
                  className="flex text-center justify-center items-center hover:bg-zinc-800 rounded transition-all duration-300"
                >
                  <RevealMenu>About Me</RevealMenu>
                </Link>
                <Link
                  href="#page3"
                  className="flex text-center justify-center items-center hover:bg-zinc-800 rounded transition-all duration-300"
                >
                  <RevealMenu>Projects</RevealMenu>
                </Link>
                <Link
                  href="#page5"
                  className="flex text-center justify-center items-center hover:bg-zinc-800 rounded transition-all duration-300"
                >
                  <RevealMenu>Contact</RevealMenu>
                </Link>
              </>
            ) : null}
          </div>
          <div className="flex items-center justify-end p-3">
            <button onClick={toggleMenu}>
              <RiMenuFill
                size={40}
                className="hover:bg-zinc-800 rounded transition-all duration-300"
              />
            </button>
          </div>
        </div>
        <div className="snap-start h-screen pt-20 grid grid-cols-1 grid-rows-3 gap-1 ">
          <div
            className={`${kanit.className}  flex items-end text-center text-5xl justify-center`}
          >
            <RevealY>
              <p>Hi, I'm Liam! Welcome to my personal website.</p>
            </RevealY>
          </div>
          <div className="flex mb-5 items-center text-center justify-center text-lg">
            <RevealY>
              <p>
                I'm an aspiring developer, and I've created this website to
                showcase my constantly evolving portfolio, and to provide you
                with an insight into me as a person.
              </p>
            </RevealY>
          </div>
          <div className="grid grid-cols-1">
            <div>
            </div>
            <div>
            </div>
          <div className="flex justify-center items-center">
            <Link href="#page2" className="flex items-center justify-center">
              <BsFillArrowDownSquareFill
                size={50}
                className="p-1 flex items-center justify-center icon-bounce"
              />
            </Link>
          </div>
          </div>
        </div>
        <div
          id="page2"
          className="snap-start h-screen pt-20 grid grid-cols-1 grid-rows-[0.5fr_repeat(2,_1fr)] gap-0"
        >
          <div>
          <NavCard/>
          </div>
          <div className="flex justify-center mt-5">
            <Link href="#page3" className="flex items-center justify-start">
              <BsFillArrowDownSquareFill
                size={40}
                className="p-1"
              />
            </Link>
          </div>
        </div>
        <div
          id="page3"
          className="snap-start h-screen pt-20 grid grid-cols-1 grid-rows-[0.5fr_repeat(2,_1fr)] gap-0"
        >
          <div>
          <ProjectOne />
          </div>
          <div className="flex justify-center mt-5">
            <Link href="#page4" className="flex items-center justify-start">
              <BsFillArrowDownSquareFill
                size={40}
                className="p-1"
              />
            </Link>
          </div>
        </div>
        <div
          id="page4"
          className="snap-start h-screen pt-20 grid grid-cols-1 grid-rows-[0.5fr_repeat(2,_1fr)] gap-0"
        >
          <div>
          <ProjectTwo />
          </div>
          <div className="flex justify-center mt-5">
            <Link href="#page5" className="flex items-center justify-start">
              <BsFillArrowDownSquareFill
                size={40}
                className="p-1"
              />
            </Link>
          </div>
        </div>
        <div
          id="page5"
          className="snap-start h-screen pt-20 grid grid-cols-1 grid-rows-3 gap-1 "
        >
          <div
            className='flex items-end text-center text-2xl justify-center'
          >
            <RevealY>
              <p>
                Thank you for taking the time to check out my website! If you'd
                like to get in touch:
              </p>
            </RevealY>
          </div>
          <div className="grid grid-cols-9">
            <div></div>
            <div></div>
            <div></div>

            <div id="contact1" className="flex items-center justify-center">
              <RevealXLeft>
                <Link
                  href="https://www.linkedin.com/in/liam-woodall/"
                  target="_blank"
                >
                  <Image
                    src="/LinkedIn-Logo-2019.png"
                    width={200}
                    height={200}
                    alt="linkedin"
                    className="object-contain"
                  />
                </Link>
              </RevealXLeft>
            </div>
            <div
              id="contact2"
              className="flex items-center justify-center"
            >
              <RevealY>
                <Link href="mailto:liam.woodall@live.co.uk">
                  <TfiEmail
                    id="email"
                    size={150}
                    alt="email"
                    className="email-icon"
                  />
                </Link>
              </RevealY>
            </div>
            <div id="contact3" className="flex items-center justify-center">
              <RevealXRight>
                <Link href="https://github.com/LW95x/" target="_blank">
                  <Image
                    src="/GitHub_Logo.png"
                    width={200}
                    height={200}
                    className="object-contain"
                    alt="github"
                  />
                </Link>
              </RevealXRight>
            </div>
          </div>
          
            </div>
        </div>
    </>
  );
}
