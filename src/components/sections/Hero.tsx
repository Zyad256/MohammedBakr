import { motion } from "framer-motion";
import { Terminal, Prompt } from "@/components/Terminal";
import { MatrixRain } from "@/components/MatrixRain";

export function Hero() {
  return (
    <section id="home" className="relative pt-32 pb-20 px-6 overflow-hidden radar-sweep">
      <div className="absolute inset-0 bg-grid-fade pointer-events-none z-10" />
      <MatrixRain />
      <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center relative">
        <motion.div
           initial={{ opacity: 0, y: 24 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.6 }}
        >
          <div className="font-mono text-xs text-primary mb-4 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
            status: monitoring_threats
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.05]">
            Mohammed <span className="gradient-text">Abo-Bakr</span>
          </h1>
          <p className="mt-3 font-mono text-sm sm:text-base text-primary">
            &gt; Blue Team Defender / SOC Analyst
          </p>
          <p className="mt-6 text-muted-foreground text-lg max-w-xl">
            Passionate threat detection, incident response, and network defense specialist — eager to thrive and grow in Security Operations Center (SOC) environments.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#projects" className="px-5 py-2.5 rounded-md bg-primary text-primary-foreground font-medium hover:opacity-90 transition shadow-lg shadow-primary/20">
               View Projects
            </a>
            <a href="/CV(MohammedAboBakr).pdf" target="_blank" rel="noreferrer" className="px-5 py-2.5 rounded-md border border-primary/40 text-primary hover:bg-primary/10 transition font-medium">
              View CV
            </a>
            <a href="#contact" className="px-5 py-2.5 rounded-md border border-border hover:border-foreground/40 transition font-medium">
              Contact
            </a>
          </div>

          <a
            href="https://www.linkedin.com/in/mohammed-abo-bakr-3145122a5"
            target="_blank" rel="noreferrer"
            className="mt-6 inline-flex items-center gap-3 px-4 py-3 rounded-md border border-secondary/40 bg-secondary/10 hover:bg-secondary/20 transition group"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" className="text-secondary">
              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
            </svg>
            <div className="font-mono text-xs">
              <div className="text-muted-foreground break-all sm:break-normal">linkedin.com/in/</div>
              <div className="text-foreground group-hover:text-secondary break-all sm:break-normal">mohammed-abo-bakr</div>
            </div>
          </a>
        </motion.div>

        <motion.div
          className="min-w-0 w-full"
          initial={{ opacity: 0, x: 24 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <Terminal title="whoami — bakr@soc-enclave">
            <Prompt>whoami</Prompt>
            <span className="text-[var(--terminal-foreground)]">mohammed_abo_bakr{"\n"}</span>
            <Prompt>cat ./profile.yml</Prompt>
            <span className="text-blue-400">role:</span> SOC Analyst / Blue Team Defender{"\n"}
            <span className="text-blue-400">focus:</span> [threat detection, incident response, SIEM, DFIR]{"\n"}
            <span className="text-blue-400">stack:</span>{"\n"}
            {"  - "}Splunk / SIEM Log Analysis{"\n"}
            {"  - "}Wireshark / Nmap{"\n"}
            {"  - "}Sysmon / Event Viewer{"\n"}
            <span className="text-blue-400">intel:</span> [MITRE ATT&CK, Cyber Kill Chain, Malware Analysis]{"\n"}
            <span className="text-blue-400">cert:</span> Cisco Cyber Security Engineer{"\n"}
            <Prompt>tail -f /var/log/alerts.log</Prompt>
            <span className="text-blue-400">[INFO] Monitoring network traffic for anomalies... ✓</span>
            <span className="inline-block w-2 h-4 bg-primary ml-1 animate-pulse" />
          </Terminal>
        </motion.div>
      </div>
    </section>
  );
}
