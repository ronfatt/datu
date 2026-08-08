'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';

export type Language = 'en' | 'ms' | 'zh';

export const DICTIONARY: Record<Language, Record<string, string>> = {
  en: {
    hero_slogan: 'Datu.H — Your Local Way to Semporna',
    hero_title: 'DISCOVER SEMPORNA LIKE A LOCAL',
    hero_subtitle: 'Handpicked local stays, trusted native guides and authentic island experiences.',
    explore_cta: 'Explore Stays & Tours',
    build_trip_cta: 'Trip Planner',
    search_destination: 'Destination',
    search_checkin: 'Check-in',
    search_checkout: 'Check-out',
    search_guests: 'Guests',
    search_button: 'SEARCH',
    
    cat_explore: 'Explore Semporna',
    cat_stay: 'Stay',
    cat_island: 'Island Trips',
    cat_guides: 'Local Guides',
    cat_diving: 'Diving & Snorkelling',
    cat_transfers: 'Airport Transfer',
    cat_experiences: 'Local Experiences',
    cat_photography: 'Photography',
    cat_food: 'Food & Culture',

    section_stays_title: 'Stay Somewhere Special',
    section_stays_subtitle: 'Handpicked places selected by locals.',
    section_guides_title: 'MEET YOUR LOCAL',
    section_guides_headline: 'Explore Semporna With Someone Who Calls It Home.',
    section_exp_title: 'Unforgettable Experiences',
    
    view_stay: 'View Stay',
    view_guide: 'View Guide',
    explore: 'Explore',
    book_now: 'Book Now',
    per_night: '/ night',
    per_day: '/ day',
    from: 'From',
    
    cart_title: 'MY SEMPORNA TRIP',
    checkout: 'Checkout',
    total: 'TOTAL',
    subtotal: 'Subtotal',
    service_fee: 'Service Fee',
    discount: 'Discount',
    
    nav_discover: 'Discover',
    nav_stays: 'Stays',
    nav_guides: 'Guides',
    nav_experiences: 'Experiences',
    nav_transfers: 'Transfers',
    nav_trip_planner: 'Trip Planner',
    nav_my_trips: 'My Trips',
    nav_login: 'Log In',
    nav_partner: 'Partner Portal',
    nav_admin: 'Admin',

    footer_tagline: 'Datu.H — Your Local Way to Semporna',
  },
  ms: {
    hero_slogan: 'Datu.H — Your Local Way to Semporna',
    hero_title: 'TEROKAI SEMPORNA SEPERTI ANAK TEMPATAN',
    hero_subtitle: 'Penginapan pilihan tempatan, pemandu pelancong dipercayai & pengalaman pulau tak dapat dilupakan.',
    explore_cta: 'Terokai Semporna',
    build_trip_cta: 'Perancang Percutian',
    search_destination: 'Destinasi',
    search_checkin: 'Tarikh Masuk',
    search_checkout: 'Tarikh Keluar',
    search_guests: 'Tetamu',
    search_button: 'CARI',

    cat_explore: 'Terokai Semporna',
    cat_stay: 'Penginapan',
    cat_island: 'Pakej Pulau',
    cat_guides: 'Pemandu Tempatan',
    cat_diving: 'Selam Scuba & Snorkel',
    cat_transfers: 'Pengangkutan Lapangan Terbang',
    cat_experiences: 'Pengalaman Tempatan',
    cat_photography: 'Fotografi',
    cat_food: 'Makanan & Budaya',

    section_stays_title: 'Penginapan Istimewa Pilihan',
    section_stays_subtitle: 'Tempat penginapan pilihan orang tempatan.',
    section_guides_title: 'KENALI PEMANDU TEMPATAN',
    section_guides_headline: 'Terokai Semporna Bersama Anak Jati Semporna.',
    section_exp_title: 'Pengalaman Luar Biasa',

    view_stay: 'Lihat Penginapan',
    view_guide: 'Lihat Pemandu',
    explore: 'Terokai',
    book_now: 'Tempah Sekarang',
    per_night: '/ malam',
    per_day: '/ hari',
    from: 'Dari',

    cart_title: 'PERJALANAN SEMPORNA SAYA',
    checkout: 'Daftar Keluar',
    total: 'JUMLAH',
    subtotal: 'Jumlah Kecil',
    service_fee: 'Caj Perkhidmatan',
    discount: 'Diskaun',

    nav_discover: 'Utama',
    nav_stays: 'Penginapan',
    nav_guides: 'Pemandu',
    nav_experiences: 'Pengalaman',
    nav_transfers: 'Pengangkutan',
    nav_trip_planner: 'Perancang Percutian',
    nav_my_trips: 'Tempahan Saya',
    nav_login: 'Log Masuk',
    nav_partner: 'Portal Rakan Niaga',
    nav_admin: 'Pentadbir',

    footer_tagline: 'Datu.H — Your Local Way to Semporna',
  },
  zh: {
    hero_slogan: 'Datu.H — Your Local Way to Semporna',
    hero_title: '像当地人一样探索仙本那',
    hero_subtitle: '精选本地水上屋民宿、信赖导游与海岛深度体验。',
    explore_cta: '探索住宿与行程',
    build_trip_cta: '定制行程',
    search_destination: '目的地',
    search_checkin: '入住日期',
    search_checkout: '退房日期',
    search_guests: '人数',
    search_button: '搜索',

    cat_explore: '探索仙本那',
    cat_stay: '精选住宿',
    cat_island: '跳岛跳游',
    cat_guides: '本地向导',
    cat_diving: '潜水与浮潜',
    cat_transfers: '机场接送',
    cat_experiences: '深度体验',
    cat_photography: '旅拍跟拍',
    cat_food: '美食与文化',

    section_stays_title: '入住特色水上屋与民宿',
    section_stays_subtitle: '由仙本那本地人精心甄选。',
    section_guides_title: '结识您的本地向导',
    section_guides_headline: '与将这里视为家园的人一起游览仙本那。',
    section_exp_title: '难忘的海岛体验',

    view_stay: '查看住宿',
    view_guide: '查看向导',
    explore: '探索细节',
    book_now: '立即预订',
    per_night: '/ 晚',
    per_day: '/ 天',
    from: '起',

    cart_title: '我的仙本那之旅',
    checkout: '去结算',
    total: '总计',
    subtotal: '小计',
    service_fee: '服务费',
    discount: '优惠折扣',

    nav_discover: '首页',
    nav_stays: '住宿',
    nav_guides: '导游',
    nav_experiences: '体验',
    nav_transfers: '接送',
    nav_trip_planner: '行程规划',
    nav_my_trips: '我的订单',
    nav_login: '登录',
    nav_partner: '合作伙伴',
    nav_admin: '管理员',

    footer_tagline: 'Datu.H — Your Local Way to Semporna',
  }
};

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('en');

  useEffect(() => {
    const saved = localStorage.getItem('semporna_lang') as Language;
    if (saved && (saved === 'en' || saved === 'ms' || saved === 'zh')) {
      setLanguage(saved);
    }
  }, []);

  const changeLanguage = (lang: Language) => {
    setLanguage(lang);
    localStorage.setItem('semporna_lang', lang);
  };

  const t = (key: string): string => {
    return DICTIONARY[language]?.[key] || DICTIONARY['en']?.[key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage: changeLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
