"use client";
import {
  useAddAppointmentMutation,
  useGetClincWithDoctorsQuery,
  useGetClincWithReviewsQuery,
  useGetClinicWithServicesQuery,
} from "@/app/store/apislice";
import { IoIosArrowDroprightCircle } from "react-icons/io";
import CardDoctor from "@/components/CardDoctor";
import ReviewCard from "@/components/ReviewCard";
import { useParams } from "next/navigation";
import React, { useState } from "react";
import { FaDotCircle, FaHospital } from "react-icons/fa";
import { FaClinicMedical } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import dayjs, { Dayjs } from "dayjs";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { TimePicker } from "@mui/x-date-pickers/TimePicker";
import { useUser } from "@clerk/nextjs";
import Swal from "sweetalert2";
import { PulseLoader } from "react-spinners";

const ClinicPage = () => {
  const { user } = useUser();
  const [value, setValue] = useState<Dayjs | null>(dayjs());
  const { id } = useParams();
  const { data: ClincWithreviews } = useGetClincWithReviewsQuery(id as string);
  const { data: GetClincWithDoctors } = useGetClincWithDoctorsQuery(
    id as string
  );
  const { data: ClincWithServices } = useGetClinicWithServicesQuery(
    id as string
  );
  const [add, { isLoading }] = useAddAppointmentMutation();
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    const currentDate = new Date().toISOString().split("T")[0];
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const firstInput = form.elements[0] as HTMLInputElement;
    const secInput = form.elements[1] as HTMLInputElement;
    console.log(firstInput.value, secInput.value);
    const formattedTime = value ? value.format("HH:mm:ss.SSS") : null;
    if (user && firstInput.value) {
      const body = {
        data: {
          name: firstInput.value,
          doctor: secInput.value, // use the value of the input element
          hospital: ClincWithreviews?.data.hospital.documentId,
          clinc: ClincWithreviews?.data.documentId,
          idSick: user?.id,
          time: formattedTime,
          done: `${user.fullName}${firstInput.value}${currentDate}`,
        },
      };

      add(body)
        .unwrap()
        .then((fullfiled) => {
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Done",
            showConfirmButton: false,
            timer: 1500,
          });
          console.log(fullfiled);
        })
        .catch((error) => {
          if (error.status === 400) {
            Swal.fire({
              position: "center",
              icon: "info",
              title: "Done",
              showConfirmButton: false,
              timer: 1500,
            });
          } else {
            Swal.fire({
              position: "center",
              icon: "error",
              title: "Try later",
              showConfirmButton: false,
              timer: 1500,
            });
          }
          console.log(error);
        });
    } else {
      Swal.fire({
        position: "center",
        icon: "error",
        title: "You must login first!",
        showConfirmButton: false,
        timer: 1500,
      });
    }
  };

  return (
    <div className=" min-h-[70vh] py-12">
      <div>
        <nav aria-label="Breadcrumb" className="flex mb-4">
          <ol className="flex overflow-hidden rounded-lg border border-gray-200 text-gray-600">
            <li className="flex items-center">
              <a
                href="#"
                className="flex h-10 items-center  bg-gray-100 px-4 transition hover:text-gray-900"
              >
                <h1 className="text-sm flex items-center gap-1.5 font-semibold text-start text-custom-sky-blue font-agdasima capitalize lg:text-md">
                  <span className=" text-custom-sky-blue  text-[16px]">
                    {" "}
                    <FaHospital />
                  </span>{" "}
                  {ClincWithreviews?.data.hospital.name}
                </h1>
              </a>
            </li>

            <li className="relative flex items-center">
              <span className="absolute inset-y-0 -start-px h-10 w-4 bg-gray-100 [clip-path:_polygon(0_0,_0%_100%,_100%_50%)] rtl:rotate-180"></span>

              <a className="flex h-10 items-center bg-white pe-4 ps-8 text-xs font-medium transition hover:text-gray-900">
                <h2 className="text-[13px] flex items-center gap-1.5 font-semibold text-start text-primaryColor font-agdasima capitalize lg:text-sm">
                  <span className="text-primaryColor text-[15px]">
                    <FaClinicMedical />
                  </span>{" "}
                  {ClincWithreviews?.data.specializations}
                </h2>{" "}
              </a>
            </li>
          </ol>
        </nav>
      </div>
      <p className="text-sm flex items-center gap-3 pl-[9px] mb-4 font-semibold text-start text-gray-700 font-playwrite capitalize lg:text-[12px]">
        <span className=" text-gray-700 bg-gray-300 rounded-full py-1 px-1 text-[10px]">
          {" "}
          <FaLocationDot />{" "}
        </span>
        {ClincWithreviews?.data.hospital.address}
      </p>
      <div className=" py-6">
        <h2 className=" text-[24px] font-agdasima font-bold mb-4 text-custom-sky-blue ">
          Our Doctors
        </h2>
        <div className=" grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {GetClincWithDoctors?.data?.doctors.map((doctor) => (
            <CardDoctor key={doctor.documentId} doctor={doctor} />
          ))}
        </div>
      </div>{" "}
      <div className=" px-4 pb-8 border-y-4 rounded-xl border-y-custom-sky-blue pt-8 my-8">
        <h2 className=" flex items-center gap-1.5 text-[18px] font-agdasima font-bold mb-4 text-primaryColor ">
          Our Services{" "}
          <IoIosArrowDroprightCircle className=" text-custom-sky-blue text-[20px]" />{" "}
          <ul className="pl-2.5 flex items-center gap-5">
            {ClincWithServices?.data.services?.map((i) => (
              <li
                className=" flex items-center font-playwrite  text-custom-sky-blue gap-1.5  text-[16px]"
                key={i.documentId}
              >
                <span className=" text-primaryColor text-[10px] mt-[2px]">
                  {" "}
                  <FaDotCircle />
                </span>{" "}
                {i.name}
              </li>
            ))}
          </ul>
        </h2>
        <h2 className=" text-[28px] font-agdasima font-bold text-custom-sky-blue ">
          Book Your Appointment Now
        </h2>
        <form onSubmit={handleSubmit}>
          <p className=" text-gray-500 font-playwrite text-[16px]">
            Appointments are available on a daily basis, no prior booking
            required.
          </p>
          <div className="mt-6 mb-3 flex flex-col gap-2">
            {" "}
            <label
              htmlFor="UserName"
              className=" text-[18px] w-fit text-primaryColor cursor-pointer"
            >
              FullName
            </label>
            <input
              required
              type="text"
              id="UserName"
              className=" text-gray-600 transition-all ease-in-out cursor-pointer bg-transparent border border-gray-300 focus:border-2 hover:border mt-1 focus:border-custom-sky-blue hover:border-gray-900 pl-2 shadow-lg outline-none h-[56px] rounded-md sm:w-[350px]"
            />
          </div>

          <div className=" flex gap-4 sm:gap-6 flex-col sm:flex-row sm:items-end mb-4">
            {" "}
            <div className=" flex flex-col gap-1">
              {" "}
              <label
                htmlFor="doc"
                className=" text-[18px] w-fit text-primaryColor cursor-pointer"
              >
                Choose your doctor
              </label>
              <select
                required
                id="doc"
                title="Choose a Doctor"
                className="text-gray-600 transition-all ease-in-out cursor-pointer bg-transparent border border-gray-300 focus:border-2 hover:border mt-1 focus:border-custom-sky-blue hover:border-gray-900 pl-2 shadow-lg outline-none h-[56px] rounded-md sm:w-[350px]"
              >
                {GetClincWithDoctors?.data.doctors.map((doc) => (
                  <option value={doc.documentId} key={doc.documentId}>
                    {doc.name}
                  </option>
                ))}
              </select>
            </div>
            <div className=" flex flex-col gap-1">
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DemoContainer components={["TimePicker", "TimePicker"]}>
                  <TimePicker
                    className="  transition-all ease-in-out shadow-lg"
                    label="Select Appointment Time:"
                    value={value}
                    onChange={(newValue) => setValue(newValue)}
                  />
                </DemoContainer>
              </LocalizationProvider>
            </div>
          </div>

          {isLoading ? (
            <>
              <PulseLoader color="#0f67b1" />
            </>
          ) : (
            <input
              type="submit"
              value="Submit"
              className=" bg-custom-sky-blue transition-all ease-in-out hover:bg-custom-blue hover:text-gray-50 text-gray-300 cursor-pointer  py-2 px-3.5 rounded-lg shadow-lg"
            />
          )}
          <p className=" text-gray-500 font-playwrite text-[16px]  mt-3.5">
            There might be a waiting period of up to{" "}
            <span className=" text-red-500 font-bold  font-agdasima">
              {" "}
              30 minutes{" "}
            </span>
            or less.
          </p>
        </form>
      </div>
      <div className=" pt-6">
        <h2 className=" text-[24px] font-agdasima font-bold mb-4 text-custom-sky-blue ">
          Reviews
        </h2>
        <div className="mt-5 grid grid-cols-1 gap-4 md:grid-cols-3">
          {ClincWithreviews?.data.reviews?.map((review) => (
            <ReviewCard key={review.documentId} review={review} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ClinicPage;
