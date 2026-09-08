import React, { useState, useEffect } from 'react';
import { Mail, Github, ExternalLink, Moon, Sun } from 'lucide-react';

const Portfolio = () => {
  const [isDark, setIsDark] = useState(false);
  const [isLang, setIsLang] = useState('en');
  const [scrollY, setScrollY] = useState(0);

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
            title: 'Fashion Recommendation System',
            desc: 'AI-powered personalized clothing recommendations using advanced recommendation algorithms and user behavior analysis',
            tech: ['Python', 'Machine Learning', 'Personalization'],
            link: '#'
          },
          {
            title: 'RAG Educational Assistant',
            desc: 'Intelligent Q&A system for educational content. Combines OCR for PDF scanning with LangChain RAG pipeline for accurate document understanding and response generation',
            tech: ['LangChain', 'OCR', 'Vector DB', 'RAG', 'Python'],
            link: '#'
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
            title: 'Hệ Thống Gợi Ý Thời Trang',
            desc: 'Hệ thống gợi ý quần áo cá nhân hóa sử dụng thuật toán học máy và phân tích hành vi người dùng',
            tech: ['Python', 'Machine Learning', 'Personalization'],
            link: '#'
          },
          {
            title: 'Trợ Lý Giáo Dục RAG',
            desc: 'Hệ thống Q&A thông minh cho nội dung giáo dục. Kết hợp OCR để quét PDF với pipeline RAG LangChain cho hiểu biết tài liệu chính xác',
            tech: ['LangChain', 'OCR', 'Vector DB', 'RAG', 'Python'],
            link: '#'
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

  return (
    <div className={`${isDarkMode ? 'dark' : 'light'} min-h-screen transition-colors duration-300`}
         style={{
           backgroundColor: isDarkMode ? '#0a0a0a' : '#ffffff',
           color: isDarkMode ? '#e5e5e5' : '#1a1a1a'
         }}>
      
      {/* Navigation */}
      <nav className="sticky top-0 z-50 backdrop-blur-md" 
           style={{
             backgroundColor: isDarkMode ? 'rgba(10, 10, 10, 0.8)' : 'rgba(255, 255, 255, 0.8)',
             borderBottom: `1px solid ${isDarkMode ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.1)'}`
           }}>
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="text-xl font-bold tracking-tight">Hoàng</div>
          
          <div className="flex items-center gap-8">
            <div className="hidden md:flex gap-6 text-sm">
              <a href="#skills" className="opacity-70 hover:opacity-100 transition">{t.nav.skills}</a>
              <a href="#projects" className="opacity-70 hover:opacity-100 transition">{t.nav.projects}</a>
              <a href="#contact" className="opacity-70 hover:opacity-100 transition">{t.nav.contact}</a>
            </div>

            <div className="flex items-center gap-3 pl-6" style={{borderLeft: `1px solid ${isDarkMode ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.1)'}`}}>
              <button onClick={() => setIsLang(isLang === 'en' ? 'vi' : 'en')}
                      className="text-xs font-semibold px-3 py-1 rounded transition"
                      style={{
                        backgroundColor: isDarkMode ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.05)',
                        opacity: 0.7
                      }}>
                {isLang === 'en' ? 'VI' : 'EN'}
              </button>

              <button onClick={() => setIsDark(!isDarkMode)}
                      className="p-1 rounded transition"
                      style={{opacity: 0.7}}
                      title="Toggle theme">
                {isDarkMode ? <Sun size={18} /> : <Moon size={18} />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="max-w-6xl mx-auto px-6 py-24 md:py-32">
        <div className="max-w-3xl">
          <h1 className="text-5xl md:text-6xl font-bold mb-4 leading-tight">
            {t.hero.title}
          </h1>
          <p className="text-lg md:text-xl opacity-70 mb-8">
            {t.hero.subtitle}
          </p>
          <div className="flex gap-4 flex-wrap">
            <a href="#projects" className="px-6 py-3 rounded-lg font-medium transition"
               style={{
                 backgroundColor: isDarkMode ? '#3b82f6' : '#2563eb',
                 color: 'white'
               }}>
              {t.hero.cta}
            </a>
            <a href="https://github.com/nguyenhuuhoang12" target="_blank" rel="noopener noreferrer"
               className="px-6 py-3 rounded-lg font-medium border transition flex items-center gap-2"
               style={{
                 borderColor: isDarkMode ? 'rgba(255,255,255,0.2)' : 'rgba(0,0,0,0.2)',
                 color: isDarkMode ? '#e5e5e5' : '#1a1a1a'
               }}>
              GitHub <ExternalLink size={16} />
            </a>
          </div>
        </div>
      </section>

      {/* About */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold mb-8">{t.about.title}</h2>
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <p className="text-lg opacity-80 leading-relaxed mb-8">
              {t.about.intro}
            </p>
          </div>

          <div className="space-y-6">
            <div>
              <h3 className="text-sm font-semibold opacity-50 uppercase tracking-wide mb-4">
                {t.about.experience.title}
              </h3>
              
              {/* Internship */}
              <div className="mb-8 pl-4" style={{borderLeft: `2px solid rgba(59, 130, 246, 0.5)`}}>
                <div className="font-semibold">{t.about.experience.internship.role}</div>
                <div className="text-sm opacity-60 mb-2">
                  {t.about.experience.internship.company} · {t.about.experience.internship.duration}
                </div>
                <div className="text-sm opacity-70">{t.about.experience.internship.desc}</div>
              </div>

              {/* Education */}
              <div className="pl-4" style={{borderLeft: `2px solid rgba(59, 130, 246, 0.5)`}}>
                <div className="font-semibold">{t.about.experience.education.role}</div>
                <div className="text-sm opacity-60 mb-2">
                  {t.about.experience.education.company} · {t.about.experience.education.duration}
                </div>
                <div className="text-sm opacity-70">{t.about.experience.education.desc}</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills */}
      <section id="skills" className="max-w-6xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold mb-12">{t.skills.title}</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {Object.entries(t.skills.categories).map(([key, category]) => (
            <div key={key} className="p-6 rounded-lg"
                 style={{
                   backgroundColor: isDarkMode ? 'rgba(255,255,255,0.05)' : 'rgba(0,0,0,0.02)',
                   border: `1px solid ${isDarkMode ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.1)'}`
                 }}>
              <h3 className="font-semibold mb-4 text-blue-500">{category.name}</h3>
              <div className="flex flex-wrap gap-2">
                {category.items.map((skill, idx) => (
                  <span key={idx} className="text-sm px-3 py-1 rounded-full"
                        style={{
                          backgroundColor: isDarkMode ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.05)',
                          color: isDarkMode ? '#e5e5e5' : '#1a1a1a'
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
      <section id="projects" className="max-w-6xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold mb-12">{t.projects.title}</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {t.projects.items.map((project, idx) => (
            <div key={idx} className="p-8 rounded-lg border transition hover:border-blue-500"
                 style={{
                   backgroundColor: isDarkMode ? 'rgba(255,255,255,0.03)' : 'rgba(0,0,0,0.01)',
                   borderColor: isDarkMode ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.1)'
                 }}>
              <h3 className="text-xl font-bold mb-3">{project.title}</h3>
              <p className="opacity-75 mb-4 leading-relaxed">{project.desc}</p>
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tech.map((tech, i) => (
                  <span key={i} className="text-xs px-3 py-1 rounded-full font-medium"
                        style={{
                          backgroundColor: isDarkMode ? 'rgba(59, 130, 246, 0.15)' : 'rgba(37, 99, 235, 0.1)',
                          color: isDarkMode ? '#60a5fa' : '#2563eb'
                        }}>
                    {tech}
                  </span>
                ))}
              </div>
              <a href={project.link} className="inline-flex items-center gap-2 text-blue-500 hover:opacity-70 transition text-sm font-medium">
                Learn More <ExternalLink size={14} />
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="max-w-6xl mx-auto px-6 py-20">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-bold mb-4">{t.contact.title}</h2>
          <p className="opacity-70 mb-8">{t.contact.subtitle}</p>
          
          <div className="flex gap-4 flex-wrap">
            <a href="mailto:nguyenhuuhoang5038@gmail.com"
               className="px-6 py-3 rounded-lg font-medium border transition flex items-center gap-2"
               style={{
                 borderColor: isDarkMode ? 'rgba(255,255,255,0.2)' : 'rgba(0,0,0,0.2)',
                 color: isDarkMode ? '#e5e5e5' : '#1a1a1a',
                 backgroundColor: isDarkMode ? 'rgba(255,255,255,0.05)' : 'rgba(0,0,0,0.02)'
               }}>
              <Mail size={18} /> {t.contact.email}
            </a>
            <a href="https://github.com/nguyenhuuhoang12" target="_blank" rel="noopener noreferrer"
               className="px-6 py-3 rounded-lg font-medium transition flex items-center gap-2"
               style={{
                 backgroundColor: isDarkMode ? '#3b82f6' : '#2563eb',
                 color: 'white'
               }}>
              <Github size={18} /> {t.contact.github}
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <section className="max-w-6xl mx-auto px-6 py-8 mt-12 border-t"
               style={{borderColor: isDarkMode ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.1)'}}>
        <p className="text-sm opacity-50 text-center">
          © 2024 Nguyễn Hữu Hoàng. Designed with focus on clarity and impact.
        </p>
      </section>
    </div>
  );
};

export default Portfolio;