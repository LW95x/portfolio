"use client";
import { RiMenuFill } from "react-icons/ri";
import { BsFillArrowDownSquareFill } from "react-icons/bs";
import { Rampart_One, Kanit, Audiowide, Michroma } from "next/font/google";
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
import ProjectOne from "./_lib/NCOne";
import ProjectTwo from "./_lib/NCTwo";
import NETProject from "./_lib/NETProject";
import ReactGA from "react-ga4";
import TSProject from "./_lib/TSProject";

const rampartOne = Rampart_One({
  subsets: ["latin"],
  weight: "400",
});

const kanit = Kanit({
  subsets: ["latin"],
  weight: "300",
});

const audioWide = Audiowide({
  subsets: ["latin"],
  weight: "400"
})

const michroma = Michroma({
  subsets: [ "latin" ],
  weight: "400",
})

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
  const [menu, setMenu] = useState(true);

  const toggleMenu = () => {
    setMenu(!menu);
  };

  useEffect(() => {
    if (window.location.hash) {
      window.history.replaceState(null, "", window.location.pathname);
    }
  }, []);

  useEffect( () => {
    ReactGA.initialize("G-7J731CXS60");
  }, []);



  return (
    <>
    <link rel="icon" href="/favicon.ico" sizes="any" />
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
          <div className="grid grid-cols-5 grid-rows-1 gap-0">
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
                  <RevealMenu>C# & .NET Project</RevealMenu>
                </Link>
                <Link
                  href="#page3"
                  className="flex text-center justify-center items-center hover:bg-zinc-800 rounded transition-all duration-300"
                >
                  <RevealMenu>TypeScript Project</RevealMenu>
                </Link>
                <Link
                  href="#page4"
                  className="flex text-center justify-center items-center hover:bg-zinc-800 rounded transition-all duration-300"
                >
                  <RevealMenu>Northcoders Projects</RevealMenu>
                </Link>
                <Link
                  href="#page6"
                  className="flex text-center justify-center items-center hover:bg-zinc-800 rounded transition-all duration-300"
                >
                  <RevealMenu>Contact</RevealMenu>
                </Link>
              </>
            ) : null}
          </div>
          <div className="flex items-center justify-end p-3 mr-5 ">
            <button onClick={toggleMenu}>
              <RiMenuFill
                size={30}
                className="hover:bg-zinc-800 rounded transition-all duration-300"
              />
            </button>
          </div>
        </div>
        <div className="snap-start h-screen grid grid-cols-1 grid-rows-2 gap-1">
          <div
            className={`${kanit.className}  flex items-end text-center text-5xl justify-center`}
          >
            <RevealY>
             <p className={`${michroma.className} text-8xl opacity-75`}>LIAM WOODALL</p>
             <p className={`${michroma.className} text-3xl mt-10 opacity-75`}>SOFTWARE ENGINEER</p>
            </RevealY>
          </div>
          <div className="flex items-center justify-center">
            <RevealY>
              <div className="flex flex-row gap-4">
              <Image
                              src="/Logo_C_sharp.png"
                              alt="C# Logo"
                              width={50}
                              height={50}
                              className="opacity-100 transition-transform duration-200 hover:scale-110"
                            />
            <Image
                              src="/NET_Core_Logo.png"
                              alt=".NET Core Logo"
                              width={50}
                              height={50}
                              className="opacity-100 transition-transform duration-200 hover:scale-110"
                            />
                            <Image
                              src="/Typescript_logo_2020.png"
                              alt="TypeScript Logo"
                              width={50}
                              height={50}
                              className="opacity-100 transition-transform duration-200 hover:scale-110"
                            />
                            <Image
                              src="/JavaScript-logo.png"
                              alt="JavaScript Logo"
                              width={50}
                              height={50}
                              className="opacity-100 transition-transform duration-200 hover:scale-110"
                            />
                            </div>
                            <div className="flex flex-row gap-4 mt-5">
            <Image
                              src="/Microsoft_Azure.png"
                              alt=".NET Core Logo"
                              width={50}
                              height={50}
                              className="opacity-100 transition-transform duration-200 hover:scale-110"
                            />
                            <Image
                              src="nextjs.png"
                              alt="Next.js Logo"
                              width={50}
                              height={50}
                              className="opacity-100 transition-transform duration-200 hover:scale-110"
                            />
                            <Image
                              src="node1.png"
                              alt="Node.js Logo"
                              width={50}
                              height={50}
                              className="opacity-100 transition-transform duration-200 hover:scale-110"
                            />
                            <Image
                              src="/react_icon.png"
                              alt="React Logo"
                              width={50}
                              height={50}
                              className="opacity-100 transition-transform duration-200 hover:scale-110"
                            />
                            </div>
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
                className="p-1 flex items-center justify-center icon-bounce mb-1"
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
          <NETProject/>
          </div>
          <div className="flex justify-center mt-4">
            <Link href="#page3" className="flex items-center justify-start">
              <BsFillArrowDownSquareFill
                size={40}
                className="p-1 arrow"
              />
            </Link>
          </div>
        </div>
        <div
          id="page3"
          className="snap-start h-screen pt-20 grid grid-cols-1 grid-rows-[0.5fr_repeat(2,_1fr)] gap-0"
        >
          <div>
          <TSProject />
          </div>
          <div className="flex justify-center mt-0.5">
            <Link href="#page4" className="flex items-center justify-start">
              <BsFillArrowDownSquareFill
                size={40}
                className="p-1 arrow"
              />
            </Link>
          </div>
        </div>
        <div
          id="page4"
          className="snap-start h-screen pt-20 grid grid-cols-1 grid-rows-[0.5fr_repeat(2,_1fr)] gap-0"
        >
          <div>
          <ProjectOne />
          </div>
          <div className="flex justify-center mt-0.5">
            <Link href="#page5" className="flex items-center justify-start">
              <BsFillArrowDownSquareFill
                size={40}
                className="p-1 arrow"
              />
            </Link>
          </div>
        </div>
        <div
          id="page5"
          className="snap-start h-screen pt-20 grid grid-cols-1 grid-rows-[0.5fr_repeat(2,_1fr)] gap-0"
        >
          <div>
          <ProjectTwo />
          </div>
          <div className="flex justify-center mt-0.5">
            <Link href="#page6" className="flex items-center justify-start">
              <BsFillArrowDownSquareFill
                size={40}
                className="p-1 arrow"
              />
            </Link>
          </div>
        </div>
        <div
          id="page6"
          className="snap-start h-screen pt-20 grid grid-cols-1 grid-rows-3 gap-1 "
        >
          <div
            className='flex items-end text-center text-3xl justify-center'
          >
            <RevealY>
              <p>
                Thank you for taking the time to check out my portfolio. If you&apos;d
                like to keep in touch:
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
                  <div className="relative group p-2 rounded-lg transition-all duration-300 hover:bg-gray-800">
                  <Image
                    src="/LinkedIn-Logo-2019.png"
                    width={200}
                    height={200}
                    alt="linkedin"
                    className="object-contain"
                  />
                  </div>
                </Link>
              </RevealXLeft>
            </div>
            <div
              id="contact2"
              className="flex items-center justify-center"
            >
              <RevealY>
                <Link href="mailto:liam.woodall@live.co.uk">
                <div className="relative group p-4 rounded-lg transition-all duration-300 hover:bg-gray-800">
                  <TfiEmail
                    id="email"
                    size={150}
                    alt="email"
                    className="email-icon"
                  />
                  </div>
                </Link>
              </RevealY>
            </div>
            <div id="contact3" className="flex items-center justify-center">
              <RevealXRight>
                <Link href="https://github.com/LW95x/" target="_blank">
                <div className="relative group p-2 rounded-lg transition-all duration-300 hover:bg-gray-800">
                  <Image
                    src="/GitHub_Logo.png"
                    width={200}
                    height={200}
                    className="object-contain"
                    alt="github"
                  />
                  </div>
                </Link>
              </RevealXRight>
            </div>
          </div>
          
            </div>
        </div>
    </>
  );
}
