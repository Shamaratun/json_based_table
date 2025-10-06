import { UseFormRegister } from "react-hook-form";

export interface TextareaProps {
  label: string;
  name: string;
  register: UseFormRegister<any>;
  placeholder?: string;
  error?: string;
}
export interface InputProps {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
  register: UseFormRegister<any>;
  error?: string;
}