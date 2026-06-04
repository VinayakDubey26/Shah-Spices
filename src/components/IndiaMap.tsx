import { motion } from 'framer-motion';
import indiaMapGraphic from '../../assets/india_map_clean_champagne.svg';
import { supplyMarkers } from '../data/siteData';

export function IndiaMap() {
  return (
    <div className="india-map" aria-label="Pan India supply map illustration">
      <img className="india-map-graphic" src={indiaMapGraphic} alt="" aria-hidden="true" />
      {supplyMarkers.map((marker, index) => (
        <span
          key={marker.city}
          className={`map-marker-wrap label-${marker.labelPosition}`}
          style={{ left: `${marker.x}%`, top: `${marker.y}%` }}
          title={marker.city}
        >
          <motion.span
            className="map-marker"
            animate={{ scale: [1, 1.35, 1], boxShadow: ['0 0 0 7px rgba(197, 22, 29, 0.16)', '0 0 0 13px rgba(184, 132, 44, 0)', '0 0 0 7px rgba(197, 22, 29, 0.16)'] }}
            transition={{ duration: 2.4, repeat: Infinity, delay: index * 0.24, ease: 'easeInOut' }}
          />
          <span className="map-marker-label">{marker.city}</span>
        </span>
      ))}
    </div>
  );
}
