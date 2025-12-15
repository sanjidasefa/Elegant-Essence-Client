import React from "react";

const About = () => {
  return (
<div className="p-10">
  <div className="bg-white rounded-2xl p-10 lg:p-20">
    <h1 className="text-2xl md:text-4xl font-bold text-cyan-900">
      About Us
    </h1>
    <p className="text-gray-500 my-5">
      StyleDecor makes planning your home or event decorations seamless and stress-free. From in-studio consultations to on-site decorations, we ensure every detail is handled with care.
    </p>

    <div className="tabs tabs-box">
      <input
        type="radio"
        name="my_tabs_6"
        className="tab"
        aria-label="Story"
      />
      <div className="tab-content bg-cyan-700 p-5">
        <p className="mb-2">
          StyleDecor was born from a passion for transforming spaces beautifully. We noticed that clients often struggled to find reliable decorators who could manage schedules and services efficiently. That’s why we built a system that simplifies the entire process.
        </p>
        <p className="mb-2 text-white">
          Our vision is clear: Seamless Bookings. Flexible Services. Happy Customers.
        </p>
        <p className="mb-2">
          What started with a small team is now a trusted platform for local decorations. Whether it’s a cozy home makeover or a grand ceremony, we ensure every service is scheduled, delivered, and executed perfectly.
        </p>
      </div>

      <input
        type="radio"
        name="my_tabs_6"
        className="tab"
        aria-label="Mission"
        defaultChecked
      />
      <div className="tab-content bg-primary p-4">
        <h1 className="font-bold text-2xl text-white">
          Our mission is simple yet meaningful:
        </h1>
        <ul className="ml-10 my-2 list-disc text-white">
          <li>Offer easy online booking for home and event decoration services</li>
          <li>Ensure decorators are available and responsive at all times</li>
          <li>Provide clear service tracking and updates for every booking</li>
          <li>Partner with top decorators to maintain quality and consistency</li>
          <li>Create a seamless, customer-first experience for every client</li>
        </ul>
      </div>

      <input
        type="radio"
        name="my_tabs_6"
        className="tab"
        aria-label="Success"
      />
      <div className="tab-content bg-pink-400 p-4">
        <h1 className="font-bold text-2xl text-white">
          Our success is measured by client satisfaction:
        </h1>
        <ul className="ml-10 my-2 list-disc text-white">
          <li>Thousands of successfully managed appointments</li>
          <li>Reliable and timely service for all events</li>
          <li>Efficient coordination between clients and decorators</li>
          <li>Top ratings for service quality and support</li>
        </ul>
        <p className="font-semibold text-white">
          For us, success means every client feels confident and delighted with their decorated space.
        </p>
      </div>

      <input
        type="radio"
        name="my_tabs_6"
        className="tab"
        aria-label="Team & Others"
      />
      <div className="tab-content bg-yellow-400 p-4">
        <h1 className="font-bold text-2xl text-white">Our Values:</h1>
        <ul className="ml-10 my-2 list-disc text-white">
          <li>Creativity: Every project is unique and inspired</li>
          <li>Reliability: Delivering what we promise, on time</li>
          <li>Transparency: Clients always know the status of their booking</li>
          <li>Innovation: Technology makes scheduling and tracking simple</li>
          <li>Care: Every client and decorator is treated with respect</li>
        </ul>
        <h1 className="font-bold text-2xl text-white">Our Team:</h1>
        <ul className="ml-10 my-2 list-disc text-white">
          <li>Talented decorators bringing spaces to life</li>
          <li>Support staff ensuring smooth booking and communication</li>
          <li>Tech team maintaining scheduling, tracking, and optimization</li>
          <li>Operations team overseeing quality and timely execution</li>
        </ul>
        <p className="font-semibold text-white">
          Together, we work to ensure every decoration project is beautiful, timely, and hassle-free.
        </p>
      </div>
    </div>
  </div>
</div>

  );
};

export default About;
