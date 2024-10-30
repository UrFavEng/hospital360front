"use client";
import { useGetAllHospitalsQuery } from "@/app/store/apislice";
import { useRouter } from "next/navigation";
import React from "react";
import { FaHospital, FaPhoneAlt } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { MdAccessTimeFilled } from "react-icons/md";
function joinWithDash(numbers: string[]): string {
  return numbers.join(" - ");
}
function convertTo12HourFormat(time: string): string {
  const [hoursStr, minutes] = time.split(":");
  let hours = parseInt(hoursStr, 10);
  const period = hours >= 12 ? "PM" : "AM";
  hours = hours % 12 || 12;

  return `${hours}:${minutes} ${period}`;
}
const TopRatedHospital = () => {
  const router = useRouter();
  const { data } = useGetAllHospitalsQuery();

  // Process the data to calculate review counts
  const hospitalsWithReviewCount = data?.data.map((hospital) => ({
    ...hospital,
    reviewCount: hospital.reviews.length, // Assuming reviews are in attributes
  }));

  // Sort hospitals by review count
  const sortedHospitals = hospitalsWithReviewCount?.sort(
    (a, b) => b.reviewCount - a.reviewCount
  );

  // Get the top 4 hospitals
  const topHospitals = sortedHospitals?.slice(0, 4);
  return (
    <section className=" sm:py-4 pb-6 px-4 sm:px-6 mt-[-25px] sm:mt-[-88px] md:mt-8 lg:px-8">
      <div className="container mx-auto">
        <h1 className="text-2xl font-semibold text-start text-primaryColor font-agdasima capitalize lg:text-3xl">
          Popular hostpitals
        </h1>

        <div className="grid grid-cols-1 gap-4 mt-8 xl:mt-10 xl:gap-6 lg:grid-cols-2">
          {topHospitals?.map((hos) => (
            <div
              onClick={() => router.push(`/hospitals/${hos.documentId}`)}
              key={hos.documentId}
              className="relative cursor-pointer flex items-end overflow-hidden bg-cover bg-top rounded-lg h-96 group"
              style={{
                backgroundImage: `url('${hos.mainImage.url}')`,
              }}
            >
              <div className="absolute p-4 bottom-0 left-0 w-full cursor-pointer bg-gray-800/60 transition-all duration-300 ease-in-out h-1/4 group-hover:h-full">
                <div className="w-full  px-3 py-4">
                  <h2 className="text-lg sm:text-[34px] flex items-center gap-2 font-semibold text-white capitalize">
                    <span className=" text-gray-50 bg-custom-sky-blue rounded-full py-2.5 px-2.5 text-[22px]">
                      {" "}
                      <FaHospital />
                    </span>{" "}
                    {hos.name}
                  </h2>
                  <span className="text-gray-100  pl-[8px] py-2 font-agdasima gap-1.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center text-[16px]">
                    <span className=" text-gray-50 bg-custom-sky-blue rounded-full p-1.5 text-[15px]">
                      {" "}
                      <FaLocationDot />{" "}
                    </span>
                    {hos.address}
                  </span>{" "}
                  <span className="text-gray-100  pl-[9px] py-2 font-agdasima gap-1.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center text-[16px]">
                    {" "}
                    <span className=" text-gray-50 bg-custom-sky-blue rounded-full p-1.5 text-[15px]">
                      {" "}
                      <FaPhoneAlt />{" "}
                    </span>
                    {hos?.phones && joinWithDash(hos?.phones)}
                  </span>{" "}
                  <span className="text-gray-100  pl-[9px] py-2 font-agdasima gap-1.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center text-[16px]">
                    {" "}
                    <span className=" text-gray-50 bg-custom-sky-blue rounded-full p-1.5 text-[15px]">
                      {" "}
                      <MdAccessTimeFilled />{" "}
                    </span>
                    {hos?.startTime &&
                      convertTo12HourFormat(hos?.startTime)} -{" "}
                    {hos?.endTime && convertTo12HourFormat(hos?.endTime)}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TopRatedHospital;
