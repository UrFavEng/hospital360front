import { HospitalGetAllHospitals } from "@/app/store/types.modal";
import React from "react";
import { FaCheckCircle } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { MdMedicalServices, MdOutlineRateReview } from "react-icons/md";
import { FaUserDoctor } from "react-icons/fa6";
import { useRouter } from "next/navigation";

interface HospitalCardProps {
  hospital: HospitalGetAllHospitals;
}
const HospitalCard = ({ hospital }: HospitalCardProps) => {
  const router = useRouter();
  return (
    <section
      onClick={() => router.push("/hospitals/" + hospital.documentId)}
      className="w-full max-w-sm  mb-2 overflow-hidden bg-[#fbfbfb] transition ease-in-out cursor-pointer hover:scale-105 hover:bg-white rounded-lg shadow-lg "
    >
      <div className=" relative">
        <img
          className="object-cover object-top w-[450px]  h-[250px]"
          src={hospital.mainImage.url}
          alt="avatar"
        />{" "}
        <div className="flex absolute w-full bottom-[0px] items-center px-6 py-3 bg-[#ffffff61]">
          <h1 className="mx-3 text-lg flex items-center gap-1.5 font-semibold text-gray-700">
            <span className=" text-custom-sky-blue text-[16px]">
              {" "}
              <FaCheckCircle />
            </span>
            Featured
          </h1>
        </div>
      </div>

      <div className="px-4 py-3">
        <h1 className="text-[22px] font-agdasima font-semibold text-custom-sky-blue">
          {hospital.name}
        </h1>

        <p className="py-1 leading-5 flex items-center gap-2 text-gray-600">
          <span className=" text-custom-sky-blue text-[16px]">
            {" "}
            <FaLocationDot />{" "}
          </span>
          {hospital.address}
        </p>

        <div className="flex items-center mt-2 gap-1 text-[14px] text-gray-700">
          <span className=" text-custom-sky-blue text-[16px]">
            {" "}
            <MdMedicalServices />
          </span>{" "}
          <h1 className="px-1 text-sm">{hospital.services.length} Services</h1>
        </div>

        <div className="flex items-center mt-2 gap-1 text-[14px] text-gray-700">
          <span className=" text-custom-sky-blue text-[16px]">
            <FaUserDoctor />
          </span>{" "}
          <h1 className="px-1 text-sm">{hospital.doctors.length} Doctors</h1>
        </div>

        <div className="flex items-center mt-2 gap-1 text-[14px] text-gray-700">
          <span className=" text-custom-sky-blue text-[16px]">
            <MdOutlineRateReview />
          </span>{" "}
          <h1 className="px-1 text-sm">{hospital.reviews.length} Reviews</h1>
        </div>
      </div>
    </section>
  );
};

export default HospitalCard;
