import Image from "next/image";
import RevealY from "./RevealY";
import { useEffect, useRef, useState } from "react";
import { FaDeaf, FaGithub, FaLaptopCode } from "react-icons/fa";
import { GiStack, GiTiedScroll } from "react-icons/gi";
import Link from "next/link";
import { CgWebsite } from "react-icons/cg";
import { IBM_Plex_Sans } from "next/font/google";

const ibm = IBM_Plex_Sans({
  subsets: [ "latin" ],
  weight: "700",
})

export default function ProjectTwo() {

  return (
    <div className="grid grid-cols-2 w-full h-full p-4 gap-x-0">
      <RevealY>
        <div className="container-card-two border border-zinc-900 opacity-90">
          <div className="flex flex-row items-center mt-1 mb-2">
            <FaGithub size={20} className="mr-2" />
            <Link href="https://github.com/LW95x/club-connect-be/" target="_blank">
            <p className="text-center items-center justify-center hover:underline">View the backend code</p></Link>
          </div>
          <div className="flex flex-row items-center mt-1 mb-2">
            <CgWebsite size={20} className="mr-2" />
            <Link href="https://the-football-pyramid-backend.onrender.com/api/" target="_blank">
            <p className="text-center items-center justify-center hover:underline">Live version </p></Link>
          </div>
          <hr className="w-1/3"/>
            <div className="flex flex-row items-center mt-2 mb-1">
            <FaGithub size={20} className="mr-2 mt-1"/>
            <Link href="https://github.com/LW95x/club-connect-fe/" target="_blank">
            <p className="text-center items-center justify-center hover:underline">View the frontend code</p></Link>
            </div>
            <div className="flex flex-row items-center mt-1 mb-2">
            <CgWebsite size={20} className="mr-2"/>
            <Link href="https://clubconnects.netlify.app/" target="_blank">
            <p className="text-center items-center justify-center hover:underline">Live version </p></Link>
            </div>
            <h2 className={`${ibm.className} container-title`}>ClubConnect</h2>
          <p className="px-20 text-justify">
          A full-stack <span className={`${ibm.className}`}>TypeScript</span> events management platform designed to mediate the buying and selling of tickets to sporting events. 
          Built using <span className={`${ibm.className}`}>Node.js</span>, <span className={`${ibm.className}`}>Express</span>, and a <span className={`${ibm.className}`}>PostgreSQL</span> database for the backend, combined with a responsive <span className={`${ibm.className}`}>React</span> frontend developed with <span className={`${ibm.className}`}>Next.js</span>, <span className={`${ibm.className}`}>Tailwind</span> and <span className={`${ibm.className}`}>Framer Motion</span>.
          </p>
          <br />
          <ul className="px-20 list-disc list-inside space-y-4" style={{ listStyleType: 'square' }}>
          <li>
            <span className={`${ibm.className}`}>Test-Driven Development (TDD)</span> led approach, using <span className={`${ibm.className}`}>Jest</span> and <span className={`${ibm.className}`}>Supertest</span>, with over 90 tests in total
            </li>
          <li>
            Styled with <span className={`${ibm.className}`}>Tailwind</span> to match a curated <span className={`${ibm.className}`}>Figma</span> design, enhanced with <span className={`${ibm.className}`}>Framer Motion</span>
            </li>
            <li>
            Secured password encryption with <span className={`${ibm.className}`}>BCrypt</span>, and applied strict validation of schemas using <span className={`${ibm.className}`}>Joi</span>
            </li>
            <li>
            <span className={`${ibm.className}`}>Stripe Payment API</span> integrated to securely facilitate the event ordering process
            </li>
            <li>
            <span className={`${ibm.className}`}>Google Calendar API</span> implemented to enable users to seamlessly add events to their calendars
            </li>
          </ul>
        </div>
        </RevealY>

      <RevealY>
        <div className="flex justify-center items-center">
          <Image
            src="/ccts.png"
            alt="Treasure Hunt API"
            width={350}
            height={400}
            className="object-contain opacity-80 rounded-lg"
          />
        </div>

        <div className="flex justify-center items-center mt-3">
          <Image
            src="/ccfrontend.png"
            alt="Treasure Hunt API"
            width={380}
            height={400}
            className="object-contain opacity-90 rounded-lg"
          />
        </div>
      </RevealY>
    </div>
  );
}
