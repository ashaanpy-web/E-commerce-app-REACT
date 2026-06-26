import React from 'react';
import { motion } from 'framer-motion';
import { ShoppingCart, Star } from 'lucide-react';
import { useCartStore } from '../store/useCartStore';

// Mock data for multiple categories
const categories = [
  {
    title: "Premium Laptops",
    products: [
      { id: 101, name: 'AeroBook Pro 14"', price: '$1299', rating: 4.8, image: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?q=80&w=2071&auto=format&fit=crop' },
      { id: 102, name: 'Titan Core i9 Station', price: '$2499', rating: 4.9, image: 'https://images.unsplash.com/photo-1603302576837-37561b2e2302?q=80&w=2068&auto=format&fit=crop' },
      { id: 103, name: 'Zenith Studio 16"', price: '$1899', rating: 4.7, image: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?q=80&w=1926&auto=format&fit=crop' },
      { id: 104, name: 'SlimPad Go', price: '$899', rating: 4.5, image: 'https://images.unsplash.com/photo-1531297172869-c0d116bd7b37?q=80&w=2071&auto=format&fit=crop' },
    ]
  },
  {
    title: "Smart Wearables",
    products: [
      { id: 201, name: 'Nexus Smart Watch S5', price: '$199', rating: 4.9, image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=1999&auto=format&fit=crop' },
      { id: 202, name: 'Pulse Fitness Band', price: '$89', rating: 4.6, image: 'https://images.unsplash.com/photo-1575311373937-040b8e1fd5b0?q=80&w=2188&auto=format&fit=crop' },
      { id: 203, name: 'Chrono Elite Watch', price: '$349', rating: 4.8, image: 'https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?q=80&w=1927&auto=format&fit=crop' },
      { id: 204, name: 'Aura Health Ring', price: '$149', rating: 4.4, image: 'https://images.unsplash.com/photo-1611078734271-9cb685161c6b?q=80&w=2070&auto=format&fit=crop' },
    ]
  },
  {
    title: "High-Fidelity Audio",
    products: [
      { id: 301, name: 'Quantum X Pro Headphones', price: '$299', rating: 4.8, image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=2070&auto=format&fit=crop' },
      { id: 302, name: 'Echo Pods Wireless', price: '$159', rating: 4.7, image: 'https://images.unsplash.com/photo-1606220588913-b3aecb4d82b4?q=80&w=1964&auto=format&fit=crop' },
      { id: 303, name: 'Sonic Boom Speaker', price: '$229', rating: 4.9, image: 'https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?q=80&w=2070&auto=format&fit=crop' },
      { id: 304, name: 'Studio Mix Monitors', price: '$499', rating: 4.6, image: 'https://images.unsplash.com/photo-1545127398-14699f92334b?q=80&w=1936&auto=format&fit=crop' },
    ]
  }
];

const GridCard = ({ product, index }) => {
  const addToCart = useCartStore((state) => state.addToCart);

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="glassmorphism rounded-2xl p-4 flex flex-col gap-4 group relative overflow-hidden backdrop-blur-xl bg-slate-900/50"
    >
      <div className="absolute inset-0 bg-gradient-to-tr from-brand-cyan/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0" />
      
      <div className="relative z-10 w-full h-48 sm:h-56 rounded-xl overflow-hidden mb-2 shadow-inner">
        <motion.img 
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.4 }}
          src={product.image} 
          alt={product.name} 
          className="w-full h-full object-cover"
        />
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
            onClick={() => addToCart(product)}
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

const Explore = () => {
  return (
    <div className="pt-24 pb-20 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-4">
            Explore <span className="text-brand-cyan text-glow">Ecosystem</span>
          </h1>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg">
            Dive into our immersive catalog. Every category is engineered for excellence.
          </p>
        </motion.div>

        <div className="space-y-24">
          {categories.map((category, catIndex) => (
            <div key={category.title} className="relative">
              {/* Category Header */}
              <motion.div 
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="flex items-center gap-4 mb-8"
              >
                <h2 className="text-3xl font-bold text-white tracking-tight">{category.title}</h2>
                <div className="flex-grow h-px bg-gradient-to-r from-brand-cyan/50 to-transparent"></div>
              </motion.div>

              {/* Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
                {category.products.map((product, index) => (
                  <GridCard key={product.id} product={product} index={index} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Explore;
