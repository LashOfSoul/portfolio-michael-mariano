import image_060eda02be69aa032e6f45b61f720e9e4bf4da25 from 'figma:asset/060eda02be69aa032e6f45b61f720e9e4bf4da25.png';
import image_6c6c3ad77f2ae95f1dbf367048cf21596e82ce8d from 'figma:asset/6c6c3ad77f2ae95f1dbf367048cf21596e82ce8d.png';
import image_3e86f905e09e5c99e621e57b0d6fb876b00241bb from 'figma:asset/3e86f905e09e5c99e621e57b0d6fb876b00241bb.png';
import image_9d3b59c5d02eabaebbfbab4406d7c9ab7861f7be from 'figma:asset/9d3b59c5d02eabaebbfbab4406d7c9ab7861f7be.png';
import image_80a9230a11b8664ae44602f703dd27f23e31f991 from 'figma:asset/80a9230a11b8664ae44602f703dd27f23e31f991.png';
import image_db6dffacb8c14abb7fe20ad8e791f8fd956e8c5a from 'figma:asset/db6dffacb8c14abb7fe20ad8e791f8fd956e8c5a.png';
import image_0c62393cd1ae72c577e196e615b165cca79853c4 from 'figma:asset/0c62393cd1ae72c577e196e615b165cca79853c4.png';
import image_90cb0c8b96c02c9d7cfae8db23d4803f1a5cbf1a from 'figma:asset/90cb0c8b96c02c9d7cfae8db23d4803f1a5cbf1a.png';
import image_74a02a56f8528927b66d1bef22b7f1cee77848e7 from 'figma:asset/74a02a56f8528927b66d1bef22b7f1cee77848e7.png';
import image_060eda02be69aa032e6f45b61f720e9e4bf4da25 from 'figma:asset/060eda02be69aa032e6f45b61f720e9e4bf4da25.png';
import ninebeeImage from 'figma:asset/2010f88cc94c86f94a13c67a17f559c09b7bc64b.png';
import casaDaMoedaImage from 'figma:asset/80a9230a11b8664ae44602f703dd27f23e31f991.png';
import hitssImage from 'figma:asset/87b9b2a41510f67d8ff6e677032b88c6329f37b3.png';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import lojasAmericanasImage from 'figma:asset/edaeb930d979797ec16894b26ea05ff508d66006.png';

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
      logoUrl: image_060eda02be69aa032e6f45b61f720e9e4bf4da25,
      useExternalImage: true
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
      logoUrl: image_6c6c3ad77f2ae95f1dbf367048cf21596e82ce8d,
      useExternalImage: true
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
      logoUrl: hitssImage,
      useExternalImage: true
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
      logoUrl: ninebeeImage,
      useExternalImage: true
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
      logoUrl: image_3e86f905e09e5c99e621e57b0d6fb876b00241bb,
      useExternalImage: false
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
      logoUrl: casaDaMoedaImage,
      useExternalImage: true
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
                      <CardDescription className="text-foreground font-medium">
                        {exp.company}
                      </CardDescription>
                    </div>
                    <Badge variant="outline">{exp.period}</Badge>
                  </div>
                  
                  <CardContent className="p-0">
                    <p className="text-muted-foreground mb-4 leading-relaxed">
                      {exp.description}
                    </p>
                    
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
                        <Badge key={idx} variant="secondary">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </CardHeader>
                
                <div className="p-6 bg-gradient-to-br from-primary/5 to-secondary/10 flex items-center justify-center">
                  {exp.useExternalImage ? (
                    <img
                      src={exp.logoUrl}
                      alt={`Logo ${exp.company}`}
                      className="w-full h-48 object-contain rounded-lg"
                    />
                  ) : (
                    <ImageWithFallback
                      src={exp.logoUrl}
                      alt={`Logo ${exp.company}`}
                      className="w-full h-48 object-contain rounded-lg"
                    />
                  )}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}