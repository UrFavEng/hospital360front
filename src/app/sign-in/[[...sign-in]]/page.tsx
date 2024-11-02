"use client";
import { SignIn } from "@clerk/nextjs";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function Page() {
  const router = useRouter();
  return (
    <div className=" relative min-h-[100vh] py-16 sm:py-12 container px-4 flex flex-col-reverse lg:flex-row  items-center justify-center lg:justify-between">
      <div
        onClick={() => router.push("/")}
        className=" absolute px-4  top-6 text-[20px] font-playwrite font-bold transition ease-in-out text-primaryColor hover:text-custom-blue cursor-pointer left-0"
      >
        Hospital360
      </div>{" "}
      <SignIn />
      <div className=" w-[300px] sm:w-[380px]  lg:w-[550px]">
        <Image width={550} height={550} alt="" src={"/login.svg"} />
      </div>
    </div>
  );
}
