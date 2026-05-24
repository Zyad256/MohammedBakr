import { motion } from "framer-motion";
import { SectionHeading } from "@/components/SectionHeading";

const groups = [
  {
    title: "SOC & Security Tools",
    items: ["SIEM Log Analysis (Sysmon, Event Viewer)", "Malware Analysis & Forensics (DFIR)", "Network Packet Analysis (Wireshark)", "Vulnerability Scanning (Nmap)", "Threat Hunting & Cyber Kill Chain"],
  },
  {
    title: "Networking & OS",
    items: ["TCP/IP, Firewalls, VPNs", "IDS/IPS Systems", "Linux (Kali) & Windows Server", "CCNA & Network Security", "Network Traffic Monitoring"],
  },
  {
    title: "Programming & Cloud",
    items: ["Python (Security Automation)", "C++ (OOP & Algorithms)", "PHP (Back-End Native)", "Cloud Fundamentals & Security"],
  },
];

export function Skills() {
  return (
    <section id="skills" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <SectionHeading
          index="02 / skills"
          title="Technical stack"
          subtitle="Hands-on tools, protocols and platforms I work with day-to-day."
        />
        <div className="grid md:grid-cols-3 gap-5">
          {groups.map((g, gi) => (
            <motion.div
              key={g.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: gi * 0.1 }}
              className="rounded-xl border border-border bg-card/60 p-6 card-glow"
            >
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-semibold">{g.title}</h3>
                <span className="font-mono text-[10px] text-muted-foreground">[{g.items.length}]</span>
              </div>
              <ul className="space-y-2">
                {g.items.map((it) => (
                  <li key={it} className="flex items-center gap-2 text-sm text-muted-foreground">
                    <span className="text-primary font-mono">▸</span>
                    <span className="hover:text-foreground transition">{it}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
