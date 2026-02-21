"use client";

import Link from "next/link";
import { ArrowRight, Play } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function HeroSection() {
  const { t } = useLanguage();
  return (
    <section className="pt-32 pb-20 md:pt-40 md:pb-28 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-screen-xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="animate-fadeIn">
            <div className="inline-block mb-6">
              <span className="px-4 py-2 bg-primary-100 text-primary-700 rounded-full text-sm font-medium">
                {t('hero', 'badge')}
              </span>
            </div>
            <h1 className="text-4xl md:text-6xl font-semibold text-gray-900 mb-6 leading-tight">
              {t('hero', 'title')}
            </h1>
            <p className="text-lg md:text-xl text-gray-600 leading-relaxed mb-8">
              {t('hero', 'subtitle')}
            </p>
            <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-4 sm:space-y-0 sm:space-x-4">
              <Link 
                href="/signup" 
                className="inline-flex items-center justify-center px-8 py-4 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-all duration-200 font-medium text-lg group"
              >
                {t('hero', 'getStarted')}
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <button className="inline-flex items-center justify-center px-8 py-4 bg-white text-gray-900 rounded-lg border-2 border-gray-300 hover:border-primary-600 hover:text-primary-600 transition-all duration-200 font-medium text-lg group">
                <Play className="mr-2 w-5 h-5" />
                {t('hero', 'watchDemo')}
              </button>
            </div>
          </div>

          {/* Right Visual */}
          <div className="relative animate-fadeIn">
            <div className="relative z-10">
              <div className="bg-white rounded-2xl shadow-2xl p-8 border border-gray-200">
                <div className="space-y-4">
                  {/* Chart Header */}
                  <div className="flex items-center justify-between">
                    <h3 className="font-semibold text-gray-900">{t('hero', 'marketPerformance')}</h3>
                    <span className="text-green-600 font-medium">+12.4%</span>
                  </div>
                  
                  {/* Simulated Chart */}
                  <div className="h-48 flex items-end space-x-2">
                    {[65, 72, 68, 85, 78, 92, 88, 95, 90, 98, 94, 100].map((height, i) => (
                      <div key={i} className="flex-1 bg-gradient-to-t from-primary-600 to-primary-400 rounded-t" style={{ height: `${height}%` }}></div>
                    ))}
                  </div>
                  
                  {/* Stats Grid */}
                  <div className="grid grid-cols-3 gap-4 pt-4 border-t border-gray-200">
                    <div>
                      <div className="text-sm text-gray-600">{t('hero', 'volume')}</div>
                      <div className="font-semibold text-gray-900">2.4M</div>
                    </div>
                    <div>
                      <div className="text-sm text-gray-600">{t('hero', 'high')}</div>
                      <div className="font-semibold text-gray-900">$156.23</div>
                    </div>
                    <div>
                      <div className="text-sm text-gray-600">{t('hero', 'low')}</div>
                      <div className="font-semibold text-gray-900">$142.18</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Decorative Elements */}
            <div className="absolute -top-4 -right-4 w-72 h-72 bg-primary-200 rounded-full filter blur-3xl opacity-30 -z-10"></div>
            <div className="absolute -bottom-4 -left-4 w-72 h-72 bg-purple-200 rounded-full filter blur-3xl opacity-30 -z-10"></div>
          </div>
        </div>

        {/* Trusted By Logos */}
        <div className="mt-20 pt-12 border-t border-gray-200">
          <p className="text-center text-gray-600 mb-8 font-medium">{t('hero', 'trustedBy')}</p>
          <div className="flex flex-wrap items-center justify-center gap-12 opacity-60">
            {['FORTUNE', 'REUTERS', 'BLOOMBERG', 'NASDAQ', 'NYSE'].map((name) => (
              <div key={name} className="text-2xl font-bold text-gray-400">{name}</div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
