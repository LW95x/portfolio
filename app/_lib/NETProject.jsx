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
          <div className="flex flex-row items-center mt-1 mb-1">
            <FaGithub size={20} className="mr-2" />
            <Link
              href="https://github.com/LW95x/marketplace_backend"
              target="_blank"
            >
              <p className="hover:underline">View the code</p>
            </Link>
          </div>
          <div className="flex flex-row items-center mt-1 mb-4">
            <CgWebsite size={20} className="mr-2" />
            <Link
              href="https://u2umarketplace-api.azurewebsites.net/"
              target="_blank"
            >
              <p className="hover:underline">Live version</p>
            </Link>
          </div>
          <h2 className={`${ibm.className} container-title`}>U2U Marketplace</h2>
          <p className="px-20 text-justify">
            A peer-to-peer marketplace API built using <span className={`${ibm.className}`}>C#</span>, <span className={`${ibm.className}`}>ASP.NET Core Web API</span>, <span className={`${ibm.className}`}>Entity Framework Core</span>, <span className={`${ibm.className}`}>LINQ</span>,
            and <span className={`${ibm.className}`}>Azure SQL Server</span> 
            . 
            
            The project aims
            to replicate a service like eBay, where users can both buy and sell
            products in a secure and efficient way.
          </p>
          <br />
          <ul className="px-4 md:px-20 list-disc list-inside space-y-4" style={{ listStyleType: 'square' }}>
            <li>
              Adhered to <span className={`${ibm.className}`}>SOLID</span> principles, utilising the <span className={`${ibm.className}`}>Controller-Service-Repository</span> pattern, dependency injection and
              interfaces to ensure separation of concerns is maintained
              throughout the application
            </li>
            <li>
              Achieved 100% test coverage with an extensive <span className={`${ibm.className}`}>xUnit</span> testing suite
              comprising over 130 tests
            </li>
            <li>
              Containerised the application using <span className={`${ibm.className}`}>Docker</span>, and deployed to an <span className={`${ibm.className}`}>Azure App Service</span>
            </li>
            <li>
              Automated <span className={`${ibm.className}`}>CI/CD</span> pipeline using <span className={`${ibm.className}`}>GitHub Actions</span> for testing, building, and deployment phases
            </li>
          </ul>
        </div>
      </RevealY>

      <RevealY>
        <div className="flex justify-center items-center">
          <Image
            src="/erd.png"
            alt="Treasure Hunt API"
            width={600}
            height={400}
            className="object-contain opacity-80 rounded-lg"
          />
        </div>

        <div className="flex justify-center items-center mt-3">
          <Image
            src="/solexplorer.png"
            alt="Treasure Hunt API"
            width={600}
            height={400}
            className="object-contain opacity-90 rounded-lg"
          />
        </div>
      </RevealY>
    </div>
  );
}
