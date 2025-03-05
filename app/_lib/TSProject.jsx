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
        <div className="flex justify-center items-center relative pt-28 pb-2">
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
                  src="/ccts.png"
                  alt="Treasure Hunt API"
                  width={200}
                  height={200}
                  className="w-full max-w-[300px] h-[200px] object-cover opacity-50"
                  
                />
                <div className="absolute top-0 left-0 right-0 bottom-0 flex items-center justify-center">
                  <p className="text-white text-sm bg-zinc-900 bg-opacity-40 p-2 rounded hover:bg-opacity-90">
                     ClubConnect Backend
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
                  src="/ccfrontend.png"
                  width={400}
                  height={250}
                  alt="Treasure Hunt Map"
                  className="w-full max-w-[400px] max-h-[200px] object-cover opacity-50"
                  
                />
                <div className="absolute top-0 left-0 right-0 bottom-0 flex items-center justify-center">
                  <p className="text-white text-sm bg-zinc-900 bg-opacity-40 p-2 rounded hover:bg-opacity-90">
                    ClubConnect Frontend
                  </p>
                </div>
              </div>
            </button>
          </div>
        </div>
      </RevealY>
      <RevealY>
      <div className="container-card-two row-span-2 border border-zinc-900 opacity-75">
{optionTwo ? <RevealY>
            <div className="flex flex-row items-center">
              <GiStack size={20} className="mr-2"/> 
            <p className="text-center items-center justify-center">TypeScript, Node.js, Express.js, PostgreSQL, BCrypt, Joi, Jest, Supertest, Supabase</p>
            </div>
            <div className="flex flex-row items-center mt-1">
            <FaGithub size={20} className="mr-2 mt-1"/>
            <Link href="https://github.com/LW95x/club-connect-be/" target="_blank">
            <p className="text-center items-center justify-center hover:underline">View the code</p></Link>
            </div>
            <div className="flex flex-row items-center mt-1">
            <CgWebsite size={20} className="mr-2"/>
            <Link href="https://the-football-pyramid-backend.onrender.com/api/" target="_blank">
            <p className="text-center items-center justify-center hover:underline">Live version </p></Link>
            </div>
            <h2 className="container-title">ClubConnect Backend</h2>
              <p className="text-justify px-20">
              This API is designed for the buying and selling of tickets to matches (events), as a mediator to Non-League Football Clubs in the United Kingdom. The project utilises a PostgreSQL database, structured with four distinct tables: two for user-specific tables (fans and clubs), one for events (created by clubs), and one for orders (created by fans).
              <br/><br/>
This backend has been developed using Node.js and the Express framework, with TypeScript employed to ensure for type safety across all endpoints.
BCrypt has been integrated to securely hash user passwords, while Joi has been utilised to ensure all request properties are thoroughly validated through comprehensively designed schemas before reaching the database.
<br/><br/>
All API endpoints have been thoroughly tested using JEST and Supertest, adhering to Test Driven Development (TDD) principles throughout all phases of development


              </p></RevealY> : null}
          {optionThree ? <RevealY>
            <div className="flex flex-row items-center">
              <GiStack size={20} className="mr-2"/> 
            <p className="text-center items-center justify-center">TypeScript, Next.js, React, Stripe API, Google Calendar API, Tailwind, Bootstrap, Framer Motion, Lottie </p>
            </div>
            <div className="flex flex-row items-center mt-1">
            <FaGithub size={20} className="mr-2 mt-1"/>
            <Link href="https://github.com/LW95x/club-connect-fe/" target="_blank">
            <p className="text-center items-center justify-center hover:underline">View the code</p></Link>
            </div>
            <div className="flex flex-row items-center mt-1">
            <CgWebsite size={20} className="mr-2"/>
            <Link href="https://clubconnects.netlify.app/" target="_blank">
            <p className="text-center items-center justify-center hover:underline">Live version </p></Link>
            </div>
            <h2 className="container-title">ClubConnect Frontend</h2>
              <p className="text-justify px-20">
              This frontend has been designed in combination with the Club Connect API to enable users to buy and sell tickets to events (matches), as a mediator to Non-League Football Clubs in the United Kingdom. There are two types of users on ClubConnect - fans and clubs - with clubs able to create new events to advertise to prospective fans. Fans are able to view these advertised events, and subsequently order tickets to these events.
              <br/><br/>
The project has been developed using Next.js in conjunction with the React framework, with TypeScript employed to ensure for type safety across all pages and components.
The website has been styled using Bootstrap CSS, ensuring for a final design that is clean, fully responsive and adaptable to all devices. Lottie has been integrated to render loading animations for smoother transitions while navigating between pages.
<br/><br/>
Stripe Payment API is also embedded into the website, providing a secure and reliable payment platform for event transactions. Additionally, Google Calendar integration enables users to effortlessly add events to their calendars once an order is processed.
              </p>
          </RevealY> : null}
        </div>
      </RevealY>
    </>
  );
}
