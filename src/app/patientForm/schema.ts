import { z } from "zod";

export const PatientSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  age: z.number().min(1, "Age is required"),
  email: z.string().email("Invalid email address"),
});

export type PatientFormData = z.infer<typeof PatientSchema>;