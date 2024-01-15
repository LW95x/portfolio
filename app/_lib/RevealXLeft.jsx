import { motion, useInView, useAnimation } from "framer-motion";
import { useEffect, useRef } from "react";

function RevealXLeft({ children }) {
  const mainControls = useAnimation();

  const ref = useRef(null);
  const isInView = useInView(ref);

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    } else {
      mainControls.start("hidden");
    }
  }, [isInView, mainControls]);
  return (
    <div ref={ref} className="relative overflow-hidden w-full">
      <motion.div
        variants={{
          hidden: { opacity: 0, x: -500 },
          visible: { opacity: 1, x: 0 },
        }}
        initial="hidden"
        animate={mainControls}
        transition={{ duration: 1.5, delay: 1 }}
      >
        {children}
      </motion.div>
    </div>
  );
}

export default RevealXLeft;