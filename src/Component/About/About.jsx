import React from "react";
import Banner2 from "../Home/Banner/Banner2";
import CompanyOverview from "../Home/Banner/CompanyOverview";

const About = () => {
  return (
<div className="p-10">
  <div className="bg-white rounded-2xl p-10 lg:p-20">
    <h1 className="text-3xl md:text-5xl font-bold text-cyan-800">
      About Us
    </h1>
    <p className="text-gray-500 my-5">
      StyleDecor makes planning your home or event decorations seamless and stress-free. From in-studio consultations to on-site decorations, we ensure every detail is handled with care.
    </p>

   <CompanyOverview></CompanyOverview>
  <Banner2></Banner2>
  </div>
</div>

  );
};

export default About;
