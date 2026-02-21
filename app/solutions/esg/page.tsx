import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Leaf, Globe, Award, Target, Building, TrendingUp } from "lucide-react";

export default function ESGPage() {
  return (
    <main>
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 md:pt-40 md:pb-28 bg-gradient-to-br from-green-50 to-white">
        <div className="max-w-screen-xl mx-auto px-6 md:px-12">
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-6xl font-semibold text-gray-900 mb-6">
              ESG Data & Ratings
            </h1>
            <p className="text-lg md:text-xl text-gray-600 leading-relaxed mb-8">
              Make informed sustainable investment decisions with comprehensive environmental, social, and 
              governance data. Support your ESG strategy with trusted ratings and analytics.
            </p>
            <button className="px-8 py-4 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors font-medium text-lg">
              Explore ESG Solutions
            </button>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-screen-xl mx-auto px-6 md:px-12">
          <h2 className="text-4xl font-semibold text-gray-900 mb-12 text-center">ESG Capabilities</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: Leaf, title: "Environmental Data", desc: "Carbon emissions, climate risk, and environmental impact data" },
              { icon: Globe, title: "Social Metrics", desc: "Labor practices, diversity, and community impact analysis" },
              { icon: Award, title: "Governance Ratings", desc: "Corporate governance and ethical business practice scores" },
              { icon: Target, title: "Sustainability Goals", desc: "Track and report on UN SDG alignment" },
              { icon: Building, title: "Corporate ESG", desc: "Company-level ESG ratings and benchmarking" },
              { icon: TrendingUp, title: "ESG Analytics", desc: "Advanced analytics for sustainable investing" }
            ].map((feature, i) => (
              <div key={i} className="p-8 bg-gray-50 rounded-2xl">
                <feature.icon className="w-12 h-12 text-green-600 mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
