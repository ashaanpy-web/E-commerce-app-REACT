import React from 'react';
import { motion } from 'framer-motion';
import { ShoppingCart, Star } from 'lucide-react';

const products = [
  {
    id: 1,
    name: 'Quantum X Pro Headphones',
    price: '$299',
    rating: 4.8,
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=2070&auto=format&fit=crop',
    category: 'Audio'
  },
  {
    id: 2,
    name: 'Nexus Smart Watch Series 5',
    price: '$199',
    rating: 4.9,
    image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=1999&auto=format&fit=crop',
    category: 'Wearable'
  },
  {
    id: 3,
    name: 'AeroBook Pro 14"',
    price: '$1299',
    rating: 4.7,
    image: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?q=80&w=2071&auto=format&fit=crop',
    category: 'Computing'
  },
  {
    id: 4,
    name: 'Omni Lens Digital Camera',
    price: '$899',
    rating: 4.6,
    image: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?q=80&w=1964&auto=format&fit=crop',
    category: 'Photography'
  }
];

const ProductCard = ({ product, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="glassmorphism rounded-2xl p-4 flex flex-col gap-4 group relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-tr from-brand-cyan/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0" />
      
      <div className="relative z-10 w-full h-48 sm:h-56 rounded-xl overflow-hidden mb-2">
        <motion.img 
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.4 }}
          src={product.image} 
          alt={product.name} 
          className="w-full h-full object-cover"
        />
        <div className="absolute top-2 left-2 bg-slate-900/80 backdrop-blur-sm text-xs font-semibold px-2 py-1 rounded text-slate-300">
          {product.category}
        </div>
      </div>
      
      <div className="relative z-10 flex flex-col flex-grow">
        <h3 className="text-lg font-bold text-white mb-1 line-clamp-1 group-hover:text-brand-cyan transition-colors">
          {product.name}
        </h3>
        
        <div className="flex items-center gap-1 mb-4">
          <Star className="w-4 h-4 text-brand-cyan fill-brand-cyan" />
          <span className="text-sm text-slate-400">{product.rating}</span>
        </div>
        
        <div className="mt-auto flex items-center justify-between">
          <span className="text-xl font-bold text-white">{product.price}</span>
          <motion.button 
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="bg-white/10 hover:bg-brand-cyan hover:text-slate-950 p-2 rounded-full transition-colors box-glow"
          >
            <ShoppingCart className="w-5 h-5" />
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
};

const ProductGrid = () => {
  return (
    <section id="products" className="py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-extrabold text-white mb-4"
          >
            Featured <span className="text-brand-cyan text-glow">Innovations</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-slate-400 max-w-2xl mx-auto"
          >
            Discover our handpicked selection of cutting-edge tech designed to elevate your everyday experience.
          </motion.p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {products.map((product, index) => (
            <ProductCard key={product.id} product={product} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductGrid;
