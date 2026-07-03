import { Benefits } from "@/components/Benefits";
import { Contact } from "@/components/Contact";
import { Faq, FaqJsonLd } from "@/components/Faq";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Process } from "@/components/Process";
import { Services } from "@/components/Services";
import { TechStack } from "@/components/TechStack";

export default function HomePage() {
  return (
    <>
      <FaqJsonLd />
      <Header />
      <main id="main-content">
        <Hero />
        <Services />
        <Benefits />
        <Process />
        <TechStack />
        <Faq />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
