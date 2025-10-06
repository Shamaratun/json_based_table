
// // const data = [
// //   {
// //     name: "Arif Khan",
// //     patientId: 8,
// //     surgery: "URS and Biopsy ( Right )",
// //     dateOfSurgery: "1 Aug 2025",
// //     dischargeDate: "20 Sep 2025",
// //     outcome: "Average",
// //     followupDate: "20 Oct 2025",
// //     hospital: "Square Hospital",
// //     phone: "1755898989",
// //     age: 27,
// //     reschedule: "Reschedule",
// //     status: "Readmitted",
// //     action: "VIEW"
// //   },
// //   {
// //     name: "Amena Khanam",
// //     patientId: 6,
// //     surgery: "OIU",
// //     dateOfSurgery: "29 Jul 2025",
// //     dischargeDate: "20 Sep 2025",
// //     outcome: "Excellent",
// //     followupDate: "20 Oct 2025",
// //     hospital: "United Hospital",
// //     phone: "1730000004",
// //     age: 35,
// //     reschedule: "Reschedule",
// //     status: "Readmitted",
// //     action: "VIEW"
// //   },
// //   {
// //     name: "MD Tanvir",
// //     patientId: 9,
// //     surgery: "TURP",
// //     dateOfSurgery: "20 Jul 2025",
// //     dischargeDate: "17 Sep 2025",
// //     outcome: "Sufficient",
// //     followupDate: "17 Oct 2025",
// //     hospital: "Gopalgonj Sadar",
// //     phone: "1700000002",
// //     age: 55,
// //     reschedule: "Reschedule",
// //     status: "Readmitted",
// //     action: "VIEW"
// //   }
// // ];


// // export default function Table() {
// //   return (
// //     <div className="p-6">
// //       <div className="flex justify-between items-center mb-4">
// //         <h1 className="text-xl font-bold">Discharged Patients</h1>

// //         <input
// //           type="text"
// //           placeholder="Search patient..."
// //           className="px-3 py-2 border rounded-lg w-64"
// //         />
// //       </div>
// //       <table className="min-w-full border-collapse border border-gray-300 shadow-md rounded-lg overflow-hidden text-sm">
// //         <thead className="bg-amber-600 text-white">
// //           <tr>
// //             <th className="border border-gray-300 px-4 py-2">Name</th>
// //             <th className="border border-gray-300 px-4 py-2">Patient ID</th>
// //             <th className="border border-gray-300 px-4 py-2">Name of Surgery</th>
// //             <th className="border border-gray-300 px-4 py-2">Date of Surgery</th>
// //             <th className="border border-gray-300 px-4 py-2">Discharge Date</th>
// //             <th className="border border-gray-300 px-4 py-2">Outcome</th>
// //             <th className="border border-gray-300 px-4 py-2">Followup Date</th>
// //             <th className="border border-gray-300 px-4 py-2">Hospital</th>
// //             <th className="border border-gray-300 px-4 py-2">Phone</th>
// //             <th className="border border-gray-300 px-4 py-2">Age</th>
// //             <th className="border border-gray-300 px-4 py-2">Reschedule</th>
// //             <th className="border border-gray-300 px-4 py-2">Status</th>
// //             <th className="border border-gray-300 px-4 py-2">Action</th>
// //           </tr>
// //         </thead>
// //         <tbody>
// //           {data.map((row, i) => (
// //             <tr key={i} className="hover:bg-gray-50">
// //               <td className="border border-gray-300 px-4 py-2">{row.name}</td>
// //               <td className="border border-gray-300 px-4 py-2">{row.patientId}</td>
// //               <td className="border border-gray-300 px-4 py-2">{row.surgery}</td>
// //               <td className="border border-gray-300 px-4 py-2">{row.dateOfSurgery}</td>
// //               <td className="border border-gray-300 px-4 py-2">{row.dischargeDate}</td>
// //               <td className="border border-gray-300 px-4 py-2">{row.outcome}</td>
// //               <td className="border border-gray-300 px-4 py-2">{row.followupDate}</td>
// //               <td className="border border-gray-300 px-4 py-2">{row.hospital}</td>
// //               <td className="border border-gray-300 px-4 py-2">{row.phone}</td>
// //               <td className="border border-gray-300 px-4 py-2">{row.age}</td>
// //               <td className="border border-gray-300 px-4 py-2 text-green-700 font-semibold">
// //                 {row.reschedule}
// //               </td>
// //               <td className="border border-gray-300 px-4 py-2 text-green-700 font-semibold">
// //                 {row.status}
// //               </td>
// //               <td className="border border-gray-300 px-4 py-2 text-blue-700 font-bold cursor-pointer">
// //                 {row.action}
// //               </td>
// //             </tr>
// //           ))}
// //         </tbody>
// //       </table>

// //     </div>
// //   );
// // }

// "use client";

// import { useState } from "react";
// import PatientModal from "./patientModal";

// const data = [
//   {
//     name: "Arif Khan",
//     patientId: 8,
//     surgery: "URS and Biopsy ( Right )",
//     dateOfSurgery: "1 Aug 2025",
//     dischargeDate: "20 Sep 2025",
//     outcome: "Average",
//     followupDate: "20 Oct 2025",
//     hospital: "Square Hospital",
//     phone: "1755898989",
//     age: 27,
//     reschedule: "Reschedule",
//     status: "Readmitted",
//     action: "VIEW"
//   },
//   {
//     name: "Amena Khanam",
//     patientId: 6,
//     surgery: "OIU",
//     dateOfSurgery: "29 Jul 2025",
//     dischargeDate: "20 Sep 2025",
//     outcome: "Excellent",
//     followupDate: "20 Oct 2025",
//     hospital: "United Hospital",
//     phone: "1730000004",
//     age: 35,
//     reschedule: "Reschedule",
//     status: "Readmitted",
//     action: "VIEW"
//   },
//   {
//     name: "MD Tanvir",
//     patientId: 9,
//     surgery: "TURP",
//     dateOfSurgery: "20 Jul 2025",
//     dischargeDate: "17 Sep 2025",
//     outcome: "Sufficient",
//     followupDate: "17 Oct 2025",
//     hospital: "Gopalgonj Sadar",
//     phone: "1700000002",
//     age: 55,
//     reschedule: "Reschedule",
//     status: "Readmitted",
//     action: "VIEW"
//   }
// ];
// interface Patient {
//   name: string;
//   patientId: number;
//   surgery: string;
//   dateOfSurgery: string;
//   dischargeDate: string;
//   outcome: string;
//   followupDate: string;
//   hospital: string;
//   phone: string;
//   age: number;
//   reschedule: string;
//   status: string;
//   action: string;
// }
// export default function Table() {
//   const [selectedPatient, setSelectedPatient] = useState<Patient | null>(null);

//   return (
//     <div className="p-6">
//       <div className="flex justify-between items-center mb-4">
//         <h1 className="text-xl font-bold">Discharged Patients</h1>
//         <input
//           type="text"
//           placeholder="Search patient..."
//           className="px-3 py-2 border rounded-lg w-64"
//         />
//       </div>

//       <table className="min-w-full border-collapse border border-gray-300 shadow-md rounded-lg overflow-hidden text-sm">
//         <thead className="bg-amber-600 text-white">
//           <tr>
//             <th className="border px-4 py-2">Name</th>
//             <th className="border px-4 py-2">Patient ID</th>
//             <th className="border px-4 py-2">Surgery</th>
//             <th className="border px-4 py-2">Date of Surgery</th>
//             <th className="border px-4 py-2">Discharge Date</th>
//             <th className="border px-4 py-2">Outcome</th>
//             <th className="border px-4 py-2">Followup Date</th>
//             <th className="border px-4 py-2">Hospital</th>
//             <th className="border px-4 py-2">Phone</th>
//             <th className="border px-4 py-2">Age</th>
//             <th className="border px-4 py-2">Reschedule</th>
//             <th className="border px-4 py-2">Status</th>
//             <th className="border px-4 py-2">Action</th>
//           </tr>
//         </thead>
//         <tbody>
//           {data.map((row, i) => (
//             <tr key={i} className="hover:bg-gray-50">
//               <td className="border px-4 py-2">{row.name}</td>
//               <td className="border px-4 py-2">{row.patientId}</td>
//               <td className="border px-4 py-2">{row.surgery}</td>
//               <td className="border px-4 py-2">{row.dateOfSurgery}</td>
//               <td className="border px-4 py-2">{row.dischargeDate}</td>
//               <td className="border px-4 py-2">{row.outcome}</td>
//               <td className="border px-4 py-2">{row.followupDate}</td>
//               <td className="border px-4 py-2">{row.hospital}</td>
//               <td className="border px-4 py-2">{row.phone}</td>
//               <td className="border px-4 py-2">{row.age}</td>
//               <td className="border px-4 py-2 text-green-700 font-semibold">
//                 {row.reschedule}
//               </td>
//               <td className="border px-4 py-2 text-green-700 font-semibold">
//                 {row.status}
//               </td>
//               <td
//                 className="border px-4 py-2 text-blue-700 font-bold cursor-pointer"
//                 onClick={() => setSelectedPatient(row)}
//               >
//                 {row.action}
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>

//       {/* Modal show */}
//       <PatientModal
//         patient={selectedPatient}
//         onClose={() => setSelectedPatient(null)}
//       />
//     </div>
//   );
// }