// import DetailsInModal from "@/components/patientModal";
// // import DischargeTable from "@/components/dischargeTable";
// // import Table from "@/components/table";

// import AdmissonTable from "@/components/admissionTable";
// import ImageModal from "@/components/imageStudy/imageModal";
// import ShowDataWithCollapsible from "@/components/showDataWithCollapsible";
// import ShowDataWithAccordion from "@/components/showDataWithAccordition";
import PatientForm from "./patientForm/form";
import DischargeDate from "../components/form validation/dischargeDate";
import AdviceForm from "../components/form validation/advice";
import FollowupForm from "@/components/form validation/followUpForm";
import ProfileForm from "@/components/form validation/profileForm";
import DischargeInfo from "@/components/form validation/dischargeInfo";
import PatientProfileById from "./patientProfile/patientProfileById";
export default function Home() {
  return (
    <div>
      <h1>Welcome to Next.js!</h1>
      {/* <Table /> */}
      {/* <DischargeTable /> */}
      {/* <PatientForm/>
     <AdmissonTable />
     <ImageModal />
     <ShowDataWithCollapsible />
      <ShowDataWithAccordion /> 
       <DischargeForm />
     <DischargeDate/>*/}
      {/* <AdviceForm />
      <FollowupForm />

      <ProfileForm /> */}
      <DischargeInfo />
     <PatientProfileById />

    </div>
  );
}
