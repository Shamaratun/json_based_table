"use client";

import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Input } from "@/app/manage-patient/ui/input";
import { Textarea } from "@/app/manage-patient/ui/textarea";
import { Button } from "@/app/manage-patient/ui/button";


const contactFormSchema = z.object({
  email: z.string().email({ message: "Invalid email" }),
  message: z.string().min(1, { message: "Message is required" }),
});

type ContactFormData = z.infer<typeof contactFormSchema>;

export default function Footer() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    console.log("Form submitted:", data);
    // for API 
    reset();
  };

  return (
    <footer className="bg-gray-900 text-white py-10">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-12 gap-8">

     
        <div className="md:col-span-4 space-y-4">
          <img src="/images/logoWevics.png" alt="Wevics Logo" className="w-20 h-20 rounded-full" />
          <p className="text-gray-300 text-sm">
            To serve humanity, the Wevics Trust started its journey in July 2025.
            The trust provides healthcare service to the people of Bangladesh at affordable cost.
          </p>
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-sm">
              <i className="fa fa-map-marker text-teal-400"></i>
              <span>House #48, Road #9/A, Dhanmondi, Dhaka 1209</span>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <i className="fa fa-phone text-teal-400"></i>
              <span>Hotline: 10615, +88 09610010615</span>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <i className="fa fa-envelope text-teal-400"></i>
              <span>info@wevicstrust.com</span>
            </div>
          </div>
          <div className="flex gap-3 mt-4 text-sm">
            <a href="https://www.facebook.com/wevicstrustofficial/" target="_blank" className="hover:text-teal-400">
              <i className="fa fa-facebook"></i>
            </a>
            <a href="https://www.linkedin.com/company/wevics-trust/" target="_blank" className="hover:text-teal-400">
              <i className="fa fa-linkedin"></i>
            </a>
            <a href="https://twitter.com/wevicstrust/" target="_blank" className="hover:text-teal-400">
              <i className="fa fa-twitter"></i>
            </a>
            <a href="https://www.youtube.com/@wevicstrustofficial" target="_blank" className="hover:text-teal-400">
              <i className="fa fa-youtube"></i>
            </a>
          </div>
        </div>


        <div className="md:col-span-3 space-y-2">
          <h2 className="text-lg font-semibold text-cyan-600">Visitor Counter</h2>
          <ul className="space-y-1 text-sm text-gray-300">
            <li>Total visitor: 696</li>
            <li>Unique visitor: 399</li>
            <li>Page visitor: 2674</li>
            <li><a href="/privacy-policy" className="hover:text-teal-400">Privacy Policy</a></li>
          </ul>
        </div>

        {/* Contact Form */}
        <div className="md:col-span-5">
          <h2 className="text-lg font-semibold mb-4  text-cyan-600">Contact Us</h2>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-3">
            <div>
              <Input
                type="email"
                placeholder="Email"
                {...register("email")}
                className="w-full"
              />
              {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
            </div>
            <div>
              <Textarea
                placeholder="Message"
                {...register("message")}
                className="w-full"
              />
              {errors.message && <p className="text-red-500 text-sm">{errors.message.message}</p>}
            </div>
            <Button type="submit" disabled={isSubmitting} className=" text-cyan-600">Submit</Button>
          </form>
        </div>
      </div>
      <div className="border-t border-gray-700 mt-10 pt-4 text-center text-gray-500 text-sm">
        © {new Date().getFullYear()}Wevics Trust. All Rights Reserved.
      </div>
    </footer>
  );
}