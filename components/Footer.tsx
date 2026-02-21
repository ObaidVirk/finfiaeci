import Link from "next/link";
import Image from "next/image";
import { Linkedin, Twitter, Youtube, Facebook } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-screen-xl mx-auto px-6 md:px-12 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center mb-6">
              <Image
                src="/finFIAECI.png"
                alt="finFIAECI"
                width={160}
                height={48}
                className="h-12 w-auto object-contain brightness-0 invert"
              />
            </Link>
            <p className="text-gray-400 leading-relaxed mb-6">
              Leading provider of financial intelligence, data analytics, and risk assessment solutions for global markets.
            </p>
            <div className="flex items-center space-x-4">
              <a href="#" className="w-10 h-10 bg-gray-800 hover:bg-primary-600 rounded-lg flex items-center justify-center transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 hover:bg-primary-600 rounded-lg flex items-center justify-center transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 hover:bg-primary-600 rounded-lg flex items-center justify-center transition-colors">
                <Youtube className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 hover:bg-primary-600 rounded-lg flex items-center justify-center transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Solutions */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Solutions</h3>
            <ul className="space-y-3">
              <li><Link href="/solutions/analytics" className="text-gray-400 hover:text-white transition-colors">Data Analytics</Link></li>
              <li><Link href="/solutions/risk" className="text-gray-400 hover:text-white transition-colors">Risk Management</Link></li>
              <li><Link href="/solutions/esg" className="text-gray-400 hover:text-white transition-colors">ESG Solutions</Link></li>
              <li><Link href="/solutions/ratings" className="text-gray-400 hover:text-white transition-colors">Credit Ratings</Link></li>
              <li><Link href="/solutions/indices" className="text-gray-400 hover:text-white transition-colors">Market Indices</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Company</h3>
            <ul className="space-y-3">
              <li><Link href="/about" className="text-gray-400 hover:text-white transition-colors">About Us</Link></li>
              <li><Link href="/careers" className="text-gray-400 hover:text-white transition-colors">Careers</Link></li>
              <li><Link href="/press" className="text-gray-400 hover:text-white transition-colors">Press</Link></li>
              <li><Link href="/contact" className="text-gray-400 hover:text-white transition-colors">Contact</Link></li>
              <li><Link href="/investors" className="text-gray-400 hover:text-white transition-colors">Investors</Link></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Resources</h3>
            <ul className="space-y-3">
              <li><Link href="/insights" className="text-gray-400 hover:text-white transition-colors">Insights</Link></li>
              <li><Link href="/research" className="text-gray-400 hover:text-white transition-colors">Research</Link></li>
              <li><Link href="/events" className="text-gray-400 hover:text-white transition-colors">Events</Link></li>
              <li><Link href="/webcasts" className="text-gray-400 hover:text-white transition-colors">Webcasts</Link></li>
              <li><Link href="/blog" className="text-gray-400 hover:text-white transition-colors">Blog</Link></li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm">
              © 2026 Finfiaeci. All rights reserved.
            </p>
            <div className="flex items-center space-x-6 text-sm">
              <Link href="/privacy" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</Link>
              <Link href="/terms" className="text-gray-400 hover:text-white transition-colors">Terms of Use</Link>
              <Link href="/cookies" className="text-gray-400 hover:text-white transition-colors">Cookie Policy</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
