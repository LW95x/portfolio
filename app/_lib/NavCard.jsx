import Image from "next/image";
import RevealY from "./RevealY";
import { useEffect, useRef, useState } from "react";
import { FaDeaf, FaLaptopCode } from "react-icons/fa";
import { GiTiedScroll } from "react-icons/gi";

export default function NavCard() {
  const [optionOne, setOptionOne] = useState(true);
  const [optionTwo, setOptionTwo] = useState(false);
  const [optionThree, setOptionThree] = useState(false);



  return (
    <>
      <RevealY>
        <div className="flex justify-center items-center relative pt-20">
          <div className="border-2 border-zinc-700 rounded flex flex-row absolute">
            <button
              onClick={() => {
                setOptionTwo(false);
                setOptionThree(false);
                setOptionOne(true);
              }}
            >
              <div className="relative">
                <Image
                  src="/ppic.jpg"
                  width={115}
                  height={200}
                  className="object-contain opacity-50"
                  alt="author"
                  
                />
                <div className="absolute top-0 left-0 right-0 bottom-0 flex items-center justify-center">
                  <p className="text-white text-sm bg-zinc-900 bg-opacity-40 p-2 rounded hover:bg-opacity-90">
                    Growing Up Deaf
                  </p>
                </div>
              </div>
            </button>
            <button
              onClick={() => {
                setOptionOne(false);
                setOptionThree(false);
                setOptionTwo(true);
              }}
            >
              <div className="relative ml-0.5">
                <Image
                  src="/graduation3.jpg"
                  alt="graduation"
                  width={520}
                  height={200}
                  className="object-contain opacity-50"
                  
                />
                <div className="absolute top-0 left-0 right-0 bottom-0 flex items-center justify-center">
                  <p className="text-white text-sm bg-zinc-900 bg-opacity-40 p-2 rounded hover:bg-opacity-90">
                    What University Taught Me
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
              <div className="relative ml-0.5">
                <Image
                  src="/northcoders.avif"
                  width={300}
                  height={200}
                  alt="northcoders"
                  className="object-contain opacity-50"
                  
                />
                <div className="absolute top-0 left-0 right-0 bottom-0 flex items-center justify-center">
                  <p className="text-white text-sm bg-zinc-900 bg-opacity-40 p-2 rounded hover:bg-opacity-90">
                    The Northcoders Experience
                  </p>
                </div>
              </div>
            </button>
          </div>
        </div>
      </RevealY>
      <RevealY>
      <div className="container-card row-span-2 border-2 border-zinc-900">
          {optionOne ? (
            <RevealY>
              <FaDeaf size={50}/>
              <h2 className="container-title">Growing Up Deaf</h2>
              <p className="text-justify">
                I was born with a condition called Microtia and Atresia, which meant that my ears weren't fully developed at birth, and became the youngest person in the
                U.K. to be implanted with a Bone Anchored Hearing Aid (BAHA),
                when I was 2. This meant that my speech was never impacted
                during my formative years, and the vast majority of people who
                meet me never realise that I'm actually deaf, until I tell them!{" "}
                <br /> <br />
                Growing up with a hearing disability was challenging, as while I
                can hear very well, I often have to concentrate much more than
                your average person. This has never prevented me from achieving
                what I want to achieve in life, and has only ever strengthened my
                resolve and determination. As Stephen Hawking once said,
                "Be disabled physically, but not in spirit".
              </p>
            </RevealY>
          ) : null}
          {optionTwo ? <RevealY>
            <GiTiedScroll size={50} />
            <h2 className="container-title">What University Taught Me</h2>
              <p className="text-justify">
              I graduated from the University of Manchester in 2018, with a bachelors degree in Business Management (2:1). My experience at a Russell Group university, placed in the top 50 of the world, was challenging but rewarding. One of the core mantras of the business school while I was there, was emphasising critical thinking, challenging us to think outside the box at every opportunity. My experience at university really allowed me to grow as a person, constantly being encouraged to think creatively and innovatively, really influencing my desire to find a career path that would allow me to do just that. <br/> <br/>After graduating, I took a gap year, working in a restaurant to afford to travel to parts of Europe in 2019. This gave me a lot of time to think about, and re-assess, whether a career in Management was right for me. When COVID came, I took the opportunity to work within the family landscaping business, allowing me to take my time to think about what my long-term career path would be.
              </p></RevealY> : null}
          {optionThree ? <RevealY>
            <FaLaptopCode size={50}/>
            <h2 className="container-title">The Northcoders Experience</h2>
              <p className="text-justify">
              I'd always wanted to explore coding as a career path, as I'd dabbled with it in the past and thoroughly enjoyed it, but I always felt like this was impossible without a Computer Science degree to go with it. In early 2023, I discovered the Northcoders Coding Bootcamp, by far the best of it's kind in the U.K., with a rigorous timed entry exam required to enroll on the course. Suddenly it felt viable, so I set out to learn enough using online materials, and did my timed entry exam in the summer of 2023, passing with my first attempt. <br/> <br/> When the course came around, it was quite daunting, and there was a feeling of impostor syndrome within me, but those thoughts quickly diminished with how well structured the Northcoders course was, in terms of the quality of teaching and mentoring, guiding me from a near-novice, to being able to develop two full-stack applications using different languages and frameworks for each, in the space of three months. 
              </p>
          </RevealY> : null}
        </div>
      </RevealY>
    </>
  );
}
