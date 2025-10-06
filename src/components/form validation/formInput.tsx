"use client";

import React from "react";
import { UseFormRegister } from "react-hook-form";
import { InputProps } from "./interface";



const FormInput: React.FC<InputProps> = ({ label, name, type = "text", placeholder, register, error }) => (
  <div>
    <label className="block font-medium text-gray-700">{label}</label>
    <input
      {...register(name)}
      type={type}
      placeholder={placeholder}
      className="mt-1 block w-full rounded border border-gray-300 p-2"
    />
    {error && <p className="text-red-600 text-sm">{error}</p>}
  </div>
);

export default FormInput;