"use client";

import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState, useEffect, useRef } from "react";
import { Menu, X, ChevronDown, Globe } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

const languages = [
  { code: "en", name: "English", flag: "us" },
  { code: "es", name: "Español", flag: "es" },
  { code: "fr", name: "Français", flag: "fr" },
  { code: "de", name: "Deutsch", flag: "de" },
  { code: "it", name: "Italiano", flag: "it" },
  { code: "pt", name: "Português", flag: "pt" },
  { code: "ru", name: "Русский", flag: "ru" },
  { code: "zh", name: "中文", flag: "cn" },
  { code: "ja", name: "日本語", flag: "jp" },
  { code: "ko", name: "한국어", flag: "kr" },
  { code: "ar", name: "العربية", flag: "sa" },
  { code: "hi", name: "हिन्दी", flag: "in" },
  { code: "nl", name: "Nederlands", flag: "nl" },
  { code: "sv", name: "Svenska", flag: "se" },
  { code: "no", name: "Norsk", flag: "no" },
  { code: "da", name: "Dansk", flag: "dk" },
  { code: "fi", name: "Suomi", flag: "fi" },
  { code: "pl", name: "Polski", flag: "pl" },
  { code: "tr", name: "Türkçe", flag: "tr" },
  { code: "th", name: "ไทย", flag: "th" },
];

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [solutionsOpen, setSolutionsOpen] = useState(false);
  const [languageOpen, setLanguageOpen] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState(languages[0]);
  const [user, setUser] = useState<{ email: string; isAdmin: boolean } | null>(null);
  const [loading, setLoading] = useState(true);
  const languageRef = useRef<HTMLDivElement>(null);
  const router = useRouter();
  const { t, setLanguage, language, translations } = useLanguage();

  // Helper to access nested solutionsMenu keys
  const sm = (key: string): string => {
    const langData = translations[language] || translations['en'];
    if (!langData) return key;
    const nav = langData['nav'] as Record<string, unknown> | undefined;
    if (!nav) return key;
    const menu = nav['solutionsMenu'] as Record<string, string> | undefined;
    if (!menu) return key;
    return menu[key] ?? key;
  };

  // Sync selectedLanguage display with context language
  useEffect(() => {
    const found = languages.find((l) => l.code === language);
    if (found) setSelectedLanguage(found);
  }, [language]);

  useEffect(() => {
    checkAuth();
  }, []);

  const checkAuth = async () => {
    try {
      const response = await fetch("/api/auth/me");
      if (response.ok) {
        const data = await response.json();
        setUser(data.user);
      }
    } catch (error) {
      console.error("Auth check failed:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleLogout = async () => {
    try {
      await fetch("/api/auth/logout", { method: "POST" });
      setUser(null);
      window.location.href = "/";
    } catch (error) {
      console.error("Logout failed:", error);
    }
  };

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (languageRef.current && !languageRef.current.contains(event.target as Node)) {
        setLanguageOpen(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-200">
      <div className="max-w-screen-xl mx-auto px-6 md:px-12">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image
              src="/finFIAECI.png"
              alt="finFIAECI"
              width={160}
              height={48}
              className="h-12 w-auto object-contain"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            <div className="relative group">
              <button className="flex items-center space-x-1 text-gray-700 hover:text-primary-600 transition-colors font-medium">
                <span>{t('nav', 'solutions')}</span>
                <ChevronDown className="w-4 h-4" />
              </button>
              <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-xl border border-gray-200 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                <div className="py-2">
                  <Link href="/solutions/analytics" className="block px-4 py-3 hover:bg-gray-50 transition-colors">
                    <div className="font-medium text-gray-900">{sm('analytics')}</div>
                    <div className="text-sm text-gray-600">{sm('analyticsDesc')}</div>
                  </Link>
                  <Link href="/solutions/risk" className="block px-4 py-3 hover:bg-gray-50 transition-colors">
                    <div className="font-medium text-gray-900">{sm('risk')}</div>
                    <div className="text-sm text-gray-600">{sm('riskDesc')}</div>
                  </Link>
                  <Link href="/solutions/esg" className="block px-4 py-3 hover:bg-gray-50 transition-colors">
                    <div className="font-medium text-gray-900">{sm('esg')}</div>
                    <div className="text-sm text-gray-600">{sm('esgDesc')}</div>
                  </Link>
                </div>
              </div>
            </div>
            <Link href="/industries" className="text-gray-700 hover:text-primary-600 transition-colors font-medium">
              {t('nav', 'industries')}
            </Link>
            <Link href="/insights" className="text-gray-700 hover:text-primary-600 transition-colors font-medium">
              {t('nav', 'insights')}
            </Link>
            <Link href="/resources" className="text-gray-700 hover:text-primary-600 transition-colors font-medium">
              {t('nav', 'resources')}
            </Link>
            <Link href="/pricing" className="text-gray-700 hover:text-primary-600 transition-colors font-medium">
              {t('nav', 'pricing')}
            </Link>
            <Link href="/about" className="text-gray-700 hover:text-primary-600 transition-colors font-medium">
              {t('nav', 'about')}
            </Link>
          </div>

          {/* Desktop CTA Buttons */}
          <div className="hidden lg:flex items-center space-x-4">
            {/* Language Selector */}
            <div className="relative group" ref={languageRef}>
              <button 
                onClick={() => setLanguageOpen(!languageOpen)}
                className="flex items-center space-x-2 px-3 py-2 text-gray-700 hover:text-primary-600 transition-colors rounded-lg hover:bg-gray-50"
              >
                <img 
                  src={`https://flagcdn.com/w20/${selectedLanguage.flag}.png`} 
                  alt={selectedLanguage.name}
                  className="w-5 h-4 rounded"
                />
                <ChevronDown className="w-4 h-4" />
              </button>
              {languageOpen && (
                <div className="absolute top-full right-0 mt-2 w-96 bg-white rounded-lg shadow-xl border border-gray-200 z-50">
                  <div className="grid grid-cols-2 gap-1 p-2 max-h-96 overflow-y-auto">
                    {languages.map((lang) => (
                      <button
                        key={lang.code}
                        onClick={() => {
                          setSelectedLanguage(lang);
                          setLanguage(lang.code);
                          setLanguageOpen(false);
                        }}
                        className={`flex items-center space-x-3 px-4 py-2.5 hover:bg-gray-50 rounded-lg transition-colors text-left ${language === lang.code ? 'bg-primary-50 text-primary-700' : ''}`}
                      >
                        <img 
                          src={`https://flagcdn.com/w20/${lang.flag}.png`} 
                          alt={lang.name}
                          className="w-6 h-4 rounded"
                        />
                        <span className="text-sm text-gray-700">{lang.name}</span>
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>
            
            {!loading && (
              <>
                {user ? (
                  <>
                    {user.isAdmin && (
                      <Link href="/dashboard" className="px-5 py-2.5 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors font-medium">
                        {t('nav', 'dashboard')}
                      </Link>
                    )}
                    <button 
                      onClick={handleLogout}
                      className="text-gray-700 hover:text-primary-600 transition-colors font-medium"
                    >
                      {t('nav', 'logout')}
                    </button>
                  </>
                ) : (
                  <>
                    <Link href="/login" className="text-gray-700 hover:text-primary-600 transition-colors font-medium">
                      {t('nav', 'login')}
                    </Link>
                    <Link href="/signup" className="px-5 py-2.5 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors font-medium">
                      {t('nav', 'signup')}
                    </Link>
                  </>
                )}
              </>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-gray-700 hover:text-primary-600"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-t border-gray-200">
          <div className="px-6 py-6 space-y-4">
            <div>
              <button
                onClick={() => setSolutionsOpen(!solutionsOpen)}
                className="flex items-center justify-between w-full text-gray-900 font-medium py-2"
              >
                <span>{t('nav', 'solutions')}</span>
                <ChevronDown className={`w-4 h-4 transition-transform ${solutionsOpen ? 'rotate-180' : ''}`} />
              </button>
              {solutionsOpen && (
                <div className="pl-4 mt-2 space-y-2">
                  <Link href="/solutions/analytics" className="block py-2 text-gray-600">{sm('analytics')}</Link>
                  <Link href="/solutions/risk" className="block py-2 text-gray-600">{sm('risk')}</Link>
                  <Link href="/solutions/esg" className="block py-2 text-gray-600">{sm('esg')}</Link>
                </div>
              )}
            </div>
            <Link href="/industries" className="block text-gray-900 font-medium py-2">{t('nav', 'industries')}</Link>
            <Link href="/insights" className="block text-gray-900 font-medium py-2">{t('nav', 'insights')}</Link>
            <Link href="/resources" className="block text-gray-900 font-medium py-2">{t('nav', 'resources')}</Link>
            <Link href="/pricing" className="block text-gray-900 font-medium py-2">{t('nav', 'pricing')}</Link>
            <Link href="/about" className="block text-gray-900 font-medium py-2">{t('nav', 'about')}</Link>
            
            {/* Mobile Language Selector */}
            <div className="pt-4 border-t border-gray-200">
              <button
                onClick={() => setLanguageOpen(!languageOpen)}
                className="flex items-center justify-between w-full text-gray-900 font-medium py-2"
              >
                <div className="flex items-center space-x-2">
                  <Globe className="w-5 h-5" />
                  <span>{t('nav', 'language')}</span>
                </div>
                <ChevronDown className={`w-4 h-4 transition-transform ${languageOpen ? 'rotate-180' : ''}`} />
              </button>
              {languageOpen && (
                <div className="grid grid-cols-2 gap-2 mt-2 pl-4 max-h-64 overflow-y-auto">
                  {languages.map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => {
                        setSelectedLanguage(lang);
                        setLanguage(lang.code);
                        setLanguageOpen(false);
                      }}
                      className="flex items-center space-x-2 py-2 text-sm text-gray-600"
                    >
                      <img 
                        src={`https://flagcdn.com/w20/${lang.flag}.png`} 
                        alt={lang.name}
                        className="w-5 h-4 rounded"
                      />
                      <span>{lang.name}</span>
                    </button>
                  ))}
                </div>
              )}
            </div>
            
            {!loading && (
              <div className="pt-4 space-y-3">
                {user ? (
                  <>
                    {user.isAdmin && (
                      <Link href="/dashboard" className="block text-center py-2.5 bg-primary-600 text-white rounded-lg font-medium">
                        {t('nav', 'dashboard')}
                      </Link>
                    )}
                    <button 
                      onClick={handleLogout}
                      className="w-full text-center py-2.5 text-gray-700 font-medium border border-gray-300 rounded-lg"
                    >
                      {t('nav', 'logout')}
                    </button>
                  </>
                ) : (
                  <>
                    <Link href="/login" className="block text-center py-2.5 text-gray-700 font-medium border border-gray-300 rounded-lg">
                      {t('nav', 'login')}
                    </Link>
                    <Link href="/signup" className="block text-center py-2.5 bg-primary-600 text-white rounded-lg font-medium">
                      {t('nav', 'signup')}
                    </Link>
                  </>
                )}
              </div>
            )}
          </div>
        </div>
      )}
    </nav>
  );
}
