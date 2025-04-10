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
    <div className="grid grid-cols-2 w-full h-full p-4 gap-x-0">
      
      <RevealY>
        <div className="container-card-three border border-zinc-900 opacity-75">
          <div className="flex flex-row items-center mb-2">
            <GiStack size={20} className="mr-2" />
            <p>
              C#, ASP.NET Core Web API, Entity Framework Core, LINQ, SQL Server,
              Docker, GitHub Actions, Azure, xUnit, Moq
            </p>
          </div>
          <div className="flex flex-row items-center mt-1 mb-2">
            <FaGithub size={20} className="mr-2" />
            <Link
              href="https://github.com/LW95x/marketplace_backend"
              target="_blank"
            >
              <p className="hover:underline">View the code</p>
            </Link>
          </div>
          <div className="flex flex-row items-center mt-1 mb-2">
            <CgWebsite size={20} className="mr-2" />
            <Link
              href="https://u2umarketplace-api.azurewebsites.net/"
              target="_blank"
            >
              <p className="hover:underline">Live version</p>
            </Link>
          </div>
          <h2 className="container-title">ClubConnect Backend</h2>
          <p className="px-20">
            I designed this comprehensive <b>ASP.NET Core Web API</b> to
            simulate a user-to-user marketplace like eBay, where users can
            seamlessly buy and sell products. This project was built to handle
            complex entity interactions, including many-to-many relationships
            and cascading dependencies, providing me with a deeper understanding
            of interconnected database structures.
          </p>
        </div>

        <div className="container-card-three border border-zinc-900 opacity-75 mt-4">
          <div className="flex flex-row items-center">
            <GiStack size={20} className="mr-2" />
            <p>
              C#, ASP.NET Core Web API, Entity Framework Core, LINQ, SQL Server,
              Docker, GitHub Actions, Azure, xUnit, Moq
            </p>
          </div>
          <div className="flex flex-row items-center mt-1 mb-2">
            <FaGithub size={20} className="mr-2" />
            <Link
              href="https://github.com/LW95x/marketplace_backend"
              target="_blank"
            >
              <p className="hover:underline">View the code</p>
            </Link>
          </div>
          <div className="flex flex-row items-center mt-1 mb-2">
            <CgWebsite size={20} className="mr-2" />
            <Link
              href="https://u2umarketplace-api.azurewebsites.net/"
              target="_blank"
            >
              <p className="hover:underline">Live version</p>
            </Link>
          </div>
          <h2 className="container-title">ClubConnect Frontend</h2>
          <p className="px-20">
            I designed this comprehensive <b>ASP.NET Core Web API</b> to
            simulate a user-to-user marketplace like eBay, where users can
            seamlessly buy and sell products. This project was built to handle
            complex entity interactions, including many-to-many relationships
            and cascading dependencies, providing me with a deeper understanding
            of interconnected database structures.
          </p>
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

        <div className="flex justify-center items-center mt-1">
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
