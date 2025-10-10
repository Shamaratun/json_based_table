
"use client";

import { useState } from "react";
import GetPatientWithId from "./manage-patient/patient-profile/getpatientWithId";
import AdmissionTable from "./admitted/admissionTable";



export default function GetPatientWithIdPage() {
 

  return (
    
    <div style={{ padding: "1.5rem" }}>
      <AdmissionTable/>
     
    </div>
  );
}