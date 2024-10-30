import {
  ClincClincsByServices,
  ClinicInHospital,
} from "@/app/store/types.modal";
import { FileCheck2, Star } from "lucide-react";
import React from "react";
import { FaUserDoctor } from "react-icons/fa6";
import { MdMedicalServices } from "react-icons/md";
import { useRouter } from "next/navigation";

interface CardClincProps {
  clinc: ClincClincsByServices | ClinicInHospital;
}
const CardClinc = ({ clinc }: CardClincProps) => {
  const router = useRouter();

  return (
    <div
      onClick={() => router.push("/clinic/" + clinc.documentId)}
      className="rounded-lg p-4 cursor-pointer hover:scale-105 transition-all ease-in-out border-t-custom-sky-blue border-t-2 min-h-[180px] w-full shadow-md"
    >
      <h3 className=" text-custom-sky-blue font-agdasima font-bold text-[17px]">
        {clinc.specializations}
      </h3>
      {"hospital" in clinc && clinc.hospital && (
        <p className="text-[14px] mt-[-2px] text-gray-700">
          {clinc.hospital.name}
        </p>
      )}
      <div className="text-gray-600 flex flex-col items-start justify-start gap-2 pt-4">
        {" "}
        <p className=" leading-[14px] flex text-[13px] items-center gap-2">
          <MdMedicalServices size={16} className=" text-custom-sky-blue" />
          {clinc.services.length} services
        </p>{" "}
        <p className=" leading-[14px] flex text-[13px] items-center gap-2">
          <FaUserDoctor size={16} className=" text-custom-sky-blue" />
          {clinc.doctors.length} doctors
        </p>
        <p className=" leading-[14px] flex text-[13px] items-center gap-2">
          <FileCheck2 size={16} className=" text-custom-sky-blue" />
          {clinc.appointments.length} appointment
        </p>{" "}
        <p className=" leading-[14px] flex text-[13px] items-center gap-2">
          <Star size={16} className=" text-custom-sky-blue" />
          {clinc.reviews.length} reviews
        </p>
      </div>
    </div>
  );
};

export default CardClinc;
