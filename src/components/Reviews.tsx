"use client";
import React from "react";
import ReviewCard from "./ReviewCard";
import { useGetAllReviewsQuery } from "@/app/store/apislice";
const Reviews = () => {
  const { data } = useGetAllReviewsQuery();
  return (
    <section className="">
      <div className="mx-auto max-w-screen-2xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <div className="md:flex md:items-end md:justify-between">
          <div className="">
            <h2 className="text-primaryColor font-agdasima  leading-8 sm:leading-normal text-[32px] font-bold mb-2 sm:mb-5">
              Read trusted reviews from our customers
            </h2>

            <p className=" text-[14px] sm:text-[16px] w-[85%] leading-relaxed text-gray-600">
              We value our customers&apos; feedback, which highlights our
              commitment to quality and exceptional service. Their insights
              inspire us to continuously improve and innovate.
            </p>
          </div>

          {/* <a
            href="#"
            className="mt-6 inline-flex shrink-0 items-center gap-2 rounded-full border-2 border-primaryColor px-5 py-3 text-primaryColor transition hover:bg-primaryColor hover:text-white md:mt-0  shadow-md"
          >
            <span className="font-medium"> Read all reviews </span>
          </a> */}
        </div>

        <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-3">
          {data?.data.map((rev) => (
            <ReviewCard key={rev.documentId} review={rev} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reviews;
