import { useState } from 'react'
import { Link } from 'react-router-dom'

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const faqs = [
    {
      question: 'What exactly does MeetCIP do?',
      answer: 'MeetCIP answers your business phone, helps callers with questions, gathers their information, and sends you their details. It works 24/7 so you never miss a customer.'
    },
    {
      question: 'Will callers know it\'s not a real person?',
      answer: 'No—MeetCIP speaks naturally and professionally. Most callers don\'t realize they\'re speaking with a virtual receptionist.'
    },
    {
      question: 'Does MeetCIP understand my business?',
      answer: 'Yes—you provide your services, pricing, hours, and other details during setup. MeetCIP uses this information to answer callers accurately.'
    },
    {
      question: 'Do I need to change my phone number?',
      answer: 'No—you keep your current number. You simply choose when calls go to MeetCIP (after hours, when busy, or 24/7).'
    },
    {
      question: 'Is it easy to set up?',
      answer: 'Very easy. Most businesses are live in under 10 minutes. No technical knowledge required.'
    },
    {
      question: 'What if I need to cancel?',
      answer: 'You can cancel anytime with no penalties. We offer month-to-month plans with no long-term contracts.'
    }
  ]

  return (
    <div className="bg-surface">
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="heading-lg text-primary mb-4">
            Common Questions
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Everything you need to know about MeetCIP
          </p>
        </div>

        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl border-2 border-gray-100 overflow-hidden hover:border-accent transition-colors"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 py-5 text-left flex justify-between items-center hover:bg-surface/50 transition-colors"
              >
                <span className="font-bold text-primary text-lg pr-4">{faq.question}</span>
                <svg
                  className={`w-6 h-6 text-accent flex-shrink-0 transform transition-transform duration-300 ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {openIndex === index && (
                <div className="px-6 pb-5 text-gray-600 leading-relaxed text-lg border-t border-gray-100 pt-4">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-600 mb-4 text-lg">Still have questions?</p>
          <Link to="/contact" className="text-accent hover:text-accent-dark font-bold text-lg">
            Contact our support team →
          </Link>
        </div>
      </div>
    </div>
  )
}
