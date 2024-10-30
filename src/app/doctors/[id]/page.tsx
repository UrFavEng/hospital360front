"use client";
import { useGetDoctorQuery, useGetDoctorRevsQuery } from "@/app/store/apislice";
import ReviewCard from "@/components/ReviewCard";
import { BriefcaseMedical, FileCheck2, Star } from "lucide-react";
import { useParams, useRouter } from "next/navigation";
import React from "react";
import { FaDotCircle } from "react-icons/fa";

const DoctorPage = () => {
  const router = useRouter();
  const { id } = useParams();
  const { data } = useGetDoctorQuery(id as string);
  const { data: revsDoc } = useGetDoctorRevsQuery(id as string);

  console.log(data);
  return (
    <div className=" min-h-[70vh] pb-12">
      <section>
        <div className="mx-auto max-w-screen-2xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:h-screen lg:grid-cols-2">
            <div className="relative z-10 lg:py-16">
              <div className="relative h-[520px] sm:h-[600px] lg:h-full">
                <img
                  alt=""
                  src={data?.data.image.url}
                  className="absolute inset-0 h-full shadow-lg w-full object-cover"
                />
              </div>
            </div>

            <div className="relative flex items-center bg-gray-100">
              <span className="hidden lg:absolute lg:inset-y-0 lg:-start-16 lg:block lg:w-16 lg:bg-gray-100"></span>

              <div className="p-6 sm:p-10 lg:p-16">
                <h2 className="text-2xl font-agdasima text-custom-sky-blue font-bold sm:text-3xl">
                  {data?.data.name}
                </h2>

                <p className="mt-[2px] text-gray-600">
                  {" "}
                  {data?.data.specialty} at{"   "}
                  <span
                    onClick={() =>
                      router.push(
                        "/hospitals/" + data?.data.hospitals[0].documentId
                      )
                    }
                    className=" font-agdasima font-bold text-custom-sky-blue cursor-pointer hover:underline"
                  >
                    {data?.data.hospitals[0].name}
                  </span>{" "}
                  hospital -{" "}
                  {data?.data?.clincs?.length && (
                    <>
                      {" "}
                      <span
                        onClick={() =>
                          router.push(
                            "/clinic/" + data?.data.clincs[0].documentId
                          )
                        }
                        className=" font-agdasima font-bold text-custom-sky-blue cursor-pointer hover:underline"
                      >
                        {data?.data?.clincs[0]?.specializations}{" "}
                      </span>{" "}
                    </>
                  )}
                  clinic
                </p>
                <h2 className=" mt-5 gap-1.5 text-[16px] font-agdasima font-bold mb-4 text-primaryColor ">
                  Services :-
                  <ul className="pl-2.5 ">
                    {data?.data.services?.map((i) => (
                      <li
                        className=" flex items-center font-playwrite  text-custom-sky-blue gap-1.5  text-[16px]"
                        key={i}
                      >
                        <span className=" text-primaryColor text-[10px] mt-[2px]">
                          {" "}
                          <FaDotCircle />
                        </span>{" "}
                        {i}
                      </li>
                    ))}
                  </ul>
                </h2>
                <div className="mt-8 grid sm:grid-cols-3 gap-2 sm:justify-items-center sm:place-items-center">
                  <div className=" ">
                    <p className="text-gray-600 leading-[14px] flex text-[12px] items-center gap-2">
                      <BriefcaseMedical
                        size={18}
                        className=" text-custom-sky-blue"
                      />
                      {data?.data.expertise} year of experience
                    </p>
                  </div>
                  <div className="">
                    <p className=" text-gray-600 leading-[14px] flex text-[12px] items-center gap-2">
                      <FileCheck2 size={18} className=" text-custom-sky-blue" />
                      {data?.data.appointments.length} appointment
                    </p>
                  </div>{" "}
                  <div className="">
                    <p className="text-gray-600 leading-[14px] flex text-[12px] items-center gap-2">
                      <Star size={18} className=" text-custom-sky-blue" />
                      {data?.data.reviews.length} reviews
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className=" px-4 py-4 sm:px-6 lg:px-8">
        <h2 className=" text-[24px] font-agdasima font-bold mb-4 text-custom-sky-blue ">
          Reviews
        </h2>
        <div className="mt-5 grid sm:grid-cols-2 gap-4 lg::grid-cols-3">
          {revsDoc?.data.reviews.map((rev) => (
            <ReviewCard key={rev.documentId} review={rev} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default DoctorPage;
