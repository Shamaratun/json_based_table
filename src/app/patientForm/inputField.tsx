import React, { forwardRef } from "react";

type InputFieldProps = React.InputHTMLAttributes<HTMLInputElement> & {
  label: string;
  error?: string;
};

const InputField = forwardRef<HTMLInputElement, InputFieldProps>(
  ({ label, error, ...props }, ref) => {
    return (
      <div className="flex flex-col">
        <label className="mb-1 font-medium">{label}</label>
        <input
          ref={ref}
          {...props}
          className={`border p-2 rounded ${
            error ? "border-red-500" : "border-gray-300"
          }`}
        />
        {error && <span className="text-sm text-red-500 mt-1">{error}</span>}
      </div>
    );
  }
);

InputField.displayName = "InputField";

export default InputField;
