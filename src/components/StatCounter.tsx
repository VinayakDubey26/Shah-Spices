import { animate, motion, useInView, useMotionValue, useTransform } from 'framer-motion';
import { useEffect, useRef } from 'react';

type StatCounterProps = {
  value: number;
  suffix: string;
  label: string;
};

export function StatCounter({ value, suffix, label }: StatCounterProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest).toString());

  useEffect(() => {
    if (!isInView) return;
    const controls = animate(count, value, { duration: 1.4, ease: 'easeOut' });
    return () => controls.stop();
  }, [count, isInView, value]);

  return (
    <div className="stat" ref={ref}>
      <strong>
        <motion.span>{rounded}</motion.span>
        {suffix}
      </strong>
      <span>{label}</span>
    </div>
  );
}
