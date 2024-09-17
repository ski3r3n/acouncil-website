"use client";

import { getCouncilName } from "@/utils/name";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import Image from "next/image";

const Home = () => {
  useGSAP(() => {
    gsap.to("#logo", { opacity: 1, delay: 0.4, y: 0 });
    gsap.to("#title", { opacity: 1, y: 0, delay: 0.8 });
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen pt-8 pb-10">
      <main className="flex flex-col items-center justify-center w-full height-full text-center">
        <Image
          unoptimized
          id="logo"
          src="/logo-nobg.png"
          alt="EC3"
          className="w-1/5 opacity-0 -translate-y-20"
          height={100}
          width={100}
        />

        <h1
          className="text-6xl font-bold shiny-text max-w-[700px] pt-7 opacity-0 translate-y-20"
          id="title"
        >
          {getCouncilName()}
        </h1>
      </main>
    </div>
  );
};

export default Home;
