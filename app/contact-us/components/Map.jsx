import Form from "@/components/Form";
import React from "react";

const Map = () => {
  return (
    <div className="w-full h-full px-4 py-8 sm:px-6 sm:py-14 lg:py-3 mt-8 bg-[#1A1919] flex flex-col lg:flex-row justify-center items-center">
      <div className=" w-full h-full">
        <Form />
      </div>
      <div className="w-full h-full">
        {/* <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d110542.32448770573!2d31.011981000000002!3d30.024013!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14585bd5caba2855%3A0x7f262614e7008af!2sHills%20Construction!5e0!3m2!1sen!2seg!4v1721565378333!5m2!1sen!2seg"
          width="600"
          height="450"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
          className="w-full"
        ></iframe> */}
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d94253.75306739392!2d31.075658086662855!3d30.022418995173435!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1z2YXZiNmEINin2YTYqNin2KjYpyDZg9mF2KjZiNmG2K8g2KfZhNiu2YXYp9mK2YQg2KjYrNmI2KfYsSDZhdiz2KzYryDYp9mE2LTYsdi32Kkg2aYg2KPZg9iq2YjYqNix!5e0!3m2!1sar!2seg!4v1723459106818!5m2!1sar!2seg"
          width="600"
          height="450"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
          className="w-full rounded-md"
        ></iframe>
      </div>
    </div>
  );
};

export default Map;
