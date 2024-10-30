import { useAddReviewMutation } from "@/app/store/apislice";
import { useUser } from "@clerk/nextjs";
import { Rating } from "@mui/material";
import React, { useState } from "react";
import { PulseLoader } from "react-spinners";
import Swal from "sweetalert2";
interface AddReviewProps {
  setAddReview: (val: boolean) => void;
  hos: string;
  doc: string;
  app: string;
  clinic: string;
}
const AddReview = ({ setAddReview, app, hos, doc, clinic }: AddReviewProps) => {
  const [rating, setRating] = useState<number | null>();
  const [comment, setComment] = useState("");
  const [addReview, { isLoading }] = useAddReviewMutation();
  const { user } = useUser();
  const handleAdd = () => {
    if (user) {
      const body = {
        data: {
          userName: user?.fullName,
          reviewed: `${app}${user?.id}`,
          rating,
          comment,
          hospital: hos,
          clinc: clinic,
          doctor: doc,
          appointment: app,
          imageURL: user?.imageUrl,
        },
      };
      addReview(body)
        .unwrap()
        .then((done) => {
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Done",
            showConfirmButton: false,
            timer: 1500,
          });
          setAddReview(false);
          console.log(done);
        })
        .catch((err) => {
          if (err.status === 400) {
            Swal.fire({
              position: "center",
              icon: "info",
              title: "Done",
              showConfirmButton: false,
              timer: 1500,
            });
            setAddReview(false);
          } else {
            Swal.fire({
              position: "center",
              icon: "error",
              title: "Try later",
              showConfirmButton: false,
              timer: 1500,
            });
          }
          console.log(err);
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
    <div className="relative z-20 flex justify-center">
      <div
        className="fixed flex items-center justify-center inset-0 z-10 overflow-y-auto "
        aria-labelledby="modal-title"
        role="dialog"
        aria-modal="true"
      >
        <div
          onClick={() => setAddReview(false)}
          className=" cursor-default absolute h-[100%] w-[100%] top-0 left-0 bg-[#00000032]"
        ></div>
        <div className="popup mx-4 flex items-start flex-col justify-between px-6 py-4 relative z-30 bg-white shadow-2xl  rounded-xl w-[95%] sm:w-[480px]  h-fit border-2  font-agdasima">
          <h3 className=" text-primaryColor mb-4 font-bold text-[22px]">
            Add Review
          </h3>
          <div className=" w-full">
            <textarea
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
                  onClick={handleAdd}
                  type="button"
                  className=" block px-4 rounded-md text-[19px] mt-2.5 shadow-md text-white hover:text-primaryColor transition-all ease-in-out outline-none border-none py-1.5 bg-custom-sky-blue hover:bg-custom-blue"
                >
                  Send
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddReview;
