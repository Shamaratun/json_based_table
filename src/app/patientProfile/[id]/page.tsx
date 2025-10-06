import PatientProfile from "../patientProfile";




interface PageProps {
  params: { id: string };
}

export default function Page({ params }: PageProps) {
  return <PatientProfile id={Number(params.id)} />;
}
