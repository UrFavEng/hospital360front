import {
  DoctorDoctorInClinic,
  DoctorGetAllDoctorsInHospital,
  GetAllDoctors,
} from "@/app/store/types.modal";
import { BriefcaseMedical, FileCheck2, Star } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
interface CardDoctorProps {
  doctor: DoctorGetAllDoctorsInHospital | GetAllDoctors | DoctorDoctorInClinic;
}
const CardDoctor = ({ doctor }: CardDoctorProps) => {
  return (
    <Link
      href={`/doctors/${doctor.documentId}`}
      className="block rounded-lg p-4  hover:scale-95 transition ease-in-out shadow-md"
    >
      <Image
        width={700}
        height={384}
        loading="lazy" // Lazy loading for better performance
        alt="Doctor"
        src={doctor?.image?.url}
        className="h-96 w-full rounded-md object-top object-cover"
      />
      <div className="mt-2">
        <dl>
          <div>
            <h4 className=" font-agdasima  text-[18px] font-bold  text-primaryColor">
              {doctor.name}
            </h4>
          </div>

          <div>
            <p className=" text-[14px] text-gray-600 mt-[-4px]">
              {doctor.specialty}
            </p>
          </div>
        </dl>

        <div className="mt-4 grid grid-cols-3 gap-2 justify-items-center place-items-center">
          <div className=" ">
            <p className="text-gray-600 leading-[14px] flex text-[12px] items-center gap-2">
              <BriefcaseMedical size={18} className=" text-custom-sky-blue" />
              {doctor.expertise} year of <br /> experience
            </p>
          </div>
          <div className="">
            <p className="text-gray-600 leading-[14px] flex text-[12px] items-center gap-2">
              <Star size={18} className=" text-custom-sky-blue" />
              {doctor.reviews.length} reviews
            </p>
          </div>
          <div className="">
            <p className=" text-gray-600 leading-[14px] flex text-[12px] items-center gap-2">
              <FileCheck2 size={18} className=" text-custom-sky-blue" />
              {doctor.appointments.length} appointment
            </p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default CardDoctor;
