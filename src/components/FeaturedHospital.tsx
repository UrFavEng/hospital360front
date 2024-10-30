"use client";
import React from "react";
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
//@ts-ignore
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import Image from "next/image";
import { useGetAllHospitalsFeaturedQuery } from "@/app/store/apislice";
import { FaHospital, FaPhoneAlt } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { MdAccessTimeFilled } from "react-icons/md";
import { useRouter } from "next/navigation";
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
const FeaturedHospital = () => {
  const router = useRouter(); // استخدام الـ router للتنقل

  const { data, isLoading } = useGetAllHospitalsFeaturedQuery();
  return (
    <section className=" pb-6 px-4 sm:px-6 lg:px-8 md:py-12">
      <h2 className="text-primaryColor font-agdasima text-[32px] font-bold mb-2 sm:mb-6">
        Featured Hospitals
      </h2>
      <section className="flex items-start flex-col xl:flex-row gap-4">
        <div className="xl:w-[26%]">
          <h4 className="text-[18px] sm:text-[28px] lg:text-[24px] xl:text-[26px] text-custom-sky-blue font-bold font-playwrite">
            Hospitals with Exclusive Features
          </h4>
          <p className="mt-3 text-gray-500 font-bold sm:font-normal text-[12px] sm:text-[15px]">
            Explore hospitals that offer exclusive services and enhanced
            features. Whether it&apos;s specialized departments, advanced
            technology, or unique patient care programs, these hospitals go
            above and beyond to provide top-quality healthcare with added
            benefits. Discover what makes each of these hospitals stand out.
          </p>
        </div>
        <div className="  xl:w-[70%]">
          {isLoading ? (
            <div className=" flex justify-between items-center">
              <div className="skeleton shadow-lg h-[300px] !rounded-none  bg-backgroundPri  w-[15%]"></div>
              <div className="skeleton shadow-lg h-[300px]  !rounded-none  bg-backgroundPri w-[65%]"></div>
              <div className="skeleton shadow-lg h-[300px]  !rounded-none  bg-backgroundPri w-[15%]"></div>
              {/* <PulseLoader
                color="#0f67b1"
                className=" w-full text-center mt-20 text-custom-sky-blue"
              /> */}
            </div>
          ) : (
            <>
              {" "}
              <Splide
                options={{
                  type: "loop",
                  padding: "15%",
                  breakpoints: {
                    1024: {
                      padding: "0", // For screens under 640px (sm)
                    },
                  },
                }}
              >
                {data?.data.map((hos) =>
                  hos.images?.map((image) => (
                    <SplideSlide key={image.documentId}>
                      <div
                        onClick={() =>
                          router.push("/hospitals/" + hos.documentId)
                        }
                        className="relative group"
                      >
                        <Image
                          loading="lazy"
                          width={700}
                          height={700}
                          src={image.url}
                          alt={`Hospital ${hos.name}`} // تحسين وصف الصورة بناءً على اسم المستشفى
                          className="px-1  md:h-[330px] sm:px-4"
                        />
                        {/* Overlay */}
                        <div className="absolute inset-0 p-5 cursor-pointer bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-opacity duration-300">
                          <span className="text-gray-100 font-agdasima flex gap-1.5 items-center text-[13px] sm:text-[34px] sm:mb-4 font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            <span className="text-gray-50 bg-custom-sky-blue rounded-full p-1.5 sm:py-3 sm:px-3 text-[14px] sm:text-[22px]">
                              <FaHospital />
                            </span>
                            {hos.name}
                          </span>
                          <span className="text-gray-100 sm:pl-[9px] py-2 font-agdasima gap-1.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center text-[12px] sm:text-[16px]">
                            <span className="text-gray-50 bg-custom-sky-blue rounded-full p-1 sm:p-1.5 text-[13px] sm:text-[15px]">
                              <FaLocationDot />
                            </span>
                            {hos.address}
                          </span>
                          {hos?.phones && (
                            <span className="text-gray-100 sm:pl-[9px] py-2 font-agdasima gap-1.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center text-[12px] sm:text-[16px]">
                              <span className="text-gray-50 bg-custom-sky-blue rounded-full p-1 sm:p-1.5 text-[13px] sm:text-[15px]">
                                <FaPhoneAlt />
                              </span>
                              {joinWithDash(hos?.phones)}
                            </span>
                          )}
                          <span className="text-gray-100 sm:pl-[9px] py-2 font-agdasima gap-1.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center text-[12px] sm:text-[16px]">
                            <span className="text-gray-50 bg-custom-sky-blue rounded-full p-1 sm:p-1.5 text-[13px] sm:text-[15px]">
                              <MdAccessTimeFilled />
                            </span>
                            {hos?.startTime &&
                              convertTo12HourFormat(hos?.startTime)}{" "}
                            -{" "}
                            {hos?.endTime &&
                              convertTo12HourFormat(hos?.endTime)}
                          </span>
                        </div>
                      </div>
                    </SplideSlide>
                  ))
                )}
              </Splide>
            </>
          )}
        </div>
      </section>
    </section>
  );
};

export default FeaturedHospital;
