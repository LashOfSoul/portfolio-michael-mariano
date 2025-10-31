import { Button } from "./ui/button";

export function Header() {
  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ 
      behavior: 'smooth' 
    });
  };

  return (
    <header className="fixed top-0 left-0 right-0 bg-background/80 backdrop-blur-md border-b border-border z-50">
      <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
            <span className="text-primary-foreground font-medium">M</span>
          </div>
          <span className="font-medium">Michael Mariano</span>
        </div>
        
        <nav className="hidden md:flex items-center gap-6">
          <Button 
            variant="ghost" 
            onClick={() => scrollToSection('sobre')}
            className="hover:text-primary"
          >
            Sobre
          </Button>
          <Button 
            variant="ghost" 
            onClick={() => scrollToSection('experiencia')}
            className="hover:text-primary"
          >
            Experiência
          </Button>
          <Button 
            variant="ghost" 
            onClick={() => scrollToSection('prototipos')}
            className="hover:text-primary"
          >
            Protótipos
          </Button>
          <Button 
            variant="ghost" 
            onClick={() => scrollToSection('contato')}
            className="hover:text-primary"
          >
            Contato
          </Button>
        </nav>
        
        <Button 
          onClick={() => scrollToSection('contato')}
          className="hidden md:inline-flex"
        >
          Entre em Contato
        </Button>
      </div>
    </header>
  );
}