
"use client";

import { useState } from "react";

import GetPatientWithId from "./getpatientWithId";

export default function GetPatientWithIdPage() {
  const [inputId, setInputId] = useState("");
  const [patientId, setPatientId] = useState<number | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputId) return;
    setPatientId(Number(inputId));
  };

  return (
    <div style={{ padding: "1.5rem" }}>
      <h1>Search Patient Profile</h1>

      <form onSubmit={handleSubmit} style={{ marginBottom: "1rem" }}>
        <input
          type="number"
          value={inputId}
          onChange={(e) => setInputId(e.target.value)}
          placeholder="Enter Patient ID"
          style={{ padding: "0.5rem", marginRight: "0.5rem" }}
        />
        <button type="submit" style={{ padding: "0.5rem 1rem" }}>
          Search
        </button>
      </form>

      {patientId && <GetPatientWithId patient_id={patientId} />}
    </div>
  );
}