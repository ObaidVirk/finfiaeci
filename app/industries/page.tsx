import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Building2, Landmark, TrendingUp, Briefcase, DollarSign, Shield } from "lucide-react";

const industries = [
  {
    icon: Landmark,
    title: "Banking & Capital Markets",
    description: "Comprehensive solutions for risk management, regulatory compliance, and market intelligence tailored for global banks and capital market firms.",
    features: ["Credit Risk Assessment", "Market Data Analytics", "Regulatory Reporting", "Stress Testing"]
  },
  {
    icon: TrendingUp,
    title: "Asset & Wealth Management",
    description: "Portfolio analytics, ESG integration, and market intelligence to support investment decision-making and client reporting.",
    features: ["Portfolio Analytics", "ESG Integration", "Performance Attribution", "Risk Analytics"]
  },
  {
    icon: Shield,
    title: "Insurance",
    description: "Risk assessment, actuarial data, and analytics solutions designed specifically for insurance providers and reinsurers.",
    features: ["Risk Modeling", "Claims Analytics", "Actuarial Data", "Catastrophe Risk"]
  },
  {
    icon: Building2,
    title: "Corporate Treasury",
    description: "Treasury and risk management solutions helping corporate finance teams optimize cash management and hedging strategies.",
    features: ["Cash Management", "FX Risk Management", "Commodity Risk", "Interest Rate Risk"]
  },
  {
    icon: Briefcase,
    title: "Professional Services",
    description: "Data and analytics solutions for consulting, advisory, and professional services firms serving financial markets.",
    features: ["Market Research", "Client Analytics", "Industry Benchmarks", "Custom Reports"]
  },
  {
    icon: DollarSign,
    title: "Fintech Companies",
    description: "API access, data solutions, and infrastructure for financial technology companies building innovative products.",
    features: ["API Access", "Real-time Data", "Historical Data", "Custom Integration"]
  }
];

export default function IndustriesPage() {
  return (
    <main>
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 md:pt-40 md:pb-28 bg-gradient-to-br from-blue-50 to-white">
        <div className="max-w-screen-xl mx-auto px-6 md:px-12">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-semibold text-gray-900 mb-6">
              Industry Solutions
            </h1>
            <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
              Tailored financial intelligence solutions for every industry, powered by comprehensive data and advanced analytics.
            </p>
          </div>
        </div>
      </section>

      {/* Industries Grid */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-screen-xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {industries.map((industry, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl border border-gray-200 hover:shadow-xl transition-all duration-300">
                <industry.icon className="w-14 h-14 text-primary-600 mb-6" />
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">{industry.title}</h2>
                <p className="text-gray-600 leading-relaxed mb-6">{industry.description}</p>
                <div className="space-y-2">
                  {industry.features.map((feature, i) => (
                    <div key={i} className="flex items-center text-sm text-gray-700">
                      <div className="w-1.5 h-1.5 bg-primary-600 rounded-full mr-3"></div>
                      {feature}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
