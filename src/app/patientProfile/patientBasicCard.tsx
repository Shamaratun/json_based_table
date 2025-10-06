
import { AdmissionData, Patient } from "./type";




interface PatientDetailsProps {
  patient?: Patient;
  admissionData?: AdmissionData;
}

export default function PatientDetails({ patient,admissionData }: PatientDetailsProps) {
  if (!patient) return <p>Loading patient data...</p>;

  return (
<>
    <PatientInfo label="Patient Name" className="text-bold text-xl" value={patient.name}/>
    <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
      
      <PatientInfo label="Patient ID" value={patient.id} />
      <PatientInfo label="Admission ID" value={patient.admission_id} />
      <PatientInfo label="Age" value={patient.age} />
      <PatientInfo label="Gender" value={patient.gender} />
      <PatientInfo label="Mobile" value={patient.mobile_number} />
      <PatientInfo label="Address" value={patient.address_line_one} />
      <PatientInfo label="Hospital Name" value={admissionData?.hospital_name} />
    </div>
    </>
  );
}


function PatientInfo({label,value,className,
}: {label: string; value?: string | number;className?: string;}) {
  if (value === undefined || value === null) return null;

  return (
    <div className={`flex items-center ${className || ""}`}>
      <span className="font-semibold">{label}:</span>
      <span className="ml-2">{value}</span>
    </div>
  );
}