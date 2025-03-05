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
                  src="/netswagger.png"
                  alt="Treasure Hunt API"
                  width={520}
                  height={200}
                  className="object-contain opacity-50"
                  
                />
                <div className="absolute top-0 left-0 right-0 bottom-0 flex items-center justify-center">
                  <p className="text-white text-sm bg-zinc-900 bg-opacity-40 p-2 rounded hover:bg-opacity-90">
                     User-to-User Marketplace API
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
            <p className="text-center items-center justify-center">C#, ASP.NET Core Web API, Entity Framework Core, LINQ, SQL Server, Docker, GitHub Actions, Azure, xUnit, Moq</p>
            </div>
            <div className="flex flex-row items-center mt-1">
            <FaGithub size={20} className="mr-2 mt-1"/>
            <Link href="https://github.com/LW95x/marketplace_backend" target="_blank">
            <p className="text-center items-center justify-center hover:underline">View the code</p></Link>
            </div>
            <div className="flex flex-row items-center mt-1">
            <CgWebsite size={20} className="mr-2"/>
            <Link href="https://u2umarketplace-api.azurewebsites.net/" target="_blank">
            <p className="text-center items-center justify-center hover:underline">Live version </p></Link>
            </div>
            <h2 className="container-title">User-to-User Marketplace API</h2>    
              <p className="text-justify px-20">
              I designed this comprehensive ASP.NET Core Web API to simulate a user-to-user marketplace like eBay, where users can seamlessly buy and sell products. This project was built to handle complex entity interactions, including many-to-many relationships and cascading dependencies, providing me with a deeper understanding of interconnected database structures.
              <br/><br/>
This API adheres strongly to SOLID principles, and incorporates many industry-standard design patterns to guarantee a production-grade architecture. It follows the Controller-Service-Repository pattern to enforce Separation of Concerns, with repositories abstracting data access, services encapsulating all business logic, and controllers managing API endpoints. 
<br/><br/>
By implementing these architectural best practices, this API is designed to be scalable and maintainable, with over 130 unit tests ensuring a high level of reliability. API Security is enforced through JWT Authentication, while Docker containerisation and an automated GitHub Actions CI/CD pipeline ensure a streamlined deployment process to an Azure-hosted App Service and SQL Server database.
              </p></RevealY> : null}
        </div>
      </RevealY>
    </>
  );
}
