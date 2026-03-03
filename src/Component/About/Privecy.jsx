import React from 'react';

const Condition = () => {
  return (
    <div className="bg-white dark:bg-base-100 min-h-screen transition-colors duration-300">
      <section className="bg-slate-50 dark:bg-slate-900/50 p-10 md:p-16 border-b border-slate-100 dark:border-slate-800">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-black text-slate-900 dark:text-white mb-6">
            Terms & <span className="text-cyan-600">Conditions</span>
          </h1>
          <p className="text-slate-700 dark:text-slate-400 text-lg font-medium leading-relaxed max-w-2xl mx-auto">
            By accessing and using our website, you agree to comply with the following
            terms and conditions. Please read them carefully before using our services.
          </p>
        </div>
      </section>
      <main className="max-w-4xl mx-auto p-8 md:p-12">
        <div className="space-y-10">         
          <div className="group">
            <h2 className="text-2xl font-black text-slate-900 dark:text-white mb-3 flex items-center gap-3">
              <span className="w-8 h-8 bg-cyan-100 dark:bg-cyan-900/30 text-cyan-600 rounded-lg flex items-center justify-center text-sm">01</span>
              Event Registration
            </h2>
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-lg pl-11">
              Participants must provide accurate information during event registration.
              The organizers reserve the right to cancel registrations if incorrect or
              misleading information is provided.
            </p>
          </div>
          <div className="group">
            <h2 className="text-2xl font-black text-slate-900 dark:text-white mb-3 flex items-center gap-3">
              <span className="w-8 h-8 bg-cyan-100 dark:bg-cyan-900/30 text-cyan-600 rounded-lg flex items-center justify-center text-sm">02</span>
              Payments
            </h2>
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-lg pl-11">
              All payments made for event participation are final unless stated otherwise.
              Refund policies may vary depending on the event.
            </p>
          </div>
          <div className="group">
            <h2 className="text-2xl font-black text-slate-900 dark:text-white mb-3 flex items-center gap-3">
              <span className="w-8 h-8 bg-cyan-100 dark:bg-cyan-900/30 text-cyan-600 rounded-lg flex items-center justify-center text-sm">03</span>
              Code of Conduct
            </h2>
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-lg pl-11">
              Participants are expected to behave professionally and respectfully during
              events. Any misconduct may result in removal from the event without refund.
            </p>
          </div>
          <div className="group">
            <h2 className="text-2xl font-black text-slate-900 dark:text-white mb-3 flex items-center gap-3">
              <span className="w-8 h-8 bg-cyan-100 dark:bg-cyan-900/30 text-cyan-600 rounded-lg flex items-center justify-center text-sm">04</span>
              Changes to Events
            </h2>
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-lg pl-11">
              The organizers reserve the right to modify event schedules, speakers, or
              venues if necessary.
            </p>
          </div>
          <div className="group pt-6 border-t border-slate-100 dark:border-slate-800">
            <h2 className="text-2xl font-black text-slate-900 dark:text-white mb-3">Contact</h2>
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-lg">
              If you have any questions regarding these terms, please contact our support
              team through the website or email us at <span className="text-cyan-600 font-bold">support@elegantessence.com</span>.
            </p>
          </div>
          
        </div>
      </main>
    </div>
  );
};

export default Condition;