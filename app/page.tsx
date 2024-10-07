"use client";

import { getCouncilName } from "@/utils/name";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import Image from "next/image";

const Home = () => {
  useGSAP(() => {
    gsap.to("#logo", { opacity: 1, delay: 0.4, y: 0 });
    gsap.to("#title", { opacity: 1, y: 0, delay: 0.8 });
    gsap.to("#button1", { opacity: 1, y: 0, delay: 1.1 });
    gsap.to("#button2", { opacity: 1, y: 0, delay: 1.4 });
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen pt-8 pb-10">
      <main className="flex flex-col items-center justify-center w-full height-full text-center">
        <Image
          unoptimized
          id="logo"
          src="/logo-nobg.png"
          alt="Council Image"
          className="w-1/5 opacity-0 -translate-y-20"
          height={100}
          width={100}
        />

        <h1
          className="text-6xl font-bold shiny-text max-w-[700px] pt-7 opacity-0 translate-y-20"
          id="title">
          {getCouncilName()}
        </h1>
        <b>
          <button
            className="bg-gray-900 rounded-lg pl-5 pr-5 pt-2 pb-2 shiny-blue text-2xl m-5 mt-7 opacity-0 translate-y-10"
            id="button1">
            About us
          </button>
          <button
            className="bg-gray-900 rounded-lg pl-5 pr-5 pt-2 pb-2 shiny-blue text-2xl m-5 mt-7 opacity-0 translate-y-10"
            id="button2">
            Initiatives
          </button>
        </b>
      </main>
    </div>
  );
};

export default Home;
