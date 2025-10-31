import { Header } from "./components/Header";
import { ProfileSection } from "./components/ProfileSection";
import { ExperienceSection } from "./components/ExperienceSection";
import { MobilePrototypesSection } from "./components/MobilePrototypesSection";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <ProfileSection />
        <ExperienceSection />
        <MobilePrototypesSection />
        <Footer />
      </main>
    </div>
  );
}