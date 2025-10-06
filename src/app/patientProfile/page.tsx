

import PatientDetails from "./patientBasicCard";
import PatientProfile from "./patientProfile";
import PatientProfileById from "./patientProfileById";

export default function Page() {
  return (

  <>
  <PatientProfileById />
  <PatientDetails patient={undefined} />
  </>

    );
}