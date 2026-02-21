import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Shield, AlertTriangle, FileCheck, Lock, Activity, UserCheck } from "lucide-react";

export default function RiskPage() {
  return (
    <main>
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 md:pt-40 md:pb-28 bg-gradient-to-br from-red-50 to-white">
        <div className="max-w-screen-xl mx-auto px-6 md:px-12">
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-6xl font-semibold text-gray-900 mb-6">
              Enterprise Risk Management
            </h1>
            <p className="text-lg md:text-xl text-gray-600 leading-relaxed mb-8">
              Identify, assess, and mitigate financial risks with our comprehensive risk management platform. 
              Stay compliant and protect your organization from potential threats.
            </p>
            <button className="px-8 py-4 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors font-medium text-lg">
              Get Started
            </button>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-screen-xl mx-auto px-6 md:px-12">
          <h2 className="text-4xl font-semibold text-gray-900 mb-12 text-center">Risk Solutions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: Shield, title: "Credit Risk", desc: "Comprehensive credit risk assessment and monitoring" },
              { icon: AlertTriangle, title: "Market Risk", desc: "Real-time market risk analysis and alerts" },
              { icon: FileCheck, title: "Compliance", desc: "Regulatory compliance and reporting tools" },
              { icon: Lock, title: "Operational Risk", desc: "Identify and manage operational vulnerabilities" },
              { icon: Activity, title: "Stress Testing", desc: "Advanced scenario analysis and stress testing" },
              { icon: UserCheck, title: "Third-Party Risk", desc: "Vendor and counterparty risk management" }
            ].map((feature, i) => (
              <div key={i} className="p-8 bg-gray-50 rounded-2xl">
                <feature.icon className="w-12 h-12 text-red-600 mb-4" />
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
