import image_d0908aeebfc252d155894e3f2b2ada5473098ed4 from '/image/d0908aeebfc252d155894e3f2b2ada5473098ed4.png';
import image_b2e57dfd8d438dc79776060b17598a51fcf29081 from '/image/b2e57dfd8d438dc79776060b17598a51fcf29081.png';
import image_6b69664b2d2a7454f8dc226ded2681f408e6437c from '/image/6b69664b2d2a7454f8dc226ded2681f408e6437c.png';
import image_4f30953bb28731856a7b96604c81765d7d6d38cd from '/image/4f30953bb28731856a7b96604c81765d7d6d38cd.png';
import image_2498ab75dd361ecc27d7c6a89a7fca8ad8457a70 from '/image/2498ab75dd361ecc27d7c6a89a7fca8ad8457a70.png';
import image_0c56a581c8b54960cb973044b1f1b193adf35218 from '/image/0c56a581c8b54960cb973044b1f1b193adf35218.png';
import image_d44cd908d76ffb4eb00448bbc41f1342c871f020 from '/image/d44cd908d76ffb4eb00448bbc41f1342c871f020.png';
import image_fdb3b2eae5a431814b806975deb002016eadc200 from '/image/fdb3b2eae5a431814b806975deb002016eadc200.png';
import image_e5fdba382079507e47058111fd60cf758dd18b2b from '/image/e5fdba382079507e47058111fd60cf758dd18b2b.png';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { ExternalLink, Play } from "lucide-react";

export function MobilePrototypesSection() {
  const prototypes = [
    {
      title: "UPL (grupo Bunge)",
      description: "Aplicativo móvel (Baseado em Salesforce e com suporte a múltiplos idiomas) para equipes de campo, com foco em eficiência de tarefas e em fluxos de operação para equipes técnicas, com ênfase em usabilidade para ambientes de alta complexidade",
      category: "Agronegócio",
      platform: "iOS / Android",
      status: "Aplicativo Empresarial",
      image: image_4f30953bb28731856a7b96604c81765d7d6d38cd,
      prototypeUrl: "https://www.figma.com/proto/fwHdTSOFr34XUbUY54pH2X/Meu-portif%C3%B3lio?page-id=55%3A10670&node-id=113-17712&viewport=2459%2C-467%2C0.3&t=KF080tXAfwFrpL0q-9&scaling=scale-down&content-scaling=fixed&starting-point-node-id=113%3A17712&show-proto-sidebar=1",
      features: [
        "Maior previsibilidade de prazos operacionais",
        "Redução do tempo de treinamento de equipes",
        "Decisões rápidas e redução de retrabalho",
        "Alinhamento com objetivos de negócio",
        "Coordenação eficiente entre equipes de campo"
      ],
      technologies: ["Figma", "Salesforce", "Design System", "Adobe Creative Suite", "Design Sprint"],
      year: "2024"
    },
    {
      title: "Orígeo (grupo Bunge)",
      description: "Aplicativo enterprise Salesforce para otimização de operações agroindustriais. Integra fluxos multilíngue com monitoramento de métricas em tempo real. Foco em coordenação de equipes e usabilidade intuitiva para maior eficiência operacional.",
      category: "Agronegócio",
      platform: "iOS / Android",
      status: "Aplicativo Empresarial",
      image: image_6b69664b2d2a7454f8dc226ded2681f408e6437c,
      prototypeUrl: "https://www.figma.com/proto/fwHdTSOFr34XUbUY54pH2X/Meu-portif%C3%B3lio?page-id=161%3A30803&node-id=179-31624&viewport=78%2C1%2C0.46&t=Kn4KM8Qfq3zSNldX-9&scaling=scale-down&content-scaling=fixed&starting-point-node-id=179%3A31624&show-proto-sidebar=1",
      features: [
        "Minimização de etapas redundantes nos processos",
        "Ciclo de feedback acelerado campo-back office",
        "Assertividade aprimorada nas entregas",
        "Previsibilidade de prazos operacionais",
        "Coordenação otimizada de equipes técnicas"
      ],
      technologies: ["Figma", "Salesforce", "Design System", "Adobe Creative Suite", "Design Sprint"],
      year: "2024"
    },
    {
      title: "Lavoro",
      description: "Aplicativo móvel (Baseado em Salesforce e com suporte a múltiplos idiomas) focado em fluxos de operação para equipes técnicas, com ênfase em usabilidade para ambientes de alta complexidade",
      category: "Agronegócio",
      platform: "iOS / Android",
      status: "Aplicativo Empresarial",
      image: image_b2e57dfd8d438dc79776060b17598a51fcf29081,
      prototypeUrl: "https://www.figma.com/proto/fwHdTSOFr34XUbUY54pH2X/Meu-portif%C3%B3lio?page-id=244%3A13744&node-id=253-208115&viewport=611%2C161%2C0.66&t=64XgLZqDG4Ctd958-9&scaling=scale-down&content-scaling=fixed&starting-point-node-id=253%3A208115&show-proto-sidebar=1",
      features: [
        "Fluxos otimizados para decisões rápidas",
        "Redução significativa de retrabalho",
        "Menor tempo de treinamento de usuários",
        "Alinhamento estratégico com objetivos de negócio",
        "Gerenciamento eficiente de equipes técnicas"
      ],
      technologies: ["Figma", "Salesforce", "Design System", "Adobe Creative Suite", "Design Sprint"],
      year: "2023"
    },
    {
      title: "Merz Aesthetics",
      description: "Aplicativo móvel para gerenciamento de eventos corporativos online e offline, focado em inscrições para palestras, agendamento de reuniões e networking profissional no setor de cuidados com a saúde e estética",
      category: "Saúde/Estética",
      platform: "iOS / Android",
      status: "Aplicativo Empresarial",
      image: image_d0908aeebfc252d155894e3f2b2ada5473098ed4,
      prototypeUrl: "https://www.figma.com/proto/fwHdTSOFr34XUbUY54pH2X/Meu-portif%C3%B3lio?page-id=400%3A109670&node-id=400-121010&viewport=509%2C384%2C0.07&t=1zlsvaekHoMeNK03-9&scaling=scale-down&content-scaling=fixed&starting-point-node-id=400%3A121010&show-proto-sidebar=1",
      features: [
        "Sistema de inscrições para palestras e workshops",
        "Agendamento de reuniões e consultoria personalizada",
        "Plataforma de networking entre profissionais",
        "Gerenciamento de eventos online e presenciais",
        "Notificações de programação e lembretes"
      ],
      technologies: ["Figma", "Design System", "Adobe Creative Suite", "Design Sprint"],
      year: "2023"
    }
  ];

  const getCategoryColor = (category: string) => {
    const colors: Record<string, string> = {
      "Agronegócio": "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-100",
      "Saúde/Estética": "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-100"
    };
    return colors[category] || "bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-100";
  };

  return (
    <section id="prototipos" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="mb-4">Meu portfólio</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Uma visão detalhada dos projetos mais recentes, destacando contribuições técnicas e a complexidade das entregas enterprise. 
            Por questões contratuais, os projetos são apresentados parcialmente, destacando contextos, tecnologias utilizadas e impactos 
            alcançados que ilustram meu comprometimento com soluções mobile de alta complexidade para equipes multidisciplinares.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {prototypes.map((prototype, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="relative">
                <ImageWithFallback
                  src={prototype.image}
                  alt={`Protótipo ${prototype.title}`}
                  className="w-full h-48 object-cover bg-[rgba(107,50,50,0)]"
                />
                <div className="absolute top-4 right-4">
                  <Badge className={getCategoryColor(prototype.category)}>
                    {prototype.category}
                  </Badge>
                </div>
                <div className="absolute top-4 left-4">
                  <Badge variant="secondary">{prototype.year}</Badge>
                </div>
              </div>

              <CardHeader>
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle>{prototype.title}</CardTitle>
                    <CardDescription className="mt-1">
                      {prototype.platform} • {prototype.status}
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>

              <CardContent>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {prototype.description}
                </p>

                <div className="mb-4">
                  <h4 className="font-medium mb-2">Principais Funcionalidades:</h4>
                  <ul className="text-muted-foreground space-y-1">
                    {prototype.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="text-primary mt-1">•</span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mb-6">
                  <h4 className="font-medium mb-2">Tecnologias:</h4>
                  <div className="flex flex-wrap gap-2">
                    {prototype.technologies.map((tech, idx) => (
                      <Badge key={idx} variant="outline">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div className="flex gap-2">
                  <Button size="sm" className="flex-1" onClick={() => window.open(prototype.prototypeUrl, '_blank')}>
                    <Play className="w-4 h-4 mr-2" />
                    Acessar protótipo
                  </Button>
                                  </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Card className="inline-block p-6 bg-gradient-to-r from-primary/10 to-secondary/10">
            <h3 className="mb-2">Interessado em colaborar?</h3>
            <p className="text-muted-foreground mb-4">
              Tenho mais projetos e ideias que gostaria de compartilhar
            </p>
            <Button onClick={() => document.getElementById('contato')?.scrollIntoView({ behavior: 'smooth' })}>
              Entre em Contato
            </Button>
          </Card>
        </div>
      </div>
    </section>
  );
}