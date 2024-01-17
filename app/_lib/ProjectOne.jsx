import Image from "next/image";
import RevealY from "./RevealY";
import { useEffect, useRef, useState } from "react";
import { FaDeaf, FaLaptopCode, FaGithub } from "react-icons/fa";
import { GiTiedScroll, GiStack } from "react-icons/gi";
import { CgWebsite } from "react-icons/cg";
import Link from "next/link";


export default function ProjectOne() {
  const [optionOne, setOptionOne] = useState(false);
  const [optionTwo, setOptionTwo] = useState(true);
  const [optionThree, setOptionThree] = useState(false);

  return (
    <>
      <RevealY>
        <div className="flex justify-center items-center relative pt-24">
          <div className="border-4 border-zinc-700 rounded flex flex-row absolute mb-5">
            <button
              onClick={() => {
                setOptionOne(false);
                setOptionThree(false);
                setOptionTwo(true);
              }}
            >
              <div className="relative">
                <Image
                  src="/backend-proj1b.png"
                  alt="news-backend"
                  width={235}
                  height={200}
                  className="object-cover opacity-50 rounded"
                  
                />
                <div className="absolute top-0 left-0 right-0 bottom-0 flex items-center justify-center">
                  <p className="text-white text-sm bg-zinc-900 bg-opacity-40 p-2 rounded hover:bg-opacity-90">
                    NC News Backend
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
                  src="/frontend-proj1.png"
                  width={230}
                  height={0}
                  alt="frontend-news"
                  className="object-contain opacity-50"
                  
                />
                <div className="absolute top-0 left-0 right-0 bottom-0 flex items-center justify-center">
                  <p className="text-white text-sm bg-zinc-900 bg-opacity-40 p-2 rounded hover:bg-opacity-90">
                    NC News Frontend
                  </p>
                </div>
              </div>
            </button>
          </div>
        </div>
      </RevealY>
      <RevealY>
      <div className="container-card row-span-2 border-2 border-zinc-900">
          {optionTwo ? <RevealY>
            <div className="flex flex-row items-center">
              <GiStack size={20} className="mr-2"/> 
            <p className="text-center items-center justify-center">Node.js | </p>
            </div>
            <div className="flex flex-row items-center mt-1">
            <FaGithub size={20} className="mr-2 mt-1"/>
            <Link href="https://github.com/LW95x/be-nc-news" target="_blank">
            <p className="text-center items-center justify-center hover:underline">View the code</p></Link>
            </div>
            <div className="flex flex-row items-center mt-1">
            <CgWebsite size={20} className="mr-2"/>
            <Link href="https://be-nc-news-sfsv.onrender.com/api" target="_blank">
            <p className="text-center items-center justify-center hover:underline">Live version </p></Link>
            </div>
            <h2 className="container-title">NC News Backend</h2>
              <p className="text-center">
              Text here1
              </p></RevealY> : null}
          {optionThree ? <RevealY>
            <div className="flex flex-row items-center">
              <GiStack size={20} className="mr-2"/> 
            <p className="text-center items-center justify-center">React, Vite, Bootstrap, Axios </p>
            </div>
            <div className="flex flex-row items-center mt-1">
            <FaGithub size={20} className="mr-2 mt-1"/>
            <Link href="https://github.com/LW95x/nc-news" target="_blank">
            <p className="text-center items-center justify-center hover:underline">View the code</p></Link>
            </div>
            <div className="flex flex-row items-center mt-1">
            <CgWebsite size={20} className="mr-2"/>
            <Link href="https://nc-news-project-fe.netlify.app/" target="_blank">
            <p className="text-center items-center justify-center hover:underline">Live version </p></Link>
            </div>
            <h2 className="container-title">NC News Frontend</h2>
              <p className="text-justify">
              Text here2
              </p>
          </RevealY> : null}
        </div>
      </RevealY>
    </>
  );
}
