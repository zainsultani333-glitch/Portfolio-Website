// Loader23.jsx - Rubik's Cube 3D Cards
import { motion } from "framer-motion";

export default function Loader23() {
  const technologies = ["React", "Next.js", "TypeScript", "Tailwind", "Node.js"];
  const positions = [
    { x: 0, y: 0, z: 80 },      // Front
    { x: 0, y: 0, z: -80 },     // Back
    { x: 80, y: 0, z: 0 },      // Right
    { x: -80, y: 0, z: 0 },     // Left
    { x: 0, y: 80, z: 0 }       // Top
  ];
  
  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-bg">
      <div className="flex flex-col items-center gap-8">
        <div style={{ perspective: "1000px" }}>
          <div className="relative w-80 h-80">
            {technologies.map((tech, index) => (
              <motion.div
                key={tech}
                className="absolute inset-0 flex items-center justify-center"
                style={{
                  transformOrigin: "center center",
                  transformStyle: "preserve-3d"
                }}
                animate={{
                  rotateX: [0, 360],
                  rotateY: [0, 360],
                  rotateZ: [0, 180, 360],
                  x: [0, positions[index % 5].x, 0],
                  y: [0, positions[index % 5].y, 0],
                  z: [0, positions[index % 5].z, 0],
                  opacity: [0, 1, 1, 0]
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  delay: index * 0.3,
                  ease: "easeInOut"
                }}
              >
                <div
                  className="w-44 h-56 rounded-xl border-2 backdrop-blur-sm flex flex-col items-center justify-center gap-3"
                  style={{
                    borderColor: `var(--primary-color)`,
                    background: `linear-gradient(135deg, rgba(99,102,241,0.2), rgba(139,92,246,0.15))`
                  }}
                >
                  <div className="w-14 h-14 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                    <span className="text-white font-bold text-lg">{tech[0]}</span>
                  </div>
                  <h3 className="text-primary font-bold text-sm">{tech}</h3>
                  <div className="w-10 h-1 bg-primary/30 rounded-full" />
                  <span className="text-xs text-primary/50">🧊</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
        
        <div className="text-center">
          <motion.h2
            className="text-2xl font-bold"
            animate={{ color: ["var(--primary-color)", "var(--secondary-color)", "var(--primary-color)"] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            Muhammad Zain
          </motion.h2>
          <p className="text-text/40 text-sm">Frontend Developer | Full Stack</p>
        </div>
      </div>
    </div>
  );
}