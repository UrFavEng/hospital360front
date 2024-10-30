"use client";
import React from "react";
import { useGetAllAppUserQuery } from "../store/apislice";
import { useUser } from "@clerk/nextjs";

import AppCard from "@/components/AppCard";

const AppointmentPage = () => {
  const { user } = useUser();
  const { data } = useGetAllAppUserQuery(user?.id as string);

  return (
    <div className=" min-h-[70vh] py-12">
      <h2 className="text-primaryColor flex items-center gap-2 text-[20px] sm:text-[24px] md:text-[28px] lg:text-[32px] xl:text-[36px] font-agdasima font-bold">
        Your Appointments ({data?.data.length})
      </h2>
      <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {data?.data.map((app) => (
          <AppCard app={app} key={app.documentId} />
        ))}
      </div>
    </div>
  );
};

export default AppointmentPage;
