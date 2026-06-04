import { motion } from 'framer-motion';
import indiaMapGraphic from '../../assets/india_map_clean_champagne.svg';
import { supplyMarkers } from '../data/siteData';

export function IndiaMap() {
  return (
    <div className="india-map" aria-label="Pan India supply map illustration">
      <div className="india-map-stage">
        <img className="india-map-graphic" src={indiaMapGraphic} alt="" aria-hidden="true" />
        {supplyMarkers.map((marker, index) => (
          <span
            key={marker.city}
            className="map-marker-wrap"
            style={{ left: `${marker.x}%`, top: `${marker.y}%` }}
            title={marker.city}
          >
            <motion.span
              className="map-marker"
              animate={{ scale: [1, 1.18, 1], boxShadow: ['0 0 0 4px rgba(197, 22, 29, 0.12)', '0 0 0 10px rgba(184, 132, 44, 0)', '0 0 0 4px rgba(197, 22, 29, 0.12)'] }}
              transition={{ duration: 2.8, repeat: Infinity, delay: index * 0.22, ease: 'easeInOut' }}
            >
              {index + 1}
            </motion.span>
          </span>
        ))}
      </div>
      <div className="map-legend" aria-label="Map marker legend">
        {supplyMarkers.map((marker, index) => (
          <span key={marker.city}>
            <strong>{index + 1}</strong>
            {marker.city}
          </span>
        ))}
      </div>
    </div>
  );
}
