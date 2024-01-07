import React from "react";
import MainButton from "../common/MainButton";
import Image from "next/image";

function HeroSection() {
  return (
    <section className="flex justify-between flex-col md:flex-row gap-4 items-center">
      <div>
        <p className="font-[850] md:leading-[5.0625rem] text-2xl md:text-[4.375rem] text-darkBlue">
          We boost growth for your statup business
        </p>
        <p className="text-[1.375rem] font-[500]">
          Our goal is top at the heart of creativity services industry as a
          digital creator. Best services for you.
        </p>
        <div className="flex gap-[1.75rem] items-center mt-[3rem]">
          <MainButton text="Get Started" classes="shadow-none w-[10.125rem]" />
          <div className="flex gap-[1rem] items-center">
            <Image
              height={40}
              width={40}
              src="/images/fancy_play_icon.png"
              alt="play icon"
            />
            <p className="font-bold text-normal">Learn More</p>
          </div>
        </div>
      </div>
      <div>
        <Image
          height={600}
          width={600}
          src="/images/happy_guy.png"
          alt="guy with phone surrounded by action icons"
        />
      </div>
    </section>
  );
}

export default HeroSection;
