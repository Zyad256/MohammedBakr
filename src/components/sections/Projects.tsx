import { motion } from "framer-motion";
import { SectionHeading } from "@/components/SectionHeading";
import { Terminal, Prompt } from "@/components/Terminal";
import { TopologyDiagram } from "@/components/TopologyDiagram";
import { ReactNode } from "react";

function PSIR({ p, s, i, r }: { p: string; s: string; i: ReactNode; r: string }) {
  return (
    <div className="grid sm:grid-cols-2 gap-3 text-sm">
      {[
        { k: "Problem", v: p, c: "text-destructive" },
        { k: "Solution", v: s, c: "text-secondary" },
        { k: "Result", v: r, c: "text-green-400" },
      ].map((x) => (
        <div key={x.k} className="rounded-md border border-border bg-background/40 p-3">
          <div className={`font-mono text-[10px] uppercase tracking-wider ${x.c}`}>{x.k}</div>
          <p className="mt-1 text-muted-foreground">{x.v}</p>
        </div>
      ))}
      <div className="rounded-md border border-border bg-background/40 p-3">
        <div className="font-mono text-[10px] uppercase tracking-wider text-primary">Implementation</div>
        <div className="mt-1 text-muted-foreground">{i}</div>
      </div>
    </div>
  );
}

function ProjectCard({
  num, title, tags, children, diagram,
}: {
  num: string; title: string; tags: string[]; children: ReactNode; diagram: ReactNode;
}) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5 }}
      className="rounded-2xl border border-border bg-card/50 overflow-hidden group hover:-translate-y-1 hover:border-primary/50 transition-all card-glow"
    >
      <div className="p-6 border-b border-border flex flex-wrap items-center gap-3 justify-between">
        <div>
          <div className="font-mono text-xs text-primary">project_{num}</div>
          <h3 className="text-xl font-semibold mt-1">{title}</h3>
        </div>
        <div className="flex flex-wrap gap-2">
          {tags.map((t) => (
            <span key={t} className="font-mono text-[10px] px-2 py-1 rounded bg-primary/10 text-primary border border-primary/20">
              {t}
            </span>
          ))}
        </div>
      </div>
      <div className="p-6 grid lg:grid-cols-2 gap-6 min-w-0">
        <div className="space-y-4 min-w-0">{children}</div>
        <div className="space-y-4 order-first lg:order-none min-w-0">{diagram}</div>
      </div>
    </motion.article>
  );
}

export function Projects() {
  return (
    <section id="projects" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <SectionHeading
          index="03 / projects"
          title="Hands-on lab projects"
          subtitle="Each project follows a Problem → Solution → Implementation → Result structure with real CLI configs and topologies."
        />
        <div className="space-y-8">
          <ProjectCard
            num="01"
            title="IG (Insider Guardian) — Hybrid XDR"
            tags={["XDR", "EDR / NDR", "SIEM", "SOC", "In Progress"]}
            diagram={
              <>
                <TopologyDiagram
                  nodes={[
                    { id: "ep1", x: 60, y: 60, label: "Endpoint (EDR)", type: "host" },
                    { id: "ep2", x: 60, y: 180, label: "Endpoint (EDR)", type: "host" },
                    { id: "ndr", x: 200, y: 120, label: "Network Sensor", type: "switch" },
                    { id: "siem", x: 340, y: 120, label: "Local SIEM", type: "cloud" },
                  ]}
                  edges={[
                    { from: "ep1", to: "ndr", label: "Traffic" },
                    { from: "ep2", to: "ndr", label: "Traffic" },
                    { from: "ep1", to: "siem", dashed: true, label: "Logs" },
                    { from: "ndr", to: "siem", dashed: true, label: "Alerts" },
                  ]}
                />
                <Terminal title="siem@insider-guardian">
                  <Prompt>tail -f /var/log/siem/alerts.log | grep "CRITICAL"</Prompt>
                  <span className="text-yellow-400">[WARN] High volume ICMP traffic detected from 192.168.1.50{"\n"}</span>
                  <span className="text-destructive">[CRITICAL] EDR: Suspicious PowerShell execution on Endpoint-1{"\n"}</span>
                  <Prompt>python3 trigger_response.py --isolate src_ip=192.168.1.50</Prompt>
                  <span className="text-green-400">SUCCESS: Host 192.168.1.50 isolated from domain network.</span>
                </Terminal>
              </>
            }
          >
            <PSIR
              p="Traditional security silos rely on disparate tools for endpoint and network detection, increasing SOC response times."
              s="Developing a fully local, hybrid XDR solution that unifies Endpoint Detection (EDR), Network Detection (NDR), and SIEM log correlation."
              i={<>Implementing local log collectors and Sysmon to feed data into a centralized SIEM, processing events to spot multi-stage attacks like lateral movement.</>}
              r="Will provide an integrated security dashboard capable of automatic threat containment (Graduation Project in progress)."
            />
          </ProjectCard>

          <ProjectCard
            num="02"
            title="Secure Multi-Branch Office Network"
            tags={["Cisco", "Security", "Routing", "DEPI Project"]}
            diagram={
              <>
                <TopologyDiagram
                  nodes={[
                    { id: "br1", x: 60, y: 60, label: "Branch 1", type: "router" },
                    { id: "br2", x: 60, y: 180, label: "Branch 2", type: "router" },
                    { id: "hq", x: 200, y: 120, label: "HQ Firewall", type: "router" },
                    { id: "dc", x: 340, y: 120, label: "Data Center (DMZ)", type: "switch" },
                  ]}
                  edges={[
                    { from: "br1", to: "hq", label: "IPsec VPN" },
                    { from: "br2", to: "hq", label: "IPsec VPN" },
                    { from: "hq", to: "dc", label: "ACL Protected" },
                  ]}
                />
                <Terminal title="HQ-Router# — Security">
                  <Prompt>show crypto isakmp sa</Prompt>
                  <span className="text-green-400">dst             src             state          conn-id slot status{"\n"}</span>
                  <span>10.0.0.1        192.168.10.1    QM_IDLE        1       0    ACTIVE{"\n"}</span>
                  <span>10.0.0.1        192.168.20.1    QM_IDLE        2       0    ACTIVE{"\n"}</span>
                  <Prompt>show access-lists DMZ-IN</Prompt>
                  <span className="text-cyan-300">Extended IP access list DMZ-IN{"\n"}</span>
                  <span className="text-green-400"> 10 permit tcp any host 10.10.10.5 eq www (42 matches){"\n"}</span>
                  <span className="text-destructive"> 20 deny ip any any (1337 matches)</span>
                </Terminal>
              </>
            }
          >
            <PSIR
              p="A fast-growing multi-branch company needed a highly secure and scalable network infrastructure connecting remote sites to HQ."
              s="Designed a comprehensive topology using dynamic routing (OSPF), site-to-site IPsec VPNs, and strict firewall boundaries with DMZ isolation."
              i={<>Configured Cisco routers and firewalls. Implemented VLAN segmentation, ACLs for access control, and encrypted tunnels for branch-to-HQ traffic.</>}
              r="Delivered a zero-trust architecture blueprint ensuring robust data protection and multi-site capability (DEPI Group Graduation Project)."
            />
          </ProjectCard>
        </div>
      </div>
    </section>
  );
}
