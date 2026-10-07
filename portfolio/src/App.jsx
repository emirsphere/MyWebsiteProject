import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, ArrowDown } from 'lucide-react';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';

const PROJECTS = [
  {
    id: '01',
    title: 'Vocabulary App',
    featured: true,
    description:
      'Oxford 3000 kelime listesini kullanan; kişiselleştirilmiş soru ağırlıklandırma, seviye ilerlemesi ve kullanıcı öğrenme istatistikleri sunan kelime öğrenme platformu.',
    tags: ['.NET 9', 'ASP.NET Core', 'SQL Server', 'React Native', 'TypeScript'],
    githubLink: 'https://github.com/emirsphere/VocabularyApp',
  },
  {
    id: '02',
    title: 'SecureNote',
    description:
      "ASP.NET Core ve Clean Architecture kullanılarak geliştirilen RESTful güvenli not yönetim API'si. JWT authentication, şifrelenmiş not saklama ve kullanıcı bazlı authorization içerir.",
    tags: ['C#', '.NET 8', 'Clean Architecture', 'JWT', 'AES'],
    githubLink: 'https://github.com/emirsphere/SecureNote',
  },
  {
    id: '03',
    title: 'Industrial IoT',
    description:
      'Python ile makine sensör verilerini simüle eden ve MQTT kullanarak .NET 9 Worker Service üzerinden işleyen Industrial IoT prototipi. Sıcaklık ve titreşim için eşik değer tabanlı kritik uyarılar içerir.',
    tags: ['.NET 9', 'MQTT', 'Worker Service', 'Python'],
    githubLink: 'https://github.com/emirsphere/EndustriyelIoTProjesi',
  },
  {
    id: '04',
    title: 'Uptime Monitor',
    description:
      '.NET 8 Worker Service ile geliştirilen yapılandırılabilir web sitesi izleme servisi. Paralel HTTP health check, gecikme takibi, retry policy ve structured logging özellikleri sunar.',
    tags: ['.NET 8', 'Worker Service', 'Polly', 'Serilog'],
    githubLink: 'https://github.com/emirsphere/Mini-Uptime-Robot',
  },
];

const SKILLS = {
  Backend: [
    'C#',
    '.NET',
    'ASP.NET Core',
    'Entity Framework Core',
    'REST API',
    'JWT',
  ],

  Database: [
    'MS SQL Server',
    'SQL',
  ],

  Architecture: [
    'Clean Architecture',
    'SOLID',
    'Dependency Injection',
  ],

  'IoT / Sistemler': [
    'MQTT',
    'Worker Services',
    'Python',
  ],

  'Test & Reliability': [
    'xUnit',
    'Moq',
    'Polly',
    'Serilog',
    'IHttpClientFactory',
  ],

  Frontend: [
    'React',
    'TypeScript',
    'React Native',
  ],

  Tools: [
    'Git',
    'GitHub',
    'Visual Studio',
  ],
};

const SectionHeader = ({ number, title }) => (
  <div className="mb-12 flex items-baseline gap-4">
    <span className="text-[#6C8CFF] font-mono text-sm tracking-widest font-medium">
      {number} /
    </span>

    <h2 className="text-3xl md:text-4xl font-bold text-[#F1F3F5] tracking-tight">
      {title}
    </h2>
  </div>
);

export default function App() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap');

        html {
          scroll-behavior: smooth;
          background-color: #0B0D10;
        }

        body {
          margin: 0;
          font-family: 'Inter', sans-serif;
          background-color: #0B0D10;
          color: #F1F3F5;
          -webkit-font-smoothing: antialiased;
        }

        ::selection {
          background-color: #6C8CFF;
          color: #0B0D10;
        }

        .bg-dot-pattern {
          background-image: radial-gradient(
            circle,
            #242A33 1px,
            transparent 1px
          );
          background-size: 24px 24px;
        }

        @keyframes gentle-bounce {
          0%, 100% {
            transform: translateY(0);
          }

          50% {
            transform: translateY(6px);
          }
        }

        .animate-gentle-bounce {
          animation: gentle-bounce 2s ease-in-out infinite;
        }
      `}</style>

      <div className="min-h-screen flex flex-col bg-[#0B0D10] relative">

        {/* NAVBAR */}
        <header
          className={`fixed top-0 w-full z-50 transition-all duration-300 ${
            scrolled
              ? 'bg-[#0B0D10]/80 backdrop-blur-md border-b border-[#242A33]'
              : 'bg-transparent'
          }`}
        >
          <div className="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between">

            <a
              href="#"
              className="text-[#F1F3F5] font-bold text-lg tracking-tight hover:text-[#6C8CFF] transition-colors"
            >
              HARUN EMİR ÖZCAN
            </a>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-8 text-sm font-medium">

              <a
                href="#about"
                className="text-[#8B929E] hover:text-[#F1F3F5] transition-colors"
              >
                Hakkımda
              </a>

              <a
                href="#projects"
                className="text-[#8B929E] hover:text-[#F1F3F5] transition-colors"
              >
                Projeler
              </a>

              <a
                href="#skills"
                className="text-[#8B929E] hover:text-[#F1F3F5] transition-colors"
              >
                Yetenekler
              </a>

              <a
                href="#contact"
                className="text-[#8B929E] hover:text-[#F1F3F5] transition-colors"
              >
                İletişim
              </a>

              <a
                href="https://github.com/emirsphere"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-1 text-[#8B929E] hover:text-[#6C8CFF] transition-colors"
              >
                GitHub
                <ArrowUpRight size={14} />
              </a>

            </nav>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-[#8B929E] hover:text-[#F1F3F5] p-2"
              onClick={() =>
                setIsMobileMenuOpen(!isMobileMenuOpen)
              }
              aria-label="Menüyü aç/kapat"
            >
              {isMobileMenuOpen ? (
                <X size={24} />
              ) : (
                <Menu size={24} />
              )}
            </button>

          </div>

          {/* Mobile Navigation */}
          {isMobileMenuOpen && (
            <div className="md:hidden absolute top-20 left-0 w-full bg-[#12161C] border-b border-[#242A33] shadow-2xl flex flex-col py-6 px-6 gap-6">

              <a
                href="#about"
                onClick={closeMobileMenu}
                className="text-[#F1F3F5] font-medium text-lg"
              >
                Hakkımda
              </a>

              <a
                href="#projects"
                onClick={closeMobileMenu}
                className="text-[#F1F3F5] font-medium text-lg"
              >
                Projeler
              </a>

              <a
                href="#skills"
                onClick={closeMobileMenu}
                className="text-[#F1F3F5] font-medium text-lg"
              >
                Yetenekler
              </a>

              <a
                href="#contact"
                onClick={closeMobileMenu}
                className="text-[#F1F3F5] font-medium text-lg"
              >
                İletişim
              </a>

              <a
                href="https://github.com/emirsphere"
                target="_blank"
                rel="noreferrer"
                onClick={closeMobileMenu}
                className="flex items-center gap-1 text-[#6C8CFF] font-medium text-lg"
              >
                GitHub
                <ArrowUpRight size={18} />
              </a>

            </div>
          )}
        </header>

        {/* MAIN */}
        <main className="grow flex flex-col w-full">

          {/* HERO */}
          <section
            id="hero"
            className="relative w-full min-h-screen flex items-center pt-20"
          >

            <div className="absolute inset-0 bg-dot-pattern opacity-[0.15] pointer-events-none" />

            <div className="max-w-6xl mx-auto px-6 w-full relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8">

              <div className="lg:col-span-8 space-y-8">

                <div className="space-y-3">

                  <p className="text-[#8B929E] font-medium tracking-widest text-xs uppercase">
                    Bilgisayar Mühendisliği Öğrencisi
                    <span className="mx-2 opacity-50">|</span>
                    Backend Developer
                  </p>

                  <h1 className="text-5xl sm:text-6xl md:text-8xl font-bold text-[#F1F3F5] tracking-tighter leading-none">
                    HARUN EMİR
                    <br />
                    ÖZCAN
                  </h1>

                </div>

                <p className="text-[#8B929E] text-lg md:text-xl max-w-xl leading-relaxed">
                  <span className="text-[#F1F3F5]">C#</span> ve{' '}
                  <span className="text-[#F1F3F5]">.NET</span> ile backend
                  sistemleri geliştiriyorum.
                </p>

                <div className="flex flex-wrap items-center gap-4 pt-4">

                  <a
                    href="#projects"
                    className="inline-flex items-center justify-center px-7 py-3.5 bg-[#6C8CFF] text-[#0B0D10] font-semibold text-sm rounded transition-all hover:bg-white hover:-translate-y-0.5"
                  >
                    PROJELERİ GÖR
                  </a>

                  <a
                    href="https://github.com/emirsphere"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-[#12161C] border border-[#242A33] text-[#F1F3F5] font-medium text-sm rounded transition-all hover:border-[#6C8CFF] hover:text-[#6C8CFF]"
                  >
                    GITHUB
                    <ArrowUpRight size={16} />
                  </a>

                </div>

              </div>

              <div className="hidden lg:block lg:col-span-4" />

            </div>

            {/* Scroll Indicator */}
            <div className="absolute bottom-10 left-6 md:left-1/2 md:-translate-x-1/2 flex flex-col items-center gap-3 animate-gentle-bounce">

              <span className="text-[#8B929E] text-[10px] font-semibold tracking-[0.2em] uppercase">
                Keşfetmek için kaydır
              </span>

              <ArrowDown
                size={16}
                className="text-[#6C8CFF]"
              />

            </div>

          </section>

          <div className="max-w-6xl mx-auto px-6 w-full">

            {/* ABOUT */}
            <section
              id="about"
              className="w-full py-32 border-t border-[#242A33] scroll-mt-20"
            >

              <SectionHeader
                number="01"
                title="HAKKIMDA"
              />

              <div className="grid md:grid-cols-12 gap-12 items-start">

                <div className="md:col-span-7">

                  <p className="text-[#8B929E] text-lg leading-relaxed">
                    Backend development alanına odaklanan Bilgisayar
                    Mühendisliği öğrencisiyim.{' '}
                    <span className="text-[#F1F3F5] font-medium">
                      C# ve .NET
                    </span>{' '}
                    ile API'ler geliştiriyor, veritabanlarıyla çalışıyor,
                    yazılım mimarileri tasarlıyor ve IoT sistemlerini
                    keşfediyorum.
                  </p>

                </div>

                <div className="md:col-span-5 grid gap-4">

                  <div className="p-5 border border-[#242A33] rounded bg-[#12161C]/50 text-sm">
                    <p className="text-[#8B929E] mb-1">
                      Bilgisayar Mühendisliği
                    </p>

                    <p className="text-[#F1F3F5] font-medium">
                      Afyon Kocatepe Üniversitesi
                    </p>
                  </div>

                  <div className="p-5 border border-[#242A33] rounded bg-[#12161C]/50 text-sm">
                    <p className="text-[#8B929E] mb-1">
                      Backend Development
                    </p>

                    <p className="text-[#F1F3F5] font-medium">
                      C# / .NET
                    </p>
                  </div>

                  <div className="p-5 border border-[#242A33] rounded bg-[#12161C]/50 text-sm">
                    <p className="text-[#8B929E] mb-1">
                      Odak
                    </p>

                    <p className="text-[#F1F3F5] font-medium">
                      Backend Systems & IoT
                    </p>
                  </div>

                </div>

              </div>

            </section>

            {/* PROJECTS */}
            <section
              id="projects"
              className="w-full py-32 border-t border-[#242A33] scroll-mt-20"
            >
              <SectionHeader number="02" title="PROJELER" />

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-6">
                {PROJECTS.map((project) =>
                  project.featured ? (
                    /* FEATURED PROJECT */
                    <div
                      key={project.id}
                      className="group md:col-span-2 lg:col-span-6 bg-[#12161C] border border-[#242A33] p-8 md:p-10 rounded transition-all duration-300 hover:border-[#6C8CFF]/50 hover:-translate-y-1"
                    >
                      <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-10">

                        {/* Left */}
                        <div className="flex-1">

                          <div className="flex items-center gap-4 mb-6">

                            <span className="text-xs font-mono text-[#6C8CFF] tracking-wider">
                              {project.id}
                            </span>

                            <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#6C8CFF] border border-[#6C8CFF]/30 bg-[#6C8CFF]/5 px-3 py-1.5 rounded">
                              Öne Çıkan Proje
                            </span>

                          </div>

                          <h3 className="text-3xl md:text-4xl font-bold text-[#F1F3F5] tracking-tight mb-5 group-hover:text-[#6C8CFF] transition-colors">
                            {project.title}
                          </h3>

                          <p className="text-[#8B929E] text-base md:text-lg leading-relaxed max-w-3xl">
                            {project.description}
                          </p>

                        </div>

                        {/* Right */}
                        <div className="lg:w-64 flex flex-col items-start lg:items-end justify-between gap-8">

                          <a
                            href={project.githubLink}
                            target="_blank"
                            rel="noreferrer"
                            className="text-[#8B929E] hover:text-[#6C8CFF] transition-colors"
                            aria-label={`${project.title} projesini GitHub'da görüntüle`}
                          >
                            <FaGithub size={18} />
                          </a>

                          <div className="flex flex-wrap lg:justify-end gap-2">
                            {project.tags.map((tag) => (
                              <span
                                key={tag}
                                className="text-[11px] font-medium uppercase tracking-wider bg-[#0B0D10] border border-[#242A33] text-[#8B929E] px-3 py-1.5 rounded"
                              >
                                {tag}
                              </span>
                            ))}
                          </div>

                        </div>

                      </div>
                    </div>
                  ) : (
                    /* REGULAR PROJECT */
                    <div
                      key={project.id}
                      className="group md:col-span-1 lg:col-span-2 bg-[#12161C] border border-[#242A33] p-7 rounded flex flex-col min-h-75 transition-all duration-300 hover:border-[#6C8CFF]/50 hover:-translate-y-1"
                    >

                      <div className="flex justify-between items-start mb-6">

                        <span className="text-xs font-mono text-[#8B929E] tracking-wider">
                          {project.id}
                        </span>

                        <a
                          href={project.githubLink}
                          target="_blank"
                          rel="noreferrer"
                          className="text-[#8B929E] hover:text-[#6C8CFF] transition-colors"
                          aria-label={`${project.title} projesini GitHub'da görüntüle`}
                        >
                          <FaGithub size={18} />
                        </a>

                      </div>

                      <h4 className="text-xl font-bold text-[#F1F3F5] mb-3 tracking-tight group-hover:text-[#6C8CFF] transition-colors">
                        {project.title}
                      </h4>

                      <p className="text-[#8B929E] text-sm leading-relaxed mb-8 grow">
                        {project.description}
                      </p>

                      <div className="flex flex-wrap gap-2 mt-auto">
                        {project.tags.map((tag) => (
                          <span
                            key={tag}
                            className="text-[11px] font-medium uppercase tracking-wider bg-[#0B0D10] border border-[#242A33] text-[#8B929E] px-3 py-1.5 rounded"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                    </div>
                  )
                )}
              </div>
            </section>

            {/* SKILLS */}
            <section
              id="skills"
              className="w-full py-32 border-t border-[#242A33] scroll-mt-20"
            >

              <SectionHeader
                number="03"
                title="YETENEKLER"
              />

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-12 gap-x-8">

                {Object.entries(SKILLS).map(([category, items]) => (

                  <div key={category}>

                    <h4 className="text-[#F1F3F5] font-semibold text-sm uppercase tracking-wider mb-5 pb-3 border-b border-[#242A33]">
                      {category}
                    </h4>

                    <ul className="space-y-3">

                      {items.map((skill) => (

                        <li
                          key={skill}
                          className="text-[#8B929E] text-sm flex items-center gap-3"
                        >
                          <span className="w-1.5 h-1.5 bg-[#242A33] rounded-full" />
                          {skill}
                        </li>

                      ))}

                    </ul>

                  </div>

                ))}

              </div>

            </section>

            {/* EDUCATION */}
            <section
              id="education"
              className="w-full py-32 border-t border-[#242A33] scroll-mt-20"
            >

              <SectionHeader
                number="04"
                title="EĞİTİM"
              />

              <div className="bg-[#12161C] border border-[#242A33] p-8 md:p-10 rounded">

                <h4 className="text-[#F1F3F5] font-bold text-xl md:text-2xl tracking-tight mb-2">
                  Afyon Kocatepe Üniversitesi
                </h4>

                <p className="text-[#6C8CFF] font-medium mb-6">
                  Bilgisayar Mühendisliği
                </p>

                <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-8 text-sm text-[#8B929E] font-medium">

                  <span className="flex items-center gap-2">

                    <span className="w-1.5 h-1.5 bg-[#6C8CFF] rounded-full" />

                    2024 — 2028

                  </span>

                  <span className="hidden sm:block text-[#242A33]">
                    |
                  </span>

                  <span className="flex items-center gap-2">

                    <span className="w-1.5 h-1.5 bg-[#6C8CFF] rounded-full" />

                    GPA: 3.38 / 4.00

                  </span>

                </div>

              </div>

            </section>

            {/* CONTACT */}
            <section
              id="contact"
              className="w-full py-32 border-t border-[#242A33] scroll-mt-20"
            >

              <SectionHeader
                number="05"
                title="İLETİŞİM"
              />

              <div className="flex flex-col items-start max-w-2xl">

                <h3 className="text-4xl md:text-6xl font-bold text-[#F1F3F5] tracking-tighter mb-6">
                  İLETİŞİME GEÇELİM.
                </h3>

                <p className="text-[#8B929E] text-lg md:text-xl mb-10 leading-relaxed">
                  İlginç projelere, iş birliklerine ve teknik sohbetlere her
                  zaman açığım.
                </p>

                <div className="flex flex-col sm:flex-row sm:items-center gap-5">

                  <span className="text-lg md:text-xl font-medium text-[#F1F3F5]">
                    hrnmrzcn@gmail.com
                  </span>

                  <div className="flex items-center gap-3">

                    <a
                      href="https://github.com/emirsphere"
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center justify-center w-14 h-14 bg-[#12161C] border border-[#242A33] text-[#F1F3F5] rounded transition-all hover:border-[#6C8CFF] hover:text-[#6C8CFF]"
                      aria-label="GitHub Profili"
                    >
                      <FaGithub size={21} />
                    </a>

                    <a
                      href="https://linkedin.com/in/harun-emir-özcan-593876341/"
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center justify-center w-14 h-14 bg-[#12161C] border border-[#242A33] text-[#F1F3F5] rounded transition-all hover:border-[#6C8CFF] hover:text-[#6C8CFF]"
                      aria-label="LinkedIn Profili"
                    >
                      <FaLinkedinIn size={20} />
                    </a>

                  </div>

                </div>

              </div>

            </section>

          </div>
        </main>

        {/* FOOTER */}
        <footer className="w-full border-t border-[#242A33] bg-[#0B0D10] py-10 flex flex-col items-center justify-center px-6">

          <p className="text-[#F1F3F5] font-medium text-sm mb-2">
            © 2026 Harun Emir Özcan
          </p>

        </footer>

      </div>
    </>
  );
}