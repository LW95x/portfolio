"use client";
import { RiMenuFill } from "react-icons/ri";
import { BsFillArrowDownSquareFill } from "react-icons/bs";
import { Rampart_One, Kanit } from "next/font/google";
import Image from "next/image";
import { motion, useScroll } from "framer-motion";
import { useState, useEffect } from "react";
import RevealY from "./_lib/RevealY";
import RevealXRight from "./_lib/RevealXRight";
import RevealXLeft from "./_lib/RevealXLeft";
import Link from "next/link";
import RevealMenu from "./_lib/RevealMenu";
import { TfiEmail } from "react-icons/tfi";
import { SlArrowDown } from "react-icons/sl";
import NavCard from "./_lib/NavCard";

const rampartOne = Rampart_One({
  subsets: ["latin"],
  weight: "400",
});

const kanit = Kanit({
  subsets: ["latin"],
  weight: "300",
});

const imageStyle = {
  borderRadius: "10%",
  overflow: "hidden",
};

const returnToTop = (e) => {
  e.preventDefault();
  const scrollContainer = document.getElementById("scrollContainer");
  if (scrollContainer) {
    scrollContainer.scrollTo({ top: 0, behavior: "smooth" });
  }
};

export default function Home() {
  const [menu, setMenu] = useState(false);

  const toggleMenu = () => {
    setMenu(!menu);
  };

  return (
    <>
      <div
        id="scrollContainer"
        className="overflow-y-scroll h-screen snap-y snap-mandatory scroll-smooth hide-scrollbar"
      >
        <div className="w-full fixed top-0 text-center grid grid-cols-custom grid-rows-1 h-16 bg-zinc-900">
          <button onClick={returnToTop}>
            <div id="logo-parent" className="flex items-center ml-5">
              <h1
                id="logo"
                className={`${rampartOne.className} text-4xl text-center hover:bg-zinc-800`}
              >
                LW
              </h1>
            </div>
          </button>
          <div className="grid grid-cols-4 grid-rows-1 gap-0">
            {menu ? (
              <>
                <Link
                  href="#home"
                  onClick={returnToTop}
                  className="flex text-center justify-center items-center hover:bg-zinc-800 rounded transition-all duration-300 "
                >
                  <RevealMenu>Home</RevealMenu>
                </Link>
                <Link
                  href="#page2"
                  className="flex text-center justify-center items-center hover:bg-zinc-800 rounded transition-all duration-300"
                >
                  <RevealMenu>About Me</RevealMenu>
                </Link>
                <Link
                  href="#page3"
                  className="flex text-center justify-center items-center hover:bg-zinc-800 rounded transition-all duration-300"
                >
                  <RevealMenu>Projects</RevealMenu>
                </Link>
                <Link
                  href="#page5"
                  className="flex text-center justify-center items-center hover:bg-zinc-800 rounded transition-all duration-300"
                >
                  <RevealMenu>Contact</RevealMenu>
                </Link>
              </>
            ) : null}
          </div>
          <div className="flex items-center justify-end p-3">
            <button onClick={toggleMenu}>
              <RiMenuFill
                size={40}
                className="hover:bg-zinc-800 rounded transition-all duration-300"
              />
            </button>
          </div>
        </div>
        <div className="snap-start h-screen pt-20 grid grid-cols-1 grid-rows-3 gap-1 ">
          <div
            className={`${kanit.className}  flex items-end text-center text-3xl justify-center`}
          >
            <RevealY>
              <p>Hi, I'm Liam! Welcome to my personal website.</p>
            </RevealY>
          </div>
          <div className="flex mb-5 items-center text-center justify-center">
            <RevealY>
              <p>
                I'm an aspiring developer, and I've created this website to
                showcase my constantly evolving portfolio, and to provide you
                with an insight into me as a person.
              </p>
            </RevealY>
          </div>
          <div className="grid grid-cols-1">
            <div>
            </div>
            <div>
            </div>
          <div className="flex justify-center items-center">
            <Link href="#page2" className="flex items-center justify-center">
              <BsFillArrowDownSquareFill
                size={50}
                className="p-1 flex items-center justify-center icon-bounce"
              />
            </Link>
          </div>
          </div>
        </div>
        <div
          id="page2"
          className="snap-start h-screen pt-16 grid grid-cols-2 grid-rows-3 gap-1"
        >
          <div className="flex items-center justify-end">
            <RevealY>
            <Image
                    src="/ppic.jpg"
                    width={200}
                    height={200}
                    className="rounded-3xl p-5"
                    alt="author"
                  />
            </RevealY>
          </div>
          <div className="p-5 text-justify rounded">
            <RevealY>
              <header className="text-2xl">Growing up deaf</header>
              <p>
                I was born without ears, and became the youngest person in the
                U.K. to be implanted with a Bone Anchored Hearing Aid (BAHA),
                when I was 2. This meant that my speech was never impacted
                during my formative years, and the vast majority of people who
                meet me never realise that I'm actually deaf, until I tell them!
                <br />
                <br />
                Growing up with a hearing disability was challenging, as while I
                can hear very well, I often have to concentrate much more than
                your average person. This has never prevented me from achieving
                what I want to achieve, and has only ever strengthened my
                resolve and determination in life. As Stephen Hawking once said,
                "Be disabled physically, but not in spirit".
              </p>
            </RevealY>
          </div>
          <div className="pl-5 pb-5 pr-5 text-justify rounded">
            <RevealY>
            <header className="text-2xl">The University Experience</header>
              <p>
              I graduated from the University of Manchester in 2018, with a bachelors degree in Business Management. My experience at a Russell Group university, placed in the top 50 of the world, was challenging but rewarding. One of the core mantras of the business school while I was there, was emphasising critical thinking, challenging us to think outside the box at every opportunity. <br/><br/>Ultimately, I think my experience at university allowed me to really grow as a person, constantly being encouraged to think creatively and innovatively, really influenced my desire to find a career path that would allow me to do just that. After graduating, I took a gap year, working part-time to afford to travel in 2019. This gave me a lot of time to think about, and re-assess whether a career in business was right for me. When COVID came, I took the opportunity to work within the family landscaping business, allowing me the time to think about what my long-term career path would be.
              </p>
            </RevealY>
          </div>

          <div className="flex items-center justify-start relative mt-5">
            <RevealY>            
            <Image
                    src="/graduation3.jpg"
                    alt="graduation"
                    width={700}
                    height={300}
                    className="rounded-3xl p-5"
                  />
            </RevealY>
          </div>

          <div className=" flex items-center justify-end relative mt-8">
            <RevealY>                      
            <Image
                    src="/northcoders.avif"
                    width={500}
                    height={200}
                    alt="northcoders"
                    className="rounded-3xl p-5 mt-10"
                  />
            </RevealY> 
          </div>

          <div className="pb-5 pr-5 pl-5 text-justify rounded">
            <RevealY>
            <header className="text-2xl">Northcoders Bootcamp</header>
              <p>
              I'd always wanted to explore coding as a career path, as I'd dabbled with it in the past and enjoyed it, but I always felt like this was impossible without a Computer Science degree to go with it. In early 2023, I discovered the Northcoders Coding Bootcamp, by far the best of it's kind in the U.K., with a rigorous timed entry exam required to enroll on the course. Suddenly it felt viable, so I set out to learn using online materials, and did my timed entry exam in the summer of 2023, passing with my first attempt. <br/><br/>When the course came around, it was quite daunting, and there was a feeling of impostor syndrome within me, but those thoughts quickly diminished with how well structured the Northcoders course was, in terms of the quality of teaching and mentoring, guiding you from a near-novice to being able to develop two full-stack applications using different languages and frameworks for each, in the space of three months. 
              </p>
            </RevealY>
          </div>
          <div className="flex justify-start items-end col-span-2">
            <Link href="#page3" className="flex items-center justify-start">
              <BsFillArrowDownSquareFill
                size={40}
                className="p-1 icon-bounce"
              />
            </Link>
          </div>
        </div>
        <div
          id="page3"
          className="snap-start h-screen pt-20 grid grid-cols-2 grid-rows-3 gap-1"
        >
          <div className="p-5 text-justify rounded">
            <RevealY>
              <p>
                At vero eos et accusamus et iusto odio dignissimos ducimus qui
                blanditiis praesentium voluptatum deleniti atque corrupti quos
                dolores et quas molestias excepturi sint occaecati cupiditate
                non provident, similique sunt in culpa qui officia deserunt
                mollitia animi, id est laborum et dolorum fuga. Et harum quidem
                rerum facilis est et expedita distinctio. Nam libero tempore,
                cum soluta nobis est eligendi optio cumque nihil impedit quo
                minus id quod maxime placeat facere possimus, omnis voluptas
                assumenda est, omnis dolor repellendus. Temporibus autem
                quibusdam et aut officiis debitis aut rerum necessitatibus saepe
                eveniet ut et voluptates repudiandae sint et molestiae non
                recusandae. Itaque earum rerum hic tenetur a sapiente delectus,
                ut aut reiciendis voluptatibus maiores alias consequatur aut
                perferendis doloribus asperiores repellat.
              </p>
            </RevealY>
          </div>

          <div className="flex items-center justify-center">
            <RevealY>Tech Stack </RevealY>
          </div>

          <div className=" flex items-center justify-center">
            <RevealY>Backend </RevealY>
          </div>

          <div className="p-5 text-justify rounded">
            <RevealY>
              <p>
                At vero eos et accusamus et iusto odio dignissimos ducimus qui
                blanditiis praesentium voluptatum deleniti atque corrupti quos
                dolores et quas molestias excepturi sint occaecati cupiditate
                non provident, similique sunt in culpa qui officia deserunt
                mollitia animi, id est laborum et dolorum fuga. Et harum quidem
                rerum facilis est et expedita distinctio. Nam libero tempore,
                cum soluta nobis est eligendi optio cumque nihil impedit quo
                minus id quod maxime placeat facere possimus, omnis voluptas
                assumenda est, omnis dolor repellendus. Temporibus autem
                quibusdam et aut officiis debitis aut rerum necessitatibus saepe
                eveniet ut et voluptates repudiandae sint et molestiae non
                recusandae. Itaque earum rerum hic tenetur a sapiente delectus,
                ut aut reiciendis voluptatibus maiores alias consequatur aut
                perferendis doloribus asperiores repellat.
              </p>
            </RevealY>
          </div>
          <div className="p-5 text-justify rounded">
            <RevealY>
              <p>
                At vero eos et accusamus et iusto odio dignissimos ducimus qui
                blanditiis praesentium voluptatum deleniti atque corrupti quos
                dolores et quas molestias excepturi sint occaecati cupiditate
                non provident, similique sunt in culpa qui officia deserunt
                mollitia animi, id est laborum et dolorum fuga. Et harum quidem
                rerum facilis est et expedita distinctio. Nam libero tempore,
                cum soluta nobis est eligendi optio cumque nihil impedit quo
                minus id quod maxime placeat facere possimus, omnis voluptas
                assumenda est, omnis dolor repellendus. Temporibus autem
                quibusdam et aut officiis debitis aut rerum necessitatibus saepe
                eveniet ut et voluptates repudiandae sint et molestiae non
                recusandae. Itaque earum rerum hic tenetur a sapiente delectus,
                ut aut reiciendis voluptatibus maiores alias consequatur aut
                perferendis doloribus asperiores repellat.
              </p>
            </RevealY>
          </div>
          <div className="flex items-center justify-center">
            <RevealY>Frontend</RevealY>
          </div>
          <div className="flex justify-center items-end col-span-2">
            <Link href="#page4" className="flex items-center justify-center">
              <BsFillArrowDownSquareFill
                size={40}
                className="p-1 flex items-center justify-center icon-bounce"
              />
            </Link>
          </div>
        </div>
        <div
          id="page4"
          className="snap-start h-screen pt-20 grid grid-cols-2 grid-rows-3 gap-1 "
        >
          <div className="flex items-center justify-center">
            <RevealY>Tech Stack</RevealY>
          </div>
          <div className="p-5 text-justify rounded">
            <RevealY>
              <p>
                At vero eos et accusamus et iusto odio dignissimos ducimus qui
                blanditiis praesentium voluptatum deleniti atque corrupti quos
                dolores et quas molestias excepturi sint occaecati cupiditate
                non provident, similique sunt in culpa qui officia deserunt
                mollitia animi, id est laborum et dolorum fuga. Et harum quidem
                rerum facilis est et expedita distinctio. Nam libero tempore,
                cum soluta nobis est eligendi optio cumque nihil impedit quo
                minus id quod maxime placeat facere possimus, omnis voluptas
                assumenda est, omnis dolor repellendus. Temporibus autem
                quibusdam et aut officiis debitis aut rerum necessitatibus saepe
                eveniet ut et voluptates repudiandae sint et molestiae non
                recusandae. Itaque earum rerum hic tenetur a sapiente delectus,
                ut aut reiciendis voluptatibus maiores alias consequatur aut
                perferendis doloribus asperiores repellat.
              </p>
            </RevealY>
          </div>
          <div className="p-5 text-justify rounded">
            <RevealY>
              <p>
                At vero eos et accusamus et iusto odio dignissimos ducimus qui
                blanditiis praesentium voluptatum deleniti atque corrupti quos
                dolores et quas molestias excepturi sint occaecati cupiditate
                non provident, similique sunt in culpa qui officia deserunt
                mollitia animi, id est laborum et dolorum fuga. Et harum quidem
                rerum facilis est et expedita distinctio. Nam libero tempore,
                cum soluta nobis est eligendi optio cumque nihil impedit quo
                minus id quod maxime placeat facere possimus, omnis voluptas
                assumenda est, omnis dolor repellendus. Temporibus autem
                quibusdam et aut officiis debitis aut rerum necessitatibus saepe
                eveniet ut et voluptates repudiandae sint et molestiae non
                recusandae. Itaque earum rerum hic tenetur a sapiente delectus,
                ut aut reiciendis voluptatibus maiores alias consequatur aut
                perferendis doloribus asperiores repellat.
              </p>
            </RevealY>
          </div>
          <div className="flex items-center justify-center">
            <RevealY>Backend</RevealY>
          </div>
          <div className="flex items-center justify-center">
            <RevealY>Frontend</RevealY>
          </div>
          <div className="p-5 text-justify rounded">
            <RevealY>
              <p>
                At vero eos et accusamus et iusto odio dignissimos ducimus qui
                blanditiis praesentium voluptatum deleniti atque corrupti quos
                dolores et quas molestias excepturi sint occaecati cupiditate
                non provident, similique sunt in culpa qui officia deserunt
                mollitia animi, id est laborum et dolorum fuga. Et harum quidem
                rerum facilis est et expedita distinctio. Nam libero tempore,
                cum soluta nobis est eligendi optio cumque nihil impedit quo
                minus id quod maxime placeat facere possimus, omnis voluptas
                assumenda est, omnis dolor repellendus. Temporibus autem
                quibusdam et aut officiis debitis aut rerum necessitatibus saepe
                eveniet ut et voluptates repudiandae sint et molestiae non
                recusandae. Itaque earum rerum hic tenetur a sapiente delectus,
                ut aut reiciendis voluptatibus maiores alias consequatur aut
                perferendis doloribus asperiores repellat.
              </p>
            </RevealY>
          </div>
          <div className="flex justify-center items-end col-span-2">
            <Link href="#page5" className="flex items-center justify-center">
              <BsFillArrowDownSquareFill
                size={40}
                className="p-1 flex items-center justify-center icon-bounce"
              />
            </Link>
          </div>
        </div>
        <div
          id="page5"
          className="snap-start h-screen pt-20 grid grid-cols-1 grid-rows-3 gap-1 "
        >
          <div
            className='flex items-end text-center text-2xl justify-center'
          >
            <RevealY>
              <p>
                Thank you for taking the time to check out my website! If you'd
                like to get in touch:
              </p>
            </RevealY>
          </div>
          <div className="grid grid-cols-9">
            <div></div>
            <div></div>
            <div></div>

            <div id="contact1" className="flex items-center justify-center">
              <RevealXLeft>
                <Link
                  href="https://www.linkedin.com/in/liam-woodall/"
                  target="_blank"
                >
                  <Image
                    src="/LinkedIn_Logo.png"
                    width={200}
                    height={200}
                    alt="linkedin"
                    className="object-contain"
                  />
                </Link>
              </RevealXLeft>
            </div>
            <div
              id="contact2"
              className="flex items-center justify-center hover:bg-zinc-800"
            >
              <RevealY>
                <Link href="mailto:liam.woodall@live.co.uk">
                  <TfiEmail
                    id="email"
                    size={80}
                    alt="email"
                    className="email-icon"
                  />
                </Link>
              </RevealY>
            </div>
            <div id="contact3" className="flex items-center justify-center">
              <RevealXRight>
                <Link href="https://github.com/LW95x/" target="_blank">
                  <Image
                    src="/Github.png"
                    width={200}
                    height={200}
                    className="object-contain"
                    alt="github"
                  />
                </Link>
              </RevealXRight>
            </div>
          </div>
          <div className="flex justify-center items-center">
            <div className="border border-white rounded mb-10 flex flex-row absolute">
              <div className="relative">
            <Image
                    src="/ppic.jpg"
                    width={200}
                    height={200}
                    className="object-cover rounded opacity-40"
                    alt="author"
                  />
                      <div className="absolute top-0 left-0 right-0 bottom-0 flex items-center justify-center">
      <p className="text-white text-lg bg-black bg-opacity-40 p-2 rounded">Growing Up Deaf</p>
    </div>
  </div>
  <div className="relative">
                              <Image
                    src="/graduation3.jpg"
                    alt="graduation"
                    width={900}
                    height={300}
                    className="object-cover rounded opacity-40"
                  />
<div className="absolute top-0 left-0 right-0 bottom-0 flex items-center justify-center">
      <p className="text-white text-lg bg-black bg-opacity-40 p-2 rounded">What University Taught Me</p>
    </div>
  </div>
  <div className="relative">
                              <Image
                    src="/northcoders.avif"
                    width={520}
                    height={200}
                    alt="northcoders"
                    className="object-cover rounded opacity-40"
                  />
                      <div className="absolute top-0 left-0 right-0 bottom-0 flex items-center justify-center">
      <p className="text-white text-lg bg-black bg-opacity-40 p-2 rounded">The Northcoders Experience</p>
    </div>
  </div>
            </div>
        </div>
      </div>
      </div>
    </>
  );
}
