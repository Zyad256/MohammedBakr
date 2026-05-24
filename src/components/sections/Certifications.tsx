import { motion } from "framer-motion";
import { SectionHeading } from "@/components/SectionHeading";
import { image } from "framer-motion/client";

export function Certifications() {
  const certs = [
    {
      id: "cert-archon-soc",
      title: "Cybersecurity SOC Analyst",
      status: "Completed",
      issuer: "Archon Security",
      date: "2026",
      image: "/Certificates/cybersecurity soc analyst archon security.png",
      progress: 100,
    },
    {
      id: "cert-archon-ai",
      title: "AI Threat Detection",
      status: "Completed",
      issuer: "Archon Security",
      date: "2026",
      image: "/Certificates/ai threat detection archon security.png",
      progress: 100,
    },
    {
      id: "cert-cyberops",
      title: "Cisco CyberOps Associate",
      status: "Completed",
      issuer: "Credly",
      date: "2025",
      image: "https://images.credly.com/images/53f37f83-04a1-4935-9b1e-21a99cc6e1b2/CyberOpsAssoc.png",
      progress: 100,
    },
    {
      id: "cert-ccna",
      title: "CCNA: Enterprise Networking, Security, and Automation",
      status: "Completed",
      issuer: "Credly",
      date: "2025",
      image: "https://images.credly.com/images/0a6d331e-8abf-4272-a949-33f754569a76/CCNAENSA__1_.png",
      progress: 100,
    },
    {
      id: "cert-ccna-srwe",
      title: "CCNA: Switching, Routing, and Wireless Essentials",
      status: "Completed",
      issuer: "Credly",
      date: "2025",
      image: "https://images.credly.com/images/f4ccdba9-dd65-4349-baad-8f05df116443/CCNASRWE__1_.png",
      progress: 100,
    },
    {
      id: "cert-ccna-itn",
      title: "CCNA: Introduction to Networks",
      status: "Completed",
      issuer: "Credly",
      date: "2025",
      image: "https://images.credly.com/images/70d71df5-f3dc-4380-9b9d-f22513a70417/CCNAITN__1_.png",
      progress: 100,
    },
    {
      id: "cert-we-blue-team",
      title: "Cyber Security Diploma Blue Team",
      status: "Completed",
      issuer: "WE Telecom Egypt",
      date: "2025",
      image: "/Certificates/cyber security blue tem soc anaylst we.png",
      progress: 100,
    },
    {
      id: "cert-depi-cisco",
      title: "Infrastructure and Security - Cisco Cyber Security",
      status: "Completed",
      issuer: "DEPI / Cisco",
      date: "2025",
      image: "/Certificates/infrastructure and secruity cisco.png",
      progress: 100,
    },
    {
      id: "cert-barq",
      title: "Networking and Cybersecurity Fundamentals",
      status: "Completed",
      issuer: "BARQ Systems",
      date: "2025",
      image: "/Certificates/networking and cybersecurity fundementals barq.png",
      progress: 100,
    },
    {
      id: "cert-english",
      title: "Business English",
      status: "Completed",
      issuer: "Linguistics",
      date: "2024",
      image: "/Certificates/bussines english.png",
      progress: 100,
    },
  ];

  return (
    <section id="certifications" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <SectionHeading
          index="05 / certifications"
          title="Certifications & Badges"
          subtitle="Continuous learning and formal validation of networking skills."
        />
        <div className="grid md:grid-cols-3 gap-6">
          {certs.map((cert, index) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="rounded-2xl border border-border bg-card/40 overflow-hidden flex flex-col hover:border-primary/50 transition-colors"
            >
              <div className="p-6 flex-1 flex flex-col items-center text-center">
                {cert.image ? (
                  <div className="w-full aspect-[4/3] rounded-lg overflow-hidden bg-background mb-6 border border-border/50 group-hover:border-primary/50 transition-colors relative">
                    <img
                      loading="lazy"
                      decoding="async"
                      src={cert.image.startsWith('http') ? cert.image : `${import.meta.env.BASE_URL}${cert.image.replace(/^\//, '')}`}
                      alt={cert.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                ) : (
                  <div className="w-32 h-32 rounded-full border-4 border-dashed border-primary/40 bg-primary/5 flex items-center justify-center mb-6 relative">
                    <svg
                      width="48"
                      height="48"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-primary/60"
                    >
                      <circle cx="12" cy="8" r="6" />
                      <path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11" />
                    </svg>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-full h-full rounded-full animate-spin-slow bg-gradient-to-tr from-transparent via-transparent to-primary/20" />
                    </div>
                  </div>
                )}

                <h3 className="font-bold text-lg leading-tight mb-2">
                  {cert.title}
                </h3>
                <p className="text-sm text-muted-foreground mb-4">
                  {cert.issuer} • {cert.date}
                </p>

                <div className="w-full mt-auto">
                  <div className="flex justify-between items-center mb-2 font-mono text-[10px] uppercase tracking-wider">
                    <span
                      className={
                        cert.status === "Completed"
                          ? "text-green-400"
                          : "text-primary"
                      }
                    >
                      {cert.status}
                    </span>
                    <span className="text-muted-foreground">
                      {cert.progress}%
                    </span>
                  </div>
                  <div className="h-1.5 w-full bg-background rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${cert.progress}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: 0.5 + index * 0.1 }}
                      className={`h-full ${
                        cert.status === "Completed"
                          ? "bg-green-400"
                          : "bg-primary"
                      }`}
                    />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
