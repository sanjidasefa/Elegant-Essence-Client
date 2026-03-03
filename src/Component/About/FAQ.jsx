import React from 'react';
import { use } from 'react';

const faq = fetch('/Faq.json').then(res => res.json())

const FAQ = () => {
 const faqData = use(faq)

  return (
    <div className='p-6 md:p-20 bg-white dark:bg-slate-950 transition-colors duration-300'>
      <h1 className='text-3xl font-black md:text-5xl text-cyan-800 dark:text-cyan-400 text-center mb-12 uppercase tracking-tight'>
        Frequently <span className='text-slate-900 dark:text-white'>asked questions</span>
      </h1>
      <div className='max-w-4xl mx-auto space-y-4'>
        {
          faqData.map((item, index) => (
            <div 
              key={index} 
              className="collapse collapse-plus bg-white dark:bg-slate-900 border text-slate-800 dark:text-slate-200 border-cyan-100 dark:border-slate-800 shadow-sm"
            >
              <input type="radio" name="my-accordion-3" defaultChecked={index === 0} /> 
              <div className="collapse-title text-lg font-bold text-cyan-900 dark:text-cyan-300">
                {item.question}
              </div>
              <div className="collapse-content text-slate-600 dark:text-slate-400 leading-relaxed">
                <p>{item.answer}</p>
              </div>
            </div>
          ))
        }
      </div>
    </div>
  );
};

export default FAQ;