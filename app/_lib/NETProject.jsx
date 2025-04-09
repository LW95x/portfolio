import Image from "next/image";
import RevealY from "./RevealY";
import { useEffect, useRef, useState } from "react";
import { FaDeaf, FaGithub, FaLaptopCode } from "react-icons/fa";
import { GiStack, GiTiedScroll } from "react-icons/gi";
import Link from "next/link";
import { CgWebsite } from "react-icons/cg";

export default function ProjectTwo() {

  return (
    <div className="grid grid-cols-2 w-full h-full p-4 gap-x-0">
      <RevealY>
        <div className="container-card-two border border-zinc-900 opacity-75">
          <div className="flex flex-row items-center mb-2">
            <GiStack size={20} className="mr-2"/> 
            <p>C#, ASP.NET Core Web API, Entity Framework Core, LINQ, SQL Server, Docker, GitHub Actions, Azure, xUnit, Moq</p>
          </div>
          <div className="flex flex-row items-center mt-1 mb-2">
            <FaGithub size={20} className="mr-2"/>
            <Link href="https://github.com/LW95x/marketplace_backend" target="_blank">
              <p className="hover:underline">View the code</p>
            </Link>
          </div>
          <div className="flex flex-row items-center mt-1 mb-2">
            <CgWebsite size={20} className="mr-2"/>
            <Link href="https://u2umarketplace-api.azurewebsites.net/" target="_blank">
              <p className="hover:underline">Live version</p>
            </Link>
          </div>
          <h2 className="container-title">User-to-User Marketplace API</h2>    
          <p className="px-20">
            I designed this comprehensive <b>ASP.NET Core Web API</b> to simulate a user-to-user marketplace like eBay, where users can seamlessly buy and sell products. This project was built to handle complex entity interactions, including many-to-many relationships and cascading dependencies, providing me with a deeper understanding of interconnected database structures.
            <br/><br/>
            This API adheres strongly to SOLID principles, and incorporates many industry-standard design patterns to guarantee a production-grade architecture. It follows the Controller-Service-Repository pattern to enforce Separation of Concerns, with repositories abstracting data access, services encapsulating all business logic, and controllers managing API endpoints. 
            <br/><br/>
            By implementing these architectural best practices, this API is designed to be scalable and maintainable, with over 130 unit tests ensuring a high level of reliability. API Security is enforced through JWT Authentication, while Docker containerisation and an automated GitHub Actions CI/CD pipeline ensure a streamlined deployment process to an Azure-hosted App Service and SQL Server database.
          </p>
        </div>
      </RevealY>

      <RevealY>
        <div className="flex justify-center items-center">
          <div className="border-2 border-zinc-700 rounded mb-5">
            <Image
              src="/netswagger.png"
              alt="Treasure Hunt API"
              width={720}
              height={400}
              className="object-contain opacity-80"
            />
          </div>
        </div>
      </RevealY>
    </div>
  );
}
