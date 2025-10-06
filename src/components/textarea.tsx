"use client";

import React from "react";
import { UseFormRegister } from "react-hook-form";

interface TextareaProps {
  label: string;
  name: string;
  register: UseFormRegister<any>;
  placeholder?: string;
  error?: string;
}

const FormTextarea: React.FC<TextareaProps> = ({ label, name, register, placeholder, error }) => (
  <div>
    <label className="block font-medium text-gray-700">{label}</label>
    <textarea
      {...register(name)}
      placeholder={placeholder}
      className="mt-1 block w-full rounded border border-gray-300 p-2"
    />
    {error && <p className="text-red-600 text-sm">{error}</p>}
  </div>
);

export default FormTextarea;
