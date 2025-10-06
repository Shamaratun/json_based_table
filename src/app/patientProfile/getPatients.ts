"use server";


//THIS IS FOR FIXED ID

export async function getPatients(patient_id: number) {
  const res = await fetch(
    "https://sdms-api.onrender.com/api/v1/patientProfile/getProfile",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        action_mode: "get_profile",
        patient_id: 35,
       
      }),
      cache: "no-store",
      });
  console.log(res.json)
  if
    (!res.status.toString().startsWith("2"))
     { throw new Error("Failed to fetch data"); }
  return res.json();
}