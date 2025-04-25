import Image from "next/image";
import RevealY from "./RevealY";
import { useEffect, useRef, useState } from "react";
import { FaDeaf, FaGithub, FaLaptopCode } from "react-icons/fa";
import { GiStack, GiTiedScroll } from "react-icons/gi";
import Link from "next/link";
import { CgWebsite } from "react-icons/cg";
import { IBM_Plex_Sans } from "next/font/google";
import ImageLightbox from "./ImageLightbox";

const ibm = IBM_Plex_Sans({
  subsets: [ "latin" ],
  weight: "700",
})

export default function ProjectTwo() {

  return (
    <div className="project-grid grid grid-cols-2 w-full h-full p-4 gap-x-0">
      <RevealY>
        <div className="container-card-two border border-zinc-900 opacity-90">
          <div className="flex flex-row items-center mt-1 mb-1">
            <FaGithub size={20} className="mr-2" />
            <Link href="https://github.com/LW95x/treasure-hunt-backend-host" target="_blank">
            <p className="text-center items-center justify-center hover:underline">View the backend code</p></Link>
          </div>
          <div className="flex flex-row items-center mt-1 mb-2">
            <CgWebsite size={20} className="mr-2" />
            <Link href="https://treasure-hunt-backend-test.onrender.com/" target="_blank">
            <p className="text-center items-center justify-center hover:underline">Live version </p></Link>
          </div>
          <hr className="w-1/3"/>
            <div className="flex flex-row items-center mt-2 mb-1">
            <FaGithub size={20} className="mr-2 mt-1"/>
            <Link href="https://github.com/ELR143/treasure-hunt-frontend" target="_blank">
            <p className="text-center items-center justify-center hover:underline">View the frontend code</p></Link>
            </div>
            <div className="flex flex-row items-center mt-1">
            <CgWebsite size={20} className="mr-2"/>
            <Link href="https://treasure-hunters.netlify.app/" target="_blank">
            <p className="text-center items-center justify-center hover:underline">Live version </p></Link>
            </div>
          <h2 className={`${ibm.className} container-title`}>Treasure Hunt</h2>
          <p className="px-20">
          A full stack geocaching, location-based application built with <span className={`${ibm.className}`}>Python</span>, <span className={`${ibm.className}`}>Django REST</span>, <span className={`${ibm.className}`}>JavaScript</span>, <span className={`${ibm.className}`}>PostgreSQL</span>, <span className={`${ibm.className}`}>Next.js</span>, and <span className={`${ibm.className}`}>React</span>. The premise of the game is for users to find treasures in their area using GPS, akin to Pokemon Go or similar, to unlock treasures on a map by being within proximity of these treasures.
          </p>
          <br />
          <ul className="px-20 list-disc list-inside space-y-4" style={{ listStyleType: 'square' }}>
            <li>
            Comprehensively unit tested all API endpoints using <span className={`${ibm.className}`}>Django REST Framework</span> testing tools
            </li>
            <li>
            Styled with <span className={`${ibm.className}`}>Tailwind</span> and <span className={`${ibm.className}`}>Framer Motion</span>, creating a unique design curated specifically for a treasure map theme
            </li>
            <li>
            Integrated <span className={`${ibm.className}`}>Google Maps API</span> to provide real-time GPS updates, using a proximity-based system to enable users to unlock treasures based on their current location
            </li>
          </ul>
        </div>
        </RevealY>

      <RevealY>
        <div className="flex justify-center items-center mt-20">
          <ImageLightbox
            src="/backend-proj2.png"
            alt="NC News API"
            width={700}
            height={400}
            className="object-contain opacity-90 rounded-lg project-image-7"
          />
        </div>

        <div className="flex justify-center items-center mt-4">
          <ImageLightbox
            src="/frontend-proj2.png"
            alt="NC News Frontend"
            width={700}
            height={400}
            className="object-contain opacity-90 rounded-lg project-image-8"
          />
        </div>
      </RevealY>
    </div>
  );
}
