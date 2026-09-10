import React, { useState, useEffect } from 'react';
import { Mail, Github, ExternalLink, Moon, Sun, ArrowUpRight } from 'lucide-react';

// Typing effect component
const TypingText = ({ text, speed = 50, isActive = true }) => {
  const [displayedText, setDisplayedText] = useState('');

  useEffect(() => {
    if (!isActive) {
      setDisplayedText(text);
      return;
    }

    let index = 0;
    const interval = setInterval(() => {
      if (index <= text.length) {
        setDisplayedText(text.substring(0, index) + (index < text.length ? '_' : ''));
        index++;
      } else {
        setDisplayedText(text);
        clearInterval(interval);
      }
    }, speed);

    return () => clearInterval(interval);
  }, [text, speed, isActive]);

  return <span>{displayedText}</span>;
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
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const content = {
    en: {
      nav: { skills: 'Skills', projects: 'Projects', contact: 'Contact' },
      hero: {
        title: 'Building Intelligence at Scale',
        subtitle: 'AI Engineer specializing in LLM & RAG systems',
        cta: 'Explore My Work'
      },
      about: {
        title: 'About',
        intro: 'I\'m a 3rd-year student passionate about building production-grade AI systems. Recently completed an AI internship at Lạc Việt, where I developed RAG applications and personalization systems using cutting-edge LLM technologies.',
        experience: {
          title: 'Experience',
          internship: {
            role: 'AI Engineer Intern',
            company: 'Lạc Việt',
            duration: '3 months',
            desc: 'Developed RAG & recommendation systems using LangChain, Vector DB, and OCR'
          },
          education: {
            role: 'Computer Science Student',
            company: 'University',
            duration: 'Currently Year 3',
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
        subtitle: 'Open to opportunities at Big Tech companies and innovative startups',
        email: 'Email me',
        github: 'View GitHub'
      }
    },
    vi: {
      nav: { skills: 'Kỹ Năng', projects: 'Dự Án', contact: 'Liên Hệ' },
      hero: {
        title: 'Xây Dựng Trí Tuệ Nhân Tạo',
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
        subtitle: 'Mở cửa cho cơ hội tại các công ty Big Tech và startup sáng tạo',
        email: 'Gửi Email',
        github: 'Xem GitHub'
      }
    }
  };

  const t = content[isLang];
  const isDarkMode = isDark;

  const heroOpacity = Math.max(0, 1 - scrollY / 500);
  const heroScale = Math.max(0.95, 1 - scrollY / 2000);

  const glassStyle = {
    background: isDarkMode 
      ? 'rgba(255, 255, 255, 0.05)' 
      : 'rgba(255, 255, 255, 0.7)',
    backdropFilter: 'blur(10px)',
    border: `1px solid ${isDarkMode ? 'rgba(255,255,255,0.15)' : 'rgba(255,255,255,0.3)'}`,
    boxShadow: isDarkMode
      ? '0 8px 32px 0 rgba(255, 255, 255, 0.08)'
      : '0 8px 32px 0 rgba(0, 0, 0, 0.1)'
  };

  return (
    <div className={`${isDarkMode ? 'dark' : 'light'}`}
         style={{
           backgroundColor: isDarkMode ? '#0a0a0a' : '#f9f9f9',
           color: isDarkMode ? '#e5e5e5' : '#1a1a1a'
         }}>
      
      <style>{`
        .glass-card {
          transition: all 0.3s cubic-bezier(0.23, 1, 0.320, 1);
          cursor: pointer;
        }
        
        .glass-card:hover {
          transform: translateY(-4px);
          box-shadow: ${isDarkMode
            ? '0 0 20px rgba(255, 255, 255, 0.2), 0 16px 64px 0 rgba(255, 255, 255, 0.12)'
            : '0 16px 64px 0 rgba(0, 0, 0, 0.2)'} !important;
          border-color: ${isDarkMode 
            ? 'rgba(255, 255, 255, 0.4)' 
            : 'rgba(0, 0, 0, 0.1)'} !important;
        }
        
        .glass-button {
          transition: all 0.3s cubic-bezier(0.23, 1, 0.320, 1);
          cursor: pointer;
        }
        
        .glass-button:hover {
          transform: translateY(-4px);
          box-shadow: ${isDarkMode 
            ? '0 0 16px rgba(255, 255, 255, 0.15), 0 12px 48px 0 rgba(255, 255, 255, 0.15)'
            : '0 12px 48px 0 rgba(0, 0, 0, 0.2)'} !important;
          border-color: ${isDarkMode 
            ? 'rgba(255, 255, 255, 0.4)' 
            : 'rgba(0, 0, 0, 0.15)'} !important;
        }
        
        .skill-badge {
          transition: all 0.3s cubic-bezier(0.23, 1, 0.320, 1);
          cursor: pointer;
        }
        
        .skill-badge:hover {
          transform: scale(1.12) translateY(-4px);
          border-color: ${isDarkMode 
            ? 'rgba(255, 255, 255, 0.4)' 
            : 'rgba(0, 0, 0, 0.15)'} !important;
          box-shadow: ${isDarkMode 
            ? '0 0 12px rgba(255, 255, 255, 0.15)'
            : '0 8px 24px rgba(0, 0, 0, 0.1)'} !important;
        }
        
        .project-card {
          transition: all 0.4s cubic-bezier(0.23, 1, 0.320, 1);
          cursor: pointer;
        }
        
        .project-card:hover {
          transform: translateY(-6px);
          box-shadow: ${isDarkMode
            ? '0 0 24px rgba(255, 255, 255, 0.2), 0 20px 72px 0 rgba(255, 255, 255, 0.12)'
            : '0 20px 72px 0 rgba(0, 0, 0, 0.2)'} !important;
          border-color: ${isDarkMode 
            ? 'rgba(255, 255, 255, 0.4)' 
            : 'rgba(0, 0, 0, 0.1)'} !important;
        }
        
        .nav-link {
          transition: all 0.3s ease;
          position: relative;
          cursor: pointer;
        }
        
        .nav-link:hover {
          opacity: 1 !important;
          color: ${isDarkMode ? '#ffffff' : '#000000'} !important;
        }
        
        .nav-link::after {
          content: '';
          position: absolute;
          bottom: -2px;
          left: 0;
          width: 0;
          height: 2px;
          background: currentColor;
          transition: width 0.3s ease;
        }
        
        .nav-link:hover::after {
          width: 100%;
        }
      `}</style>

      {/* Full Screen Hero with Typing Effect */}
      <div className="fixed inset-0 z-0 flex flex-col items-center justify-center pointer-events-none"
           style={{
             backgroundColor: isDarkMode ? '#000000' : '#ffffff',
             color: isDarkMode ? '#ffffff' : '#000000',
             opacity: heroOpacity,
             transform: `scale(${heroScale})`,
             transition: 'opacity 0.1s linear, transform 0.1s linear',
             pointerEvents: heroOpacity > 0 ? 'auto' : 'none'
           }}>
        <div className="text-center max-w-3xl px-6">
          <h1 className="text-8xl md:text-9xl font-bold leading-tight font-mono">
            <TypingText text="Hoang's Portfolio" speed={150} isActive={heroOpacity > 0.5} />
          </h1>
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-10"
           style={{
             paddingTop: '100vh'
           }}>
        
        {/* Navigation */}
        <nav className="sticky top-0 z-50" 
             style={{
               background: isDarkMode 
                 ? 'rgba(10, 10, 10, 0.7)' 
                 : 'rgba(255, 255, 255, 0.5)',
               backdropFilter: 'blur(10px)',
               borderBottom: `1px solid ${isDarkMode ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.1)'}`
             }}>
          <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
            <div className="text-xl font-bold tracking-tight" style={{
              color: isDarkMode ? '#ffffff' : '#000000'
            }}>
              Hoangf
            </div>
            
            <div className="flex items-center gap-8">
              <div className="hidden md:flex gap-8 text-sm">
                <a href="#skills" className="nav-link opacity-70">{t.nav.skills}</a>
                <a href="#projects" className="nav-link opacity-70">{t.nav.projects}</a>
                <a href="#contact" className="nav-link opacity-70">{t.nav.contact}</a>
              </div>

              <div className="flex items-center gap-3 pl-6" style={{borderLeft: `1px solid ${isDarkMode ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.1)'}`}}>
                <button onClick={() => setIsLang(isLang === 'en' ? 'vi' : 'en')}
                        className="text-xs font-semibold px-3 py-1.5 rounded-lg glass-button"
                        style={glassStyle}>
                  {isLang === 'en' ? 'VI' : 'EN'}
                </button>

                <button onClick={() => setIsDark(!isDarkMode)}
                        className="p-1.5 rounded-lg glass-button"
                        style={glassStyle}>
                  {isDarkMode ? <Sun size={18} /> : <Moon size={18} />}
                </button>
              </div>
            </div>
          </div>
        </nav>

        {/* Hero Content */}
        <section className="max-w-6xl mx-auto px-6 py-20">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="max-w-2xl">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                {t.hero.title}
              </h2>
              <p className="text-lg md:text-xl opacity-70 mb-10">{t.hero.subtitle}</p>
              <div className="flex gap-4 flex-wrap">
                <a href="#projects" className="glass-button px-8 py-4 rounded-xl font-medium"
                   style={{
                     ...glassStyle,
                     background: isDarkMode ? '#ffffff' : '#000000',
                     color: isDarkMode ? '#000000' : '#ffffff',
                     border: 'none',
                     transition: 'all 0.3s cubic-bezier(0.23, 1, 0.320, 1)'
                   }}
                   onMouseEnter={(e) => {
                     e.currentTarget.style.background = isDarkMode ? '#000000' : '#ffffff';
                     e.currentTarget.style.color = isDarkMode ? '#ffffff' : '#000000';
                     e.currentTarget.style.transform = 'translateY(-2px)';
                   }}
                   onMouseLeave={(e) => {
                     e.currentTarget.style.background = isDarkMode ? '#ffffff' : '#000000';
                     e.currentTarget.style.color = isDarkMode ? '#000000' : '#ffffff';
                     e.currentTarget.style.transform = 'translateY(0)';
                   }}>
                  {t.hero.cta}
                </a>
                <a href="https://github.com/Hoangnguyenhuu12" target="_blank" rel="noopener noreferrer"
                   className="glass-button px-8 py-4 rounded-xl font-medium inline-flex items-center gap-2"
                   style={{
                     ...glassStyle,
                     transition: 'all 0.3s cubic-bezier(0.23, 1, 0.320, 1)'
                   }}
                   onMouseEnter={(e) => {
                     e.currentTarget.style.background = isDarkMode ? '#ffffff' : '#000000';
                     e.currentTarget.style.color = isDarkMode ? '#000000' : '#ffffff';
                     e.currentTarget.style.transform = 'translateY(-2px)';
                   }}
                   onMouseLeave={(e) => {
                     e.currentTarget.style.background = isDarkMode 
                       ? 'rgba(255, 255, 255, 0.05)' 
                       : 'rgba(255, 255, 255, 0.7)';
                     e.currentTarget.style.color = isDarkMode ? '#ffffff' : '#000000';
                     e.currentTarget.style.transform = 'translateY(0)';
                   }}>
                  GitHub <ArrowUpRight size={18} />
                </a>
              </div>
            </div>

            {/* Avatar Section */}
            <div className="flex justify-center md:justify-end">
              <div style={{
                width: '300px',
                height: '300px',
                borderRadius: '50%',
                border: `4px solid ${isDarkMode ? '#ffffff' : '#000000'}`,
                overflow: 'hidden',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                background: isDarkMode ? 'rgba(255,255,255,0.05)' : 'rgba(0,0,0,0.05)',
                boxShadow: isDarkMode 
                  ? '0 0 30px rgba(255, 255, 255, 0.15)'
                  : '0 0 30px rgba(0, 0, 0, 0.1)',
                transition: 'all 0.3s ease'
              }}>
                <img 
                  src="/avatar.jpg" 
                  alt="Hoang's Portfolio Avatar"
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover'
                  }}
                />
              </div>
            </div>
          </div>
        </section>

        {/* About */}
        <section className="max-w-6xl mx-auto px-6 py-20">
          <h2 className="text-4xl font-bold mb-12">{t.about.title}</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="glass-card p-8 rounded-2xl" style={glassStyle}>
              <p className="text-lg opacity-80 leading-relaxed">
                {t.about.intro}
              </p>
            </div>

            <div className="space-y-6">
              <h3 className="text-sm font-semibold opacity-50 uppercase tracking-widest">{t.about.experience.title}</h3>
              
              <div className="glass-card p-6 rounded-2xl pl-8" 
                   style={{
                ...glassStyle,
                borderLeft: `3px solid ${isDarkMode ? '#ffffff' : '#000000'}`
              }}>
                <div className="font-semibold text-lg">
                  {t.about.experience.internship.role}
                </div>
                <div className="text-sm opacity-60 mt-1">
                  {t.about.experience.internship.company} · {t.about.experience.internship.duration}
                </div>
                <div className="text-sm opacity-70 mt-3">{t.about.experience.internship.desc}</div>
              </div>

              <div className="glass-card p-6 rounded-2xl pl-8"
                   style={{
                ...glassStyle,
                borderLeft: `3px solid ${isDarkMode ? '#ffffff' : '#000000'}`
              }}>
                <div className="font-semibold text-lg">
                  {t.about.experience.education.role}
                </div>
                <div className="text-sm opacity-60 mt-1">
                  {t.about.experience.education.company} · {t.about.experience.education.duration}
                </div>
                <div className="text-sm opacity-70 mt-3">{t.about.experience.education.desc}</div>
              </div>
            </div>
          </div>
        </section>

        {/* Skills */}
        <section id="skills" className="max-w-6xl mx-auto px-6 py-20">
          <h2 className="text-4xl font-bold mb-12">{t.skills.title}</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {Object.entries(t.skills.categories).map(([key, category]) => (
              <div key={key} className="glass-card p-8 rounded-2xl" style={glassStyle}>
                <h3 className="font-semibold mb-6 text-lg" style={{
                  color: isDarkMode ? '#ffffff' : '#000000'
                }}>
                  {category.name}
                </h3>
                <div className="flex flex-wrap gap-3">
                  {category.items.map((skill, idx) => (
                    <span key={idx} className="skill-badge text-sm px-4 py-2 rounded-full"
                          style={{
                            background: isDarkMode 
                              ? 'rgba(255, 255, 255, 0.05)' 
                              : 'rgba(0, 0, 0, 0.04)',
                            border: `1px solid ${isDarkMode ? 'rgba(255, 255, 255, 0.15)' : 'rgba(0, 0, 0, 0.08)'}`,
                            color: isDarkMode ? 'rgba(255, 255, 255, 0.7)' : 'rgba(0, 0, 0, 0.6)'
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
                   className="project-card p-8 rounded-2xl cursor-pointer"
                   onMouseEnter={() => setHoveredProject(idx)}
                   onMouseLeave={() => setHoveredProject(null)}
                   style={glassStyle}>
                <h3 className="text-xl font-bold mb-3">
                  {project.title}
                </h3>
                <p className="opacity-75 mb-6 leading-relaxed text-sm">{project.desc}</p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech, i) => (
                    <span key={i} className="text-xs px-3 py-1.5 rounded-full font-medium"
                          style={{
                            background: isDarkMode 
                              ? 'rgba(255, 255, 255, 0.05)' 
                              : 'rgba(0, 0, 0, 0.04)',
                            color: isDarkMode ? 'rgba(255, 255, 255, 0.7)' : 'rgba(0, 0, 0, 0.6)',
                            border: `1px solid ${isDarkMode ? 'rgba(255, 255, 255, 0.15)' : 'rgba(0, 0, 0, 0.08)'}`
                          }}>
                      {tech}
                    </span>
                  ))}
                </div>
                <a href={project.link} className="inline-flex items-center gap-2 opacity-70 hover:opacity-100 transition text-sm font-medium group">
                  Learn More 
                  <ArrowUpRight size={14} style={{
                    transition: 'all 0.3s ease',
                    transform: hoveredProject === idx ? 'translate(2px, -2px)' : 'translate(0, 0)'
                  }} />
                </a>
              </div>
            ))}
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="max-w-6xl mx-auto px-6 py-20">
          <div className="glass-card p-12 rounded-3xl" style={glassStyle}>
            <div className="grid md:grid-cols-2 gap-12">
              {/* Left: Quote & Social Icons */}
              <div className="flex flex-col justify-between">
                <div>
                  <h2 className="text-4xl font-bold mb-6">{t.contact.title}</h2>
                  <p className="opacity-80 mb-8 text-lg italic">
                    "We've become so focused on that tiny screen that we forget the big picture, the people right in front of us."
                  </p>
                  <p className="opacity-60 text-sm">— Kanye West</p>
                </div>

                {/* Social Media Icons */}
                <div className="flex gap-4 items-center mt-8">
                  {/* Facebook */}
                  <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"
                     className="w-12 h-12 flex items-center justify-center hover:scale-110 transition"
                     title="Facebook">
                    <img 
                      src={isDarkMode ? "/facebook-dark.png" : "/facebook-light.png"}
                      alt="Facebook"
                      className="w-full h-full object-contain"
                    />
                  </a>

                  {/* Instagram */}
                  <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"
                     className="w-12 h-12 flex items-center justify-center hover:scale-110 transition"
                     title="Instagram">
                    <img 
                      src={isDarkMode ? "/instagram-dark.png" : "/instagram-light.png"}
                      alt="Instagram"
                      className="w-full h-full object-contain"
                    />
                  </a>

                  {/* Strava */}
                  <a href="https://strava.com" target="_blank" rel="noopener noreferrer"
                     className="w-12 h-12 flex items-center justify-center hover:scale-110 transition"
                     title="Strava">
                    <img 
                      src={isDarkMode ? "/strava-dark.png" : "/strava-light.png"}
                      alt="Strava"
                      className="w-full h-full object-contain"
                    />
                  </a>

                  {/* LinkedIn */}
                  <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"
                     className="w-12 h-12 flex items-center justify-center hover:scale-110 transition"
                     title="LinkedIn">
                    <img 
                      src={isDarkMode ? "/linkedin-dark.png" : "/linkedin-light.png"}
                      alt="LinkedIn"
                      className="w-full h-full object-contain"
                    />
                  </a>
                </div>
              </div>

              {/* Right: Buttons (Vertical Stack) */}
              <div className="flex flex-col gap-3 justify-start">
                <a href="mailto:nguyenhuuhoang5038@gmail.com"
                   className="px-6 py-3 rounded-lg font-medium inline-flex items-center justify-center gap-2 w-full transition-all"
                   style={{
                     background: '#000000',
                     color: '#ffffff',
                     border: 'none',
                     cursor: 'pointer'
                   }}
                   onMouseEnter={(e) => {
                     e.currentTarget.style.opacity = '0.9';
                     e.currentTarget.style.transform = 'translateY(-2px)';
                   }}
                   onMouseLeave={(e) => {
                     e.currentTarget.style.opacity = '1';
                     e.currentTarget.style.transform = 'translateY(0)';
                   }}>
                  <Mail size={18} /> {t.contact.email}
                </a>
                <a href="https://github.com/Hoangnguyenhuu12" target="_blank" rel="noopener noreferrer"
                   className="px-6 py-3 rounded-lg font-medium inline-flex items-center justify-center gap-2 w-full transition-all"
                   style={{
                     background: isDarkMode ? '#ffffff' : '#000000',
                     color: isDarkMode ? '#000000' : '#ffffff',
                     border: 'none',
                     cursor: 'pointer'
                   }}
                   onMouseEnter={(e) => {
                     e.currentTarget.style.opacity = '0.9';
                     e.currentTarget.style.transform = 'translateY(-2px)';
                   }}
                   onMouseLeave={(e) => {
                     e.currentTarget.style.opacity = '1';
                     e.currentTarget.style.transform = 'translateY(0)';
                   }}>
                  <Github size={18} /> {t.contact.github}
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <section className="max-w-6xl mx-auto px-6 py-12 mt-8 border-t"
                 style={{borderColor: isDarkMode ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.1)'}}>
          <p className="text-sm opacity-40 text-center">
            © 2024 Nguyen Huu Hoang. Designed with focus on clarity and impact.
          </p>
        </section>
      </div>
    </div>
  );
};

export default Portfolio;
