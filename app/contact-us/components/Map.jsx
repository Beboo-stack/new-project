import Form from "@/components/Form";
import React from "react";

const Map = () => {
  return (
    <div className="w-full h-full px-4 py-8 sm:px-6 sm:py-14 lg:py-3 mt-8 bg-[#1A1919] flex flex-col lg:flex-row justify-center items-center">
      <div className=" w-full h-full">
        <Form />
      </div>
      <div className="w-full h-full">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d110542.32448770573!2d31.011981000000002!3d30.024013!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14585bd5caba2855%3A0x7f262614e7008af!2sHills%20Construction!5e0!3m2!1sen!2seg!4v1721565378333!5m2!1sen!2seg"
          width="600"
          height="450"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
          className="w-full"
        ></iframe>
      </div>
    </div>
  );
};

export default Map;
