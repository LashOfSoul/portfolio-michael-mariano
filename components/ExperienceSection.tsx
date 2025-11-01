// Imports de imagens com nomes únicos
import imageGlobant from '/image/060eda02be69aa032e6f45b61f720e9e4bf4da25.png';
import imageBradesco from '/image/6c6c3ad77f2ae95f1dbf367048cf21596e82ce8d.png';
import imageAdina from '/image/3e86f905e09e5c99e621e57b0d6fb876b00241bb.png';
import imageCasaMoeda from '/image/80a9230a11b8664ae44602f703dd27f23e31f991.png';
import imageNinebee from '/image/2010f88cc94c86f94a13c67a17f559c09b7bc64b.png';
import imageHitss from '/image/87b9b2a41510f67d8ff6e677032b88c6329f37b3.png';
import lojasAmericanasImage from '/image/edaeb930d979797ec16894b26ea05ff508d66006.png';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { ImageWithFallback } from "./figma/ImageWithFallback";

// Array experiences atualizado
export function ExperienceSection() {
  const experiences = [
    {
      company: "Globant (Nèscara)",
      position: "Sênior UX Designer",
      period: "Out 2022 - Fev 2025",
      description: "...",
      technologies: ["Figma", "Design System", "User Research", "Prototyping", "Design Thinking", "Adobe Creative Suite"],
      achievements: ["Desenvolvimento de soluções UX para o agronegócio", "..."],
      logoUrl: imageGlobant,
      useExternalImage: true
    },
    {
      company: "MJV Technology & Innovation (Bradesco)",
      position: "Innovation Specialist",
      period: "Jul 2021 - Out 2022",
      description: "...",
      technologies: ["Adobe XD", "Figma", "Design System", "User Research", "Prototyping"],
      achievements: ["Desenvolvimento de jornadas digitais não-financeiras", "..."],
      logoUrl: imageBradesco,
      useExternalImage: true
    },
    {
      company: "Hitss Brasil (Lojas Americanas)",
      position: "Full UX/UI Designer",
      period: "Set 2018 - Jul 2021",
      description: "...",
      technologies: ["Adobe XD", "Adobe Creative Suite", "Design System", "User Testing", "Prototyping"],
      achievements: ["Prototipação para Web, Android e iOS", "..."],
      logoUrl: imageHitss,
      useExternalImage: true
    },
    {
      company: "Ninebee (Lojas Americanas)",
      position: "Full UX/UI Designer",
      period: "Mai 2018 - Set 2018",
      description: "...",
      technologies: ["Adobe XD", "Adobe Creative Suite", "Design System", "User Testing", "Prototyping"],
      achievements: ["Desenvolvimento de materiais para mídias online e offline", "..."],
      logoUrl: imageNinebee,
      useExternalImage: true
    },
    {
      company: "Adina Têxtil",
      position: "Designer Trainee",
      period: "Nov 2015 - Nov 2017",
      description: "...",
      technologies: ["Adobe Photoshop", "Adobe Lightroom", "Adobe XD", "Adobe Illustrator", "Adobe Dreamweaver"],
      achievements: ["Criação de layouts e codificação de email marketing", "..."],
      logoUrl: imageAdina,
      useExternalImage: false
    },
    {
      company: "Casa da Moeda do Brasil",
      position: "Estagiário de Design",
      period: "Nov 2013 - Jul 2015",
      description: "...",
      technologies: ["Adobe Photoshop", "Adobe Illustrator", "Adobe Dreamweaver", "Microsoft Office"],
      achievements: ["Desenvolvimento de portal web institucional", "..."],
      logoUrl: imageCasaMoeda,
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
                  {exp.useExternalImage ? (
                    <img src={exp.logoUrl} alt={`Logo ${exp.company}`} className="w-full h-48 object-contain rounded-lg" />
                  ) : (
                    <ImageWithFallback src={exp.logoUrl} alt={`Logo ${exp.company}`} className="w-full h-48 object-contain rounded-lg" />
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
