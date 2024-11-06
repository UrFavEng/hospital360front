"use client";
import Image from "next/image";
import { useState } from "react";
import { RedirectToUserProfile, useClerk, useUser } from "@clerk/nextjs";
import Link from "next/link";
import { Menu } from "lucide-react";
import { useGetAllServicesQuery } from "@/app/store/apislice";

const Dropdown = () => {
  const { data } = useGetAllServicesQuery();

  const [isOpen, setIsOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const { signOut } = useClerk();

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const toggleServicesDropdown = () => {
    setIsServicesOpen(!isServicesOpen);
  };

  const { user } = useUser();
  const [view, setView] = useState(false);
  const handleLogout = async () => {
    await signOut();
  };

  return (
    <div className="relative inline-block">
      {/* Dropdown toggle button */}
      <button
        onClick={toggleDropdown}
        className="relative z-10 flex items-center p-2 text-sm  border border-transparent rounded-md text-white bg-[#1f2937] transition ease-in-out hover:bg-[#1f2937d8] outline-none"
      >
        {user ? (
          <>
            <span className="mx-1">{user.fullName}</span>
            <svg
              className="w-5 h-5 mx-1"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 15.713L18.01 9.70299L16.597 8.28799L12 12.888L7.40399 8.28799L5.98999 9.70199L12 15.713Z"
                fill="currentColor"
              ></path>
            </svg>
          </>
        ) : (
          <>
            <Menu />
          </>
        )}
      </button>

      {/* Dropdown menu */}
      {isOpen && (
        <div
          onClick={() => setIsOpen(false)}
          className="fixed inset-0 z-10"
        ></div>
      )}
      {isOpen && (
        <div className="absolute right-0 z-20 w-56 py-2 mt-2  origin-top-right bg-white rounded-md shadow-xl dark:bg-gray-800">
          {user && (
            <>
              <a
                onClick={() => setView(true)}
                className="flex cursor-pointer items-center p-3 -mt-2 text-sm text-gray-600 transition-colors duration-300 transform dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white"
              >
                <Image
                  width={70}
                  height={70}
                  className="flex-shrink-0 object-cover mx-1 rounded-full w-9 h-9"
                  src={user.imageUrl}
                  alt="jane avatar"
                />
                <div className="mx-1">
                  <h1 className="text-sm font-semibold text-gray-700 dark:text-gray-200">
                    {user.fullName}
                  </h1>
                  <p className="text-[10px] text-gray-500 dark:text-gray-400">
                    {user.primaryEmailAddress?.emailAddress}
                  </p>
                </div>
              </a>
              <hr className="border-gray-200 dark:border-gray-700" />
              {view && <RedirectToUserProfile />}
              <Link
                href={"/appointment"}
                className="block px-4 py-3 text-sm text-gray-600 capitalize transition-colors duration-300 transform dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white"
              >
                Appointment
              </Link>
              <hr className="border-gray-200 dark:border-gray-700" />
            </>
          )}
          <Link
            href={"/hospitals"}
            className="block px-4 py-3 text-sm text-gray-600 capitalize transition-colors duration-300 transform dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white"
          >
            Hospitals
          </Link>

          {/* Services Dropdown */}
          <div className="relative">
            <p
              onClick={toggleServicesDropdown}
              className="block cursor-pointer px-4 py-3 text-sm text-gray-600 capitalize transition-colors duration-300 transform dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white"
            >
              Services
            </p>
            {isServicesOpen && (
              <div className="absolute overflow-hidden right-[100%] top-0 mt-1 w-48 bg-white dark:bg-gray-800 rounded-l-md rounded-b-md shadow-lg">
                {data?.data.map((link) => (
                  <Link
                    key={link.documentId}
                    href={"/services/" + link.documentId}
                    className="block px-4 py-2 text-sm text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
                  >
                    {link.name}
                  </Link>
                ))}
              </div>
            )}
          </div>

          <Link
            href={"/doctors"}
            className="block px-4 py-3 text-sm text-gray-600 capitalize transition-colors duration-300 transform dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white"
          >
            Doctors
          </Link>
          <hr className="border-gray-200 dark:border-gray-700" />
          {user ? (
            <a
              onClick={handleLogout}
              className="block cursor-pointer px-4 py-2 text-[13px] text-red-500 capitalize transition-colors duration-300 transform hover:bg-gray-100 dark:hover:bg-gray-700"
            >
              Sign out
            </a>
          ) : (
            <Link
              href="/sign-in"
              className="block px-4 py-3 text-[14px] hover:text-custom-light-blue capitalize transition-colors duration-300 transform font-bold text-gray-100 hover:bg-gray-700"
            >
              Login
            </Link>
          )}
        </div>
      )}
    </div>
  );
};

export default Dropdown;
