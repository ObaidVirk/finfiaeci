import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Users, Target, Award, Briefcase } from "lucide-react";

export default function AboutPage() {
  return (
    <main>
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 md:pt-40 md:pb-28 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-screen-xl mx-auto px-6 md:px-12">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-semibold text-gray-900 mb-6">
              About Finfiaeci
            </h1>
            <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
              We're on a mission to democratize financial intelligence and empower better 
              decision-making through data, analytics, and innovative technology.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-screen-xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-semibold text-gray-900 mb-6">Our Mission</h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                Finfiaeci was founded with a simple yet powerful vision: to provide financial 
                professionals with the intelligence they need to make confident, informed decisions 
                in an increasingly complex global market.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Today, we serve over 10,000 clients across 180 countries, providing comprehensive 
                financial data, analytics, and risk management solutions trusted by the world's 
                leading institutions.
              </p>
            </div>
            <div className="bg-gradient-to-br from-primary-100 to-primary-200 rounded-2xl p-12 h-96"></div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 md:py-28 bg-gray-50">
        <div className="max-w-screen-xl mx-auto px-6 md:px-12">
          <h2 className="text-4xl font-semibold text-gray-900 mb-12 text-center">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Target, title: "Excellence", desc: "Commitment to the highest quality in everything we do" },
              { icon: Users, title: "Collaboration", desc: "Working together to achieve shared success" },
              { icon: Award, title: "Integrity", desc: "Building trust through transparency and ethics" },
              { icon: Briefcase, title: "Innovation", desc: "Continuously advancing financial technology" }
            ].map((value, i) => (
              <div key={i} className="text-center">
                <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <value.icon className="w-8 h-8 text-primary-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-screen-xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-5xl font-bold text-primary-600 mb-2">25+</div>
              <div className="text-gray-600">Years of Experience</div>
            </div>
            <div>
              <div className="text-5xl font-bold text-primary-600 mb-2">10K+</div>
              <div className="text-gray-600">Global Clients</div>
            </div>
            <div>
              <div className="text-5xl font-bold text-primary-600 mb-2">180+</div>
              <div className="text-gray-600">Countries</div>
            </div>
            <div>
              <div className="text-5xl font-bold text-primary-600 mb-2">500+</div>
              <div className="text-gray-600">Team Members</div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
