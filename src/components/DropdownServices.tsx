import { useGetAllServicesQuery } from "@/app/store/apislice";
import { ChevronDown } from "lucide-react";
import Link from "next/link";
import React, { useState } from "react";

const DropdownServices = () => {
  const { data } = useGetAllServicesQuery();
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="relative inline-block">
      {/* Dropdown toggle button */}
      <button
        onClick={toggleDropdown}
        className="transition flex items-center ease-in-out text-primaryColor hover:text-custom-blue font-bold"
      >
        Services <ChevronDown size={16} className="mt-[1px]" />
      </button>

      {/* Dropdown menu */}
      {isOpen && (
        <div
          onClick={() => setIsOpen(false)}
          className="fixed inset-0 z-10"
        ></div>
      )}
      {isOpen && (
        <div className="absolute right-0 z-20 w-56 py-2 mt-4 overflow-hidden origin-top-right bg-white rounded-md shadow-xl dark:bg-gray-800">
          {data?.data.map((service) => (
            <Link
              key={service.documentId}
              href={"/services/" + service.documentId}
              className="block px-4 py-3 text-sm text-gray-600 capitalize transition-colors duration-300 transform dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white"
            >
              {service.name}
            </Link>
          ))}{" "}
        </div>
      )}
    </div>
  );
};

export default DropdownServices;
