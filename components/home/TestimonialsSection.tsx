import { Star } from "lucide-react";

const testimonials = [
  {
    quote: "Finfiaeci has transformed how we approach risk management. The depth of data and analytics is unmatched in the industry.",
    author: "Sarah Johnson",
    role: "Chief Risk Officer",
    company: "Global Investment Bank"
  },
  {
    quote: "The ESG data and ratings have been instrumental in helping our clients build sustainable investment portfolios. Highly recommended.",
    author: "Michael Chen",
    role: "Portfolio Manager",
    company: "Sustainable Asset Management"
  },
  {
    quote: "Real-time market intelligence and analytics that actually deliver value. The platform is intuitive and powerful.",
    author: "Emily Rodriguez",
    role: "Head of Trading",
    company: "Hedge Fund Partners"
  }
];

export default function TestimonialsSection() {
  return (
    <section className="py-20 md:py-28 bg-gray-50">
      <div className="max-w-screen-xl mx-auto px-6 md:px-12">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-semibold text-gray-900 mb-6">
            What Our Clients Say
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Trusted by financial professionals worldwide for critical decision-making.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="bg-white p-8 rounded-2xl border border-gray-200 hover:shadow-xl transition-all duration-300"
            >
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-700 leading-relaxed mb-6 italic">
                "{testimonial.quote}"
              </p>
              <div className="border-t border-gray-200 pt-6">
                <div className="font-semibold text-gray-900">
                  {testimonial.author}
                </div>
                <div className="text-sm text-gray-600">
                  {testimonial.role}
                </div>
                <div className="text-sm text-primary-600 font-medium mt-1">
                  {testimonial.company}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
