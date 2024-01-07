import React from "react";
import { Separator } from "../ui/separator";

const currentYear = new Date().getFullYear();

function FooterSection() {
  return (
    <section className="flex px-4 flex-col gap-[1.9rem] w-full mt-[10.44rem] bg-">
      <div className="flex flex-col md:flex-row gap-8 justify-between">
        <div>
          <img src="/images/footer_logo.png" alt="footer logo" />
        </div>
        <div className="text-lightBlue text-[1rem] font-serif">
          © {currentYear} Epixelab. All rights reserved.
        </div>
        <div className="flex gap-5">
          <p className="text-lightBlue text-[1rem]">Portfolio</p>
          <p className="text-lightBlue text-[1rem]">How it Works</p>
          <p className="text-lightBlue text-[1rem]">Pricing</p>
          <p className="text-lightBlue text-[1rem]">About</p>
          <p className="text-lightBlue text-[1rem]">Login</p>
        </div>
      </div>
      <Separator />
      <div className="pb-[2.56rem]">
        <p className="text-customGray flex items-center justify-center">
          join with us to boost your business with the most creative way and get
          more leads, customers for your business with our digital marketing
          services
        </p>
      </div>
    </section>
  );
}

export default FooterSection;
