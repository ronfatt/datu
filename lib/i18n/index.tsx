'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';

export type Language = 'en' | 'ms' | 'zh';

export const DICTIONARY: Record<Language, Record<string, string>> = {
  en: {
    hero_title: 'DISCOVER SEMPORNA LIKE A LOCAL',
    hero_subtitle: 'Handpicked local stays, trusted guides and unforgettable island experiences — all in one place.',
    explore_cta: 'Explore Semporna',
    build_trip_cta: 'Build My Trip',
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
    
    why_title: 'LOCAL KNOWLEDGE. REAL EXPERIENCES.',
    why_subtitle: "We're not here to show you every place in Semporna. We help you discover the right ones.",
    benefit_1_title: 'Handpicked Locally',
    benefit_1_desc: 'Every stay and experience is personally vetted by our local team in Semporna.',
    benefit_2_title: 'Trusted Partners',
    benefit_2_desc: 'Direct connection with licensed native boat captains and home hosts.',
    benefit_3_title: 'Secure Booking',
    benefit_3_desc: 'Instant confirmation, transparent pricing, and safe Malaysian payment options.',
    benefit_4_title: 'Local Support',
    benefit_4_desc: '24/7 WhatsApp assistance from our team on the ground in Semporna.',

    brand_story_title: 'WE DON’T JUST SHOW YOU SEMPORNA.',
    brand_story_subtitle: 'WE CONNECT YOU WITH THE PEOPLE WHO CALL IT HOME.',
    brand_story_body: 'Semporna is more than beautiful islands. Behind every journey are local hosts, boatmen, guides, families and communities who know this place better than anyone.',

    partner_cta_title: 'Share Semporna With The World',
    partner_cta_desc: 'Are you a homestay owner, local guide, boat operator or experience provider?',
    become_partner: 'Become A Partner',
    
    footer_tagline: 'Discover Semporna Like a Local.',
  },
  ms: {
    hero_title: 'TEROKAI SEMPORNA SEPERTI ANAK TEMPATAN',
    hero_subtitle: 'Penginapan pilihan tempatan, pemandu pelancong dipercayai & pengalaman pulau tak dapat dilupakan.',
    explore_cta: 'Terokai Semporna',
    build_trip_cta: 'Rancang Perjalanan Saya',
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

    why_title: 'PENGETAHUAN TEMPATAN. PENGALAMAN SEBENAR.',
    why_subtitle: 'Kami bukan sekadar tunjuk semua tempat. Kami bantu anda temui tempat yang paling tepat.',
    benefit_1_title: 'Pilihan Anak Tempatan',
    benefit_1_desc: 'Setiap penginapan disemak khas oleh pasukan tempatan kami di Semporna.',
    benefit_2_title: 'Rakan Niaga Dipercayai',
    benefit_2_desc: 'Hubungan terus dengan kapten bot dan tuan rumah berlesen.',
    benefit_3_title: 'Tempahan Selamat',
    benefit_3_desc: 'Pengesahan segera, harga telus dan pembayaran tempatan yang selamat.',
    benefit_4_title: 'Sokongan Tempatan',
    benefit_4_desc: 'Bantuan WhatsApp 24/7 daripada pasukan kami di Semporna.',

    brand_story_title: 'KAMI BUKAN HANYA TUNJUK SEMPORNA.',
    brand_story_subtitle: 'KAMI HUBUNGKAN ANDA DENGAN INSAN YANG MENJADIKANNYA RUMAH.',
    brand_story_body: 'Semporna lebih daripada sekadar pulau yang indah. Di sebalik setiap perjalanan adalah komuniti tempatan, pemandu bot dan keluarga tempatan.',

    partner_cta_title: 'Kongsi Semporna Bersama Dunia',
    partner_cta_desc: 'Adakah anda pemilik homestay, pemandu tempatan atau pengusaha bot?',
    become_partner: 'Sertai Sebagai Rakan Niaga',

    footer_tagline: 'Terokai Semporna Seperti Anak Tempatan.',
  },
  zh: {
    hero_title: '像当地人一样探索仙本那',
    hero_subtitle: '精选当地住宿、值得信赖的导游与难忘的海岛体验 — 一站式为您呈献。',
    explore_cta: '探索仙本那',
    build_trip_cta: '定制我的行程',
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

    why_title: '本地智慧 · 真实体验',
    why_subtitle: '我们不只是向您展示仙本那的全部，而是帮您找到最适合的那一个。',
    benefit_1_title: '本地精选',
    benefit_1_desc: '仙本那本土团队实地考察并严格甄选每一家住宿与行程。',
    benefit_2_title: '信赖伙伴',
    benefit_2_desc: '直接对接持牌本地船长与水上屋房东。',
    benefit_3_title: '安全预订',
    benefit_3_desc: '即时确认，价格透明，支持便捷安全的支付方式。',
    benefit_4_title: '本土客服',
    benefit_4_desc: '仙本那当地团队全天候 24/7 WhatsApp 在线贴心支持。',

    brand_story_title: '我们不仅向您展示仙本那',
    brand_story_subtitle: '更带您连接以此为家的仙本那人',
    brand_story_body: '仙本那不仅仅有美丽的海岛。每一次旅程的背后，都有深爱这片大海的本土船长、导游与原住民家庭。',

    partner_cta_title: '与世界分享仙本那',
    partner_cta_desc: '您是民宿业主、本土导游、船家还是体验提供者？',
    become_partner: '成为合作伙伴',

    footer_tagline: '像当地人一样探索仙本那。',
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
