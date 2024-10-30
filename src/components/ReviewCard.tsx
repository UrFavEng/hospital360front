import {
  AllReviewsInHospital,
  ReviewGetAllReviews,
  ReviewRevDoc,
  ReviewReviewsInClincRES,
} from "@/app/store/types.modal";
import { Rating } from "@mui/material";
import Link from "next/link";
import React from "react";
interface ReviewCardProps {
  review:
    | AllReviewsInHospital
    | ReviewGetAllReviews
    | ReviewRevDoc
    | ReviewReviewsInClincRES;
}
const ReviewCard = ({ review }: ReviewCardProps) => {
  return (
    <blockquote className="flex h-full flex-col justify-between  shadow-lg p-6 border-t-custom-sky-blue border-t-2 rounded-lg sm:px-8 sm:py-4 ">
      <div>
        <div className="mt-4">
          <p className="text-sm font-bold font-agdasima gap-2 flex items-center text-custom-sky-blue sm:text-md">
            {review?.imageURL ? (
              <img
                src={review?.imageURL}
                alt=""
                className=" w-[50px] rounded-full h-[50px] object-contain border shadow-md "
              />
            ) : (
              <div className=" w-[50px] rounded-full h-[50px] border shadow-md"></div>
            )}
            <span className=" flex items-start flex-col">
              {" "}
              {review.userName}
              <Rating
                name="read-only"
                value={review.rating}
                readOnly
                size="small"
              />
            </span>
          </p>

          <p className="mt-2 text-[13px] sm:text-[15px] text-gray-700">
            {review.comment}
          </p>
        </div>
      </div>

      <footer className="mt-4 text-[12px] font-bold  text-gray-800 sm:mt-4">
        &mdash;{" "}
        <Link
          href={"/hospitals/" + review?.hospital?.documentId}
          className=" hover:underline text-custom-sky-blue cursor-pointer"
        >
          {review?.hospital?.name}
        </Link>{" "}
        &mdash;{" "}
        <Link
          href={"/clinic/" + review?.clinc?.documentId}
          className=" hover:underline text-custom-sky-blue cursor-pointer"
        >
          {review?.clinc?.specializations}
        </Link>{" "}
        &mdash;
        <Link href={"/doctors/" + review?.doctor?.documentId}>
          {" "}
          Dr:{" "}
          <span className=" hover:underline text-custom-sky-blue cursor-pointer">
            {review?.doctor?.name}{" "}
          </span>
        </Link>
      </footer>
    </blockquote>
  );
};

export default ReviewCard;
