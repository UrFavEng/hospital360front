import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-100 ">
      <div className="relative mx-auto max-w-screen-xl py-8 px-4 sm:px-6 lg:px-10 lg:pt-24">
        <div className="absolute end-4 top-4 sm:end-6 sm:top-6 lg:end-8 lg:top-8">
          <a
            className="inline-block rounded-full bg-custom-sky-blue p-2 text-white shadow transition hover:bg-custom-light-blue hover:text-primaryColor sm:p-3 lg:p-4"
            href="#hero"
          >
            <span className="sr-only">Back to top</span>

            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="size-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z"
                clipRule="evenodd"
              />
            </svg>
          </a>
        </div>

        <div className="lg:flex lg:items-end lg:justify-between">
          <div>
            <div className="flex justify-center text-primaryColor  text-[32px] font-bold lg:justify-start">
              Hospital360
            </div>

            <p className="mx-auto mt-4 max-w-md text-center text-gray-500 lg:text-left">
              Your health experience is our priority at{" "}
              <span className=" text-[18px]  cursor-pointer font-bold text-custom-blue">
                Hospital360
              </span>
              , where we provide you with comprehensive and integrated care.
            </p>
          </div>

          <ul className="mt-12 flex flex-wrap justify-center gap-6 md:gap-8 lg:mt-0 lg:justify-end lg:gap-12">
            <li>
              <a
                className="transition ease-in-out text-primaryColor hover:text-custom-blue"
                href="#hero"
              >
                Home
              </a>
            </li>

            <li>
              <a
                className="transition ease-in-out text-primaryColor hover:text-custom-blue"
                href="#"
              >
                Hospitals
              </a>
            </li>

            <li>
              <a
                className="transition ease-in-out text-primaryColor hover:text-custom-blue"
                href="#"
              >
                Doctors
              </a>
            </li>

            <li>
              <a
                className="transition ease-in-out text-primaryColor hover:text-custom-blue"
                href="#"
              >
                Clincs
              </a>
            </li>
            <li>
              <a
                className="transition ease-in-out text-primaryColor hover:text-custom-blue"
                href="#"
              >
                Contact us
              </a>
            </li>
          </ul>
        </div>

        <p className="mt-12 text-center text-sm text-gray-500 lg:text-right">
          Copyright &copy; 2024. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
