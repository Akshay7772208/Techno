import React, { useState } from 'react';
import './FAQSection.css'; // Import your CSS file for styling

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqData = [
    { question: 'What is Ethics Committee?', answer: 'The ethics committee is an Independent body which is formed to safeguard the interests of participant by evaluating scientific and ethical aspect of the proposal. ' },
    { question: 'What is the fees for Ethics Committee?', answer: 'Fees for Ethics Committee is 1000/- ' },
    { question: 'What is the duration of Ethics Committee?', answer: 'Duration For Ethics Committee Certification Course is 15 Days. ' },
    { question: 'How do I register as an Ethics Committee Certification Course?', answer: 'You just need to apply @ Here' },
  ];

  const handleQuestionClick = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div id='faq' className="faq-container">
      <h1 className="faq-heading" style={{ marginTop:'15px',color: '#061e91' }}>Frequently Asked Questions</h1>
      <div className="btmborder"></div>
      {faqData.map((faq, index) => (
        <div key={index} className="faq-box">
          <div
            className={`faq-question ${openIndex === index ? 'active' : ''}`}
            onClick={() => handleQuestionClick(index)}
          >
            {faq.question}
          </div>
          {openIndex === index && (
            <div className="faq-answer">
              {faq.answer}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default FAQSection;
