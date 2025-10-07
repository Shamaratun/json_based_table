import GetPatientWithId from "../getpatientWithId";

interface PageProps {
  params: { id: string };
}

export default function Page({ params }: PageProps) {
  const patientId = Number(params.id);

  if (isNaN(patientId)) {
    return <p className="text-center text-red-500">Invalid patient ID in URL.</p>;
  }

  return <GetPatientWithId patient_id={patientId} />;
}