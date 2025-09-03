import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ResearchPreview from "@/components/ResearchPreview";
import PublicationsPreview from "@/components/PublicationsPreview";
import IndustrialCollaborators from "@/components/IndustrialCollaborators";
import PeoplePreview from "@/components/PeoplePreview";
import NewsPreview from "@/components/NewsPreview";
import Footer from "@/components/Footer";
import { Contact } from "lucide-react";
import ContactPage from "./ContactPage";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <ResearchPreview />
        <PublicationsPreview />
        <IndustrialCollaborators />
        <PeoplePreview />
        <NewsPreview />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
