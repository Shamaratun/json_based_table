import { FieldValues, RegisterOptions, UseFormRegisterReturn } from "react-hook-form";
import AdviceForm from "./advice";
import DischargeDate from "./dischargeDate";


export default function DischargePage() {
  return (
    <div className="p-6">
      {/* <DischargeForm /> */}
      <DischargeDate />
      <AdviceForm />
      {/* <ReusableForm register={function <TFieldName extends string = string>(name: TFieldName, options?: RegisterOptions<FieldValues, TFieldName> | undefined): UseFormRegisterReturn<TFieldName> {
              throw new Error("Function not implemented.");
          } } errors={undefined}  /> */}
    </div>
  );
}