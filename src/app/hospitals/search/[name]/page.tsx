"use client";
import { useSearchHospitalsQuery } from "@/app/store/apislice";
import HospitalCard from "@/components/HospitalCard";
import { useParams } from "next/navigation";
import React from "react";
import { PulseLoader } from "react-spinners";

const SearchPage = () => {
  const { name } = useParams();
  const { data, isLoading } = useSearchHospitalsQuery(name as string);
  console.log(name);
  return (
    <div className=" min-h-[70vh] py-12">
      <h1 className=" font-bold text-[32px] font-agdasima text-primaryColor">
        {data?.data.length} Hospitals
      </h1>{" "}
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

export default SearchPage;
