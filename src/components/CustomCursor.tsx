import { useEffect, useState, useRef, useCallback } from "react";
import { motion, useSpring, useMotionValue, animate } from "framer-motion";

const CustomCursor = () => {
  const [isHovering, setIsHovering] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isClicking, setIsClicking] = useState(false);
  const magnetRef = useRef<{ x: number; y: number; width: number; height: number } | null>(null);

  // Mouse position (instant)
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Ring position (smooth trailing)
  const ringSpring = { damping: 20, stiffness: 150, mass: 0.5 };
  const ringX = useSpring(0, ringSpring);
  const ringY = useSpring(0, ringSpring);

  // Dot position (snappier)
  const dotSpring = { damping: 35, stiffness: 400 };
  const dotX = useSpring(0, dotSpring);
  const dotY = useSpring(0, dotSpring);

  // Ring scale for magnetic effect
  const ringScale = useSpring(1, { damping: 20, stiffness: 300 });

  const handleMouseMove = useCallback((e: MouseEvent) => {
    const { clientX, clientY } = e;
    
    mouseX.set(clientX);
    mouseY.set(clientY);

    if (!isVisible) setIsVisible(true);

    // If hovering a magnetic element, pull toward its center
    if (magnetRef.current) {
      const { x, y, width, height } = magnetRef.current;
      const centerX = x + width / 2;
      const centerY = y + height / 2;
      
      // Magnetic pull strength (0-1)
      const pullStrength = 0.4;
      const magnetX = clientX + (centerX - clientX) * pullStrength;
      const magnetY = clientY + (centerY - clientY) * pullStrength;

      dotX.set(magnetX);
      dotY.set(magnetY);
      ringX.set(magnetX);
      ringY.set(magnetY);
    } else {
      dotX.set(clientX);
      dotY.set(clientY);
      ringX.set(clientX);
      ringY.set(clientY);
    }
  }, [isVisible, dotX, dotY, ringX, ringY, mouseX, mouseY]);

  const handleMouseDown = useCallback(() => {
    setIsClicking(true);
    ringScale.set(0.8);
  }, [ringScale]);

  const handleMouseUp = useCallback(() => {
    setIsClicking(false);
    ringScale.set(isHovering ? 1.5 : 1);
  }, [isHovering, ringScale]);

  useEffect(() => {
    const handleMouseEnter = () => setIsVisible(true);
    const handleMouseLeave = () => {
      setIsVisible(false);
      setIsHovering(false);
      magnetRef.current = null;
    };

    const setupHoverListeners = () => {
      const hoverElements = document.querySelectorAll(
        'a, button, [role="button"], input, textarea, select, .hover-target'
      );

      hoverElements.forEach((el) => {
        const element = el as HTMLElement;
        
        const onEnter = () => {
          setIsHovering(true);
          const rect = element.getBoundingClientRect();
          magnetRef.current = {
            x: rect.left,
            y: rect.top,
            width: rect.width,
            height: rect.height,
          };
          ringScale.set(1.5);
        };

        const onLeave = () => {
          setIsHovering(false);
          magnetRef.current = null;
          ringScale.set(1);
        };

        element.addEventListener("mouseenter", onEnter);
        element.addEventListener("mouseleave", onLeave);
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mouseup", handleMouseUp);
    document.addEventListener("mouseenter", handleMouseEnter);
    document.addEventListener("mouseleave", handleMouseLeave);

    setupHoverListeners();
    
    const observer = new MutationObserver(setupHoverListeners);
    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mouseup", handleMouseUp);
      document.removeEventListener("mouseenter", handleMouseEnter);
      document.removeEventListener("mouseleave", handleMouseLeave);
      observer.disconnect();
    };
  }, [handleMouseMove, handleMouseDown, handleMouseUp, ringScale]);

  // Hide on touch devices
  if (typeof window !== "undefined" && "ontouchstart" in window) {
    return null;
  }

  return (
    <>
      {/* Outer ring - trails behind with magnetic effect */}
      <motion.div
        className="fixed pointer-events-none z-[9999]"
        style={{
          x: ringX,
          y: ringY,
          translateX: "-50%",
          translateY: "-50%",
        }}
      >
        <motion.div
          className="rounded-full border-2 border-primary/80"
          style={{ scale: ringScale }}
          animate={{
            width: isHovering ? 56 : 40,
            height: isHovering ? 56 : 40,
            opacity: isVisible ? (isHovering ? 1 : 0.6) : 0,
            borderWidth: isHovering ? 2 : 1.5,
          }}
          transition={{ 
            width: { duration: 0.3, ease: "easeOut" },
            height: { duration: 0.3, ease: "easeOut" },
            opacity: { duration: 0.2 },
          }}
        />
      </motion.div>

      {/* Inner dot - snappy, follows cursor closely */}
      <motion.div
        className="fixed pointer-events-none z-[9999]"
        style={{
          x: dotX,
          y: dotY,
          translateX: "-50%",
          translateY: "-50%",
        }}
      >
        <motion.div
          className="rounded-full bg-primary"
          animate={{
            width: isClicking ? 12 : isHovering ? 10 : 6,
            height: isClicking ? 12 : isHovering ? 10 : 6,
            opacity: isVisible ? 1 : 0,
          }}
          transition={{ duration: 0.15, ease: "easeOut" }}
        />
      </motion.div>

      {/* Glow effect on hover */}
      {isHovering && (
        <motion.div
          className="fixed pointer-events-none z-[9998]"
          style={{
            x: ringX,
            y: ringY,
            translateX: "-50%",
            translateY: "-50%",
          }}
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 0.15, scale: 1 }}
          exit={{ opacity: 0, scale: 0.5 }}
        >
          <div 
            className="rounded-full bg-primary blur-xl"
            style={{ width: 80, height: 80 }}
          />
        </motion.div>
      )}

      {/* Hide default cursor globally */}
      <style>{`
        @media (pointer: fine) {
          * {
            cursor: none !important;
          }
        }
      `}</style>
    </>
  );
};

export default CustomCursor;
