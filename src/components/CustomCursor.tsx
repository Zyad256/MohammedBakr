import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export function CustomCursor() {
  const [mousePosition, setMousePosition] = useState({ x: -100, y: -100 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    // Hide cursor on touch devices to avoid rogue sticking
    if (window.matchMedia("(pointer: coarse)").matches) {
      return;
    }

    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      // Check if hovering over clickable elements
      const isClickable = 
        window.getComputedStyle(target).cursor === "pointer" ||
        target.closest("a") ||
        target.closest("button");
        
      setIsHovering(!!isClickable);
    };

    window.addEventListener("mousemove", updateMousePosition);
    window.addEventListener("mouseover", handleMouseOver);

    return () => {
      window.removeEventListener("mousemove", updateMousePosition);
      window.removeEventListener("mouseover", handleMouseOver);
    };
  }, []);

  return (
    <div className="hidden md:block pointer-events-none z-[9999]">
      <motion.div
        className="fixed top-0 left-0 w-5 h-5 border-2 border-primary rounded-full pointer-events-none z-[9999] flex items-center justify-center mix-blend-screen"
        animate={{
          x: mousePosition.x - 10,
          y: mousePosition.y - 10,
          scale: isHovering ? 1.8 : 1,
          backgroundColor: isHovering ? "rgba(59, 130, 246, 0.1)" : "transparent"
        }}
        transition={{ type: "spring", stiffness: 800, damping: 28, mass: 0.2 }}
      >
        <div className={`w-1 h-1 bg-primary rounded-full transition-opacity duration-200 ${isHovering ? 'opacity-0' : 'opacity-100'}`} />
        
        {/* Crosshair lines */}
        <div className="absolute top-1/2 left-0 w-full h-[1px] bg-primary/40 -translate-y-1/2 rounded-full" />
        <div className="absolute left-1/2 top-0 w-[1px] h-full bg-primary/40 -translate-x-1/2 rounded-full" />
      </motion.div>
      
      {/* Outer radar tracking ring */}
      <motion.div
        className="fixed top-0 left-0 w-10 h-10 rounded-full border border-primary/30 pointer-events-none z-[9998]"
        animate={{
          x: mousePosition.x - 20,
          y: mousePosition.y - 20,
          scale: isHovering ? 1.3 : 1,
        }}
        transition={{ type: "spring", stiffness: 150, damping: 25, mass: 0.6 }}
      />
    </div>
  );
}
