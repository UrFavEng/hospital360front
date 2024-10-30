import {
  useDeleteRevMutation,
  useEditReviewMutation,
} from "@/app/store/apislice";
import { AppointmentappUser } from "@/app/store/types.modal";
import { Rating } from "@mui/material";
import React, { useEffect, useState } from "react";
import { MdDelete } from "react-icons/md";
import { PulseLoader } from "react-spinners";
import Swal from "sweetalert2";
interface EditReviewProps {
  setEditReview: (val: boolean) => void;
  app: AppointmentappUser;
}
const EditReview = ({ setEditReview, app }: EditReviewProps) => {
  console.log(app);
  const [rating, setRating] = useState<number | null>(0);
  const [comment, setComment] = useState("");
  const [editRev, { isLoading }] = useEditReviewMutation();
  const [deleteRev, { isLoading: loadingDelete }] = useDeleteRevMutation();
  useEffect(() => {
    if (app.review) {
      setRating(app?.review?.rating);
      setComment(app?.review?.comment);
    }
  }, [app.review]);
  const DeleteRev = () => {
    deleteRev(app.review.documentId)
      .unwrap()
      .then((done) => {
        console.log(done);
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Done",
          showConfirmButton: false,
          timer: 1500,
        });
        setEditReview(false);
      })
      .catch((err) => {
        console.log(err);
        Swal.fire({
          position: "center",
          icon: "error",
          title: "Try later",
          showConfirmButton: false,
          timer: 1500,
        });
      });
  };
  const handleEdit = () => {
    const body = { data: { comment, rating } };
    editRev({ body, id: app.review.documentId })
      .unwrap()
      .then((done) => {
        console.log(done);
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Done",
          showConfirmButton: false,
          timer: 1500,
        });
        setEditReview(false);
      })
      .catch((err) => {
        console.log(err);
        Swal.fire({
          position: "center",
          icon: "error",
          title: "Try later",
          showConfirmButton: false,
          timer: 1500,
        });
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
          onClick={() => setEditReview(false)}
          className=" cursor-default absolute h-[100%] w-[100%] top-0 left-0 bg-[#00000032]"
        ></div>
        <div className="popup mx-4 flex items-start flex-col justify-between px-6 py-4 relative z-30 bg-white shadow-2xl  rounded-xl w-[95%] sm:w-[480px]  h-fit border-2  font-agdasima">
          <h3 className=" w-full flex items-center justify-between text-primaryColor mb-4 font-bold text-[22px]">
            Edit Review{" "}
            {loadingDelete ? (
              <>
                <PulseLoader size={8} color="#dc2626" />
              </>
            ) : (
              <>
                {" "}
                <span className=" cursor-pointer" onClick={() => DeleteRev()}>
                  <MdDelete color="#dc2626" />
                </span>
              </>
            )}
          </h3>
          <div className=" w-full">
            <textarea
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              title="You review"
              placeholder="Your review"
              className=" block w-full pl-5 pt-4 text-gray-600 bg-backgroundPri rounded-md shadow-md  resize-none h-[200px] outline-none"
            ></textarea>
            <Rating
              className=" mt-3.5"
              size="medium"
              name="simple-controlled"
              value={rating}
              onChange={(event, newValue) => {
                setRating(newValue);
              }}
            />
            {isLoading ? (
              <>
                <PulseLoader color="#0f67b1" size={13} className=" mt-2" />
              </>
            ) : (
              <>
                {" "}
                <button
                  onClick={handleEdit}
                  type="button"
                  className=" block px-4 rounded-md text-[19px] mt-2.5 shadow-md text-white hover:text-primaryColor transition-all ease-in-out outline-none border-none py-1.5 bg-custom-sky-blue hover:bg-custom-blue"
                >
                  Edit
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditReview;
