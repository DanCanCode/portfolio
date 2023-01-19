import React, { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { PhoneIcon, MapPinIcon, EnvelopeIcon } from "@heroicons/react/24/solid";
import useWeb3Forms from "@web3forms/react";

type Inputs = {
  name: string;
  email: string;
  subject: string;
  message: string;
  botcheck: string;
};

type Props = {};

export default function Contact({}: Props) {
  const [isSuccess, setIsSuccess] = useState(false);
  const [message, setMessage] = useState("");
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitSuccessful, isSubmitting },
  } = useForm<Inputs>();
  // const onSubmit: SubmitHandler<Inputs> = (formData) => {
  //   window.location.href = `mailto:dancancode@protonmail.com?subject=${formData.subject}&body=Hi, my name is ${formData.name}. ${formData.message} (${formData.email})`;
  // };

  const apiKey = process.env.PUBLIC_ACCESS_KEY || "YOUR_ACCESS_KEY_HERE";
  const { submit: onSubmit } = useWeb3Forms({
    access_key: `${apiKey}`,
    settings: {
      from_name: "dancancode.io",
      subject: "New Contact Message from your Website",
    },
    onSuccess: (msg, data) => {
      setIsSuccess(true);
      setMessage(msg);
      reset();
    },
    onError: (msg, data) => {
      setIsSuccess(false);
      setMessage(msg);
    },
  });

  return (
    <div className="h-screen relative flex flex-col text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center">
      <h3 className="absolute top-24 tracking-[15px] uppercase text-neutral-400 text-2xl">
        Contact
      </h3>

      <div className="flex flex-col space-y-8 w-full">
        <h4 className="sm:text-4xl text-2xl font-semibold text-center">
          Want to work together?{" "}
          <span className="underline decoration-[#006aff]/50">Lets Talk.</span>{" "}
        </h4>

        <div className="space-y-6">
          <div className="flex items-center space-x-5 justify-center">
            <PhoneIcon className="text-[#006aff]  h-7 w-7 animate-pulse" />
            <p className="sm:text-2xl text-lg">(631) 805-8771</p>
          </div>

          <div className="flex items-center space-x-5 justify-center">
            <EnvelopeIcon className="text-[#006aff]  h-7 w-7 animate-pulse" />
            <p className="sm:text-2xl text-lg">dancancode@protonmail.com</p>
          </div>
        </div>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col space-y-2 sm:w-fit sm:mx-auto w-full"
        >
          <input
            type="checkbox"
            id=""
            className="hidden"
            style={{ display: "none" }}
            {...register("botcheck")}
          ></input>
          <div className="grid grid-cols-2 space-x-2">
            <input
              {...register("name")}
              placeholder="Name"
              className="contactInput"
              type="text"
            />
            <input
              {...register("email")}
              placeholder="Email"
              className="contactInput"
              type="email"
            />
          </div>

          <input
            {...register("subject")}
            placeholder="Subject"
            className="contactInput"
            type="text"
          />

          <textarea
            {...register("message")}
            placeholder="Message"
            className="contactInput"
          />

          <button
            type="submit"
            className="bg-[#006aff] py-5 px-10 rounded-md font-bold text-lg"
          >
            {isSubmitting ? (
              <svg
                className="w-5 h-5 mx-auto text-white dark:text-black animate-spin"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                ></circle>
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                ></path>
              </svg>
            ) : (
              "Submit"
            )}
          </button>
        </form>

        {isSubmitSuccessful && isSuccess && (
          <div className="mt-3 text-sm text-center text-green-500">
            {message || "Success. Message sent successfully"}
          </div>
        )}
        {isSubmitSuccessful && !isSuccess && (
          <div className="mt-3 text-sm text-center text-red-500">
            {message || "Something went wrong. Please try later."}
          </div>
        )}
      </div>
    </div>
  );
}
