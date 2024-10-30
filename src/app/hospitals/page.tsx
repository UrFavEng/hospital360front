"use client";
import React, { FormEvent } from "react";
import { useGetAllHospitalsQuery } from "../store/apislice";
import HospitalCard from "@/components/HospitalCard";
import { Search } from "lucide-react";
import { useRouter } from "next/navigation";
import { PulseLoader } from "react-spinners";
const HospitalsPage = () => {
  const router = useRouter(); // استخدام الـ router للتنقل

  const { data, isLoading } = useGetAllHospitalsQuery();
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const input = form.querySelector("input[type='text']") as HTMLInputElement;
    if (input.value.trim()) {
      router.push(`/hospitals/search/${input.value}`);
    }
  };
  return (
    <div className=" min-h-[70vh] py-12">
      <h1 className=" font-bold text-[32px] font-agdasima text-primaryColor">
        {data?.data.length} Hospitals
      </h1>
      <form
        onSubmit={handleSubmit}
        className="w-full mt-8 flex items-center justify-start py-2 text-sm tracking-wider text-white lg:w-auto "
      >
        <input
          required
          type="text"
          title="Search for hospital"
          placeholder="Search for hosbital"
          className=" rounded-l-full shadow-xl placeholder:text-primaryColor  bg-transparent border-custom-sky-blue border-b-2 border-l-2 border-r-0  w-[290px] pl-6 h-[48px] outline-none text-primaryColor"
        />{" "}
        <button
          type="submit"
          className=" flex items-center gap-1 shadow-xl bg-custom-sky-blue font-bold hover:text-primaryColor transition ease-in-out hover:bg-[#0f68b1b5] h-[48px]  rounded-r-full px-4"
        >
          Search
          <Search size={16} />
        </button>
      </form>
      {isLoading && (
        <PulseLoader
          className=" text-center mt-12 text-custom-sky-blue"
          color="#0f67b1"
        />
      )}
      <div className=" pt-6 grid justify-items-center sm:grid-cols-2 lg:grid-cols-3 gap-3">
        {data?.data.map((hospital) => (
          <HospitalCard hospital={hospital} key={hospital.documentId} />
        ))}
      </div>
    </div>
  );
};

export default HospitalsPage;
