import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function CTASection() {
  return (
    <section className="py-20 md:py-28 bg-gradient-to-br from-primary-600 to-primary-800 text-white">
      <div className="max-w-screen-xl mx-auto px-6 md:px-12">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-semibold mb-6">
            Ready to Transform Your Financial Intelligence?
          </h2>
          <p className="text-lg md:text-xl text-primary-100 leading-relaxed mb-10">
            Join thousands of financial professionals who trust Finfiaeci for critical decision-making. 
            Start your free trial today or schedule a personalized demo.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
            <Link 
              href="/signup"
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-primary-600 rounded-lg hover:bg-gray-100 transition-all duration-200 font-medium text-lg group"
            >
              Start Free Trial
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link 
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-transparent text-white rounded-lg border-2 border-white hover:bg-white hover:text-primary-600 transition-all duration-200 font-medium text-lg"
            >
              Schedule Demo
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
