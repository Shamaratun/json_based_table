"use client";

import { useEffect, useRef, useState } from "react";
import ReactDOM from "react-dom";
import Image from "next/image";
import { Edit3, FileDown, Share2 } from "lucide-react";
import router from "next/router";


export default function ImageModalPortal() {
    const [isOpen, setIsOpen] = useState(false);
    const [zoom, setZoom] = useState(1); // ✅ zoom factor
    const triggerRef = useRef<HTMLButtonElement | null>(null);
    const closeRef = useRef<HTMLButtonElement | null>(null);


    useEffect(() => {
        function onKey(e: KeyboardEvent) {
            if (e.key === "Escape") setIsOpen(false);
        }
        if (isOpen) {
            document.addEventListener("keydown", onKey);
            const prev = document.body.style.overflow;
            document.body.style.overflow = "hidden";
            setTimeout(() => closeRef.current?.focus(), 0);
            return () => {
                document.removeEventListener("keydown", onKey);
                document.body.style.overflow = prev;
            };
        } else {
            triggerRef.current?.focus();
            setZoom(1);
        }
    }, [isOpen]);


    function Modal({ children }: { children: React.ReactNode }) {
        if (typeof document === "undefined") return null;
        return ReactDOM.createPortal(children, document.body);
    }

    // zoom handler
    function handleWheel(e: React.WheelEvent) {
        e.preventDefault();
        setZoom((prev) => {
            const newZoom = prev + (e.deltaY < 0 ? 0.1 : -0.1);
            return Math.min(Math.max(newZoom, 0.5), 3);
        });
    }


    return (
        <div className="flex justify-center items-center min-h-screen bg-gray-100">
            {/* Container */}
            <div className="bg-white rounded-xl shadow-lg p-6 w-full max-w-5xl">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {/* Left Column (1/3 for image) */}
                    <div className="md:col-span-1 flex justify-center items-start">
                        <button
                            ref={triggerRef}
                            onClick={() => setIsOpen(true)}
                            className="inline-block"
                            aria-haspopup="dialog"
                            aria-expanded={isOpen}
                        >
                            <Image
                                src="/images/IceFlower.jpg"
                                alt="Sample image showing IceFlower"
                                width={150}
                                height={150}
                                className="cursor-pointer rounded-lg shadow"
                            />
                        </button>
                    </div>

                    {/* Right Column (2/3 for details) */}
                    <div className="md:col-span-2 flex flex-col gap-6">
                        {/* Heading + Buttons Row */}
                        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                            {/* Heading */}
                            <h1 className="text-2xl sm:text-3xl font-bold text-gray-800">
aSDFGHJ          </h1>

          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => router.push("/sharePatient")}
              className="flex items-center gap-2 bg-cyan-100 text-cyan-700 px-3 py-2 rounded-lg shadow-sm hover:bg-cyan-200 transition"
            >
              <Share2 size={18} /> Share
            </button>
            <button
              onClick={() => router.push("/export")}
              className="flex items-center gap-2 bg-purple-100 text-purple-700 px-3 py-2 rounded-lg shadow-sm hover:bg-purple-200 transition"
            >
              <FileDown size={18} /> Export
            </button>
            <button
              onClick={() => router.push("/editPatient")}
              className="flex items-center gap-2 bg-green-100 text-green-700 px-3 py-2 rounded-lg shadow-sm hover:bg-green-200 transition"
            >
              <Edit3 size={18} /> Edit
            </button>
          </div>
        </div>

                        {/* Patient Info (Below Heading + Buttons) */}
                        <div className="grid gap-4 text-gray-700">
                           <p className="flex flex-wrap gap-4">
            <span className="font-semibold">Patient ID:</span>{" "}
asdfghj          
            <span className="font-semibold ">Age:</span> sadfghjkl
          
            <span className="font-semibold">Gender:</span>{" "}
sdfghjm,          </p>


                            <p className="flex flex-wrap gap-4">
                                <span className="font-semibold">Marital Status:</span> Married
                                <span className="font-semibold">Religion:</span> Islam
                            </p>

                           <p className="flex flex-wrap gap-4">
             <span className="font-semibold">Mobile:</span>{" "}
asdfghjkl          
            <span className="font-semibold">Address:</span>{" "}
asdfghjkl          </p>
                        </div>
                    </div>
                </div>
            </div>

            {
                isOpen && (
                    <Modal>
                        <div
                            role="dialog"
                            aria-modal="true"
                            aria-labelledby="modal-title"
                            className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-90 p-4"
                            onClick={() => setIsOpen(false)}
                            onWheel={handleWheel} // 
                        >
                            <div
                                className="relative max-w-5xl w-full bg-transparent flex items-center justify-center"
                                onClick={(e) => e.stopPropagation()}
                            >
                                <h2 id="modal-title" className="sr-only">
                                    Image preview
                                </h2>

                                <button
                                    ref={closeRef}
                                    onClick={() => setIsOpen(false)}
                                    aria-label="Close image preview"
                                    className="absolute top-4 right-6 text-white text-2xl"
                                >
                                    ✖
                                </button>

                                <div
                                    className="transition-transform duration-200 ease-in-out"
                                    style={{
                                        transform: `scale(${zoom})`,
                                    }}
                                >
                                    <Image
                                        src="/images/IceFlower.jpg"
                                        alt="Larger sample"
                                        width={300}
                                        height={80}
                                        className="rounded-lg max-h-[80vh] w-auto object-contain"
                                        priority
                                    />
                                </div>
                            </div>
                        </div>
                    </Modal>
                )
            }
        </div>
    );
}