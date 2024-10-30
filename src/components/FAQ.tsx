"use client";
import React, { useState } from "react";

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<string | null>(null); // to track which item is open

  const toggleDetails = (index: string) => {
    // Toggle between opening and closing the item
    setOpenIndex(openIndex === index ? null : index);
  };
  const faqs = [
    {
      question: "How can I book an appointment with a doctor?",
      answer:
        "To book an appointment, visit the clinic page, scroll down, select the doctor's name and the desired time, and click 'Submit.' You will receive a confirmation email once your appointment is successfully booked.",
    },
    {
      question:
        "What should I do if I need to cancel or reschedule my appointment?",
      answer:
        "If you need to cancel or reschedule your appointment, please log in to your account, go to your appointments section, and select the option to cancel or reschedule. You will be prompted to choose a new date and time if rescheduling.",
    },
    {
      question: "How can I leave a review for a doctor or hospital?",
      answer:
        "To leave a review, go to your appointments page, select the booking you wish to review, and submit your feedback. Your review will be posted after moderation to ensure quality.",
    },
  ];

  // Example usage
  console.log(faqs);

  return (
    <div className="space-y-4 pb-12 py-10 px-4 sm:px-6 lg:px-8">
      {" "}
      <h2 className="text-primaryColor font-agdasima text-[32px] font-bold mb-2 sm:mb-6">
        Popular Questions
      </h2>
      {faqs.map((index) => (
        <div
          key={index.answer}
          className="group border-s-4 border-custom-sky-blue bg-gray-50 p-6 [&_summary::-webkit-details-marker]:hidden"
        >
          <div
            className="flex cursor-pointer items-center justify-between gap-1.5"
            onClick={() => toggleDetails(index.answer)}
          >
            <h2 className=" text-[18px] font-bold  font-agdasima text-custom-sky-blue">
              {index.question}
            </h2>

            <span className="shrink-0 rounded-full bg-white p-1.5 text-custom-sky-blue sm:p-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className={`size-5 shrink-0 transition duration-300 ${
                  openIndex === index.answer ? "-rotate-45" : ""
                }`}
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
                  clipRule="evenodd"
                />
              </svg>
            </span>
          </div>

          <div
            className={`mt-4 overflow-hidden transition-all duration-500 ${
              openIndex === index.answer
                ? "max-h-40 opacity-100"
                : "max-h-0 opacity-0"
            }`}
          >
            <p className="lg:leading-relaxed text-[14px] md:text-[17px] text-gray-500">
              {index.answer}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FAQ;
