"use client";
import {
  useGetAllClincsInHospitalQuery,
  useGetAllDoctorsInHospitalQuery,
  useGetAllReviewsInHospitalQuery,
  useGetHospitalQuery,
} from "@/app/store/apislice";
import { useParams } from "next/navigation";
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
//@ts-ignore
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import React, { useEffect, useState } from "react";
import { FaLocationDot } from "react-icons/fa6";
import { FaCheckCircle, FaPhoneAlt } from "react-icons/fa";
import { MdAccessTimeFilled, MdLocalHospital } from "react-icons/md";
import { FaAmbulance } from "react-icons/fa";
import Image from "next/image";
import { FaDotCircle } from "react-icons/fa";
import CardDoctor from "@/components/CardDoctor";
import CardClinc from "@/components/CardClinc";
import { ClinicInHospital } from "@/app/store/types.modal";
import ReviewCard from "@/components/ReviewCard";
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
function filterClinicsByService(
  clinics: ClinicInHospital[],
  serviceDocumentId: string
): ClinicInHospital[] {
  return clinics.filter((clinic) =>
    clinic.services.some((service) => service.documentId === serviceDocumentId)
  );
}

const HospitalPage = () => {
  const { id } = useParams();
  const { data } = useGetHospitalQuery(id as string);
  const { data: doctors } = useGetAllDoctorsInHospitalQuery(id as string);
  const { data: clincsData } = useGetAllClincsInHospitalQuery(id as string);
  const { data: ReviewsData } = useGetAllReviewsInHospitalQuery(id as string);

  // `activeService` stores the currently selected service documentId
  const [activeService, setActiveService] = useState<string | null>(null);
  const [clincs, setClincs] = useState<ClinicInHospital[] | undefined>();

  // Set the initial activeService once the hospital data is available
  useEffect(() => {
    if (data?.data.services && data.data.services.length > 0) {
      setActiveService(data.data.services[0].documentId);
    }
  }, [data]);

  // Filter the clinics based on the active service when clincsData or activeService changes
  useEffect(() => {
    if (clincsData?.data.clincs && activeService) {
      const filteredClinics = filterClinicsByService(
        clincsData.data.clincs,
        activeService
      );
      setClincs(filteredClinics);
    }
  }, [clincsData, activeService]);
  console.log(clincs);
  return (
    <div className=" min-h-[70vh] pb-12">
      <div className=" relative h-fit w-full">
        <Image
          width={500}
          height={500}
          priority
          src={data?.data.mainImage.url as string}
          className=" h-[580px] shadow-lg w-full object-cover object-top"
          alt=""
        />
        <div className=" bg-[#ffffff9e] shadow-lg  py-8 px-12 z-10 absolute left-0 top-[50%] translate-y-[-50%] w-full md:w-[78%] lg:w-[68%] xl:w-[58%] h-fit md:h-[265px]">
          <h2 className="text-primaryColor flex items-center gap-2 text-[28px] md:text-[36px] font-agdasima font-bold">
            <span className=" text-custom-sky-blue text-[18px]">
              {" "}
              {data?.data.isFeatured && <FaCheckCircle />}
            </span>{" "}
            {data?.data.name}
          </h2>
          <p className="mt-2 flex items-center gap-2 text-gray-700 md:text-[18px] font-playwrite  ">
            <span className=" text-custom-sky-blue text-[18px]">
              {" "}
              <FaLocationDot />{" "}
            </span>
            {data?.data.address}
          </p>
          <p className="mt-3 pl-0.5 flex items-center gap-2 text-gray-700 text-[14px] md:text-[16px] font-playwrite ">
            {" "}
            <span className=" text-custom-sky-blue text-[18px]">
              {" "}
              <FaPhoneAlt />{" "}
            </span>
            {data?.data?.phones && joinWithDash(data?.data?.phones)}
          </p>
          <p className="mt-3 pl-0.5 flex items-center gap-2 text-gray-700 text-[14px] md:text-[16px] font-playwrite ">
            {" "}
            <span className=" text-custom-sky-blue text-[18px]">
              {" "}
              <MdAccessTimeFilled />{" "}
            </span>
            {data?.data?.startTime &&
              convertTo12HourFormat(data?.data?.startTime)}{" "}
            -{" "}
            {data?.data?.endTime && convertTo12HourFormat(data?.data?.endTime)}
          </p>
          <p className="mt-3 pl-0.5 flex items-center gap-2 text-gray-700 text-[14px] md:text-[16px] font-playwrite ">
            {data?.data.emergency && (
              <>
                {" "}
                <span className=" text-custom-sky-blue text-[18px]">
                  {" "}
                  <FaAmbulance />{" "}
                </span>{" "}
                Emergency
              </>
            )}{" "}
            -{" "}
            {data?.data.insurance && (
              <>
                {" "}
                <span className=" text-custom-sky-blue text-[18px]">
                  {" "}
                  <MdLocalHospital />{" "}
                </span>{" "}
                Insurance
              </>
            )}
          </p>
        </div>
      </div>
      <div className=" border-b-2 border-b-custom-sky-blue p-4 rounded-xl mb-12 pt-2.5">
        <h2 className=" text-[26px] text-center  font-agdasima font-bold mb-4 text-custom-sky-blue ">
          Our Specializations
        </h2>
        <ul className="flex-wrap flex items-center justify-center gap-4">
          {data?.data.specializations.map((i) => (
            <li
              className=" flex items-center gap-1.5  text-gray-600 text-[18px]"
              key={i}
            >
              <span className=" text-custom-sky-blue text-[10px] mt-[2px]">
                {" "}
                <FaDotCircle />
              </span>{" "}
              {i}
            </li>
          ))}
        </ul>
      </div>
      <div className=" pb-12">
        <h2 className=" text-[24px] font-agdasima font-bold mb-4 text-custom-sky-blue ">
          Our Services
        </h2>
        <div className=" border-b-2 border-b-custom-sky-blue rounded-xl shadow-md py-4 px-3 flex items-center justify-start">
          {data?.data.services.map((ser) => (
            <p
              key={ser.documentId}
              className={`cursor-pointer py-3  px-3 bg-gray-200 mx-2 rounded-lg shadow-md font-bold font-agdasima ${
                activeService === ser.documentId
                  ? "text-custom-sky-blue"
                  : "text-primaryColor"
              }`}
              onClick={() => setActiveService(ser.documentId)} // Update the active service
            >
              {ser.name}
            </p>
          ))}
        </div>
        <div className=" py-6  grid  gap-4 sm:grid-cols-2 md:grid-c-3 lg:grid-cols-4 xl:grid-cols-5">
          {clincs?.map((clinc) => (
            <CardClinc key={clinc.documentId} clinc={clinc} />
          ))}
        </div>
      </div>
      <div className=" pb-6">
        <h2 className=" text-[24px] font-agdasima font-bold mb-4 text-custom-sky-blue ">
          Our Doctors
        </h2>
        <div className=" grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {doctors?.data?.doctors.map((doctor) => (
            <CardDoctor key={doctor.documentId} doctor={doctor} />
          ))}
        </div>
      </div>
      <div className="pb-4 pt-12">
        <h2 className=" text-[24px] font-agdasima lg:font-bold mb-4 font-bold text-custom-sky-blue ">
          Hospital Gallery
        </h2>{" "}
        <Splide
          options={{
            type: "loop",
            perPage: 2,
            padding: "90px",
            breakpoints: {
              1024: { perPage: 1, padding: "0px" },
            },
          }}
        >
          {data?.data.images.map((image) => (
            <SplideSlide key={image.documentId}>
              <div className="">
                <Image
                  width={700}
                  height={700}
                  src={image.url}
                  alt="Hospital 1"
                  className="px-1 w-full object-cover object-top md:h-[330px] sm:px-4"
                  loading="lazy"
                />
              </div>
            </SplideSlide>
          ))}
        </Splide>
      </div>{" "}
      <div className=" py-12">
        <h2 className=" text-[24px] font-agdasima font-bold mb-4 text-custom-sky-blue ">
          Reviews
        </h2>
        <div className="mt-5 grid grid-cols-1 gap-4 md:grid-cols-3">
          {ReviewsData?.data.reviews?.map((review) => (
            <ReviewCard key={review.documentId} review={review} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default HospitalPage;
