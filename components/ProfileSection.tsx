import { Button } from "./ui/button";
import { Card } from "./ui/card";
import { Badge } from "./ui/badge";
import michaelPhoto from "/image/2c804dd4885f8cd952216c7a8ddbdbb0f73f27c4.png";
import cvImage from "/image/673d8a0467168b38ffe58616c8e8dc0f83df01c8.png";

export function ProfileSection() {
  const skills = [
    "UX/UI Design", 
    "User Research", 
    "Figma", 
    "Adobe Creative Suite", 
    "Prototyping", 
    "Design Systems",
    "Usability Testing",
    "Information Architecture"
  ];

  return (
    <section id="sobre" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="mb-6">
              Olá, eu sou Michael Mariano!
              <span className="block text-primary">UX Designer</span>
            </h1>
            
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Sou um UX Designer apaixonado por criar experiências digitais intuitivas e envolventes. 
              Com quase 10 anos de experiência, especializo-me em design de interfaces para aplicativos 
              mobile e web, sempre focando na experiência do usuário e na funcionalidade.
            </p>
            
            <p className="text-muted-foreground mb-8 leading-relaxed">
              Minha abordagem combina pesquisa de usuário, design thinking e as mais recentes 
              tendências de design para criar produtos que não apenas parecem incríveis, 
              mas também resolvem problemas reais dos usuários.
            </p>
            
            <div className="flex flex-wrap gap-2 mb-8">
              {skills.map((skill, index) => (
                <Badge key={index} variant="secondary">
                  {skill}
                </Badge>
              ))}
            </div>
            
            <div className="flex gap-4">
              <Button onClick={() => document.getElementById('prototipos')?.scrollIntoView({ behavior: 'smooth' })}>
                Ver Meu Trabalho
              </Button>
              <Button variant="outline" onClick={() => window.open(cvImage, '_blank')}>
                Download CV
              </Button>
            </div>
          </div>
          
          <div className="relative">
            <Card className="p-6 bg-gradient-to-br from-primary/5 to-secondary/10">
              <img
                src={michaelPhoto}
                alt="Michael Mariano - UX Designer"
                className="w-full h-80 object-cover rounded-lg"
              />
            </Card>
            
            <div className="absolute -bottom-6 -left-6 bg-background border border-border rounded-lg p-4 shadow-lg">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                  <span>🎨</span>
                </div>
                <div>
                  <p className="font-medium">10 Anos</p>
                  <p className="text-muted-foreground">de Experiência</p>
                </div>
              </div>
            </div>
            
            <div className="absolute -top-6 -right-6 bg-background border border-border rounded-lg p-4 shadow-lg">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center">
                  <span>📱</span>
                </div>
                <div>
                  <p className="font-medium">30+ Projetos</p>
                  <p className="text-muted-foreground">Entregues</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}