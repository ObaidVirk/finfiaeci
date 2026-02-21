import Link from "next/link";
import { ArrowRight } from "lucide-react";

const solutions = [
  {
    category: "Data & Analytics",
    title: "Financial Data Intelligence",
    description: "Access comprehensive financial data covering global markets, companies, and economic indicators with powerful analytics tools.",
    image: "📊",
    link: "/solutions/analytics"
  },
  {
    category: "Risk & Compliance",
    title: "Enterprise Risk Solutions",
    description: "Identify, assess, and manage financial risks with our advanced risk management and compliance platform.",
    image: "🛡️",
    link: "/solutions/risk"
  },
  {
    category: "ESG & Sustainability",
    title: "ESG Data & Ratings",
    description: "Comprehensive ESG data, ratings, and analytics to support sustainable investment strategies and reporting.",
    image: "🌱",
    link: "/solutions/esg"
  },
  {
    category: "Market Indices",
    title: "Index Solutions",
    description: "Industry-leading market indices and benchmarks trusted by investors worldwide for portfolio management.",
    image: "📈",
    link: "/solutions/indices"
  }
];

export default function SolutionsSection() {
  return (
    <section className="py-20 md:py-28 bg-gray-50">
      <div className="max-w-screen-xl mx-auto px-6 md:px-12">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-semibold text-gray-900 mb-6">
            Solutions for Every Need
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Discover our comprehensive suite of solutions designed to empower financial professionals and institutions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {solutions.map((solution, index) => (
            <div 
              key={index}
              className="group bg-white rounded-2xl p-8 border border-gray-200 hover:shadow-2xl transition-all duration-300"
            >
              <div className="text-5xl mb-6">{solution.image}</div>
              <div className="text-sm font-medium text-primary-600 mb-2">
                {solution.category}
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                {solution.title}
              </h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                {solution.description}
              </p>
              <Link 
                href={solution.link}
                className="inline-flex items-center text-primary-600 font-medium group-hover:text-primary-700"
              >
                Learn more
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
