import Image from "next/image";
import RevealY from "./RevealY";
import { useEffect, useRef, useState } from "react";
import { FaDeaf, FaGithub, FaLaptopCode } from "react-icons/fa";
import { GiStack, GiTiedScroll } from "react-icons/gi";
import Link from "next/link";
import { CgWebsite } from "react-icons/cg";

export default function ProjectTwo() {
  const [optionOne, setOptionOne] = useState(false);
  const [optionTwo, setOptionTwo] = useState(true);
  const [optionThree, setOptionThree] = useState(false);


  return (
    <>
      <RevealY>
        <div className="flex justify-center items-center relative pt-24">
          <div className="border-2 border-zinc-700 rounded flex flex-row absolute mb-5">
            <button
              onClick={() => {
                setOptionOne(false);
                setOptionThree(false);
                setOptionTwo(true);
              }}
            >
              <div className="relative">
                <Image
                  src="/backend-proj2.png"
                  alt="Treasure Hunt API"
                  width={520}
                  height={200}
                  className="object-contain opacity-50"
                  
                />
                <div className="absolute top-0 left-0 right-0 bottom-0 flex items-center justify-center">
                  <p className="text-white text-sm bg-zinc-900 bg-opacity-40 p-2 rounded hover:bg-opacity-90">
                     Treasure Hunt Backend
                  </p>
                </div>
              </div>
            </button>
            <button
              onClick={() => {
                setOptionOne(false);
                setOptionTwo(false);
                setOptionThree(true);
              }}
            >
              <div className="relative">
                <Image
                  src="/frontend-proj2.png"
                  width={450}
                  height={200}
                  alt="Treasure Hunt Map"
                  className="object-contain opacity-50 ml-0.5"
                  
                />
                <div className="absolute top-0 left-0 right-0 bottom-0 flex items-center justify-center">
                  <p className="text-white text-sm bg-zinc-900 bg-opacity-40 p-2 rounded hover:bg-opacity-90">
                    Treasure Hunt Frontend
                  </p>
                </div>
              </div>
            </button>
          </div>
        </div>
      </RevealY>
      <RevealY>
      <div className="container-card row-span-2 border border-zinc-900">
{optionTwo ? <RevealY>
            <div className="flex flex-row items-center">
              <GiStack size={20} className="mr-2"/> 
            <p className="text-center items-center justify-center">Python, Django, Django REST, PSQL, Swagger, Render </p>
            </div>
            <div className="flex flex-row items-center mt-1">
            <FaGithub size={20} className="mr-2 mt-1"/>
            <Link href="https://github.com/LW95x/treasure-hunt-backend-host" target="_blank">
            <p className="text-center items-center justify-center hover:underline">View the code</p></Link>
            </div>
            <div className="flex flex-row items-center mt-1">
            <CgWebsite size={20} className="mr-2"/>
            <Link href="https://treasure-hunt-backend-test.onrender.com/" target="_blank">
            <p className="text-center items-center justify-center hover:underline">Live version </p></Link>
            </div>
            <h2 className="container-title">Treasure Hunt Backend</h2>
            
              <p className="text-center">
              Text here1
              </p></RevealY> : null}
          {optionThree ? <RevealY>
            <div className="flex flex-row items-center">
              <GiStack size={20} className="mr-2"/> 
            <p className="text-center items-center justify-center">Next.js, React, NPM, Google Maps API, Netlify, TailwindCSS, Framer Motion </p>
            </div>
            <div className="flex flex-row items-center mt-1">
            <FaGithub size={20} className="mr-2 mt-1"/>
            <Link href="https://github.com/ELR143/treasure-hunt-frontend" target="_blank">
            <p className="text-center items-center justify-center hover:underline">View the code</p></Link>
            </div>
            <div className="flex flex-row items-center mt-1">
            <CgWebsite size={20} className="mr-2"/>
            <Link href="https://treasure-hunters.netlify.app/" target="_blank">
            <p className="text-center items-center justify-center hover:underline">Live version </p></Link>
            </div>
            <h2 className="container-title">Treasure Hunt Frontend</h2>
              <p className="text-justify">
              Text here2
              </p>
          </RevealY> : null}
        </div>
      </RevealY>
    </>
  );
}
