import Image from "next/image";
import RevealY from "./RevealY";
import { useEffect, useRef, useState } from "react";
import { FaDeaf, FaLaptopCode, FaGithub } from "react-icons/fa";
import { GiTiedScroll, GiStack } from "react-icons/gi";
import { CgWebsite } from "react-icons/cg";
import Link from "next/link";
import { IBM_Plex_Sans } from "next/font/google";

const ibm = IBM_Plex_Sans({
  subsets: [ "latin" ],
  weight: "700",
})

export default function ProjectOne() {

  return (
    <div className="project-grid grid grid-cols-2 w-full h-full p-4 gap-x-0">
      <RevealY>
        <div className="container-card-two border border-zinc-900 opacity-90">
          <div className="flex flex-row items-center mt-1 mb-1">
            <FaGithub size={20} className="mr-2" />
            <Link href="https://github.com/LW95x/be-nc-news" target="_blank">
            <p className="text-center items-center justify-center hover:underline">View the backend code</p></Link>
          </div>
          <div className="flex flex-row items-center mt-1 mb-2">
            <CgWebsite size={20} className="mr-2" />
            <Link href="https://be-nc-news-sfsv.onrender.com/api" target="_blank">
            <p className="text-center items-center justify-center hover:underline">Live version </p></Link>
          </div>
          <hr className="w-1/3"/>
            <div className="flex flex-row items-center mt-2 mb-1">
            <FaGithub size={20} className="mr-2 mt-1"/>
            <Link href="https://github.com/LW95x/nc-news" target="_blank">
            <p className="text-center items-center justify-center hover:underline">View the frontend code</p></Link>
            </div>
            <div className="flex flex-row items-center mt-1">
            <CgWebsite size={20} className="mr-2"/>
            <Link href="https://nc-news-project-fe.netlify.app/" target="_blank">
            <p className="text-center items-center justify-center hover:underline">Live version </p></Link>
            </div>
          <h2 className={`${ibm.className} container-title`}>NC News</h2>
          <p className="px-20">
          A full stack news aggregation platform built with <span className={`${ibm.className}`}>JavaScript</span>, <span className={`${ibm.className}`}>Node.js</span>, <span className={`${ibm.className}`}>Express</span>, <span className={`${ibm.className}`}>React</span>, <span className={`${ibm.className}`}>Vite</span>, <span className={`${ibm.className}`}>Axios</span> and a <span className={`${ibm.className}`}>PostgreSQL</span> database. Designed to mimic a similar service such as Reddit, where users can post content, leave comments on existing posts, and upvote or downvote other users posts.
          </p>
          <br />
          <ul className="px-20 list-disc list-inside space-y-4" style={{ listStyleType: 'square' }}>
            <li>
            <span className={`${ibm.className}`}>Test Driven Development (TDD)</span> led approach, using <span className={`${ibm.className}`}>Jest</span> and <span className={`${ibm.className}`}>Supertest</span> to guarantee a robust API
            </li>
            <li>
            Styled with <span className={`${ibm.className}`}>Bootstrap</span>, producing a responsive design compatible for all device types
            </li>
            <li>
            Followed <span className={`${ibm.className}`}>RESTful API</span> design principles with resource-based routing and stateless interactions
            </li>
            <li>
            Implemented API using the <span className={`${ibm.className}`}>MVC</span> design pattern, producing a clean and maintainable codebase
            </li>
          </ul>
        </div>
        </RevealY>

      <RevealY>
        <div className="flex justify-center items-center">
          <Image
            src="/nc-news-be.png"
            alt="NC News API"
            width={400}
            height={400}
            className="object-contain opacity-90 rounded-lg project-image-5"
          />
        </div>

        <div className="flex justify-center items-center mt-3">
          <Image
            src="/nc-news-fe.png"
            alt="NC News Frontend"
            width={450}
            height={400}
            className="object-contain opacity-90 rounded-lg project-image-6"
          />
        </div>
      </RevealY>
    </div>
  );
}
