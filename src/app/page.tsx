'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';

const Page = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    document.title = 'Vše pro stavby - Stavební práce, Projekce, Inženýring';
    const faviconUrl = 'https://via.placeholder.com/32x32/22c55e/ffffff?text=VS';
    let link = document.querySelector<HTMLLinkElement>("link[rel='icon']");
    if (!link) {
      link = document.createElement('link');
      link.rel = 'icon';
      document.head.appendChild(link);
    }
    link.href = faviconUrl;
    document.documentElement.classList.add('scroll-smooth');
    return () => {
        document.documentElement.classList.remove('scroll-smooth');
    }
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const navLinks = [
    { href: '#sluzby', label: 'Služby' },
    { href: '#reference', label: 'Reference' },
    { href: '#onas', label: 'O nás' },
    { href: '#kontakt', label: 'Kontakt' },
  ];

  const services = [
    {
      icon: 'https://cdn.jsdelivr.net/npm/@tabler/icons@latest/icons/building-skyscraper.svg',
      title: 'Stavební práce',
      description: 'Stavby na klíč, základové desky, hrubé stavby, fasády, zateplení, střechy, ploty, komunikace a další.',
    },
    {
      icon: 'https://cdn.jsdelivr.net/npm/@tabler/icons@latest/icons/ruler-measure.svg',
      title: 'Projekce',
      description: 'Projektové dokumentace pro novostavby, rekonstrukce, dřevostavby, nízkoenergetické a pasivní domy.',
    },
    {
      icon: 'https://cdn.jsdelivr.net/npm/@tabler/icons@latest/icons/certificate.svg',
      title: 'Inženýring',
      description: 'Vyřízení stavebního povolení, ohlášení stavby, územní řízení, kolaudace a další.',
    },
    {
      icon: 'https://cdn.jsdelivr.net/npm/@tabler/icons@latest/icons/tools.svg',
      title: 'Řemesla',
      description: 'Tesařské, klempířské, pokrývačské, zednické, obkladačské, sádrokartonářské, instalatérské, topenářské, elektrikářské práce.',
    },
    {
      icon: 'https://cdn.jsdelivr.net/npm/@tabler/icons@latest/icons/home-cog.svg',
      title: 'Rekonstrukce a opravy',
      description: 'Rekonstrukce bytů, domů, bytových jader a koupelen.',
    },
  ];

  const projects = [
    {
      image: '/images/project-tanvald-cottage-renovation.jpg',
      title: 'Omlazení chalupy u Tanvaldu',
    },
    {
      image: '/images/project-residential-house-renovation.jpg',
      title: 'Rekonstrukce bytového domu',
    },
  ];

  return (
    <div className="bg-slate-50 text-slate-800 font-sans">
      <header className="bg-white/80 backdrop-blur-md sticky top-0 z-40 shadow-sm">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <a href="#home" className="text-2xl font-bold text-emerald-600 transition hover:text-emerald-700">
            Vše pro stavby
          </a>
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a key={link.href} href={link.href} className="text-slate-600 hover:text-emerald-600 transition-colors font-medium">
                {link.label}
              </a>
            ))}
          </nav>
          <button onClick={toggleMenu} className="md:hidden z-50">
            <img
              src={isMenuOpen ? "https://cdn.jsdelivr.net/npm/@tabler/icons@latest/icons/x.svg" : "https://cdn.jsdelivr.net/npm/@tabler/icons@latest/icons/menu-2.svg"}
              alt="Menu Icon"
              className="w-7 h-7 text-slate-800"
            />
          </button>
        </div>
      </header>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 bg-white z-40 transform ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'} transition-transform duration-300 ease-in-out md:hidden`}
      >
        <nav className="flex flex-col items-center justify-center h-full space-y-8">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} onClick={closeMenu} className="text-3xl font-semibold text-slate-700 hover:text-emerald-600">
              {link.label}
            </a>
          ))}
        </nav>
      </div>

      <main>
        <section id="home" className="relative bg-white py-24 sm:py-32 lg:py-40">
            <div className="container mx-auto px-6 text-center">
                <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-slate-900 leading-tight">
                Stavební práce, Projekce, Inženýring
                </h1>
                <p className="mt-6 max-w-2xl mx-auto text-lg md:text-xl text-slate-600">
                Kompletní realizace staveb od projektu po kolaudaci. Kvalita, spolehlivost a individuální přístup.
                </p>
                <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
                <a href="#sluzby" className="w-full sm:w-auto inline-block bg-emerald-600 text-white font-semibold px-8 py-3 rounded-lg shadow-md hover:bg-emerald-700 transition-all duration-300 transform hover:scale-105">
                    Naše služby
                </a>
                <a href="#kontakt" className="w-full sm:w-auto inline-block bg-slate-200 text-slate-800 font-semibold px-8 py-3 rounded-lg hover:bg-slate-300 transition-colors duration-300">
                    Kontaktujte nás
                </a>
                </div>
            </div>
        </section>

        <section id="sluzby" className="py-20 sm:py-28 bg-slate-50">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900">Naše služby</h2>
              <p className="mt-4 max-w-2xl mx-auto text-lg text-slate-600">Poskytujeme komplexní řešení pro vaši stavbu.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.slice(0, 5).map((service) => (
                <div key={service.title} className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 transform hover:-translate-y-1">
                  <div className="flex items-center justify-center h-16 w-16 bg-emerald-100 rounded-full mb-6">
                    <img src={service.icon} alt={`${service.title} icon`} className="w-8 h-8 text-emerald-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-slate-900 mb-3">{service.title}</h3>
                  <p className="text-slate-600 leading-relaxed">{service.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="reference" className="py-20 sm:py-28 bg-white">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900">Naše poslední projekty</h2>
              <p className="mt-4 max-w-2xl mx-auto text-lg text-slate-600">Pohled na naši práci a dokončené realizace.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
              {projects.map((project) => (
                <div key={project.title} className="group overflow-hidden rounded-xl shadow-lg">
                  <div className="overflow-hidden">
                    <Image
                      src={project.image}
                      alt={project.title}
                      width={800}
                      height={600}
                      className="w-full h-auto object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
                    />
                  </div>
                  <div className="bg-white p-6">
                    <h3 className="text-xl font-semibold text-slate-800">{project.title}</h3>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="onas" className="py-20 sm:py-28 bg-slate-50">
          <div className="container mx-auto px-6">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900">O nás</h2>
              <p className="mt-8 text-lg text-slate-600 leading-relaxed">
                Jsme stavební firma, která se zabývá kompletní realizací staveb, od projektu po kolaudaci. 
                Nabízíme široké spektrum služeb v oblasti stavebnictví, od drobných oprav až po výstavbu 
                rodinných domů na klíč. Klademe důraz na kvalitu provedených prací, dodržování termínů 
                a individuální přístup k zákazníkovi.
              </p>
            </div>
          </div>
        </section>

        <section id="kontakt" className="py-20 sm:py-28 bg-white">
          <div className="container mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900">Kontaktujte nás</h2>
              <p className="mt-4 max-w-2xl mx-auto text-lg text-slate-600">
                Máte dotaz nebo zájem o naše služby? Neváhejte se na nás obrátit.
              </p>
            </div>
            <div className="max-w-4xl mx-auto bg-slate-50 rounded-xl p-8 md:p-12 shadow-sm border border-slate-200">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
                <div className="flex flex-col items-center md:items-start">
                  <div className="flex items-center justify-center h-12 w-12 bg-emerald-100 rounded-full mb-4">
                    <img src="https://cdn.jsdelivr.net/npm/@tabler/icons@latest/icons/phone.svg" alt="Phone icon" className="w-6 h-6 text-emerald-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-slate-800">Telefon</h3>
                  <a href="tel:+420732206583" className="text-emerald-600 hover:text-emerald-700 transition-colors">+420 732 206 583</a>
                </div>
                <div className="flex flex-col items-center md:items-start">
                  <div className="flex items-center justify-center h-12 w-12 bg-emerald-100 rounded-full mb-4">
                    <img src="https://cdn.jsdelivr.net/npm/@tabler/icons@latest/icons/mail.svg" alt="Email icon" className="w-6 h-6 text-emerald-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-slate-800">Email</h3>
                  <a href="mailto:info@vseprostavby.cz" className="text-emerald-600 hover:text-emerald-700 transition-colors">info@vseprostavby.cz</a>
                </div>
                <div className="flex flex-col items-center md:items-start">
                   <div className="flex items-center justify-center h-12 w-12 bg-emerald-100 rounded-full mb-4">
                    <img src="https://cdn.jsdelivr.net/npm/@tabler/icons@latest/icons/map-pin.svg" alt="Location icon" className="w-6 h-6 text-emerald-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-slate-800">Adresa</h3>
                  <p className="text-slate-600">V dolině 1515/1b, 101 00, Praha 10</p>
                  <p className="text-sm text-slate-500 mt-1">IČ: 03525225, DIČ: CZ03525225</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-slate-800 text-slate-400 py-6">
        <div className="container mx-auto px-6 text-center">
          <p>Vytvořeno s láskou od <a href="https://digitalfusion.cz" target="_blank" rel="noopener noreferrer" className="text-emerald-400 hover:text-emerald-300 font-semibold transition-colors">DigitalFusion</a></p>
        </div>
      </footer>
    </div>
  );
};

export default Page;
