import Image from "next/image";
import RevealY from "./RevealY";
import { useEffect, useRef, useState } from "react";

export default function NavCard() {




  return (
    <>
      <RevealY>
        <div className="flex justify-center items-center relative pt-20">
          <div className="border-2 border-zinc-700 rounded flex flex-row absolute">
              <div className="relative">
                <div className="absolute top-0 left-0 right-0 bottom-0 flex items-center justify-center">
                  <p className="text-white text-sm bg-zinc-900 bg-opacity-40 p-2 rounded hover:bg-opacity-90">
                  </p>
                </div>
              </div>
              <div className="relative ml-0.5">
                <div className="absolute top-0 left-0 right-0 bottom-0 flex items-center justify-center">
                  <p className="text-white text-sm bg-zinc-900 bg-opacity-40 p-2 rounded hover:bg-opacity-90">
                    
                  </p>
                </div>
              </div>
            <button
              onClick={() => {
                setOptionOne(false);
                setOptionTwo(false);
                setOptionThree(true);
              }}
            >
              <div className="relative ml-0.5">
                <div className="absolute top-0 left-0 right-0 bottom-0 flex items-center justify-center">
                  <p className="text-white text-sm bg-zinc-900 bg-opacity-40 p-2 rounded hover:bg-opacity-90">
                    
                  </p>
                </div>
              </div>
            </button>
          </div>
        </div>
      </RevealY>
      <RevealY>
      <div className="container-card row-span-2 border-2 border-zinc-900 mt-5">
        </div>
      </RevealY>
    </>
  );
}
