import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function RedTeamOverride() {
  const [breach, setBreach] = useState(false);

  useEffect(() => {
    const playAlarm = () => {
      const audio = new Audio(`${import.meta.env.BASE_URL}alarm.mp3`);
      audio.volume = 0.5;
      audio.play().catch(e => console.error("Error playing alarm", e));
    };

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.ctrlKey && e.shiftKey && e.code === "KeyR") {
        e.preventDefault();
        
        const isRed = document.documentElement.classList.toggle("red-team");
        if (isRed) {
          setBreach(true);
          playAlarm();
          setTimeout(() => setBreach(false), 2500);
        }
      }
    };
    
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <AnimatePresence>
      {breach && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[99999] pointer-events-none flex flex-col items-center justify-center bg-red-950/20 mix-blend-screen"
        >
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0IiBoZWlnaHQ9IjQiPjxyZWN0IHdpZHRoPSI0IiBoZWlnaHQ9IjQiIGZpbGw9IiNmZiAwIDAgMC4wNSIvPjwvc3ZnPg==')] pointer-events-none" />
          <motion.div
            animate={{ 
              opacity: [0, 1, 0, 1, 1, 0, 1, 0],
              scale: [1, 1.05, 1, 1.02, 1, 0.98, 1, 1.05]
            }}
            transition={{ duration: 0.6, repeat: 3 }}
            className="flex flex-col items-center border-[3px] border-red-500 bg-red-950/80 px-12 py-8 rounded-lg shadow-[0_0_100px_rgba(239,68,68,0.6)] backdrop-blur-md"
          >
            <svg className="w-20 h-20 text-red-500 mb-4 animate-pulse" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
            </svg>
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-black text-red-500 tracking-widest font-mono text-center drop-shadow-[0_0_15px_rgba(239,68,68,0.8)]">
              SECURITY BREACH
            </h1>
            <p className="mt-4 text-red-300 font-mono text-lg tracking-widest">
              RED TEAM OVERRIDE INITIATED
            </p>
          </motion.div>
          {/* Flashing scanlines overlay */}
          <motion.div
            animate={{ opacity: [0, 0.3, 0] }}
            transition={{ duration: 1, repeat: Infinity }}
            className="absolute inset-0 bg-red-500/10 pointer-events-none"
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
