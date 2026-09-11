import React, { useState, useEffect, useRef } from 'react';
import { Mail, Github, ExternalLink, Moon, Sun, ArrowUpRight, Copy, Check } from 'lucide-react';
import HexagonBackground from './HexagonBackground';

// Rotating typewriter component with type-in and backspace/delete loop ("tụt ra tụt vô")
const RotatingTypewriter = ({
  phrases = ["Hoang Nguyen", "an AI Engineer", "a Hedgehog"],
  typingSpeed = 140,
  deletingSpeed = 60,
  pauseDuration = 2000,
  cursor = '_'
}) => {
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    setText('');
    setIsDeleting(false);
    setPhraseIndex(0);
  }, [phrases]);

  useEffect(() => {
    const currentPhrase = phrases[phraseIndex % phrases.length];
    let timeout;

    if (!isDeleting) {
      if (text.length < currentPhrase.length) {
        timeout = setTimeout(() => {
          setText(currentPhrase.substring(0, text.length + 1));
        }, typingSpeed);
      } else {
        timeout = setTimeout(() => {
          setIsDeleting(true);
        }, pauseDuration);
      }
    } else {
      if (text.length > 0) {
        timeout = setTimeout(() => {
          setText(currentPhrase.substring(0, text.length - 1));
        }, deletingSpeed);
      } else {
        setIsDeleting(false);
        setPhraseIndex((prev) => (prev + 1) % phrases.length);
      }
    }

    return () => clearTimeout(timeout);
  }, [text, isDeleting, phraseIndex, phrases, typingSpeed, deletingSpeed, pauseDuration]);

  return (
    <span>
      <span>{text}</span>
      <span
        className="ml-1 inline-block animate-pulse select-none font-bold align-baseline"
        aria-hidden="true"
      >
        {cursor}
      </span>
    </span>
  );
};


const Portfolio = () => {
  const [isDark, setIsDark] = useState(false);
  const [isLang, setIsLang] = useState('en');
  const [scrollY, setScrollY] = useState(0);
  const [hoveredProject, setHoveredProject] = useState(null);

  useEffect(() => {
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setIsDark(true);
    }
  }, []);

  useEffect(() => {
    // Set initial scroll position immediately on mount
    setScrollY(window.scrollY);
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const content = {
    en: {
      nav: { about: 'About', skills: 'Skills', projects: 'Projects', contact: 'Contact' },
      hero: {
        staticPrefix: "Hi, I'm ",
        phrases: ["Hoang Nguyen", "an AI Engineer", "a Hedgehog"],
        subtitle: 'A passionate AI engineer from Vietnam',
        cta: 'Explore My Work'
      },
      about: {
        title: 'About',
        intro: 'As a 19-year-old Artificial Intelligence student at FPT University, I bring strong discipline, persistence, and a logical mindset. By actively organizing club events and building tech projects for my classes, I have developed strong problem-solving and effective teamwork skills. I am currently seeking hands-on experience in a professional tech environment to further grow my AI knowledge and develop myself.',
        experience: {
          title: 'Experience',
          internship: {
            role: 'AI Engineer Intern',
            company: 'Lac Viet Company',
            duration: '06-09/2026',
            desc: 'Developed RAG & recommendation systems using LangChain, Vector DB, and OCR'
          },
          education: {
            role: 'Computer Science Student',
            company: 'FPT University',
            duration: '09/2024 - Now',
            desc: 'Specialized coursework in ML, NLP, and system design'
          }
        }
      },
      skills: {
        title: 'Core Technologies',
        categories: {
          ai: { name: 'AI/ML', items: ['LangChain', 'RAG', 'Vector Database', 'OCR'] },
          lang: { name: 'Languages', items: ['Python', 'SQL'] },
          tools: { name: 'Tools & Platforms', items: ['Docker', 'Neo4j', 'FastAPI', 'Git'] }
        }
      },
      projects: {
        title: 'Featured Projects',
        items: [
          {
            title: 'OutfitMatch — AI Stylist',
            desc: 'AI-powered personal stylist for Asian fashion market. Combines Qwen3-VL-8B vision model with graph knowledge base, Qdrant retrieval, and personalized recommendations using quiz-based preference learning.',
            tech: ['Python', 'Next.js', 'Qwen3-VL-8B', 'Graph KB', 'Qdrant', 'Personalization'],
            link: 'https://github.com/Hoangnguyenhuu12/Lendo-Stylix'
          },
          {
            title: 'ReactAgent — SGK Q&A System',
            desc: 'Intelligent Q&A system for Vietnamese textbooks (SGK). Multi-agent architecture with Knowledge Graph (Neo4j), Vector Search (Elasticsearch + pgvector), and RAG pipeline using LangChain for accurate education content understanding.',
            tech: ['LangChain', 'Neo4j', 'Elasticsearch', 'PostgreSQL', 'OCR', 'RAG'],
            link: 'https://github.com/Hoangnguyenhuu12/ReAct-agent-final'
          }
        ]
      },
      contact: {
        title: 'Get In Touch',
        badge: 'Available for Opportunities',
        subtitle: 'Open to opportunities at Big Tech companies and innovative startups',
        quote: "We've become so focused on that tiny screen that we forget the big picture, the people right in front of us.",
        quoteAuthor: 'Kanye West',
        email: 'Email Me',
        emailSub: 'Direct inquiry & collaboration',
        github: 'View GitHub',
        githubSub: 'Open source & AI repositories',
        copied: 'Copied to clipboard!',
        copyBtn: 'Copy',
        socialTitle: 'Connect on Social'
      }
    },
    vi: {
      nav: { about: 'Về Tôi', skills: 'Kỹ Năng', projects: 'Dự Án', contact: 'Liên Hệ' },
      hero: {
        staticPrefix: "Hi, I'm ",
        phrases: ["Hoang Nguyen", "an AI Engineer", "a Hedgehog"],
        subtitle: 'AI Engineer chuyên về LLM & RAG systems',
        cta: 'Xem Công Việc'
      },
      about: {
        title: 'Về Tôi',
        intro: 'Tôi là sinh viên năm 3 đam mê phát triển các hệ thống AI production-grade. Vừa hoàn thành thực tập AI Engineer tại Lạc Việt, nơi tôi phát triển ứng dụng RAG và hệ thống cá nhân hóa sử dụng công nghệ LLM tối tân.',
        experience: {
          title: 'Kinh Nghiệm',
          internship: {
            role: 'AI Engineer Intern',
            company: 'Lạc Việt',
            duration: '3 tháng',
            desc: 'Phát triển hệ thống RAG & recommendation sử dụng LangChain, Vector DB, OCR'
          },
          education: {
            role: 'Sinh Viên Công Nghệ Thông Tin',
            company: 'Đại Học',
            duration: 'Hiện Tại Năm 3',
            desc: 'Chuyên sâu về ML, NLP, System Design'
          }
        }
      },
      skills: {
        title: 'Công Nghệ Chính',
        categories: {
          ai: { name: 'AI/ML', items: ['LangChain', 'RAG', 'Vector Database', 'OCR'] },
          lang: { name: 'Ngôn Ngữ', items: ['Python', 'SQL'] },
          tools: { name: 'Công Cụ & Nền Tảng', items: ['Docker', 'Neo4j', 'FastAPI', 'Git'] }
        }
      },
      projects: {
        title: 'Dự Án Nổi Bật',
        items: [
          {
            title: 'OutfitMatch — AI Stylist',
            desc: 'Trợ lý thời trang AI cá nhân hoá cho thị trường thời trang châu Á. Kết hợp mô hình Qwen3-VL-8B, Knowledge Graph, Qdrant retrieval, và học tùy chọn người dùng qua Quiz.',
            tech: ['Python', 'Next.js', 'Qwen3-VL-8B', 'Graph KB', 'Qdrant', 'Personalization'],
            link: 'https://github.com/Hoangnguyenhuu12/Lendo-Stylix'
          },
          {
            title: 'ReactAgent — Hệ thống Q&A SGK',
            desc: 'Hệ thống hỏi-đáp thông minh cho sách giáo khoa Việt Nam. Kiến trúc multi-agent với Knowledge Graph (Neo4j), Vector Search (Elasticsearch + pgvector), và RAG pipeline sử dụng LangChain.',
            tech: ['LangChain', 'Neo4j', 'Elasticsearch', 'PostgreSQL', 'OCR', 'RAG'],
            link: 'https://github.com/Hoangnguyenhuu12/ReAct-agent-final'
          }
        ]
      },
      contact: {
        title: 'Liên Hệ Tôi',
        badge: 'Sẵn Sàng Cho Cơ Hội Mới',
        subtitle: 'Mở cửa cho cơ hội tại các công ty Big Tech và startup sáng tạo',
        quote: "Chúng ta quá tập trung vào màn hình nhỏ bé đó đến mức quên đi bức tranh lớn, những người đang ở ngay trước mắt chúng ta.",
        quoteAuthor: 'Kanye West',
        email: 'Gửi Email Trực Tiếp',
        emailSub: 'Liên hệ công việc & cộng tác',
        github: 'Xem GitHub',
        githubSub: 'Dự án AI & mã nguồn mở',
        copied: 'Đã sao chép email!',
        copyBtn: 'Sao chép',
        socialTitle: 'Mạng Xã Hội'
      }
    }
  };

  const t = content[isLang];
  const isDarkMode = isDark;

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    e.currentTarget.style.setProperty('--mouse-x', `${x}px`);
    e.currentTarget.style.setProperty('--mouse-y', `${y}px`);
  };


  // Phong cách kính (glass) hiện được quản lý tập trung và tuỳ chỉnh dễ dàng qua CSS Variables trong globals.css
  const glassStyle = {};

  return (
    <div className={`${isDarkMode ? 'dark' : 'light'} relative overflow-hidden`}
      style={{
        backgroundColor: isDarkMode ? '#000000' : '#ffffff',
        color: isDarkMode ? '#ffffff' : '#000000'
      }}>

      {/* Interactive 3D Hexagon Parallax Background */}
      <HexagonBackground isDark={isDarkMode} />

      {/* Main Content */}
      <div className="relative z-10">

        {/* Navigation - Fixed/Locked Header */}
        <nav className="fixed top-0 left-0 right-0 z-50 transition-all duration-200"
          style={{
            background: isDarkMode ? 'rgba(0, 0, 0, 0.85)' : 'rgba(255, 255, 255, 0.88)',
            backdropFilter: 'blur(16px)',
            WebkitBackdropFilter: 'blur(16px)',
            borderBottom: scrollY > 20
              ? (isDarkMode ? '1px solid rgba(255, 255, 255, 0.12)' : '1px solid rgba(0, 0, 0, 0.08)')
              : '1px solid transparent'
          }}>
          <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
            <div className="text-xl font-bold tracking-tight" style={{
              color: isDarkMode ? '#ffffff' : '#000000'
            }}>
              Hoangf
            </div>

            <div className="flex items-center gap-8">
              <div className="hidden md:flex gap-8 text-sm">
                <a href="#about" className="nav-link">{t.nav.about}</a>
                <a href="#skills" className="nav-link">{t.nav.skills}</a>
                <a href="#projects" className="nav-link">{t.nav.projects}</a>
                <a href="#contact" className="nav-link">{t.nav.contact}</a>
              </div>

              <div className="flex items-center gap-3 pl-6">
                <button onClick={() => setIsLang(isLang === 'en' ? 'vi' : 'en')}
                  className="text-xs font-semibold px-3 py-1.5 rounded-lg glass-button"
                  style={{
                    background: isDarkMode ? 'rgba(255, 255, 255, 0.04)' : 'rgba(0, 0, 0, 0.03)',
                    color: isDarkMode ? '#ffffff' : '#000000',
                    border: isDarkMode ? '1px solid rgba(255, 255, 255, 0.12)' : '1px solid rgba(0, 0, 0, 0.08)',
                    backdropFilter: 'blur(12px)',
                    WebkitBackdropFilter: 'blur(12px)',
                    boxShadow: 'none'
                  }}>
                  {isLang === 'en' ? 'VI' : 'EN'}
                </button>

                <button onClick={() => setIsDark(!isDarkMode)}
                  className="p-1.5 rounded-lg glass-button"
                  style={{
                    background: isDarkMode ? 'rgba(255, 255, 255, 0.04)' : 'rgba(0, 0, 0, 0.03)',
                    color: isDarkMode ? '#ffffff' : '#000000',
                    border: isDarkMode ? '1px solid rgba(255, 255, 255, 0.12)' : '1px solid rgba(0, 0, 0, 0.08)',
                    backdropFilter: 'blur(12px)',
                    WebkitBackdropFilter: 'blur(12px)',
                    boxShadow: 'none'
                  }}>
                  {isDarkMode ? <Sun size={18} /> : <Moon size={18} />}
                </button>
              </div>
            </div>
          </div>
        </nav>

        {/* Hero Content */}
        <section className="max-w-6xl mx-auto px-6 pt-24 md:pt-28 pb-20">
          <div className="grid lg:grid-cols-[1.3fr,0.7fr] gap-8 lg:gap-12 items-center">
            <div className="w-full">
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-[46px] xl:text-[52px] font-bold tracking-tight mb-6 whitespace-nowrap min-h-[1.3em] leading-tight"
                style={{
                  color: isDarkMode ? '#ffffff' : '#000000'
                }}>
                <span>{t.hero.staticPrefix}</span>
                <RotatingTypewriter
                  phrases={t.hero.phrases}
                  typingSpeed={100}
                  deletingSpeed={45}
                  pauseDuration={2200}
                  cursor="_"
                />
              </h1>
              <p className="text-base sm:text-lg mb-10 leading-relaxed max-w-xl"
                style={{
                  color: isDarkMode ? '#ffffff' : '#000000'
                }}>
                {t.hero.subtitle}
              </p>
              <div className="flex gap-4 flex-wrap">
                <a href="#projects" className="glass-button px-8 py-4 rounded-xl font-medium"
                  style={{
                    background: isDarkMode ? 'rgba(255, 255, 255, 0.04)' : 'rgba(0, 0, 0, 0.03)',
                    color: isDarkMode ? '#ffffff' : '#000000',
                    border: isDarkMode ? '1px solid rgba(255, 255, 255, 0.12)' : '1px solid rgba(0, 0, 0, 0.08)',
                    backdropFilter: 'blur(12px)',
                    WebkitBackdropFilter: 'blur(12px)',
                    outline: 'none',
                    transition: 'all 0.25s cubic-bezier(0.23, 1, 0.320, 1)'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-2px)';
                    e.currentTarget.style.background = isDarkMode ? 'rgba(255, 255, 255, 0.12)' : 'rgba(0, 0, 0, 0.08)';
                    e.currentTarget.style.borderColor = isDarkMode ? 'rgba(255, 255, 255, 0.28)' : 'rgba(0, 0, 0, 0.18)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.background = isDarkMode ? 'rgba(255, 255, 255, 0.04)' : 'rgba(0, 0, 0, 0.03)';
                    e.currentTarget.style.borderColor = isDarkMode ? '1px solid rgba(255, 255, 255, 0.12)' : '1px solid rgba(0, 0, 0, 0.08)';
                  }}>
                  {t.hero.cta}
                </a>
                <a href="https://github.com/Hoangnguyenhuu12" target="_blank" rel="noopener noreferrer"
                  className="glass-button px-8 py-4 rounded-xl font-medium inline-flex items-center gap-2"
                  style={{
                    background: isDarkMode ? 'rgba(255, 255, 255, 0.04)' : 'rgba(0, 0, 0, 0.03)',
                    color: isDarkMode ? '#ffffff' : '#000000',
                    border: isDarkMode ? '1px solid rgba(255, 255, 255, 0.12)' : '1px solid rgba(0, 0, 0, 0.08)',
                    backdropFilter: 'blur(12px)',
                    WebkitBackdropFilter: 'blur(12px)',
                    outline: 'none',
                    transition: 'all 0.25s cubic-bezier(0.23, 1, 0.320, 1)'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-2px)';
                    e.currentTarget.style.background = isDarkMode ? 'rgba(255, 255, 255, 0.12)' : 'rgba(0, 0, 0, 0.08)';
                    e.currentTarget.style.borderColor = isDarkMode ? 'rgba(255, 255, 255, 0.28)' : 'rgba(0, 0, 0, 0.18)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.background = isDarkMode ? 'rgba(255, 255, 255, 0.04)' : 'rgba(0, 0, 0, 0.03)';
                    e.currentTarget.style.borderColor = isDarkMode ? '1px solid rgba(255, 255, 255, 0.12)' : '1px solid rgba(0, 0, 0, 0.08)';
                  }}>
                  GitHub <ArrowUpRight size={18} />
                </a>
              </div>
            </div>

            {/* Avatar Section with Contrasting Frame */}
            <div className="flex justify-center md:justify-end">
              <div style={{
                width: '300px',
                height: '300px',
                borderRadius: '50%',
                border: `3px solid ${isDarkMode ? '#ffffff' : '#000000'}`,
                overflow: 'hidden',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                background: isDarkMode ? '#000000' : '#ffffff',
                boxShadow: isDarkMode ? '0 0 35px rgba(255, 255, 255, 0.2)' : '0 12px 35px rgba(0, 0, 0, 0.15)',
                transition: 'all 0.35s cubic-bezier(0.23, 1, 0.320, 1)',
                cursor: 'pointer'
              }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'scale(1.04)';
                  e.currentTarget.style.boxShadow = isDarkMode ? '0 0 50px rgba(255, 255, 255, 0.35)' : '0 16px 45px rgba(0, 0, 0, 0.25)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'scale(1)';
                  e.currentTarget.style.boxShadow = isDarkMode ? '0 0 35px rgba(255, 255, 255, 0.2)' : '0 12px 35px rgba(0, 0, 0, 0.15)';
                }}>
                <img
                  src={isDarkMode ? "/avatar.jpg" : "/avatar1.jpg"}
                  alt="Hoang's Portfolio Avatar"
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    filter: 'none'
                  }}
                />
              </div>
            </div>
          </div>
        </section>


        {/* About & Experience */}
        <section id="about" className="max-w-6xl mx-auto px-6 py-20">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            {/* Left Column: About */}
            <div>
              <h2 className="text-4xl font-bold mb-8">{t.about.title}</h2>
              <div className="glass-card spotlight-card p-8 rounded-2xl"
                onMouseMove={handleMouseMove}
                style={glassStyle}>
                <p className="text-lg leading-relaxed">
                  {t.about.intro}
                </p>
              </div>
            </div>

            {/* Right Column: Experience */}
            <div>
              <h2 className="text-4xl font-bold mb-8">{t.about.experience.title}</h2>
              <div className="space-y-6">
                <div className="glass-card spotlight-card p-6 rounded-2xl pl-8"
                  onMouseMove={handleMouseMove}
                  style={glassStyle}>
                  <div className="font-semibold text-lg">
                    {t.about.experience.internship.role}
                  </div>
                  <div className="text-sm mt-1">
                    {t.about.experience.internship.company} · {t.about.experience.internship.duration}
                  </div>
                  <div className="text-sm mt-3">{t.about.experience.internship.desc}</div>
                </div>

                <div className="glass-card spotlight-card p-6 rounded-2xl pl-8"
                  onMouseMove={handleMouseMove}
                  style={glassStyle}>
                  <div className="font-semibold text-lg">
                    {t.about.experience.education.role}
                  </div>
                  <div className="text-sm mt-1">
                    {t.about.experience.education.company} · {t.about.experience.education.duration}
                  </div>
                  <div className="text-sm mt-3">{t.about.experience.education.desc}</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Skills */}
        <section id="skills" className="max-w-6xl mx-auto px-6 py-20">
          <h2 className="text-4xl font-bold mb-12">{t.skills.title}</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {Object.entries(t.skills.categories).map(([key, category]) => (
              <div key={key}
                className="glass-card spotlight-card p-8 rounded-2xl"
                onMouseMove={handleMouseMove}
                style={glassStyle}>
                <h3 className="font-semibold mb-6 text-lg" style={{
                  color: isDarkMode ? '#ffffff' : '#000000'
                }}>
                  {category.name}
                </h3>
                <div className="flex flex-wrap gap-3">
                  {category.items.map((skill, idx) => (
                    <span key={idx} className="skill-badge text-sm px-4 py-2 rounded-full font-medium"
                      style={{
                        background: isDarkMode ? 'rgba(255, 255, 255, 0.06)' : 'rgba(0, 0, 0, 0.04)',
                        color: isDarkMode ? '#ffffff' : '#000000',
                        border: isDarkMode ? '1px solid rgba(255, 255, 255, 0.12)' : '1px solid rgba(0, 0, 0, 0.08)',
                        backdropFilter: 'blur(8px)',
                        WebkitBackdropFilter: 'blur(8px)',
                        boxShadow: 'none'
                      }}>
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Projects */}
        <section id="projects" className="max-w-6xl mx-auto px-6 py-20">
          <h2 className="text-4xl font-bold mb-12">{t.projects.title}</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {t.projects.items.map((project, idx) => (
              <div key={idx}
                className="project-card spotlight-card p-8 rounded-2xl cursor-pointer"
                onMouseMove={handleMouseMove}
                onMouseEnter={() => setHoveredProject(idx)}
                onMouseLeave={() => setHoveredProject(null)}
                style={glassStyle}>
                <h3 className="text-xl font-bold mb-3">
                  {project.title}
                </h3>
                <p className="mb-6 leading-relaxed text-sm">{project.desc}</p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech, i) => (
                    <span key={i} className="text-xs px-3 py-1.5 rounded-full font-medium"
                      style={{
                        background: isDarkMode ? 'rgba(255, 255, 255, 0.05)' : 'rgba(0, 0, 0, 0.04)',
                        color: isDarkMode ? '#ffffff' : '#000000',
                        border: isDarkMode ? '1px solid rgba(255, 255, 255, 0.10)' : '1px solid rgba(0, 0, 0, 0.08)',
                        backdropFilter: 'blur(6px)',
                        WebkitBackdropFilter: 'blur(6px)',
                        boxShadow: 'none'
                      }}>
                      {tech}
                    </span>
                  ))}
                </div>
                <a href={project.link} className="inline-flex items-center gap-2 transition text-sm font-medium group">
                  Learn More
                  <ArrowUpRight size={14} style={{
                    transition: 'transform 0.2s ease',
                    transform: hoveredProject === idx ? 'translate(2px, -2px)' : 'translate(0, 0)'
                  }} />
                </a>
              </div>
            ))}
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="max-w-6xl mx-auto px-6 py-20">
          <div className="glass-card spotlight-card p-12 rounded-3xl"
            onMouseMove={handleMouseMove}
            style={glassStyle}>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              {/* Left: Quote & Social Icons */}
              <div className="flex flex-col justify-between">
                <div>
                  <h2 className="text-4xl font-bold mb-6">{t.contact.title}</h2>
                  <p className="mb-8 text-lg italic">
                    "We've become so focused on that tiny screen that we forget the big picture, the people right in front of us."
                  </p>
                  <p className="text-sm">— Kanye West</p>
                </div>

                {/* Social Media Icons (Pure Black & White) */}
                <div className="flex gap-4 items-center mt-8">
                  {/* Facebook */}
                  <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"
                    className="w-10 h-10 flex items-center justify-center hover:scale-110 transition"
                    title="Facebook">
                    <img
                      src={isDarkMode ? "/facebook-dark.png" : "/facebook-light.png"}
                      alt="Facebook"
                      className="w-full h-full object-contain"
                    />
                  </a>

                  {/* Instagram */}
                  <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"
                    className="w-10 h-10 flex items-center justify-center hover:scale-110 transition"
                    title="Instagram">
                    <img
                      src={isDarkMode ? "/instagram-dark.png" : "/instagram-light.png"}
                      alt="Instagram"
                      className="w-full h-full object-contain"
                    />
                  </a>

                  {/* Strava */}
                  <a href="https://strava.com" target="_blank" rel="noopener noreferrer"
                    className="w-10 h-10 flex items-center justify-center hover:scale-110 transition"
                    title="Strava">
                    <img
                      src={isDarkMode ? "/strava-dark.png" : "/strava-light.png"}
                      alt="Strava"
                      className="w-full h-full object-contain"
                    />
                  </a>

                  {/* LinkedIn */}
                  <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"
                    className="w-10 h-10 flex items-center justify-center hover:scale-110 transition"
                    title="LinkedIn">
                    <img
                      src={isDarkMode ? "/linkedin-dark.png" : "/linkedin-light.png"}
                      alt="LinkedIn"
                      className="w-full h-full object-contain"
                    />
                  </a>
                </div>
              </div>

              {/* Right: Buttons (Frosted Glass Blur with Delicate Hover Glow) */}
              <div className="flex flex-col gap-4 items-start md:items-end justify-center">
                <a href="mailto:nguyenhuuhoang5038@gmail.com"
                  className="w-full sm:w-64 px-6 py-3.5 rounded-xl font-medium inline-flex items-center justify-center gap-3 glass-button"
                  style={{
                    background: isDarkMode ? 'rgba(255, 255, 255, 0.04)' : 'rgba(0, 0, 0, 0.03)',
                    color: isDarkMode ? '#ffffff' : '#000000',
                    border: isDarkMode ? '1px solid rgba(255, 255, 255, 0.12)' : '1px solid rgba(0, 0, 0, 0.08)',
                    backdropFilter: 'blur(12px)',
                    WebkitBackdropFilter: 'blur(12px)',
                    outline: 'none',
                    fontSize: '15px',
                    textDecoration: 'none',
                    transition: 'all 0.25s cubic-bezier(0.23, 1, 0.320, 1)'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-2px)';
                    e.currentTarget.style.background = isDarkMode ? 'rgba(255, 255, 255, 0.12)' : 'rgba(0, 0, 0, 0.08)';
                    e.currentTarget.style.borderColor = isDarkMode ? 'rgba(255, 255, 255, 0.28)' : 'rgba(0, 0, 0, 0.18)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.background = isDarkMode ? 'rgba(255, 255, 255, 0.04)' : 'rgba(0, 0, 0, 0.03)';
                    e.currentTarget.style.borderColor = isDarkMode ? '1px solid rgba(255, 255, 255, 0.12)' : '1px solid rgba(0, 0, 0, 0.08)';
                  }}>
                  <Mail size={18} /> {t.contact.email}
                </a>
                <a href="https://github.com/Hoangnguyenhuu12" target="_blank" rel="noopener noreferrer"
                  className="w-full sm:w-64 px-6 py-3.5 rounded-xl font-medium inline-flex items-center justify-center gap-3 glass-button"
                  style={{
                    background: isDarkMode ? 'rgba(255, 255, 255, 0.04)' : 'rgba(0, 0, 0, 0.03)',
                    color: isDarkMode ? '#ffffff' : '#000000',
                    border: isDarkMode ? '1px solid rgba(255, 255, 255, 0.12)' : '1px solid rgba(0, 0, 0, 0.08)',
                    backdropFilter: 'blur(12px)',
                    WebkitBackdropFilter: 'blur(12px)',
                    outline: 'none',
                    fontSize: '15px',
                    textDecoration: 'none',
                    transition: 'all 0.25s cubic-bezier(0.23, 1, 0.320, 1)'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-2px)';
                    e.currentTarget.style.background = isDarkMode ? 'rgba(255, 255, 255, 0.12)' : 'rgba(0, 0, 0, 0.08)';
                    e.currentTarget.style.borderColor = isDarkMode ? 'rgba(255, 255, 255, 0.28)' : 'rgba(0, 0, 0, 0.18)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.background = isDarkMode ? 'rgba(255, 255, 255, 0.04)' : 'rgba(0, 0, 0, 0.03)';
                    e.currentTarget.style.borderColor = isDarkMode ? '1px solid rgba(255, 255, 255, 0.12)' : '1px solid rgba(0, 0, 0, 0.08)';
                  }}>
                  <Github size={18} /> {t.contact.github}
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <section className="max-w-6xl mx-auto px-6 py-12 mt-8"
          style={{
            border: 'none'
          }}>
          <p className="text-sm text-center"
            style={{
              color: isDarkMode ? '#ffffff' : '#000000'
            }}>
            © 2024 Nguyen Huu Hoang. Designed with focus on clarity and impact.
          </p>
        </section>
      </div>
    </div>
  );
};

export default Portfolio;
