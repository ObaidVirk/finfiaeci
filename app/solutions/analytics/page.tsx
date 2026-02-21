import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { BarChart3, TrendingUp, Database, Cpu, FileText, Users } from "lucide-react";

export default function AnalyticsPage() {
  return (
    <main>
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 md:pt-40 md:pb-28 bg-gradient-to-br from-primary-50 to-white">
        <div className="max-w-screen-xl mx-auto px-6 md:px-12">
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-6xl font-semibold text-gray-900 mb-6">
              Financial Data Analytics
            </h1>
            <p className="text-lg md:text-xl text-gray-600 leading-relaxed mb-8">
              Transform complex financial data into actionable insights with our comprehensive analytics platform. 
              Access real-time market data, historical trends, and predictive analytics.
            </p>
            <button className="px-8 py-4 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors font-medium text-lg">
              Request Demo
            </button>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-screen-xl mx-auto px-6 md:px-12">
          <h2 className="text-4xl font-semibold text-gray-900 mb-12 text-center">Key Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: BarChart3, title: "Real-Time Analytics", desc: "Live market data and analytics updated in real-time" },
              { icon: TrendingUp, title: "Predictive Models", desc: "AI-powered forecasting and trend analysis" },
              { icon: Database, title: "Historical Data", desc: "Decades of historical financial data at your fingertips" },
              { icon: Cpu, title: "Custom Models", desc: "Build and deploy custom analytics models" },
              { icon: FileText, title: "Automated Reports", desc: "Generate comprehensive reports automatically" },
              { icon: Users, title: "Collaboration Tools", desc: "Share insights and collaborate with your team" }
            ].map((feature, i) => (
              <div key={i} className="p-8 bg-gray-50 rounded-2xl">
                <feature.icon className="w-12 h-12 text-primary-600 mb-4" />
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
