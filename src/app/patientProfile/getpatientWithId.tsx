"use client";

import { useEffect, useState } from "react";
import { getPatientsDynamicId } from "./getPatientDynamicId";
import { AdmissionItem, Patient } from "./type";
import PatientDetails from "./patientBasicCard";
import { Tabs, TabsContent } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import SurgicalInfo from "../surgical/surgicalInfo";
import MedicalInfo from "../medical/medicalInfo";
import Investigation from "../investigation/investigation";
import PatientTabs from "../patientTab/patientTab";

interface PatientProfileProps {
  patient_id: number;

}


export default function GetPatientWithId({ patient_id }: PatientProfileProps) {
  const [selectedPatient, setSelectedPatient] = useState<Patient | null>(null);
  const [admissions, setAdmissions] = useState<AdmissionItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
 const [openSurgicalInfo, setOpenSurgicalInfo] = useState(false);
  const [openMedicalInfo, setOpenMedicalInfo] = useState(false);
  const [openInvestigationInfo, setOpenInvestigationInfo] = useState(false);
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

  return (
    <div className="p-4 sm:p-6 max-w-5xl mx-auto space-y-4 bg-gradient-to-b from-gray-50 to-gray-100 min-h-screen">
      {/* Patient info */}
      <PatientDetails patient={selectedPatient} />
<div>
        <div className="w-full p-4 msm:p-6">
          <Tabs defaultValue="medical-history" className="w-full">
            <PatientTabs />

            <TabsContent value="medical-history">
              <Card className="mt-4">
                <CardContent className="p-4 sm:p-6">
                  <div className="flex flex-col space-y-2 min-w-full">
                    <button
                      className="w-50 text-left px-3 py-2 rounded-md bg-gray-100 hover:bg-gray-200 font-medium"
                      onClick={() => setOpenSurgicalInfo((prev) => !prev)}
                    >
                      Surgical Info
                    </button>
                    {openSurgicalInfo && (
                      <div className="bg-white p-3 sm:p-4 rounded-xl shadow mt-2 overflow-x-auto">
                        <SurgicalInfo />

                      </div>)}
                    <button

                      className="w-50  text-left px-3 py-2 rounded-md bg-gray-100 hover:bg-gray-200 font-medium"
                      onClick={() => setOpenMedicalInfo((prev) => !prev)}
                    >
                      Medical Info
                    </button>
                    {openMedicalInfo && (
                      <div className="bg-white p-3 sm:p-4 rounded-xl shadow mt-2 overflow-x-auto">
                        <MedicalInfo />

                      </div>
                    )}

                    <button
                      className="w-50  text-left px-3 py-2 rounded-md bg-gray-100 hover:bg-gray-200 font-medium"
                      onClick={() => setOpenInvestigationInfo((prev) => !prev)}
                    >
                      Investigation
                    </button>
                    {openInvestigationInfo && (
                      <div className="bg-white p-3 sm:p-4 rounded-xl shadow mt-2 overflow-x-auto">
                        <Investigation />
                      </div>
                    )}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Recent Visits */}
            <TabsContent value="recent-visits">
              <Card className="mt-4">
                <CardContent>
                  <p className="text-sm sm:text-base">
                    Recent visit details will be shown here.
                  </p>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Notes */}
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