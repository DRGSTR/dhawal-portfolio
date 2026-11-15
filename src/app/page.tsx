import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import FeaturedProjects from "@/components/FeaturedProjects";
import PlayablePrototypes from "@/components/PlayablePrototypes";
import SkillsMatrix from "@/components/SkillsMatrix";
import ExperienceTimeline from "@/components/ExperienceTimeline";
import EducationCertifications from "@/components/EducationCertifications";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-zinc-950 text-zinc-100 selection:bg-emerald-500/20 selection:text-emerald-300">
      <Navbar />
      <Hero />
      <FeaturedProjects />
      <PlayablePrototypes />
      <SkillsMatrix />
      <ExperienceTimeline />
      <EducationCertifications />
      <Footer />
    </main>
  );
}
