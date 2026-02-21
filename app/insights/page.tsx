import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Calendar, TrendingUp, Globe, BookOpen } from "lucide-react";

const insights = [
  {
    category: "Market Analysis",
    icon: TrendingUp,
    title: "Global Markets Outlook 2026: Navigating Uncertainty",
    excerpt: "Our comprehensive analysis of global market trends and opportunities for the year ahead.",
    date: "February 15, 2026",
    readTime: "8 min read"
  },
  {
    category: "ESG Insights",
    icon: Globe,
    title: "The Evolution of ESG Investing in Emerging Markets",
    excerpt: "How ESG considerations are reshaping investment strategies across developing economies.",
    date: "February 10, 2026",
    readTime: "6 min read"
  },
  {
    category: "Risk Management",
    icon: BookOpen,
    title: "Managing Geopolitical Risk in Portfolio Construction",
    excerpt: "Strategies for identifying and mitigating geopolitical risks in investment portfolios.",
    date: "February 5, 2026",
    readTime: "10 min read"
  },
  {
    category: "Technology",
    icon: Calendar,
    title: "AI and Machine Learning in Financial Analytics",
    excerpt: "How artificial intelligence is transforming the landscape of financial data analysis.",
    date: "January 28, 2026",
    readTime: "7 min read"
  }
];

export default function InsightsPage() {
  return (
    <main>
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 md:pt-40 md:pb-28 bg-gradient-to-br from-indigo-50 to-white">
        <div className="max-w-screen-xl mx-auto px-6 md:px-12">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-semibold text-gray-900 mb-6">
              Insights & Perspectives
            </h1>
            <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
              Expert analysis and thought leadership on global markets, risk, ESG, and financial technology.
            </p>
          </div>
        </div>
      </section>

      {/* Insights Grid */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-screen-xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {insights.map((insight, index) => (
              <article key={index} className="bg-white rounded-2xl border border-gray-200 overflow-hidden hover:shadow-xl transition-all duration-300 group cursor-pointer">
                <div className="p-8">
                  <div className="flex items-center mb-4">
                    <insight.icon className="w-5 h-5 text-primary-600 mr-2" />
                    <span className="text-sm font-medium text-primary-600">{insight.category}</span>
                  </div>
                  <h2 className="text-2xl font-semibold text-gray-900 mb-4 group-hover:text-primary-600 transition-colors">
                    {insight.title}
                  </h2>
                  <p className="text-gray-600 leading-relaxed mb-6">{insight.excerpt}</p>
                  <div className="flex items-center justify-between text-sm text-gray-500">
                    <span>{insight.date}</span>
                    <span>{insight.readTime}</span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
