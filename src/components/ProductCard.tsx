import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import chilliPowderImage from '../../assets/chill-powder.png';
import chilliSeedsImage from '../../assets/chilli-seeds.png';
import redChilliesImage from '../../assets/red-chillies.png';

type ProductCardProps = {
  title: string;
  description: string;
  tags: string[];
  tone: string;
};

export function ProductCard({ title, description, tags, tone }: ProductCardProps) {
  const productImage = {
    whole: redChilliesImage,
    powder: chilliPowderImage,
    seeds: chilliSeedsImage,
  }[tone];

  return (
    <motion.article className="product-card" whileHover={{ y: -5 }} transition={{ duration: 0.25 }}>
      <div className={`product-visual ${tone}`}>
        <div className="product-scene">
          <img className="product-image" src={productImage} alt={title} />
        </div>
      </div>
      <div className="product-card-body">
        <h3>{title}</h3>
        <p>{description}</p>
        <div className="product-tags" aria-label={`${title} buyer types`}>
          {tags.map((tag) => (
            <span key={tag}>{tag}</span>
          ))}
        </div>
        <a className="product-pricing-link" href="#contact">
          Get Bulk Pricing
          <ArrowRight size={17} />
        </a>
      </div>
    </motion.article>
  );
}
