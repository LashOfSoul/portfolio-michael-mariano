import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function ExperienceSection() {
  const experiences = [
    {
      company: "Globant (Nèscara)",
      position: "Sênior UX Designer",
      period: "Out 2022 - Fev 2025",
      description: "Atuando como UX da Nèscara, facilitando o entendimento e investigando as necessidades dos clientes do agronegócio, transformando ideias em soluções que realmente fazem sentido para os produtores rurais.",
      technologies: ["Figma", "Design System", "User Research", "Prototyping", "Design Thinking", "Adobe Creative Suite"],
      achievements: [
        "Desenvolvimento de soluções UX para o agronegócio",
        "Pesquisa e análise de necessidades de produtores rurais",
        "Criação de jornadas digitais para o setor agrícola",
        "Facilitação entre stakeholders e usuários finais"
      ],
      logoUrl: "/image/logo-globant.png"
    },
    {
      company: "MJV Technology & Innovation (Bradesco)",
      position: "Innovation Specialist",
      period: "Jul 2021 - Out 2022",
      description: "Integrando o time BE (Bradesco Experience), focado nos benefícios dos clientes do Banco Bradesco. Construção de jornadas não-financeiras e prototipação de layouts para websites e aplicações.",
      technologies: ["Adobe XD", "Figma", "Design System", "User Research", "Prototyping"],
      achievements: [
        "Desenvolvimento de jornadas digitais não-financeiras",
        "Prototipação de interfaces para benefícios bancários",
        "Colaboração com equipes multidisciplinares",
        "Foco na experiência de clientes Bradesco"
      ],
      logoUrl: "/image/logo-mjv.png"
    },
    {
      company: "Hitss Brasil (Lojas Americanas)",
      position: "Full UX/UI Designer",
      period: "Set 2018 - Jul 2021",
      description: "Integrando o Time de Transformação Digital das Lojas Americanas, responsável pela prototipação de layouts para Web, Android e iOS, além de toda identidade visual dos projetos e peças gráficas internas e externas.",
      technologies: ["Adobe XD", "Adobe Creative Suite", "Design System", "User Testing", "Prototyping"],
      achievements: [
        "Prototipação para Web, Android e iOS",
        "Pesquisa e coleta de dados com usuários",
        "Produção de materiais impressos internos e externos",
        "Elaboração de identidade visual completa",
        "Transformação digital do varejo"
      ],
      logoUrl: "/image/logo-hitss.png"
    },
    {
      company: "Ninebee (Lojas Americanas)",
      position: "Full UX/UI Designer",
      period: "Mai 2018 - Set 2018",
      description: "Integrando o Time de Transformação Digital das Lojas Americanas, responsável pelo desenvolvimento de materiais para mídias online e offline, elaboração de layouts para websites e aplicações internas.",
      technologies: ["Adobe XD", "Adobe Creative Suite", "Design System", "User Testing", "Prototyping"],
      achievements: [
        "Desenvolvimento de materiais para mídias online e offline",
        "Elaboração de layouts para websites e aplicações internas",
        "Criação de materiais impressos internos e externos",
        "Desenvolvimento de materiais promocionais"
      ],
      logoUrl: "/image/logo-ninebee.png"
    },
    {
      company: "Adina Têxtil",
      position: "Designer Trainee",
      period: "Nov 2015 - Nov 2017",
      description: "Desenvolvimento de layouts e codificação de email marketing, criação de materiais digitais como catálogos de produtos, conteúdo para TV, infográficos, landing pages e imagens para redes sociais.",
      technologies: ["Adobe Photoshop", "Adobe Lightroom", "Adobe XD", "Adobe Illustrator", "Adobe Dreamweaver"],
      achievements: [
        "Criação de layouts e codificação de email marketing",
        "Desenvolvimento de catálogos digitais de produtos",
        "Fotografia de produtos e peças publicitárias",
        "Gestão de conteúdo em mídias digitais",
        "Atualização de conteúdos na 'Área do Cliente' e site institucional"
      ],
      logoUrl: "/image/logo-adina.png"
    },
    {
      company: "Casa da Moeda do Brasil",
      position: "Estagiário de Design",
      period: "Nov 2013 - Jul 2015",
      description: "Suporte no desenvolvimento de atividades voltadas ao portal web, conteúdo e layout. Desenvolvimento de artes gráficas e elaboração de layouts para hotsites, além da gestão de conteúdo na Intranet.",
      technologies: ["Adobe Photoshop", "Adobe Illustrator", "Adobe Dreamweaver", "Microsoft Office"],
      achievements: [
        "Desenvolvimento de portal web institucional",
        "Criação de peças de comunicação (banners, folders, cartazes)",
        "Projeto de reformulação do portal da Casa da Moeda",
        "Gestão de conteúdo da Intranet",
        "Codificação de hotsites"
      ],
      logoUrl: "/image/logo-casa-moeda.png"
    }
  ];

  return (
    <section id="experiencia" className="py-20 px-4 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="mb-4">Experiência profissional</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Com quase 10 anos de estrada, já passei por diferentes segmentos - do varejo às finanças e agronegócio. 
            De Lojas Americanas ao Bradesco e mais recentemente na Nèscara (uma empresa do grupo Globant), sempre focado em criar 
            experiências que realmente fazem sentido para quem usa.
          </p>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <Card key={index} className="overflow-hidden">
              <div className="grid lg:grid-cols-3 gap-6">
                <CardHeader className="lg:col-span-2">
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <CardTitle className="text-primary">{exp.position}</CardTitle>
                      <CardDescription className="text-foreground font-medium">{exp.company}</CardDescription>
                    </div>
                    <Badge variant="outline">{exp.period}</Badge>
                  </div>

                  <CardContent className="p-0">
                    <p className="text-muted-foreground mb-4 leading-relaxed">{exp.description}</p>

                    <div className="mb-4">
                      <h4 className="font-medium mb-2">Principais Atividades:</h4>
                      <ul className="text-muted-foreground space-y-1">
                        {exp.achievements.map((achievement, idx) => (
                          <li key={idx} className="flex items-start gap-2">
                            <span className="text-primary mt-1">•</span>
                            {achievement}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech, idx) => (
                        <Badge key={idx} variant="secondary">{tech}</Badge>
                      ))}
                    </div>
                  </CardContent>
                </CardHeader>

                <div className="p-6 bg-gradient-to-br from-primary/5 to-secondary/10 flex items-center justify-center">
                  <ImageWithFallback
                    src={exp.logoUrl}
                    alt={`Logo ${exp.company}`}
                    className="w-full h-48 object-contain rounded-lg"
                  />
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
