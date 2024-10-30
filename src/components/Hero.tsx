"use client";
import { Search } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { FormEvent, useState } from "react";

const Hero = () => {
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState("");
  const [searchType, setSearchType] = useState("Hospital");

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (searchType === "Hospital") {
      router.push(`/hospitals/search/${searchQuery}`);
    } else if (searchType === "Doctor") {
      router.push(`/doctors/search/${searchQuery}`);
    }
  };

  return (
    <>
      <section id="hero" className="container px-4 sm:px-6 lg:px-8  mx-auto">
        <section className="items-center md:h-[80vh] flex-col-reverse lg:flex-row flex">
          <div className="w-full mt-6 h-[60vh] sm:h-[78vh] lg:h-auto flex lg:block items-center justify-center lg:w-1/2">
            <div className="lg:max-w-lg mt-6">
              <h1 className="font-semibold  font-agdasima  md:leading-[48px] text-custom-sky-blue text-[22px] sm:text-[34px] lg:text-[28px]  xl:text-[36px]">
                Welcome to –{" "}
                <span className=" sm:pl-4 text-primaryColor transition ease-in-out hover:text-custom-blue cursor-pointer font-playwrite text-[24px] sm:text-[36px] lg:text-[32px] xl:text-[38px] ">
                  Hospital360
                  <br className=" hidden sm:block" />
                </span>{" "}
                Your all-in-one healthcare destination.
              </h1>

              <p className="mt-3 text-gray-500 text-[14px] sm:text-[16px] ">
                Explore top specialized clinics, view doctor schedules, and book
                your appointments effortlessly with{" "}
                <span className=" text-primaryColor text-[16px] sm:text-[18px]">
                  Hospital360
                </span>{" "}
                – providing comprehensive medical services all in one place.
              </p>

              <form
                onSubmit={handleSubmit}
                className="w-full mt-8 flex items-center justify-start py-2 text-sm tracking-wider text-white lg:w-auto"
              >
                <input
                  type="text"
                  placeholder="Search..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="rounded-l-full shadow-xl placeholder:text-primaryColor bg-transparent border-custom-sky-blue border-b-2 border-l-2 border-r-0 w-[70%] pl-6 h-[48px] outline-none text-primaryColor"
                />
                <select
                  title="choose type"
                  value={searchType}
                  onChange={(e) => setSearchType(e.target.value)}
                  className="border-custom-sky-blue shadow-xl bg-transparent border-b-2 outline-none cursor-pointer px-2 text-primaryColor h-[48px]"
                >
                  <option value="Hospital">Hospital</option>
                  <option value="Doctor">Doctor</option>
                </select>
                <button
                  type="submit"
                  className="flex items-center gap-1 shadow-xl bg-custom-sky-blue font-bold hover:text-primaryColor transition ease-in-out hover:bg-custom-light-blue h-[48px] rounded-r-full px-4"
                >
                  Search
                  <Search size={16} />
                </button>
              </form>
            </div>
          </div>

          <div className=" hidden lg:flex items-center justify-center w-[380px] mt-6 lg:mt-0 lg:w-1/2">
            <Image
              width={400}
              height={450}
              className="w-full lg:max-w-3xl"
              src="/Hospital.svg"
              alt="Catalogue-pana.svg"
            />
          </div>
        </section>
      </section>
    </>
  );
};

export default Hero;
