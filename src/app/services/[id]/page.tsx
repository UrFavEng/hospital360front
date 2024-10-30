"use client";
import { useGetAllClincsByServicesQuery } from "@/app/store/apislice";
import CardClinc from "@/components/CardClinc";
import { useParams } from "next/navigation";
import React from "react";

const ClincsByService = () => {
  const { id } = useParams();
  const { data } = useGetAllClincsByServicesQuery(id as string);
  return (
    <div className=" min-h-[70vh] py-12">
      <h1 className="text-2xl mb-4 font-semibold text-start text-primaryColor font-agdasima capitalize lg:text-3xl">
        {data?.data.name}
      </h1>
      <p className="mt-3 text-gray-500  sm:w-[90%] lg:w-[80%] xl:w-[75%] font-bold sm:font-normal text-[12px] sm:text-[15px]">
        {data?.data.description}
      </p>
      <h3 className=" mt-8 text-custom-sky-blue text-[24px] font-agdasima font-bold">
        Clinics
      </h3>
      <div className=" py-4  grid  gap-4 sm:grid-cols-2 md:grid-c-3 lg:grid-cols-4 xl:grid-cols-5">
        {data?.data.clincs?.map((clinc) => (
          <CardClinc key={clinc.documentId} clinc={clinc} />
        ))}
      </div>
    </div>
  );
};

export default ClincsByService;
