'use client';

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

type TranslationValue = string | Record<string, string>;
type TranslationSection = Record<string, TranslationValue>;
type Translations = Record<string, TranslationSection>;

interface LanguageContextType {
  language: string;
  setLanguage: (lang: string) => void;
  t: (section: string, key: string) => string;
  translations: Translations;
}

const LanguageContext = createContext<LanguageContextType>({
  language: 'en',
  setLanguage: () => {},
  t: () => '',
  translations: {},
});

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState('en');
  const [translations, setTranslations] = useState<Translations>({});

  const loadTranslations = async (lang: string) => {
    try {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const data: any = await import(`../locales/${lang}.json`);
      const loaded = data.default ?? data;
      setTranslations((prev) => ({ ...prev, [lang]: loaded as TranslationSection }));
    } catch {
      // fallback: load english
      if (lang !== 'en') {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const data: any = await import(`../locales/en.json`);
        const loaded = data.default ?? data;
        setTranslations((prev) => ({ ...prev, [lang]: loaded as TranslationSection }));
      }
    }
  };

  useEffect(() => {
    const saved = typeof window !== 'undefined' ? localStorage.getItem('lang') : null;
    const initial = saved || 'en';
    setLanguageState(initial);
    loadTranslations(initial);
  }, []);

  const setLanguage = (lang: string) => {
    setLanguageState(lang);
    if (typeof window !== 'undefined') localStorage.setItem('lang', lang);
    loadTranslations(lang);
  };

  const t = (section: string, key: string): string => {
    const langData = translations[language] || translations['en'];
    if (!langData) return key;
    const sec = langData[section] as Record<string, TranslationValue> | undefined;
    if (!sec) return key;
    const val = sec[key];
    if (typeof val === 'string') return val;
    return key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t, translations }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}
