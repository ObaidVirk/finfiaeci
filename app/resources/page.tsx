import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { BookOpen, Video, Calendar, FileText } from "lucide-react";
import Link from "next/link";

const resources = [
  {
    category: "Research Reports",
    icon: FileText,
    items: [
      { title: "2026 Global Market Outlook", date: "Feb 2026" },
      { title: "ESG Investing Trends", date: "Jan 2026" },
      { title: "Risk Management Best Practices", date: "Dec 2025" }
    ]
  },
  {
    category: "Webinars",
    icon: Video,
    items: [
      { title: "Navigating Market Volatility", date: "Mar 15, 2026" },
      { title: "The Future of ESG", date: "Feb 28, 2026" },
      { title: "Risk Analytics Deep Dive", date: "Feb 14, 2026" }
    ]
  },
  {
    category: "Case Studies",
    icon: BookOpen,
    items: [
      { title: "How Global Bank Reduced Risk by 40%", date: "Feb 2026" },
      { title: "Asset Manager ESG Transformation", date: "Jan 2026" },
      { title: "Insurance Company Data Integration", date: "Dec 2025" }
    ]
  },
  {
    category: "Events",
    icon: Calendar,
    items: [
      { title: "Annual Finance Summit 2026", date: "Apr 20, 2026" },
      { title: "ESG Conference", date: "Mar 30, 2026" },
      { title: "Risk Management Workshop", date: "Mar 10, 2026" }
    ]
  }
];

export default function ResourcesPage() {
  return (
    <main>
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 md:pt-40 md:pb-28 bg-gradient-to-br from-purple-50 to-white">
        <div className="max-w-screen-xl mx-auto px-6 md:px-12">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-semibold text-gray-900 mb-6">
              Resources & Insights
            </h1>
            <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
              Stay informed with our latest research, webinars, case studies, and industry events.
            </p>
          </div>
        </div>
      </section>

      {/* Resources Grid */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-screen-xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {resources.map((resource, i) => (
              <div key={i} className="bg-gray-50 rounded-2xl p-8">
                <div className="flex items-center mb-6">
                  <resource.icon className="w-8 h-8 text-primary-600 mr-3" />
                  <h2 className="text-2xl font-semibold text-gray-900">{resource.category}</h2>
                </div>
                <div className="space-y-4">
                  {resource.items.map((item, j) => (
                    <Link 
                      key={j} 
                      href="#"
                      className="block p-4 bg-white rounded-lg hover:shadow-md transition-shadow"
                    >
                      <h3 className="font-medium text-gray-900 mb-1">{item.title}</h3>
                      <p className="text-sm text-gray-600">{item.date}</p>
                    </Link>
                  ))}
                </div>
                <Link 
                  href="#" 
                  className="inline-block mt-6 text-primary-600 font-medium hover:text-primary-700"
                >
                  View all {resource.category.toLowerCase()} →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-20 md:py-28 bg-gray-50">
        <div className="max-w-screen-xl mx-auto px-6 md:px-12">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl font-semibold text-gray-900 mb-6">
              Stay Updated
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Subscribe to our newsletter for the latest insights, research, and market intelligence.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto">
              <input 
                type="email" 
                placeholder="Enter your email"
                className="flex-1 px-6 py-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-600"
              />
              <button className="px-8 py-4 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors font-medium">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
