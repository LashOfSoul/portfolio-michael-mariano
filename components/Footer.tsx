import { Button } from "./ui/button";
import { Card } from "./ui/card";
import { Mail, Phone, MapPin, Linkedin } from "lucide-react";

export function Footer() {
  const handleEmailClick = () => {
    window.open('mailto:m.marianomms@gmail.com', '_blank');
  };

  const handlePhoneClick = () => {
    window.open('https://wa.me/5521986685110', '_blank');
  };

  const handleLinkedInClick = () => {
    window.open('https://www.linkedin.com/in/michael-mariano-dos-santos-52a30365', '_blank');
  };

  return (
    <footer id="contato" className="py-20 px-4 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="mb-4">Vamos trabalhar juntos?</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Estou sempre aberto a novos desafios e oportunidades. 
            Se você tem um projeto em mente ou quer apenas conversar sobre design, 
            ficarei feliz em ouvir de você.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          <Card className="p-6 text-center hover:shadow-lg transition-shadow">
            <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
              <Mail className="w-6 h-6 text-primary" />
            </div>
            <h3 className="mb-2">Email</h3>
            <p className="text-muted-foreground mb-4">m.marianomms@gmail.com</p>
            <Button variant="outline" size="sm" onClick={handleEmailClick}>
              Enviar Email
            </Button>
          </Card>

          <Card className="p-6 text-center hover:shadow-lg transition-shadow">
            <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
              <Phone className="w-6 h-6 text-primary" />
            </div>
            <h3 className="mb-2">WhatsApp</h3>
            <p className="text-muted-foreground mb-4">+55 (21) 98668-5110</p>
            <Button variant="outline" size="sm" onClick={handlePhoneClick}>
              Enviar Mensagem
            </Button>
          </Card>

          <Card className="p-6 text-center hover:shadow-lg transition-shadow md:col-span-2 lg:col-span-1">
            <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
              <MapPin className="w-6 h-6 text-primary" />
            </div>
            <h3 className="mb-2">Localização</h3>
            <p className="text-muted-foreground mb-4">Campo Grande, Zona Oeste - Rio de Janeiro, RJ</p>
            <Button 
              variant="outline" 
              size="sm"
              onClick={() => window.open('https://www.google.com/maps/place/Campo+Grande,+Rio+de+Janeiro+-+RJ/@-22.8882001,-43.7173619,11z/data=!3m1!4b1!4m6!3m5!1s0x9be17999363715:0x46c3f27867ad9332!8m2!3d-22.907662!4d-43.5659086!16s%2Fm%2F02r9tr_?entry=ttu&g_ep=EgoyMDI1MDkxNy4wIKXMDSoASAFQAw%3D%3D', '_blank')}
            >
              Ver no Mapa
            </Button>
          </Card>
        </div>

        <div className="border-t border-border pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-primary-foreground font-medium">M</span>
              </div>
              <span className="font-medium">Michael Mariano</span>
            </div>

            <div className="flex items-center gap-4">
              <Button variant="ghost" size="sm" onClick={handleLinkedInClick}>
                <Linkedin className="w-5 h-5" />
              </Button>
            </div>
          </div>
          
          <div className="mt-8 pt-6 border-t border-border text-center">
            <p className="text-muted-foreground text-sm">
              © {new Date().getFullYear()} Michael Mariano. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}