import { useRouter } from "next/navigation";
import React, { useState } from "react";
import DeleteApp from "./DeleteApp";
import EditReview from "./EditReview";
import AddReview from "./AddReview";
import { MdDelete } from "react-icons/md";
import { AppointmentappUser } from "@/app/store/types.modal";
function convertTo12HourFormat(timeString: string): string {
  // eslint-disable-next-line prefer-const
  let [hours, minutes] = timeString?.split(":")?.map(Number);
  let period: "AM" | "PM" = "AM";

  // تحديد الفترة AM أو PM
  if (hours >= 12) {
    period = "PM";
    if (hours > 12) {
      hours -= 12;
    }
  } else if (hours === 0) {
    hours = 12; // تحويل الساعة 00:00 إلى 12:00 AM
  }

  // تحويل الساعات إلى نص لضمان ظهورها بصيغة صحيحة
  const formattedHours = hours.toString().padStart(2, "0");

  return `${formattedHours}:${minutes.toString().padStart(2, "0")} ${period}`;
}
interface AppCardProps {
  app: AppointmentappUser;
}
const AppCard = ({ app }: AppCardProps) => {
  const router = useRouter();
  const [deleteApp, setdeleteApp] = useState(false);
  const [addReview, setAddReview] = useState(false);
  const [editReview, setEditReview] = useState(false);
  return (
    <div className=" shadow-lg border-t-2 border-t-custom-sky-blue rounded-lg p-5">
      {deleteApp && <DeleteApp id={app.documentId} setDelete={setdeleteApp} />}
      {editReview && <EditReview app={app} setEditReview={setEditReview} />}
      {addReview && (
        <AddReview
          hos={app.hospital.documentId}
          doc={app.doctor.documentId}
          app={app.documentId}
          clinic={app.clinc.documentId}
          setAddReview={setAddReview}
        />
      )}
      <h3 className="text-custom-sky-blue flex items-center justify-between text-[20px] font-agdasima font-bold">
        {app.name}{" "}
        <span className=" cursor-pointer" onClick={() => setdeleteApp(true)}>
          <MdDelete color="#dc2626" />
        </span>
      </h3>
      <p className="text-primaryColor">{convertTo12HourFormat(app.time)}</p>
      <p
        onClick={() => router.push(`/hospitals/${app.clinc.documentId}`)}
        className="text-custom-sky-blue mt-3.5 cursor-pointer text-[15px] font-playwrite font-bold"
      >
        <span className="cursor-default font-agdasima text-primaryColor text-[14px]">
          Hospital:{" "}
        </span>
        <span className="hover:underline"> {app.hospital.name} </span>
      </p>
      <p
        onClick={() => router.push(`/clinic/${app.clinc.documentId}`)}
        className="text-custom-sky-blue cursor-pointer font-playwrite font-bold"
      >
        <span className="cursor-default font-agdasima text-primaryColor text-[14px]">
          Clinic:{" "}
        </span>
        <span className="hover:underline"> {app.clinc.specializations} </span>
      </p>
      <p className="text-custom-sky-blue font-playwrite  cursor-pointer  font-bold">
        <span className="  font-agdasima cursor-default text-primaryColor text-[14px]">
          Doctor:{" "}
        </span>
        <span className="hover:underline"> {app.doctor.name} </span>
      </p>
      <div className=" mt-5 flex items-center gap-4">
        {app.review ? (
          <>
            {" "}
            <button
              onClick={() => setEditReview(true)}
              type="button"
              className=" py-1.5 px-3.5 bg-white hover:bg-[#efefef]  rounded-lg shadow-md text-custom-sky-blue  hover:text-custom-blue transition-all ease-in-out"
            >
              Reviewed
            </button>
          </>
        ) : (
          <>
            {" "}
            <button
              onClick={() => setAddReview(true)}
              type="button"
              className=" py-1.5 px-3.5 bg-white hover:bg-[#efefef]  rounded-lg shadow-md text-custom-sky-blue  hover:text-custom-blue transition-all ease-in-out"
            >
              Add review
            </button>
          </>
        )}

        <button
          type="button"
          className=" py-1.5 px-3.5 bg-custom-sky-blue hover:bg-[#0f68b1ea] rounded-lg shadow-md text-gray-200 hover:text-white  transition-all ease-in-out"
        >
          Edit
        </button>
      </div>
    </div>
  );
};

export default AppCard;
