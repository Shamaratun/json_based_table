"use client";

import { useForm } from "react-hook-form";
import InputField from "./inputField";
import { PatientSchema, PatientFormData } from "./schema";
import { zodResolver } from "@hookform/resolvers/zod";

export default function PatientForm() {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<PatientFormData>({
        resolver: zodResolver(PatientSchema),
    });

    const onSubmit = (data: PatientFormData) => {
        console.log("Form submitted:", data);
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <InputField
                label="Patient Name"
                type="text"
                {...register("name")}
                error={errors.name?.message}
            />

            <InputField
                label="Age"
                type="number"
                {...register("age", { valueAsNumber: true })}
                error={errors.age?.message}
            />

            <InputField
                label="Email"
                type="email"
                {...register("email")}
                error={errors.email?.message}
            />

            <button
                type="submit"
                className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
            >
                Submit
            </button>
        </form>
    );
}
