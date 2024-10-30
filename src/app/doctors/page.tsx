"use client";
import React, { FormEvent } from "react";
import { useGetAllDocPuplicQuery } from "../store/apislice";
import CardDoctor from "@/components/CardDoctor";
import { PulseLoader } from "react-spinners";
import { Search } from "lucide-react";
import { useRouter } from "next/navigation";

const DoctorsPage = () => {
  const router = useRouter();
  const { data, isLoading } = useGetAllDocPuplicQuery();
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const input = form.querySelector("input[type='text']") as HTMLInputElement;
    if (input.value.trim()) {
      router.push(`/doctors/search/${input.value}`);
    }
  };
  return (
    <div className=" min-h-[70vh] py-12">
      {" "}
      <h2 className="text-primaryColor flex items-center gap-2 text-[28px] md:text-[36px] font-agdasima font-bold">
        ({data?.data.length}) Doctors
      </h2>{" "}
      <form
        onSubmit={handleSubmit}
        className="w-full mt-8 flex items-center justify-start py-2 text-sm tracking-wider text-white lg:w-auto "
      >
        <input
          required
          type="text"
          title="Search for doctor"
          placeholder="Search for doctor"
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
      <div className=" py-12">
        <div className=" grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {data?.data?.map((doctor) => (
            <CardDoctor key={doctor.documentId} doctor={doctor} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default DoctorsPage;
