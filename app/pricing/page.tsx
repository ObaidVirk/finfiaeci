"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import { Check, X, Loader2 } from "lucide-react";
import { useState } from "react";

const plans = [
  {
    name: "Starter",
    price: "$99",
    period: "/month",
    description: "Perfect for individuals and small teams getting started with financial analytics.",
    priceId: "price_1T276aP8AiWBMTxDLF7hV7Nz",
    features: [
      { name: "Real-time market data", included: true },
      { name: "Basic analytics dashboard", included: true },
      { name: "Up to 3 team members", included: true },
      { name: "Email support", included: true },
      { name: "API access", included: false },
      { name: "Advanced risk analytics", included: false },
      { name: "ESG data & ratings", included: false },
      { name: "Custom reports", included: false },
      { name: "Priority support", included: false },
      { name: "Dedicated account manager", included: false }
    ],
    cta: "Get Started",
    popular: false
  },
  {
    name: "Professional",
    price: "$299",
    period: "/month",
    description: "For growing teams that need advanced analytics and comprehensive market intelligence.",
    priceId: "price_1T276bP8AiWBMTxDhu5oxQbQ",
    features: [
      { name: "Real-time market data", included: true },
      { name: "Advanced analytics dashboard", included: true },
      { name: "Up to 10 team members", included: true },
      { name: "Priority email & chat support", included: true },
      { name: "API access", included: true },
      { name: "Advanced risk analytics", included: true },
      { name: "ESG data & ratings", included: true },
      { name: "Custom reports", included: true },
      { name: "Priority support", included: false },
      { name: "Dedicated account manager", included: false }
    ],
    cta: "Get Started",
    popular: true
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "",
    description: "For large organizations requiring enterprise-grade solutions and dedicated support.",
    priceId: null,
    features: [
      { name: "Real-time market data", included: true },
      { name: "Enterprise analytics platform", included: true },
      { name: "Unlimited team members", included: true },
      { name: "24/7 priority support", included: true },
      { name: "Unlimited API access", included: true },
      { name: "Advanced risk analytics", included: true },
      { name: "ESG data & ratings", included: true },
      { name: "Custom reports", included: true },
      { name: "Priority support", included: true },
      { name: "Dedicated account manager", included: true }
    ],
    cta: "Contact Sales",
    popular: false
  }
];

export default function PricingPage() {
  const [loadingPlan, setLoadingPlan] = useState<string | null>(null);

  const handleCheckout = async (plan: typeof plans[0]) => {
    if (!plan.priceId) {
      window.location.href = "/contact";
      return;
    }
    setLoadingPlan(plan.name);
    try {
      const response = await fetch("/api/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ priceId: plan.priceId, planName: plan.name }),
      });
      const data = await response.json();
      if (data.url) {
        window.location.href = data.url;
      } else {
        alert("Failed to start checkout. Please try again.");
      }
    } catch (error) {
      console.error("Checkout error:", error);
      alert("An error occurred. Please try again.");
    } finally {
      setLoadingPlan(null);
    }
  };

  return (
    <main>
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 md:pt-40 md:pb-28 bg-gradient-to-br from-primary-50 to-white">
        <div className="max-w-screen-xl mx-auto px-6 md:px-12">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-semibold text-gray-900 mb-6">
              Simple, Transparent Pricing
            </h1>
            <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
              Choose the perfect plan for your needs. All plans include a 30-day free trial.
            </p>
          </div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-screen-xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {plans.map((plan, index) => (
              <div 
                key={index}
                className={`relative bg-white rounded-2xl border-2 transition-all duration-300 ${
                  plan.popular 
                    ? 'border-primary-600 shadow-2xl scale-105' 
                    : 'border-gray-200 hover:border-primary-600 hover:shadow-xl'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-5 left-1/2 transform -translate-x-1/2">
                    <span className="bg-primary-600 text-white px-6 py-2 rounded-full text-sm font-medium">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="p-8">
                  <h3 className="text-2xl font-semibold text-gray-900 mb-2">{plan.name}</h3>
                  <p className="text-gray-600 mb-6 min-h-[3rem]">{plan.description}</p>
                  
                  <div className="mb-6">
                    <span className="text-5xl font-bold text-gray-900">{plan.price}</span>
                    <span className="text-gray-600 text-lg">{plan.period}</span>
                  </div>

                  <button
                    onClick={() => handleCheckout(plan)}
                    disabled={loadingPlan === plan.name}
                    className={`block w-full text-center py-3 rounded-lg font-medium transition-colors mb-8 disabled:opacity-70 disabled:cursor-not-allowed ${
                      plan.popular
                        ? 'bg-primary-600 text-white hover:bg-primary-700'
                        : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                    }`}
                  >
                    {loadingPlan === plan.name ? (
                      <span className="flex items-center justify-center space-x-2">
                        <Loader2 className="w-4 h-4 animate-spin" />
                        <span>Redirecting...</span>
                      </span>
                    ) : plan.cta}
                  </button>

                  <div className="space-y-4">
                    <p className="text-sm font-semibold text-gray-900 uppercase tracking-wide">What's included</p>
                    {plan.features.map((feature, i) => (
                      <div key={i} className="flex items-start">
                        {feature.included ? (
                          <Check className="w-5 h-5 text-green-600 mr-3 flex-shrink-0 mt-0.5" />
                        ) : (
                          <X className="w-5 h-5 text-gray-300 mr-3 flex-shrink-0 mt-0.5" />
                        )}
                        <span className={feature.included ? "text-gray-700" : "text-gray-400"}>
                          {feature.name}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 md:py-28 bg-gray-50">
        <div className="max-w-screen-xl mx-auto px-6 md:px-12">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl font-semibold text-gray-900 mb-12 text-center">
              Frequently Asked Questions
            </h2>
            
            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Can I change plans later?
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Yes, you can upgrade or downgrade your plan at any time. Changes will be reflected in your next billing cycle.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  What payment methods do you accept?
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  We accept all major credit cards (Visa, MasterCard, American Express) and bank transfers for enterprise customers.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Is there a free trial?
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Yes! All plans include a 30-day free trial. No credit card required to start your trial.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Can I cancel anytime?
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Yes, you can cancel your subscription at any time. You'll continue to have access until the end of your billing period.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Do you offer custom enterprise solutions?
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Yes! Our Enterprise plan can be customized to meet your specific needs. Contact our sales team to discuss your requirements.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-28 bg-gradient-to-br from-primary-600 to-primary-800 text-white">
        <div className="max-w-screen-xl mx-auto px-6 md:px-12">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-semibold mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-lg md:text-xl text-primary-100 leading-relaxed mb-10">
              Join thousands of financial professionals who trust Finfiaeci for critical decision-making.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
              <Link 
                href="/signup"
                className="inline-flex items-center justify-center px-8 py-4 bg-white text-primary-600 rounded-lg hover:bg-gray-100 transition-all duration-200 font-medium text-lg"
              >
                Start Free Trial
              </Link>
              <Link 
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-4 bg-transparent text-white rounded-lg border-2 border-white hover:bg-white hover:text-primary-600 transition-all duration-200 font-medium text-lg"
              >
                Contact Sales
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
