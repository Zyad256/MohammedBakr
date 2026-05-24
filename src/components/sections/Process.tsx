import { motion } from "framer-motion";
import { SectionHeading } from "@/components/SectionHeading";

const steps = [
  {
    n: "01",
    t: "Preparation & Triage",
    d: "Continuously tune SIEM rules, aggregate threat intelligence feeds, and identify false positives vs. verified alerts.",
  },
  {
    n: "02",
    t: "Detection & Analysis",
    d: "Investigate anomalies using Sysmon, packet captures (Wireshark), and EDR telemetry. Map behaviors to MITRE ATT&CK.",
  },
  {
    n: "03",
    t: "Containment",
    d: "Isolate compromised endpoints, firewall off rogue IP blocklists, and halt lateral movement.",
  },
  {
    n: "04",
    t: "Eradication",
    d: "Remove malicious payloads, kill persistence mechanisms, and patch the root vulnerability.",
  },
  {
    n: "05",
    t: "Recovery & Post-Incident",
    d: "Restore systems from secure backups, monitor for re-infection, and update playbooks for future prevention.",
  },
];

export function Process() {
  return (
    <section id="process" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <SectionHeading
          index="04 / process"
          title="Incident Response"
          subtitle="A repeatable, battle-tested playbook for isolating and neutralizing threats."
        />
        <ol className="relative border-l border-primary/30 ml-3 space-y-8">
          {steps.map((s, i) => (
            <motion.li
              key={s.n}
              initial={{ opacity: 0, x: -16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="pl-8 relative group"
            >
              <span className="absolute -left-[14px] top-1 w-7 h-7 rounded-full bg-background border-2 border-primary flex items-center justify-center font-mono text-[10px] text-primary group-hover:bg-primary/10 group-hover:scale-110 group-hover:glow-pulse transition-all">
                {s.n}
              </span>
              <div className="rounded-lg border border-transparent group-hover:border-primary/20 group-hover:bg-primary/5 p-3 -mx-3 -mt-3 transition-colors">
                <h3 className="font-semibold text-lg">{s.t}</h3>
                <p className="text-sm text-muted-foreground mt-1 group-hover:text-foreground/80 transition-colors">
                  {s.d}
                </p>
              </div>
            </motion.li>
          ))}
        </ol>
      </div>
    </section>
  );
}
