"use client";
import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { z } from "zod";
import { useRouter } from "next/navigation";

const Form = () => {
  const router = useRouter();
  const submitButton = useRef(null);

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
  });

  const schema = z.object({
    name: z.string().nonempty().min(3),
    phone: z
      .string()
      .min(11, { message: "Phone must be at least 11 characters" }),
    // companyName: z.string().min(3).optional(),
    // companyUrl: z.string().url().optional(),
    email: z.string().email(),
  });

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const validatedData = schema.parse(formData);

      submitButton.current.disabled = true;
      submitButton.current.textContent = "Sending...";

      const seviceId = process.env.NEXT_PUBLIC_SERVICE_ID;
      const templateID = process.env.NEXT_PUBLIC_TEMPLATE_ID;
      const publicKey = process.env.NEXT_PUBLIC_PUBLIC_KEY;

      const templateParams = {
        to_name: "Peter",
        From_Name: formData.name,
        Phone: formData.phone,
        Email: formData.email,
      };

      if (!formData.name || !formData.phone) return;

      const response = await emailjs.send(
        seviceId,
        templateID,
        templateParams,
        publicKey
      );

      if (response.status === 200) {
        setFormData({
          name: "",
          email: "",
          phone: "",
        });
        router.push("/successfull");
      } else {
        console.log(err);
        submitButton.current.disabled = false;
        submitButton.current.textContent = "Send Enquiry";
      }
      submitButton.current.textContent = "Send Enquiry";
      submitButton.current.disabled = false;
    } catch (error) {
      console.error("Form validation failed:", error.errors);
      submitButton.current.disabled = false;
      submitButton.current.textContent = "Send Enquiry";
    }
  };


  return (
    <div>
      <section className="">
        <div className="mx-auto max-w-screen-sm px-4 py-32 sm:px-6 lg:px-8  ">
          <div className="grid grid-cols-1 gap-x-16 gap-y-8 ">
            <div className="rounded-lg  p-8 shadow-lg lg:col-span-3 lg:py-16 bg-[#2B2B2D] ">
              <div className="mb-4 flex flex-col items-center">
                <h1 className="text-5xl font-bold text-center text-[#e9ad64]">
                  Ready to discuss your project?
                </h1>
                <div className="mt-6 h-1 w-16 rounded-full bg-[#e9ad64]"></div>
                <p className="mt-4 mb-8 text-lg text-center text-white">
                  Share your contact details below and we will contact you.
                </p>
              </div>

              <form action="#" onSubmit={handleSubmit} className="space-y-4">
                <div className="">
                  <label className="sr-only" htmlFor="name">
                    Name
                  </label>
                  <input
                    name="name"
                    minLength={3}
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full rounded-lg border-gray-200 border p-3 text-lg text-white bg-transparent"
                    placeholder="Full Name"
                    type="text"
                    id="name"
                    required
                  />
                </div>

                <div className="grid grid-cols-1 gap-4 ">
                  <div>
                    <label className="sr-only" htmlFor="email">
                      Email
                    </label>
                    <input
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full rounded-lg border-gray-200 border p-3 text-lg text-white bg-transparent"
                      placeholder="Email address"
                      type="email"
                      id="email"
                      required
                    />
                  </div>

                  <div>
                    <label className="sr-only" htmlFor="phone">
                      Phone
                    </label>
                    <input
                      name="phone"
                      minLength={11}
                      value={formData.phone}
                      onChange={handleChange}
                      title="000-000-0000"
                      className="w-full rounded-lg border-gray-200 border p-3 text-lg text-white  bg-transparent"
                      placeholder="Phone Number"
                      type="tel"
                      id="phone"
                      required
                    />
                  </div>
                </div>

                <div className="mt-4">
                  <button
                    ref={submitButton}
                    type="submit"
                    className="inline-block w-full rounded-lg bg-[#e9ad64] hover:bg-[#e9ad64]/70 px-5 py-3 font-medium text-white text-lg disabled:cursor-not-allowed disabled:bg-gray-400 "
                  >
                    Send Enquiry
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Form;
