import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Team from "@/components/Team";
import Services from "@/components/Services";
import Work from "@/components/Work";
import Clients from "@/components/Clients";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main>
      <Nav />
      <Hero />
      <Team />
      <Services />
      <Work />
      <Clients />
      <Contact />
    </main>
  );
}
