"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Mail, Phone, MapPin, Clock, Send, MessageSquare, Building, HeadphonesIcon } from "lucide-react";
import { useState, FormEvent } from "react";

const offices = [
  {
    city: "New York",
    address: "1 World Trade Center, Suite 8500\nNew York, NY 10007",
    phone: "+1 (212) 555-0100",
    email: "newyork@finfiaeci.com",
  },
  {
    city: "London",
    address: "30 St Mary Axe, Level 12\nLondon, EC3A 8EP",
    phone: "+44 20 7946 0100",
    email: "london@finfiaeci.com",
  },
  {
    city: "Singapore",
    address: "10 Marina Boulevard, #39-00\nMarina Bay Financial Centre, 018983",
    phone: "+65 6321 0100",
    email: "singapore@finfiaeci.com",
  },
];

const contactReasons = [
  "Sales inquiry",
  "Product demo",
  "Technical support",
  "Enterprise pricing",
  "Partnership",
  "Press & media",
  "Other",
];

export default function ContactPage() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    company: "",
    phone: "",
    reason: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // Simulate form submission
    await new Promise((r) => setTimeout(r, 1000));
    setLoading(false);
    setSubmitted(true);
  };

  return (
    <>
      <Navbar />
      <main className="min-h-screen">

        {/* Hero */}
        <section className="pt-32 pb-20 md:pt-40 md:pb-24 bg-gradient-to-br from-gray-50 to-white">
          <div className="max-w-screen-xl mx-auto px-6 md:px-12 text-center">
            <h1 className="text-4xl md:text-6xl font-semibold text-gray-900 mb-6">
              Get in Touch
            </h1>
            <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Have a question or ready to get started? Our team is here to help you find the right solution for your organization.
            </p>
          </div>
        </section>

        {/* Contact Options */}
        <section className="py-12 bg-white border-b border-gray-100">
          <div className="max-w-screen-xl mx-auto px-6 md:px-12">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="flex items-start space-x-4 p-6 bg-gray-50 rounded-xl">
                <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <MessageSquare className="w-6 h-6 text-primary-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Sales</h3>
                  <p className="text-sm text-gray-600 mb-2">Talk to our sales team about your needs</p>
                  <a href="mailto:sales@finfiaeci.com" className="text-primary-600 text-sm font-medium hover:underline">sales@finfiaeci.com</a>
                </div>
              </div>
              <div className="flex items-start space-x-4 p-6 bg-gray-50 rounded-xl">
                <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <HeadphonesIcon className="w-6 h-6 text-primary-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Support</h3>
                  <p className="text-sm text-gray-600 mb-2">Get help from our technical support team</p>
                  <a href="mailto:support@finfiaeci.com" className="text-primary-600 text-sm font-medium hover:underline">support@finfiaeci.com</a>
                </div>
              </div>
              <div className="flex items-start space-x-4 p-6 bg-gray-50 rounded-xl">
                <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Building className="w-6 h-6 text-primary-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Enterprise</h3>
                  <p className="text-sm text-gray-600 mb-2">Custom solutions for large organizations</p>
                  <a href="mailto:enterprise@finfiaeci.com" className="text-primary-600 text-sm font-medium hover:underline">enterprise@finfiaeci.com</a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Form + Info */}
        <section className="py-20 md:py-28 bg-white">
          <div className="max-w-screen-xl mx-auto px-6 md:px-12">
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-16">

              {/* Contact Form */}
              <div className="lg:col-span-3">
                <h2 className="text-3xl font-semibold text-gray-900 mb-2">Send us a message</h2>
                <p className="text-gray-600 mb-8">Fill out the form and we'll get back to you within one business day.</p>

                {submitted ? (
                  <div className="bg-green-50 border border-green-200 rounded-xl p-8 text-center">
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Send className="w-8 h-8 text-green-600" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Message sent!</h3>
                    <p className="text-gray-600">Thank you for reaching out. A member of our team will be in touch soon.</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">First Name</label>
                        <input
                          type="text"
                          name="firstName"
                          value={formData.firstName}
                          onChange={handleChange}
                          required
                          placeholder="John"
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-600 focus:border-transparent"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Last Name</label>
                        <input
                          type="text"
                          name="lastName"
                          value={formData.lastName}
                          onChange={handleChange}
                          required
                          placeholder="Doe"
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-600 focus:border-transparent"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Work Email</label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        placeholder="you@company.com"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-600 focus:border-transparent"
                      />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Company</label>
                        <input
                          type="text"
                          name="company"
                          value={formData.company}
                          onChange={handleChange}
                          placeholder="Your Company"
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-600 focus:border-transparent"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Phone <span className="text-gray-400 font-normal">(optional)</span></label>
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder="+1 (555) 000-0000"
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-600 focus:border-transparent"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">How can we help?</label>
                      <select
                        name="reason"
                        value={formData.reason}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-600 focus:border-transparent bg-white"
                      >
                        <option value="">Select a reason</option>
                        {contactReasons.map((r) => (
                          <option key={r} value={r}>{r}</option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={5}
                        placeholder="Tell us more about your needs..."
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-600 focus:border-transparent resize-none"
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={loading}
                      className="w-full py-3 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors font-medium text-lg flex items-center justify-center space-x-2 disabled:bg-gray-400 disabled:cursor-not-allowed"
                    >
                      <span>{loading ? "Sending..." : "Send Message"}</span>
                      {!loading && <Send className="w-5 h-5" />}
                    </button>
                  </form>
                )}
              </div>

              {/* Sidebar Info */}
              <div className="lg:col-span-2 space-y-8">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Response time</h3>
                  <div className="flex items-start space-x-3 p-4 bg-primary-50 rounded-xl">
                    <Clock className="w-5 h-5 text-primary-600 mt-0.5 flex-shrink-0" />
                    <p className="text-sm text-gray-700">
                      Sales and enterprise inquiries are typically answered within <strong>4 business hours</strong>. Support tickets are resolved within <strong>1 business day</strong>.
                    </p>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">General contact</h3>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3 text-gray-600">
                      <Mail className="w-5 h-5 text-primary-600 flex-shrink-0" />
                      <a href="mailto:info@finfiaeci.com" className="hover:text-primary-600 transition-colors">info@finfiaeci.com</a>
                    </div>
                    <div className="flex items-center space-x-3 text-gray-600">
                      <Phone className="w-5 h-5 text-primary-600 flex-shrink-0" />
                      <a href="tel:+12125550100" className="hover:text-primary-600 transition-colors">+1 (212) 555-0100</a>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Business hours</h3>
                  <div className="space-y-2 text-sm text-gray-600">
                    <div className="flex justify-between">
                      <span>Monday – Friday</span>
                      <span className="font-medium text-gray-900">9:00 AM – 6:00 PM ET</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Saturday</span>
                      <span className="font-medium text-gray-900">10:00 AM – 2:00 PM ET</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Sunday</span>
                      <span className="font-medium text-gray-500">Closed</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Offices */}
        <section className="py-20 md:py-28 bg-gray-50">
          <div className="max-w-screen-xl mx-auto px-6 md:px-12">
            <h2 className="text-3xl font-semibold text-gray-900 mb-12 text-center">Our Offices</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {offices.map((office) => (
                <div key={office.city} className="bg-white rounded-xl p-8 shadow-sm border border-gray-200">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">{office.city}</h3>
                  <div className="space-y-3">
                    <div className="flex items-start space-x-3 text-gray-600">
                      <MapPin className="w-5 h-5 text-primary-600 mt-0.5 flex-shrink-0" />
                      <p className="text-sm whitespace-pre-line">{office.address}</p>
                    </div>
                    <div className="flex items-center space-x-3 text-gray-600">
                      <Phone className="w-5 h-5 text-primary-600 flex-shrink-0" />
                      <a href={`tel:${office.phone.replace(/\s|\(|\)|-/g, '')}`} className="text-sm hover:text-primary-600 transition-colors">{office.phone}</a>
                    </div>
                    <div className="flex items-center space-x-3 text-gray-600">
                      <Mail className="w-5 h-5 text-primary-600 flex-shrink-0" />
                      <a href={`mailto:${office.email}`} className="text-sm hover:text-primary-600 transition-colors">{office.email}</a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
