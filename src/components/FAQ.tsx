"use client";

import { useState } from "react";

const faqs = [
  {
    question: "How does the platform protect my data?",
    answer: "We use industry-standard encryption and follow strict security protocols to ensure your data is always protected. Our platform is HIPAA compliant and follows SOC-2 and ISO 27001 standards."
  },
  {
    question: "What kind of results can I expect?",
    answer: "Our clients typically see significant improvements in their financial planning, with optimized benefits, reduced healthcare costs, and comprehensive asset protection strategies."
  },
  {
    question: "How much does the service cost?",
    answer: "Our pricing is transparent and based on the complexity of your financial situation. We'll provide a detailed quote after understanding your specific needs."
  },
  {
    question: "Can I use this platform without financial expertise?",
    answer: "Absolutely! Our platform is designed to be user-friendly, and our expert advisors are available to guide you through every step of the process."
  }
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16">
          Frequently Asked Questions
        </h2>
        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-white rounded-lg shadow">
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full text-left p-6 flex justify-between items-center"
              >
                <span className="text-lg font-semibold">{faq.question}</span>
                <svg 
                  className={`w-6 h-6 transition-transform ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M19 9l-7 7-7-7" 
                  />
                </svg>
              </button>
              <div 
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index ? "max-h-96" : "max-h-0"
                }`}
              >
                <div className="px-6 pb-6 text-gray-600">{faq.answer}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
