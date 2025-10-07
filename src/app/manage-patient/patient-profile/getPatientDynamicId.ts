"use server";

export async function getPatientsDynamicId(patient_id: number) {
  const payload = {
    action_mode: "get_profile", 
    patient_id,                 
  };

  console.log("Sending payload:", payload);

  try {
    const res = await fetch(
      "https://sdms-api.onrender.com/api/v1/patientProfile/getProfile",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
        cache: "no-store",
      }
    );

    const text = await res.text();
    console.log("Response text:", text);

    if (!res.ok) {
      throw new Error(`HTTP error! status: ${res.status} - ${text}`);
    }

    return JSON.parse(text);
  } catch (err) {
    console.error("Fetch failed:", err);
    throw err;
  }
}