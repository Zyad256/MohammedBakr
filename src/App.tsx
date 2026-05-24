import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Skills } from "@/components/sections/Skills";
import { Projects } from "@/components/sections/Projects";
import { Process } from "@/components/sections/Process";
import { Certifications } from "@/components/sections/Certifications";
import { Resume } from "@/components/sections/Resume";
import { Contact } from "@/components/sections/Contact";
import { Footer } from "@/components/sections/Footer";
import { CustomCursor } from "@/components/CustomCursor";

function Divider() {
  return (
    <div className="max-w-6xl mx-auto px-6">
      <div className="shimmer-line" />
    </div>
  );
}

export default function App() {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <CustomCursor />
      <Navbar />
      <main>
        <Hero />
        <Divider />
        <About />
        <Divider />
        <Skills />
        <Divider />
        <Projects />
        <Divider />
        <Process />
        <Divider />
        <Certifications />
        <Divider />
        <Resume />
        <Divider />
        <Contact />
      </main>
      <Footer />
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="fixed bottom-6 right-6 p-3 rounded-full bg-primary/20 text-primary border border-primary/40 hover:bg-primary hover:text-primary-foreground hover:scale-110 shadow-[0_0_15px_var(--color-primary)] transition-all z-50 group backdrop-blur-sm"
        aria-label="Back to top"
      >
        <svg fill="none" viewBox="0 0 24 24" strokeWidth="2.5" stroke="currentColor" className="w-5 h-5 group-hover:-translate-y-1 transition-transform">
          <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 15.75l7.5-7.5 7.5 7.5" />
        </svg>
      </button>
    </div>
  );
}
