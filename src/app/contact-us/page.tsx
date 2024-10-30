"use client";
import Image from "next/image";
import React, { useRef, useState } from "react";
import { useUser } from "@clerk/nextjs";
import Swal from "sweetalert2";
import emailjs from "emailjs-com";
import { PulseLoader } from "react-spinners";

const Page = () => {
  const form = useRef<HTMLFormElement>(null);
  const { user } = useUser();
  const [isLoading, setIsLoading] = useState(false);
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    setIsLoading(true);
    event.preventDefault();
    if (user) {
      // Send the email using EmailJS
      if (form.current) {
        try {
          const result = await emailjs.sendForm(
            "service_uob2p0j", // Your Gmail Service ID
            "template_e339qcp", // Your Template ID from EmailJS
            form.current, // The form data to send
            "q7o27W3T9wHqfUS5e" // Your User ID from EmailJS
          );
          console.log(result);
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Email sent successfully!",
            showConfirmButton: false,
            timer: 1500,
          });
          setIsLoading(false);
        } catch (error) {
          setIsLoading(false);

          console.log(error);
          Swal.fire({
            position: "center",
            icon: "error",
            title: "Failed to send email",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      }
    } else {
      Swal.fire({
        position: "center",
        icon: "error",
        title: "You must login!",
        showConfirmButton: false,
        timer: 1500,
      });
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-[75vh] flex items-center justify-center">
      <section className="relative px-2 xl:px-8 flex flex-col gap-12 md:flex-row  items-center justify-between container mx-4 sm:mx-auto">
        <div className="">
          <div className="mx-auto max-w-lg">
            <h1 className="text-2xl mt-12 font-bold font-agdasima text-primaryColor sm:text-3xl">
              Contact us.
            </h1>

            <p className="mt-[4px] text-[14px] leading-[18px] text-gray-500">
              If you would like to add your hospital to the website or have
              encountered any issues, feel free to contact me and send the
              necessary details.
            </p>
          </div>

          <form
            onSubmit={handleSubmit}
            className=" flex flex-col gap-4 mt-8"
            ref={form}
          >
            {" "}
            <input type="hidden" name={"to_name"} value={"Ahmed Shafek"} />
            <input
              type="hidden"
              name={"from_name"}
              value={user?.fullName ?? ""}
            />
            <div>
              <label htmlFor="Subject" className="sr-only">
                Subject
              </label>

              <div className="relative">
                <input
                  name="Subject"
                  required
                  type="text"
                  className=" rounded-lg transition-all ease-in-out outline-none w-full text-gray-700 font-medium text-[18px] h-12 pl-4 bg-transparent shadow-2xl border-2  focus:border-custom-sky-blue"
                  placeholder="Subject"
                />
              </div>
            </div>
            <div>
              <label htmlFor="email" className="sr-only">
                Email
              </label>

              <div className="relative">
                <input
                  name="user_email"
                  required
                  type="email"
                  className=" rounded-lg text-gray-700  outline-none w-full  font-medium text-[18px] h-12 pl-4 bg-transparent shadow-2xl border-2  focus:border-custom-sky-blue"
                  placeholder="Enter email"
                />

                <span className="absolute inset-y-0 end-0 grid place-content-center px-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="size-4 text-gray-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
                    />
                  </svg>
                </span>
              </div>
            </div>
            <div>
              <label htmlFor="email" className="sr-only">
                Content
              </label>

              <div className="relative">
                <textarea
                  name="message"
                  required
                  id="Content"
                  className=" resize-none rounded-lg outline-none w-full text-gray-700  font-medium text-[18px] pt-2 h-[164px] pl-4 bg-transparent shadow-2xl  border-2  focus:border-custom-sky-blue"
                  placeholder="Content"
                ></textarea>
              </div>
            </div>
            <div className="flex items-center justify-between">
              {isLoading ? (
                <>
                  <PulseLoader color="#0f67b1" />
                </>
              ) : (
                <>
                  <button
                    type="submit"
                    className="block shadow-2xl rounded-md transition-all ease-in-out bg-custom-sky-blue px-[18px] py-[8px]  text-[14px] sm:text-[16px] font-medium text-gray-50  hover:bg-[#0f68b1d6] hover:text-primaryColor"
                  >
                    Send
                  </button>
                </>
              )}
            </div>
          </form>
        </div>

        <div className="">
          <Image
            alt="photo"
            width={400}
            height={400}
            src={"/undraw_mailbox_re_dvds.svg"}
          />
        </div>
      </section>
    </div>
  );
};

export default Page;
