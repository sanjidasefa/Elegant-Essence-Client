import React from 'react';

const Condition = () => {
  return (
    <div className=" p-10 bg-white text-cyan-800">
  <h1 className="text-3xl  font-bold  text-center">Terms & Conditions</h1>

  <p className="my-4 text-center font-semibold">
    By accessing and using our website, you agree to comply with the following
    terms and conditions. Please read them carefully before using our services.
  </p>

  <h2 className="text-xl font-bold mt-6">Event Registration</h2>
  <p className="mb-4">
    Participants must provide accurate information during event registration.
    The organizers reserve the right to cancel registrations if incorrect or
    misleading information is provided.
  </p>

  <h2 className="text-xl font-bold mt-6 ">Payments</h2>
  <p className="mb-4">
    All payments made for event participation are final unless stated otherwise.
    Refund policies may vary depending on the event.
  </p>

  <h2 className="text-xl font-bold mt-6 ">Code of Conduct</h2>
  <p className="mb-4">
    Participants are expected to behave professionally and respectfully during
    events. Any misconduct may result in removal from the event without refund.
  </p>

  <h2 className="text-xl font-bold mt-6 ">Changes to Events</h2>
  <p className="mb-4">
    The organizers reserve the right to modify event schedules, speakers, or
    venues if necessary.
  </p>

  <h2 className="text-xl font-bold mt-6 ">Contact</h2>
  <p>
    If you have any questions regarding these terms, please contact our support
    team through the website.
  </p>
</div>
  );
};

export default Condition;