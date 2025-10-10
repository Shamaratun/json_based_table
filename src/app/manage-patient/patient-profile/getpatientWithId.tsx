"use client";

import { useEffect, useState } from "react";
import { getPatientsDynamicId } from "./getPatientDynamicId";
import { AdmissionItem, Patient } from "./type";
import PatientDetails from "./patientBasicCard";
import { Tabs, TabsContent } from "@/app/ui/tabs";
import { Card, CardContent } from "@/app/ui/card";
import PatientTabs from "../../reusableTabs/patientTab";
import InvestigationComponent from "@/app/manage-patient/patient-profile/component/investigationComponent";
import MedicalComponent from "./component/medicalComponent";
import SurgicalComponent from "./component/surgicalComponent";
import RecentVisitComponent from "@/app/manage-patient/patient-profile/component/recentVisitComponent";
import MedicalHistoryTab from "@/app/reusableTabs/medicalHistoryTabs";


interface PatientProfileProps {
  patient_id: number;
}

export default function GetPatientWithId({ patient_id }: PatientProfileProps) {
  const [selectedPatient, setSelectedPatient] = useState<Patient | null>(null);
  const [admissions, setAdmissions] = useState<AdmissionItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [openSurgicalInfo, setOpenSurgicalInfo] = useState(true);
  const [openMedicalInfo, setOpenMedicalInfo] = useState(true);
  const [openInvestigationInfo, setOpenInvestigationInfo] = useState(true);
  useEffect(() => {
    async function loadData() {
      setLoading(true);
      try {
        const res = await getPatientsDynamicId(patient_id);

        if (res.data?.patient_basic) setSelectedPatient(res.data.patient_basic);
        if (res.data?.admissions) setAdmissions(res.data.admissions);

      } catch (err: any) {
        console.error("Error:", err);
        setError(err.message || "Unknown error");
      } finally {
        setLoading(false);
      }
    }

    loadData();
  }, [patient_id]);

  if (loading) return <p className="text-center text-gray-500">Loading...</p>;
  if (error) return <p className="text-center text-red-500">{error}</p>;
  if (!selectedPatient) return <p className="text-center text-gray-500">No patient found</p>;
  const latestAdmission = admissions[0]?.admission_data;
  return (
    <div className="p-4 sm:p-6  mx-auto space-y-4 bg-gradient-to-b from-gray-50 to-gray-100 min-h-screen">

      <PatientDetails
        patient={selectedPatient}
        admissionData={latestAdmission}
      />
      <div>
        <div className="w-full p-4 msm:p-6">
          <Tabs defaultValue="medical-history" className="w-full">
            <PatientTabs />
            <MedicalHistoryTab />

            <TabsContent value="recent-visits">
              <Card className="mt-4">
                <CardContent>
                  <RecentVisitComponent />
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="notes">
              <Card className="mt-4">
                <CardContent>
                  <p className="text-sm sm:text-base">
                    Doctor or nurse notes will be shown here.
                  </p>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>

          {/* File Upload */}
          <div className="mt-6 mb-4">
            <label className="bg-blue-500 text-white px-4 py-2 rounded-lg w-full sm:w-auto cursor-pointer hover:bg-blue-600 transition block text-center sm:inline-block">
              <input
                type="file"
                className="hidden"
                onChange={(e) => console.log(e.target.files)}
              />
              Upload File
            </label>
          </div>
        </div>
      </div>
    </div>
  );
}