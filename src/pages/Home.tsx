import Hero from '../components/Hero'
import Features from '../components/Features'
import Testimonials from '../components/Testimonials'
import { Link } from 'react-router-dom'
import { useState } from 'react'

export default function Home() {
  const [openFaq, setOpenFaq] = useState<number | null>(0)

  const faqs = [
    {
      q: "Which industries does MeetCIP work best for?",
      a: "MeetCIP is pre-configured for 11 industries including Water/Fire Restoration, Foundation Repair, HVAC, Plumbing, Electricians, Roofing, Concrete Leveling, Fencing, Landscaping, Garage Door Repair, and Real Estate. Each package includes industry-specific AI prompts and workflows tailored to your business needs."
    },
    {
      q: "How does MeetCIP handle emergency calls vs. regular inquiries?",
      a: "MeetCIP automatically detects urgency in customer calls. For emergency services like plumbing leaks or HVAC failures, our AI prioritizes the call, gathers critical information quickly, and can instantly notify your on-call team via SMS or email. Regular inquiries are scheduled appropriately based on your availability."
    },
    {
      q: "Can MeetCIP qualify leads for high-ticket services?",
      a: "Yes! For industries like Foundation Repair, Roofing, and Concrete Leveling, MeetCIP asks qualification questions about project scope, property details, budget range, and timeline. This helps you prioritize $15k-$50k+ opportunities and show up to appointments with complete information."
    },
    {
      q: "Does MeetCIP really sound human? Will customers know it's AI?",
      a: "MeetCIP uses advanced voice AI that sounds natural and conversational. Most customers don't realize they're speaking with AI. The system is trained to handle interruptions, ask clarifying questions, and maintain a professional, friendly tone in both English and Spanish."
    },
    {
      q: "How quickly can I get set up?",
      a: "Most businesses are live within 24-48 hours. Setup includes: (1) Choosing your industry package, (2) Connecting your phone number, (3) Training the AI on your business details, (4) Testing calls. Our team handles the technical work - you just provide information about your services."
    },
    {
      q: "What happens if MeetCIP can't answer a question?",
      a: "If a caller asks something outside MeetCIP's knowledge, it will politely explain that it needs to connect them with your team, take their contact information, and immediately notify you. You maintain full control and can always jump into any conversation."
    }
  ]

  return (
    <>
      <Hero />
      <Features />
      <Testimonials />
      
      {/* Updated Pricing Preview Section */}
      <div className="bg-surface">
        <div className="section-container text-center">
          <h2 className="heading-md text-primary mb-4">Simple, Transparent Pricing</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-12">
            Choose from 4 standard tiers or 11 industry-specific packages
          </p>
          
          {/* Quick Pricing Cards Preview */}
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-12">
            {/* Starter */}
            <div className="bg-white rounded-2xl p-8 border-2 border-gray-200 hover:border-accent transition-all">
              <h3 className="text-2xl font-display font-bold text-primary mb-2">Starter</h3>
              <div className="mb-4">
                <span className="text-5xl font-display font-bold text-accent">$49</span>
                <span className="text-lg text-gray-600">/month</span>
              </div>
              <p className="text-gray-600 mb-6">100 calls/month</p>
              <Link to="/onboarding" className="block w-full text-center py-3 px-6 bg-accent text-white rounded-xl font-bold hover:bg-accent-dark transition-colors">
                Get Started
              </Link>
            </div>
            
            {/* Professional */}
            <div className="bg-gradient-to-br from-accent to-accent-dark text-white rounded-2xl p-8 transform scale-105 shadow-2xl">
              <div className="text-center mb-4">
                <span className="bg-white text-accent text-sm font-bold px-4 py-1 rounded-full">
                  MOST POPULAR
                </span>
              </div>
              <h3 className="text-2xl font-display font-bold mb-2">Professional</h3>
              <div className="mb-4">
                <span className="text-5xl font-display font-bold">$149</span>
                <span className="text-lg text-white/80">/month</span>
              </div>
              <p className="text-white/90 mb-6">300 calls/month</p>
              <Link to="/onboarding" className="block w-full text-center py-3 px-6 bg-white text-accent rounded-xl font-bold hover:bg-gray-100 transition-colors">
                Get Started
              </Link>
            </div>
            
            {/* Business */}
            <div className="bg-white rounded-2xl p-8 border-2 border-gray-200 hover:border-accent transition-all">
              <h3 className="text-2xl font-display font-bold text-primary mb-2">Business</h3>
              <div className="mb-4">
                <span className="text-5xl font-display font-bold text-accent">$249</span>
                <span className="text-lg text-gray-600">/month</span>
              </div>
              <p className="text-gray-600 mb-6">500 calls/month</p>
              <Link to="/onboarding" className="block w-full text-center py-3 px-6 bg-accent text-white rounded-xl font-bold hover:bg-accent-dark transition-colors">
                Get Started
              </Link>
            </div>
          </div>
          
          {/* Industry Packages Teaser */}
          <div className="bg-white rounded-2xl p-8 max-w-4xl mx-auto border-2 border-accent mb-8">
            <h3 className="text-2xl font-display font-bold text-primary mb-4">Industry-Specific Packages</h3>
            <p className="text-gray-600 mb-6">
              Pre-configured for Water/Fire Restoration, Foundation Repair, HVAC, Plumbing, Electricians, Roofing, and more
            </p>
            <div className="flex flex-wrap justify-center gap-3 mb-6">
              <span className="bg-accent/10 text-accent px-4 py-2 rounded-full text-sm font-semibold">🏡 Real Estate</span>
              <span className="bg-accent/10 text-accent px-4 py-2 rounded-full text-sm font-semibold">🔥 Emergency Services</span>
              <span className="bg-accent/10 text-accent px-4 py-2 rounded-full text-sm font-semibold">🏠 Home Services</span>
              <span className="bg-accent/10 text-accent px-4 py-2 rounded-full text-sm font-semibold">🏗️ Property Services</span>
            </div>
            <Link to="/pricing" className="btn-primary inline-block">
              View All Pricing Options
            </Link>
          </div>
          
          {/* Money-Back Guarantee */}
          <div className="flex items-center justify-center space-x-2 text-lg">
            <svg className="w-6 h-6 text-accent" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span className="font-semibold text-primary">30-Day Money-Back Guarantee</span>
          </div>
        </div>
      </div>
      
      {/* Industry-Specific FAQ */}
      <div className="bg-white">
        <div className="section-container">
          <div className="text-center mb-12">
            <h2 className="heading-md text-primary mb-4">Common Questions</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Everything you need to know about MeetCIP for your industry
            </p>
          </div>
          
          <div className="max-w-3xl mx-auto space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white border-2 border-gray-200 rounded-xl overflow-hidden hover:border-accent transition-colors">
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full text-left px-6 py-5 flex items-center justify-between font-semibold text-lg text-primary hover:text-accent transition-colors"
                >
                  <span>{faq.q}</span>
                  <svg
                    className={`w-5 h-5 text-accent transform transition-transform ${openFaq === index ? 'rotate-180' : ''}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {openFaq === index && (
                  <div className="px-6 pb-5 text-gray-600 leading-relaxed">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-gray-600 mb-4">Still have questions?</p>
            <Link to="/contact" className="text-accent font-semibold hover:text-accent-dark transition-colors">
              Contact our support team →
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}