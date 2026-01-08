export default function Testimonials() {
  const testimonials = [
    {
      name: 'Sarah Johnson',
      company: 'ABC Fire & Water Restoration',
      role: 'Owner',
      content: 'MeetCIP answers all our calls while we\'re out working. We\'ve closed more jobs because customers actually get someone on the line.',
      rating: 5
    },
    {
      name: 'Mike Rodriguez',
      company: 'Best of SA Fence Painting',
      role: 'Manager',
      content: 'Customers think they\'re speaking to a real receptionist. MeetCIP handles everything and sends us the leads instantly.',
      rating: 5
    },
    {
      name: 'Jane Smith',
      company: 'Gold Realty',
      role: 'Real Estate Agent',
      content: 'I was losing clients to voicemail. Now MeetCIP answers 24/7 and I never miss an opportunity. Game changer for my business.',
      rating: 5
    }
  ]

  return (
    <div className="bg-white">
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="heading-lg text-primary mb-4">
            MeetCIP Helps Businesses Like Yours
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            See what our customers are saying
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-white to-surface rounded-2xl p-8 border-2 border-gray-100 hover:border-accent hover:shadow-xl transition-all duration-300"
            >
              <div className="flex items-center space-x-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <svg
                    key={i}
                    className="w-5 h-5 text-yellow-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-gray-700 mb-6 leading-relaxed italic text-lg">
                "{testimonial.content}"
              </p>
              <div className="flex items-center space-x-3 pt-4 border-t border-gray-200">
                <div className="w-12 h-12 bg-gradient-to-br from-accent to-accent-dark rounded-full flex items-center justify-center text-white font-bold text-lg">
                  {testimonial.name.charAt(0)}
                </div>
                <div>
                  <div className="font-bold text-primary">{testimonial.name}</div>
                  <div className="text-sm text-gray-600">{testimonial.role}, {testimonial.company}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
