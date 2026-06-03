import { motion } from 'framer-motion';
import { supplyMarkers } from '../data/siteData';

export function IndiaMap() {
  return (
    <div className="india-map" aria-label="Pan India supply map illustration">
      <svg viewBox="0 0 420 460" role="img" aria-hidden="true">
        <path
          d="M219 24c-22 18-48 24-76 28-20 4-29 22-21 40 8 19-1 32-17 41-18 10-24 29-13 47 9 15 5 28-9 40-22 19-19 51 6 66 17 10 25 23 21 42-5 25 9 44 34 49 22 4 35 17 42 39 7 21 31 29 50 17 17-11 31-10 48 1 24 15 54 0 58-28 3-19 12-31 30-39 25-12 31-43 12-64-13-14-16-28-9-46 8-21-2-42-23-50-17-7-25-18-27-37-2-28-27-47-55-39-19 5-33-1-43-18-11-18-7-34 3-51 11-18 7-42-9-59Z"
          className="map-shape"
        />
      </svg>
      {supplyMarkers.map((marker, index) => (
        <motion.span
          key={marker.city}
          className="map-marker"
          style={{ left: `${marker.x}%`, top: `${marker.y}%` }}
          animate={{ scale: [1, 1.5, 1], opacity: [0.85, 0.35, 0.85] }}
          transition={{ duration: 2.2, repeat: Infinity, delay: index * 0.25, ease: 'easeInOut' }}
        />
      ))}
    </div>
  );
}
