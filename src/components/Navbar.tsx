"use client";
import Link from "next/link";
import React from "react";
import Dropdown from "./Dropdown";
import { UserButton, useUser } from "@clerk/nextjs";
import DropdownServices from "./DropdownServices";

const Navbar = () => {
  const { user } = useUser();
  return (
    <>
      {" "}
      <header className="bg-[#ffffff93] hover:bg-white  hover:shadow-lg transition ease-in-out font-agdasima fixed top-0 left-0 w-full z-50">
        <div className="mx-auto flex h-20 max-w-screen-xl items-center gap-5 lg:gap-8 px-4 sm:px-6 lg:px-8">
          <Link
            className="block font-playwrite  transition ease-in-out text-custom-blue font-bold text-[20px] sm:text-[22px]"
            href="/"
          >
            Hospital360
          </Link>

          <div className="flex flex-1 items-center justify-end md:justify-between">
            <nav aria-label="Global" className="hidden md:block">
              <ul className="flex items-center gap-3 lg:gap-4 text-sm">
                <li>
                  <Link
                    className="transition ease-in-out text-primaryColor hover:text-custom-blue font-bold"
                    href="/"
                  >
                    Home
                  </Link>
                </li>

                <li>
                  <Link
                    className="transition ease-in-out text-primaryColor hover:text-custom-blue font-bold"
                    href="/hospitals"
                  >
                    Hospitals
                  </Link>
                </li>

                <li>
                  <Link
                    className="transition ease-in-out text-primaryColor hover:text-custom-blue font-bold"
                    href="/doctors"
                  >
                    Doctors
                  </Link>
                </li>

                <li>
                  <DropdownServices />
                </li>

                <li>
                  <Link
                    className="transition ease-in-out text-primaryColor hover:text-custom-blue font-bold"
                    href="/contact-us"
                  >
                    Contact us
                  </Link>
                </li>
              </ul>
            </nav>

            <div className="flex items-center gap-4">
              <div className="sm:flex items-center sm:gap-4">
                <Link
                  href={"/appointment"}
                  className=" text-[13px] hidden md:block tracking-[0.5px] transition ease-in-out text-primaryColor hover:text-custom-blue cursor-pointer font-bold"
                >
                  Appointment
                </Link>
                {user ? (
                  <div className=" hidden md:block">
                    {" "}
                    <UserButton />
                  </div>
                ) : (
                  <Link
                    className=" hidden md:block rounded-md bg-custom-blue text-white hover:text-primaryColor text-[16px] font-bold px-3.5 py-[6px] transition ease-in-out hover:bg-custom-light-blue"
                    href="/sign-in"
                  >
                    Login
                  </Link>
                )}
              </div>

              <div className="block    md:hidden">
                <Dropdown />
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Navbar;
