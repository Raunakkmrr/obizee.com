"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

interface AnimatedCounterProps {
  target: number;
  suffix?: string;
  prefix?: string;
  duration?: number;
  className?: string;
}

/**
 * Counts up to `target` when scrolled into view.
 *
 * The initial state is the TARGET, not zero. It used to start at zero, which
 * meant the server-rendered HTML read "0+ Active Merchants" — every proof number
 * on the homepage was literally zero to Google and to any AI assistant reading
 * the page, while looking correct to a human because the client animated it up
 * a moment later.
 *
 * So: render the real figure, then on the client drop to zero once and animate
 * back. Crawlers and no-JS visitors get the number; everyone else still gets the
 * count-up. Anyone reducing this back to useState(0) reintroduces the bug.
 */
export default function AnimatedCounter({
  target,
  suffix = "",
  prefix = "",
  duration = 2,
  className = "",
}: AnimatedCounterProps) {
  const [count, setCount] = useState(target);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const hasAnimated = useRef(false);

  useEffect(() => {
    // Respect a reduced-motion preference by leaving the figure as it is.
    const reduced =
      typeof window !== "undefined" &&
      window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;
    if (reduced || hasAnimated.current) return;

    if (!isInView) {
      // Before it scrolls into view, start from zero so the count-up is visible.
      setCount(0);
      return;
    }

    hasAnimated.current = true;
    let current = 0;
    const step = target / (duration * 60);
    const timer = setInterval(() => {
      current += step;
      if (current >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, 1000 / 60);

    return () => clearInterval(timer);
  }, [isInView, target, duration]);

  return (
    <motion.span
      ref={ref}
      className={className}
      initial={{ opacity: 0, scale: 0.5 }}
      animate={isInView ? { opacity: 1, scale: 1 } : {}}
      transition={{ duration: 0.5 }}
    >
      {prefix}
      {count.toLocaleString("en-IN")}
      {suffix}
    </motion.span>
  );
}
