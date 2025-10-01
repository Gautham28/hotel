'use client';

import { useState } from 'react';

interface FAQItem {
  id: number;
  question: string;
  answer: string;
}

const faqData: FAQItem[] = [
  {
    id: 1,
    question: "What are the check-in and check-out times?",
    answer: "Check-in is at 3:00 PM and check-out is at 11:00 AM. Early check-in and late check-out may be available upon request and subject to availability."
  },
  {
    id: 2,
    question: "Are pets allowed in the villas?",
    answer: "Yes, we welcome well-behaved pets in most of our villas. Additional pet fees may apply, and we ask that you inform us in advance about bringing pets to ensure proper accommodation."
  },
  {
    id: 3,
    question: "What amenities are included with the villa rental?",
    answer: "Our villas come fully equipped with modern amenities including air conditioning, Wi-Fi, fully equipped kitchen, private pool, housekeeping service, and 24/7 concierge support. Specific amenities may vary by villa."
  }
];

const FAQ = () => {
  const [openItems, setOpenItems] = useState<number[]>([]);

  const toggleItem = (id: number) => {
    setOpenItems(prev => 
      prev.includes(id) 
        ? prev.filter(item => item !== id)
        : [...prev, id]
    );
  };

  return (
    <section className="bg-black py-20 px-4">
      <div className="max-w-4xl mx-auto">
        {/* FAQ Badge */}
        <div className="flex justify-center mb-8">
          <span 
            className="text-black px-4 py-2 rounded-full text-sm font-medium inline-block"
            style={{ backgroundColor: '#E4DD60' }}
          >
            FAQ
          </span>
        </div>

        {/* Main Heading */}
        <div className="text-center mb-16">
          <h2 className="text-white text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
            Frequently Asked<br />
            Questions
          </h2>
        </div>

        {/* FAQ Items */}
        <div className="space-y-4">
          {faqData.map((item, index) => (
            <div
              key={item.id}
              className="rounded-3xl overflow-hidden"
              style={{ 
                backgroundColor: '#2D2D2D'
              }}
              data-aos="fade-up"
              data-aos-delay={`${(index + 1) * 100}`}
            >
              {/* Accordion Header */}
              <h3 className="m-0">
                <button
                  onClick={() => toggleItem(item.id)}
                  className="w-full px-8 py-6 text-left flex items-center justify-between hover:bg-opacity-80 transition-all duration-200 bg-transparent border-none cursor-pointer"
                  tabIndex={0}
                  type="button"
                  aria-expanded={openItems.includes(item.id)}
                >
                  {/* Content */}
                  <span className="flex-1 pr-4">
                    <h6 className="text-white text-lg font-medium m-0 leading-6">
                      {item.question}
                    </h6>
                  </span>
                  
                  {/* Expand Icon */}
                  <span className="flex-shrink-0">
                    <svg 
                      className={`w-6 h-6 transition-transform duration-200 ${
                        openItems.includes(item.id) ? 'rotate-180' : ''
                      }`}
                      style={{ color: '#E4DD60' }}
                      focusable="false" 
                      aria-hidden="true" 
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M16.59 8.59 12 13.17 7.41 8.59 6 10l6 6 6-6z"></path>
                    </svg>
                  </span>
                </button>
              </h3>

              {/* Collapsible Content */}
              <div 
                className={`transition-all duration-300 ease-in-out overflow-hidden ${
                  openItems.includes(item.id) ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                }`}
                style={{ minHeight: openItems.includes(item.id) ? 'auto' : '0px' }}
              >
                <div className="px-8 pb-6">
                  <div role="region" className="pt-4 border-t border-gray-600">
                    <p className="text-gray-300 text-base leading-relaxed m-0 mt-4">
                      {item.answer}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
