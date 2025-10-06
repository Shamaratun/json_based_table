"use client";

import { Patient } from "./type";

type PatientModalProps = {
  patient: Patient | null;
  onClose: () => void;
};

export default function PatientModal({ patient, onClose }: PatientModalProps) {
  if (!patient) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-1/2">
        <h2 className="text-lg font-bold mb-4">Patient Details</h2>

        <p><strong>Admission ID:</strong> {patient.admission_id}</p>
        <p><strong>Patient ID:</strong> {patient.patient_id}</p>
        <p><strong>Hospital ID:</strong> {patient.hospital_id}</p>
        <p><strong>Hospital Name:</strong> {patient.hospital_name}</p>
        <p><strong>Name:</strong> {patient.patient_name}</p>
        <p><strong>Gender:</strong> {patient.gender}</p>
        <p><strong>Age:</strong> {patient.age}</p>
        <p><strong>Mobile Number:</strong> {patient.mobile_number}</p>
        <p><strong>Address:</strong> {patient.address}</p>

        <button
          onClick={onClose}
          className="mt-4 bg-amber-600 text-white px-4 py-2 rounded"
        >
          Close
        </button>
      </div>
    </div>
  );
}