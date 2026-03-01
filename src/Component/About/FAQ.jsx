import React from 'react';
import { use } from 'react';

const faq = fetch('/Faq.json').then(res => res.json())
const FAQ = () => {
 const faqData = use(faq)
//  console.log(faqData)
  return (
    <div className='p-10 bg-white'>
      <h1 className='text-3xl font-bold md:text-5xl text-cyan-800 text-center mb-15'>Frequently asked questions</h1>
     {
      faqData.map((item, index)=>  <div key={index} className="collapse collapse-plus bg-white border text-cyan-800 font-semibold border-cyan-200">
  <input type="radio" name="my-accordion-3"  />
  <div className="collapse-title font-semibod">{item.question}</div>
  <div className="collapse-content text-sm">{item.answer}</div>
</div>)
     }
    </div>
  );
};

export default FAQ;