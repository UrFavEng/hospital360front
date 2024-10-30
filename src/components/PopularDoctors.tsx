"use client";
import React from "react";
import CardDoctor from "./CardDoctor";
import { useGetAllDoctorsQuery } from "@/app/store/apislice";

const PopularDoctors = () => {
  const { data } = useGetAllDoctorsQuery();
  return (
    <section className="py-4 pb-6 px-4 sm:px-6 mt-8 lg:px-8">
      <h1 className="text-2xl mb-6 font-semibold text-start text-primaryColor font-agdasima capitalize lg:text-3xl">
        Popular doctors
      </h1>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {data?.data.slice(0, 6).map((doc) => (
          <CardDoctor key={doc.documentId} doctor={doc} />
        ))}
      </div>
    </section>
  );
};

export default PopularDoctors;
