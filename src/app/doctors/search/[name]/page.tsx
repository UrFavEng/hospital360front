"use client";
import { useSearchDoctorsQuery } from "@/app/store/apislice";
import CardDoctor from "@/components/CardDoctor";
import { useParams } from "next/navigation";
import React from "react";
import { PulseLoader } from "react-spinners";

const SearchDoctorPage = () => {
  const { name } = useParams();
  const { data, isLoading } = useSearchDoctorsQuery(name as string);
  return (
    <div className=" min-h-[70vh] py-8">
      <h1 className=" font-bold text-[32px] font-agdasima text-primaryColor">
        ({data?.data.length}) Doctors
      </h1>{" "}
      {isLoading && (
        <PulseLoader
          className=" text-center mt-12 text-custom-sky-blue"
          color="#0f67b1"
        />
      )}{" "}
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

export default SearchDoctorPage;
