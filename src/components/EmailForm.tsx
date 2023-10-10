"use client";

import { FieldValues, useForm } from "react-hook-form";
import Image from "next/image";
import IconError from "../../public/images/icon-error.svg";
import { useState } from "react";

interface FieldProps {
  email: string;
}

export default function EmailForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FieldProps>({
    defaultValues: {
      email: "",
    },
  });

  let errorStyles = "ring-red-dark/30"
  if (errors.email) errorStyles = "ring-red-soft"

  function onSubmit() {
    reset();
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="grid grid-cols-1 grid-rows-1 relative">
        <input
          className={
            " px-4 py-4 rounded-full border-0 outline-0 ring-2 focus:ring-red-dark/100 focus:invalid:ring-red-soft invalid:ring-2 invalid:ring-red-soft text-red-dark " + errorStyles
          }
          type="email"
          placeholder="Email Address"
          {...register("email", {
            required: true,
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: "Please provide a valid email",
            },
          })}
        />
        {errors.email && (
          <Image
            className="absolute top-1 translate-y-1/2 right-[27%]"
            src={IconError}
            alt=""
            loading="lazy"
          />
        )}
        <button className="bg-gradient-02 bg-contain w-fit aspect-[1.5] border-solid border-red-desaturated rounded-full grid place-items-center absolute -right-2 -top-1 -bottom-1 shadow-red-desaturated shadow-lg">
          <svg xmlns="http://www.w3.org/2000/svg" width="12" height="20">
            <path
              fill="none"
              stroke="#FFF"
              stroke-width="2"
              d="M1 1l8.836 8.836L1 18.671"
            />
          </svg>
        </button>
      </div>
      {errors.email && (
        <p className="text-red-soft p-4">{errors.email.message}</p>
      )}
    </form>
  );
}
