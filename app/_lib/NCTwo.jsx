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
                  className="object-contain opacity-50"
                  
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
      <div className="container-card row-span-2 border border-zinc-900 opacity-75">
{optionTwo ? <RevealY>
            <div className="flex flex-row items-center">
              <GiStack size={20} className="mr-2"/> 
            <p className="text-center items-center justify-center">Python, Django, Django REST, PSQL, Swagger</p>
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
            
              <p className="text-justify px-20">
              My second full stack application developed at Northcoders, Treasure Hunt, was a collaborative group project. We were formed into teams of six, and encouraged to challenge ourselves by using new languages and/or frameworks. As a team, we decided to create a Python backend, despite much of the group having limited experience in using Python. We split into groups of three for backend and frontend development. <br/><br/>My focus was mainly on the backend, setting out to learn how to implement a Python backend within a two-week timeframe. We decided to use Django and the Django REST frameworks, which provided a very efficient and flexible way for us to create a RESTful API for our Treasure Hunt frontend. Despite the initial challenge of working with Python, the functionality provided by these frameworks helped to reduce the burden significantly with the number of integrated features that really condensed and simplified our codebase.
              </p></RevealY> : null}
          {optionThree ? <RevealY>
            <div className="flex flex-row items-center">
              <GiStack size={20} className="mr-2"/> 
            <p className="text-center items-center justify-center">Next.js, React, Google Maps API, TailwindCSS, Framer Motion </p>
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
              <p className="text-justify px-20">
              The Treasure Hunt frontend allows users to search and collect treasures on a customised map using the Google Maps API. The app includes additional features, such as login authentication, a leaderboard, a friends page, and the ability to view your own treasure collection. We used the Next.js framework to build our frontend, while using Tailwind and Framer Motion to give the website a unique and appropriately pirate themed appearance. 
<br/><br/>My priority was ensuring that the backend seamlessly integrated with the frontend using the Fetch API. Some problems that we weren&apos;t able to identify in the initial implementation of the backend, was user password data being exposed by the API during POST and PATCH requests, and the lack of user authentication. This was addressed with password encryption for these requests, as well as a login endpoint to verify user authentication on the frontend.
              </p>
          </RevealY> : null}
        </div>
      </RevealY>
    </>
  );
}
