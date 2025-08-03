"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Github, Linkedin, Mail, ExternalLink, Code2, Database, Globe, Smartphone, Menu, X , MonitorPlay, FileUser } from "lucide-react"

const translations = {
  en: {
    nav: ["about", "projects", "technologies", "contact"],
    heroTitle: "Full Stack Developer",
    heroDesc: "Naturally curious and driven by challenges, I’m a full stack developer focused on building well-structured and scalable web solutions. I strive to deliver clean, well-documented code with a clear purpose: solving real problems.",
    viewProjects: "View Projects",
    getInTouch: "Get In Touch",
    featuredProjects: "Featured Projects",
    featuredDesc: "A collection of projects that showcase my skills in full-stack development, from concept to deployment.",
    technologiesTitle: "Technologies & Skills",
    technologiesDesc: "Technologies I work with to bring ideas to life, from frontend interfaces to backend systems and databases.",
    years: "years",
    contactTitle: "Let's Work Together",
    contactDesc: "I'm always open to new challenges, collaborations, and projects that make a difference. If you have an idea, a proposal, or simply want to chat, feel free to reach out.",
    sendEmail: "Send Email",
    footer: "Built with Next.js and Tailwind CSS.",
    sections: {
      about: "about",
      projects: "projects",
      technologies: "technologies",
      contact: "contact"
    }
  },
  pt: {
    nav: ["sobre", "projetos", "tecnologias", "contato"],
    heroTitle: "Desenvolvedor Full Stack",
    heroDesc: "Curioso por natureza e movido a desafios, sou um desenvolvedor full stack que busca construir soluções web bem estruturadas e escaláveis. Gosto de entregar código limpo, bem documentado e com propósito claro: resolver problemas de verdade.",
    viewProjects: "Ver Projetos",
    getInTouch: "Entrar em Contato",
    featuredProjects: "Projetos em Destaque",
    featuredDesc: "Uma coleção de projetos que demonstram minhas habilidades em desenvolvimento full-stack, do conceito à implantação.",
    technologiesTitle: "Tecnologias & Habilidades",
    technologiesDesc: "Tecnologias com as quais trabalho para transformar ideias em realidade, desde interfaces frontend até sistemas backend e bancos de dados.",
    years: "anos",
    contactTitle: "Vamos Trabalhar Juntos",
    contactDesc: "Estou sempre aberto a novos desafios, colaborações e projetos que façam a diferença. Se você tem uma ideia, proposta ou simplesmente quer trocar uma ideia, é só me chamar.",
    sendEmail: "Enviar Email",
    footer: "Desenvolvido com Next.js e Tailwind CSS.",
    sections: {
      about: "sobre",
      projects: "projetos",
      technologies: "tecnologias",
      contact: "contato"
    }
  }
}

export default function Portfolio() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("about")
  const [lang, setLang] = useState<"en" | "pt">("pt")
  const t = translations[lang]

  useEffect(() => {
    const handleScroll = () => {
      const sections = Object.values(translations[lang].sections)
      const scrollPosition = window.scrollY + 100

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const offsetTop = element.offsetTop
          const offsetHeight = element.offsetHeight

          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [lang])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
    setIsMenuOpen(false)
  }

  const projects = [
    {
      title: lang === "pt" ? "Importação e Consulta de Dados do Oscar" : "Oscar Data Import and Query",
      description: lang === "pt"
        ? "Este projeto realiza a importação de dados de um arquivo CSV para um banco de dados PostgreSQL, estruturando as informações sobre o Oscar (Academy Awards) e permitindo consultas analíticas sobre os dados importados."
        : "This project imports data from a CSV file into a PostgreSQL database, structuring information about the Oscars (Academy Awards) and enabling analytical queries on the imported data.",
      technologies: ["Python", "PostgreSQL", "CSV"],
      link: "https://github.com/danielabdam/Desafio_analistaDados",
      featured: true,
    },
    {
      title: lang === "pt" ? "ChatGPT Clone (OrionAI)" : "ChatGPT Clone (OrionAI)",
      description: lang === "pt"
        ? "Um clone fullstack do chatgpt utilizando uma integração com o algoritmo do OpenAI, permitindo conversas em tempo real com inteligência artificial."
        : "A full-stack ChatGPT clone using integration with OpenAI’s algorithm, enabling real-time conversations with artificial intelligence.",
      technologies: ["Next.js", "Express", "Javascript", "React","OpenAI API"],
      link: "https://github.com/danielabdam/chatgpt-clone",
      featured: true,
    },
    // {
    //   title: lang === "pt" ? "Dashboard do Clima" : "Weather Dashboard",
    //   description: lang === "pt"
    //     ? "Dashboard interativo de clima com previsões baseadas em localização e visualização de dados históricos."
    //     : "Interactive weather dashboard with location-based forecasts and historical data visualization.",
    //   technologies: ["Vue.js", "Chart.js", "OpenWeather API", "PWA"],
    //   link: "https://github.com/danielabdam/weather-dashboard",
    //   featured: false,
    // },
    // {
    //   title: lang === "pt" ? "Site Portfólio" : "Portfolio Website",
    //   description: lang === "pt"
    //     ? "Site pessoal de portfólio apresentando projetos e habilidades com design moderno e animações."
    //     : "Personal portfolio website showcasing projects and skills with modern design and animations.",
    //   technologies: ["Next.js", "Framer Motion", "Tailwind CSS", "Vercel"],
    //   link: "https://github.com/danielabdam/portfolio",
    //   featured: false,
    // },
  ]
 
  const technologies = [
    { name: "JavaScript", years: "1", category: lang === "pt" ? "Frontend" : "Frontend", icon: Code2 },
    { name: "JavaScript", years: "1", category: lang === "pt" ? "Backend" : "Backend", icon: Code2 },
    { name: "Python", years: "1+", category: lang === "pt" ? "Backend" : "Backend", icon: Code2 },
    { name: "React", years: "1", category: lang === "pt" ? "Frontend" : "Frontend", icon: Code2 },
    { name: "Next.js", years: "1", category: lang === "pt" ? "Backend" : "Backend", icon: Globe },
    //{ name: "Node.js", years: "4+", category: lang === "pt" ? "Backend" : "Backend", icon: Database },
    { name: "PostgreSQL", years: "1", category: lang === "pt" ? "Banco de Dados" : "Database", icon: Database },
    { name: "Analista de Onboard", years: "2+", category: lang === "pt" ? "Analista de implantação" : "customer success", icon: MonitorPlay },
    //{ name: "React Native", years: "2+", category: lang === "pt" ? "Mobile" : "Mobile", icon: Smartphone },
  ]

  return (
    <div className="min-h-screen bg-black text-white">

      {/* Navegação fixa */}
      <nav className="fixed top-0 left-0 right-0 z-40 bg-black/90 backdrop-blur-sm border-b border-gray-800">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center">
                <span className="text-black font-bold text-sm">DA</span>
              </div>
              <span className="font-semibold text-lg">Daniel Abdam</span>
            </div>

            {/* Navegação Desktop */}
            <div className="hidden md:flex items-center space-x-8">
              {t.nav.map((section, idx) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(Object.values(t.sections)[idx])}
                  className={`capitalize transition-colors duration-200 hover:text-red-400 ${
                    activeSection === Object.values(t.sections)[idx] ? "text-red-400" : "text-gray-300"
                  }`}
                >
                  {section}
                </button>
              ))}
            </div>

            {/* Botão menu mobile */}
            <button className="md:hidden p-2" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Navegação Mobile */}
          {isMenuOpen && (
            <div className="md:hidden py-4 border-t border-gray-800">
              {t.nav.map((section, idx) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(Object.values(t.sections)[idx])}
                  className={`block w-full text-left py-2 px-4 capitalize transition-colors duration-200 hover:text-red-400 ${
                    activeSection === Object.values(t.sections)[idx] ? "text-red-400" : "text-gray-300"
                  }`}
                >
                  {section}
                </button>
              ))}
            </div>
          )}
        </div>
      </nav>

      {/* Hero/About Section */}
      <section id={t.sections.about} className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="flex-1 space-y-6">
              <div className="space-y-4">
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold">{t.heroTitle}</h1>
                <p className="text-xl text-gray-300 leading-relaxed">
                  {t.heroDesc}
                </p>
              </div>

              <div className="flex flex-wrap gap-4">
                <Button
                  onClick={() => scrollToSection(t.sections.projects)}
                  className="bg-red-500 hover:bg-red-600 text-white px-6 py-3"
                >
                  {t.viewProjects}
                </Button>
                <Button
                  variant="outline"
                  onClick={() => scrollToSection(t.sections.contact)}
                  className="border-gray-600 text-black hover:bg-gray-800 px-6 py-3"
                >
                  {t.getInTouch}
                </Button>
                <Button
                  variant="outline"
                  className="border-gray-600 text-black hover:bg-gray-800 px-6 py-3"
                  onClick={() => setLang(lang === "pt" ? "en" : "pt")}
                >
                  {lang === "pt" ? "Ver em Inglês" : "View in Portuguese"}
                </Button>
              </div>

              <div className="flex items-center space-x-6 pt-4">
                <a
                  href="https://github.com/danielabdam"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors duration-200"
                >
                  <Github size={24} />
                </a>
                <a
                  href="https://www.linkedin.com/in/daniel-lucas-227ts/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors duration-200"
                >
                  <Linkedin size={24} />
                </a>
                <a
                  href="daniellucas227@gmail.com"
                  className="text-gray-400 hover:text-white transition-colors duration-200"
                >
                  <Mail size={24} />
                </a>
              </div>
            </div>

            <div className="flex-shrink-0">
              <div className="w-64 h-64 sm:w-80 sm:h-80 rounded-full bg-gradient-to-br from-red-500 to-red-700 p-1">
                <div className="w-full h-full rounded-full bg-black flex items-center justify-center">
                  <img
                    src="/FOTO.jpg?height=300&width=300"
                    alt="Daniel Abdam - Full Stack Developer"
                    className="w-full h-full rounded-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id={t.sections.projects} className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-900/30">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">{t.featuredProjects}</h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              {t.featuredDesc}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            {projects
              .filter((p) => p.featured)
              .map((project, index) => (
                <Card
                  key={index}
                  className="bg-gray-800/50 border-gray-700 hover:border-red-500/50 transition-all duration-300 group"
                >
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-xl font-semibold group-hover:text-red-400 transition-colors">
                        {project.title}
                      </CardTitle>
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-white transition-colors"
                      >
                        <ExternalLink size={20} />
                      </a>
                    </div>
                    <CardDescription className="text-gray-300">{project.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, techIndex) => (
                        <Badge
                          key={techIndex}
                          variant="secondary"
                          className="bg-gray-700 text-gray-200 hover:bg-red-500/20"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
          </div>

          {/* <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projects
              .filter((p) => !p.featured)
              .map((project, index) => (
                <Card
                  key={index}
                  className="bg-gray-800/30 border-gray-700 hover:border-gray-600 transition-all duration-300"
                >
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-lg font-semibold">{project.title}</CardTitle>
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-white transition-colors"
                      >
                        <ExternalLink size={18} />
                      </a>
                    </div>
                    <CardDescription className="text-gray-400 text-sm">{project.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, techIndex) => (
                        <Badge key={techIndex} variant="outline" className="border-gray-600 text-gray-300 text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
          </div> */}
        </div>
      </section>

      {/* Technologies Section */}
      <section id={t.sections.technologies} className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">{t.technologiesTitle}</h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              {t.technologiesDesc}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {technologies.map((tech, index) => (
              <Card
                key={index}
                className="bg-gray-800/30 border-gray-700 hover:border-red-500/30 transition-all duration-300 group"
              >
                <CardContent className="p-6 text-center">
                  <div className="mb-4 flex justify-center">
                    <div className="p-3 bg-red-500/10 rounded-full group-hover:bg-red-500/20 transition-colors">
                      <tech.icon size={32} className="text-red-400" />
                    </div>
                  </div>
                  <h3 className="font-semibold text-white text-lg mb-2">{tech.name}</h3>
                  <p className="text-gray-400 text-sm mb-2">{tech.category}</p>
                  <Badge variant="outline" className="border-gray-600 text-gray-300">
                    {tech.years} {t.years}
                  </Badge>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id={t.sections.contact} className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-900/30">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">{t.contactTitle}</h2>
          <p className="text-gray-400 text-lg mb-8 max-w-2xl mx-auto">
            {t.contactDesc}
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <Button
              size="lg"
              className="bg-red-500 hover:bg-red-600 text-white px-8 py-4 text-lg"
              onClick={() => window.open("mailto:daniellucas227@gmail.com", "_blank")}
            >
              <Mail className="mr-2" size={20} />
              {t.sendEmail}
            </Button>

            <div className="flex items-center space-x-6">
              <a
                href="https://github.com/danielabdam"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors duration-200"
              >
                <Github size={28} />
              </a>
              <a
                href="https://www.linkedin.com/in/daniel-lucas-227ts/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors duration-200"
              >
                <Linkedin size={28} />
              </a>
              <a
                href="https://drive.google.com/file/d/1vhwR5c4XXCgPt4HQCtQHlfBWr3Uvm-wh/view" 
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors duration-200"
              >
                <FileUser  size={28} />
                

            </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 sm:px-6 lg:px-8 border-t border-gray-800">
        <div className="max-w-6xl mx-auto text-center text-gray-400">
          <p>&copy; 2025 Daniel Abdam. {t.footer}</p>
        </div>
      </footer>
    </div>
  )
}
