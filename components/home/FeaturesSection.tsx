import { BarChart3, Shield, TrendingUp, Globe, Zap, Lock } from "lucide-react";

const features = [
  {
    icon: BarChart3,
    title: "Advanced Analytics",
    description: "Powerful data analytics tools that transform complex financial data into actionable insights for better decision-making."
  },
  {
    icon: Shield,
    title: "Risk Management",
    description: "Comprehensive risk assessment and management solutions to protect your investments and ensure compliance."
  },
  {
    icon: TrendingUp,
    title: "Market Intelligence",
    description: "Real-time market data and intelligence to stay ahead of trends and identify opportunities in global markets."
  },
  {
    icon: Globe,
    title: "ESG Solutions",
    description: "Environmental, social, and governance data and ratings to support sustainable investment strategies."
  },
  {
    icon: Zap,
    title: "Real-Time Data",
    description: "Access to real-time market data, news, and analytics from global financial markets and exchanges."
  },
  {
    icon: Lock,
    title: "Enterprise Security",
    description: "Bank-grade security and compliance features to protect your sensitive financial information."
  }
];

export default function FeaturesSection() {
  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="max-w-screen-xl mx-auto px-6 md:px-12">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-semibold text-gray-900 mb-6">
            Comprehensive Financial Solutions
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Everything you need to make informed financial decisions, manage risk, and drive growth in today's complex markets.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="group p-8 bg-white rounded-2xl border border-gray-200 hover:border-primary-600 hover:shadow-xl transition-all duration-300"
            >
              <div className="w-14 h-14 bg-primary-100 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary-600 transition-colors">
                <feature.icon className="w-7 h-7 text-primary-600 group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
