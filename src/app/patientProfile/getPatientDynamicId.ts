"use server";
export async function getPatientsDynamicId(patient_id: number) {
  try {
    const res = await fetch(
      "https://sdms-api.onrender.com/api/v1/patientProfile/getProfile",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          action_mode: "get_profile",
          patient_id: patient_id,
        }),
        cache: "no-store",
      }
    );

    if (!res.ok) {
      throw new Error(`HTTP error! status: ${res.status}`);
    }

    const data = await res.json();
    return data;
  } catch (err) {
    console.error("Fetch failed:", err);
    throw err; 
  }
}