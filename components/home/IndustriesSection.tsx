import { Building2, Landmark, TrendingUp, Briefcase, DollarSign, Shield } from "lucide-react";

const industries = [
  {
    icon: Landmark,
    title: "Banking",
    description: "Risk management and regulatory compliance solutions for global banks."
  },
  {
    icon: TrendingUp,
    title: "Asset Management",
    description: "Portfolio analytics and market intelligence for investment firms."
  },
  {
    icon: Shield,
    title: "Insurance",
    description: "Risk assessment and actuarial data for insurance providers."
  },
  {
    icon: Building2,
    title: "Corporations",
    description: "Treasury and risk management solutions for corporate finance teams."
  },
  {
    icon: Briefcase,
    title: "Professional Services",
    description: "Data and analytics for consulting and advisory firms."
  },
  {
    icon: DollarSign,
    title: "Fintech",
    description: "API access and data solutions for financial technology companies."
  }
];

export default function IndustriesSection() {
  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="max-w-screen-xl mx-auto px-6 md:px-12">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-semibold text-gray-900 mb-6">
            Serving Every Industry
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Tailored solutions for financial institutions, corporations, and professional services firms.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {industries.map((industry, index) => (
            <div 
              key={index}
              className="group p-8 bg-gray-50 rounded-2xl hover:bg-primary-50 border border-transparent hover:border-primary-600 transition-all duration-300"
            >
              <industry.icon className="w-12 h-12 text-primary-600 mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {industry.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {industry.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
