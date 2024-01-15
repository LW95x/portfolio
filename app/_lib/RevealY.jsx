import { motion, useInView, useAnimation } from "framer-motion";
import { useEffect, useRef } from "react";

function RevealY({ children }) {
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
    <div ref={ref}>
      <motion.div
        variants={{
          hidden: { opacity: 0, y: 75 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        animate={mainControls}
        transition={{ duration: 1.5, delay: 0.45 }}
      >
        {children}
      </motion.div>
    </div>
  );
}

export default RevealY;