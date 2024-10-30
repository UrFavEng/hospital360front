import { useDeleteAppointmentMutation } from "@/app/store/apislice";
import React from "react";
import { PulseLoader } from "react-spinners";
interface DeleteAppProps {
  id: string;
  setDelete: (val: boolean) => void;
}
const DeleteApp = ({ id, setDelete }: DeleteAppProps) => {
  const [deleteApp, { isLoading }] = useDeleteAppointmentMutation();
  const handleDelete = () => {
    deleteApp(id)
      .unwrap()
      .then((done) => {
        console.log(done);
        setDelete(false);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div className="relative z-20 flex justify-center">
      <div
        className="fixed flex items-center justify-center inset-0 z-10 overflow-y-auto "
        aria-labelledby="modal-title"
        role="dialog"
        aria-modal="true"
      >
        <div
          onClick={() => setDelete(false)}
          className=" cursor-default absolute h-[100%] w-[100%] top-0 left-0 bg-[#00000032]"
        ></div>
        <div className="popup mx-4 flex items-start flex-col justify-between px-6 py-4 relative z-30 bg-white shadow-2xl  rounded-xl w-[380px]  h-[135px] border-2  font-agdasima">
          <h3 className=" text-red-600 font-bold text-[22px]">
            Delete Appointment
          </h3>
          <div className=" mt-4 flex items-center gap-2.5">
            {isLoading ? (
              <>
                <PulseLoader color="#dc2626" />
              </>
            ) : (
              <>
                {" "}
                <button
                  onClick={() => setDelete(false)}
                  type="button"
                  className=" py-1.5 px-3.5 bg-custom-sky-blue hover:bg-[#0f68b1ea]  rounded-lg shadow-md text-gray-50  hover:text-gray-200 transition-all ease-in-out"
                >
                  Cancel
                </button>
                <button
                  onClick={() => handleDelete()}
                  type="button"
                  className=" py-1.5 px-3.5    bg-red-700 hover:bg-red-500 rounded-lg shadow-md text-gray-50 hover:text-gray-300  transition-all ease-in-out"
                >
                  Delete
                </button>
              </>
            )}
          </div>
        </div>
      </div>{" "}
      <style>{`
  .popup {
    transform: translateY(-10%); /* تبدأ من خارج الشاشة */
    animation: slideDown 0.3s forwards;
  }

  @keyframes slideDown {
    to {
      transform: translateY(0); /* تتحرك لمكانها الطبيعي */
    }
  }
`}</style>
    </div>
  );
};

export default DeleteApp;
